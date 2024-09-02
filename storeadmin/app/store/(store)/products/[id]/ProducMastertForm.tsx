'use client'

import { useForm } from 'react-hook-form'
import { Category, ProductMaster, Size, useUpdateProductMasterMutation } from '@/api/index'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FormField } from '@/components/ui/FormField'
import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import { Select } from '@/components/ui/Select'

const schema = z.object({
  name: z.string().min(1, '必須項目です'),
  code: z.string().min(1, '必須項目です'),
  care: z.string(),
  sex: z.string(),
  year: z.string(),
  priceTotal: z.number(),
  sizeIds: z.array(z.string()),
  categoryIds: z.array(z.string()),
})

type Props = {
  productMaster: ProductMaster
  sizes: Size[]
  categories: Category[]
  onClose: () => void
}
type FormProps = {
  name: string
  code: string
  care: string
  year: string
  sex: string
  priceTotal: number
  sizeIds: string[]
  categoryIds: string[]
}
export const ProductMasterForm = ({ productMaster, sizes, categories, onClose }: Props) => {
  const [updateProductMaster, { loading }] = useUpdateProductMasterMutation()

  const { watch, register, setValue, handleSubmit, reset } = useForm<FormProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      name: productMaster?.name || '',
      code: productMaster?.code || '',
      care: productMaster?.care || '',
      year: productMaster?.year || '',
      sex: productMaster?.sex || '',
      priceTotal: productMaster?.priceTotal || 0,
      sizeIds: productMaster?.sizes?.map((size) => size.id) || [],
      categoryIds: productMaster?.categories?.map((category) => category.id) || [],
    },
  })

  const sizeIds = watch('sizeIds')
  const categoryIds = watch('categoryIds')
  const priceTotal = watch('priceTotal')
  console.log('🚀 ~ ProductMasterForm ~ priceTotal:', priceTotal)

  const onSubmit = async (values: FormProps) => {
    console.log('🚀 ~ onSubmit ~ values:', values)
    const response = await updateProductMaster({
      variables: {
        uuid: productMaster.uuid,
        attributes: values,
      },
    })

    const updatedProductMaster = response.data?.updateProductMaster?.productMaster
    if (updatedProductMaster) {
      reset({
        name: updatedProductMaster.name,
        code: updatedProductMaster.code,
        priceTotal: updatedProductMaster.priceTotal || 0,
        care: updatedProductMaster.care || '',
        sex: updatedProductMaster.sex || '',
        sizeIds: updatedProductMaster?.sizes?.map((size) => size.id),
      })
    }

    await onClose()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='col-span-2'>
        <FormField>
          <Label htmlFor='code' className='flex items-center gap-2'>
            品番
          </Label>
          <Input id='code' type='text' {...register('code')} />
        </FormField>

        <FormField className='mt-10'>
          <Label htmlFor='name' className='flex items-center gap-2'>
            商品名
          </Label>
          <Input id='name' type='text' {...register('name')} />
        </FormField>

        <FormField>
          <Label htmlFor='year' className='flex items-center gap-2'>
            年度
          </Label>
          <Input id='year' type='text' {...register('year')} />
        </FormField>

        <FormField>
          <Label htmlFor='priceTotal' className='flex items-center gap-2'>
            金額（税込）
          </Label>
          <Input
            id='priceTotal'
            type='number'
            {...register('priceTotal', { valueAsNumber: true })}
            // onChange={(event) => setValue('priceTotal', Number(event.target.value))}
          />
        </FormField>

        <FormField className='mt-10'>
          <Label htmlFor='name' className='flex items-center gap-2'>
            ケア
          </Label>
          <Textarea id='care' {...register('care')} />
        </FormField>

        <FormField className='mt-10'>
          <Label htmlFor='sex' className='flex items-center gap-2'>
            性別
          </Label>
          <Select id='sex' {...register('sex')}>
            <option value=''>選択してください</option>
            <option value='men'>男性</option>
            <option value='women'>女性</option>
          </Select>
        </FormField>

        <FormField className='mt-10'>
          <Label htmlFor='name' className='flex items-center gap-2'>
            サイズ
          </Label>
          <ul className='flex items-center gap-6 mt-2'>
            {sizes.map((size) => (
              <li className='items-top flex space-x-2' key={`size-${size.id}`}>
                <Checkbox
                  id={`size-${size.id}`}
                  {...register('sizeIds')}
                  checked={sizeIds?.includes(size.id)}
                  onCheckedChange={(checked) => {
                    console.log('🚀 ~ ProductMasterForm ~ checked:', checked)
                    if (checked) {
                      setValue('sizeIds', [...sizeIds, size.id])
                    } else {
                      setValue(
                        'sizeIds',
                        sizeIds.filter((id) => id !== size.id),
                      )
                    }
                  }}
                />
                <div className='grid gap-1.5 leading-none'>
                  <label
                    htmlFor={`size-${size.id}`}
                    className='text-sm font-medium leading-none hover:cursor-pointer'
                  >
                    {size.name}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </FormField>

        <FormField className='mt-10'>
          <Label className='flex items-center gap-2'>カテゴリー</Label>
          <ul className='flex items-center gap-6 mt-2'>
            {categories.map((category) => (
              <li className='items-top flex space-x-2' key={`category-${category.id}`}>
                <Checkbox
                  id={`category-${category.id}`}
                  {...register('categoryIds')}
                  checked={categoryIds?.includes(category.id)}
                  onCheckedChange={(checked) => {
                    console.log('🚀 ~ ProductMasterForm ~ checked:', checked)
                    if (checked) {
                      setValue('categoryIds', [...categoryIds, category.id])
                    } else {
                      setValue(
                        'categoryIds',
                        categoryIds.filter((id) => id !== category.id),
                      )
                    }
                  }}
                />
                <div className='grid gap-1.5 leading-none'>
                  <label
                    htmlFor={`category-${category.id}`}
                    className='text-sm font-medium leading-none hover:cursor-pointer'
                  >
                    {category.name}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </FormField>

        <div className='flex items-center gap-2 mt-10'>
          <Button
            type='button'
            className='ml-auto'
            size='sm'
            intent='outline'
            loading={loading}
            onClick={onClose}
          >
            キャンセル
          </Button>
          <Button type='submit' className='px-10' size='sm' loading={loading}>
            保存
          </Button>
        </div>
      </div>
    </form>
  )
}
