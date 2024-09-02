'use client'

import { useCreateProductMutation, useProductMasterQuery } from '@/api/index'
import { useRouter, useSearchParams } from 'next/navigation'
import { Input } from '@/components/ui/Input'
import { useForm } from 'react-hook-form'
import { FormField } from '@/components/ui/FormField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Label } from '@/components/ui/Label'
import { Button } from '@/components/ui/Button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/Breadcrumb'
import { FormFieldGroup } from '@/components/ui/FormFieldGroup'
import { useEffect, useState } from 'react'
import { Textarea } from '@/components/ui/Textarea'

type FormProps = {
  name: string
  code: string
  description: string
  care: string
}

const schema = z.object({
  name: z.string().min(1, '必須項目です'),
  code: z.string().min(1, '必須項目です'),
})

export default function ProductNewForm() {
  const router = useRouter()

  const searchParams = useSearchParams()
  const brandId = searchParams.get('brandId') || ''

  const [createProduct, { loading }] = useCreateProductMutation({
    onCompleted: (data) => {
      if (!data?.createProduct?.error) {
        router.push(`/products/${data.createProduct.product?.uuid}?${searchParams.toString()}`)
      }
    },
  })

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      code: '',
      description: '',
      care: '',
    },
  })

  const [searchCode, setSearchCode] = useState<string>()
  const { data: { productMaster = null } = {} } = useProductMasterQuery({
    variables: { brandId, code: searchCode || '' },
    skip: !searchCode,
  })

  const onSubmit = (values: FormProps) => {
    createProduct({
      variables: {
        productMaster: { brandId, code: values.code, name: values.name },
        product: { brandId },
      },
    })
  }

  useEffect(() => {
    if (productMaster) {
      setValue('name', productMaster.name)
      if (productMaster.description) {
        setValue('description', productMaster.description)
      }
    }
  }, [productMaster, setValue])

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/products?${searchParams.toString()}`}>
              商品マスタ
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>新規追加</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className='mt-10 text-lg'>商品登録</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Button type='submit' className='px-10 text-base ml-auto' size='sm' loading={loading}>
          商品登録
        </Button>

        <FormFieldGroup>
          <FormField>
            <Label htmlFor='code' required>
              品番
            </Label>
            <Input
              id='code'
              type='text'
              {...register('code')}
              error={errors.code?.message}
              onBlur={() => {
                const code = watch('code')
                if (code) {
                  setSearchCode(code)
                }
              }}
            />
          </FormField>
        </FormFieldGroup>

        <FormFieldGroup>
          <FormField>
            <Label htmlFor='name' required>
              商品名
            </Label>
            <Input id='name' type='text' {...register('name')} error={errors.name?.message} />
          </FormField>
        </FormFieldGroup>

        <FormFieldGroup>
          <FormField>
            <Label htmlFor='description' required>
              説明
            </Label>
            <Input
              id='description'
              type='text'
              {...register('description')}
              error={errors.description?.message}
            />
          </FormField>
        </FormFieldGroup>

        <FormFieldGroup>
          <FormField>
            <Label htmlFor='care' required>
              ケア
            </Label>
            <Textarea id='care' {...register('care')} error={errors.care?.message} />
          </FormField>
        </FormFieldGroup>
      </form>
    </div>
  )
}
