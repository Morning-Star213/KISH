'use client'

import { useForm } from 'react-hook-form'
import { ProductMaster, useUpdateProductMasterMutation } from '@/api/index'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FormField } from '@/components/ui/FormField'
import { Button } from '@/components/ui/Button'
import { Label } from '@/components/ui/Label'
import { Input } from '@/components/ui/Input'

type Props = {
  productMaster: ProductMaster
  onClose: () => void
}

const schema = z.object({
  code: z.string().min(1, '必須項目です'),
})

export const CodeFrom = ({ productMaster, onClose }: Props) => {
  const [updateProductMaster, { loading }] = useUpdateProductMasterMutation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid, errors },
  } = useForm<ProductMaster>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      code: productMaster.code,
    },
  })

  const onSubmit = async (values: ProductMaster) => {
    const response = await updateProductMaster({
      variables: {
        uuid: productMaster.uuid,
        attributes: values,
      },
    })

    const updatedProductMaster = response.data?.updateProductMaster
    if (updatedProductMaster) {
      reset({
        code: updatedProductMaster.productMaster.code,
      })
      onClose()
    }
  }

  return (
    <form className='min-w-96' onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <Label htmlFor='code' className='flex items-center gap-2'>
          品番
        </Label>
        <Input id='code' type='text' {...register('code')} error={errors.code?.message} />

        <div className='mt-6 flex items-center gap-2'>
          <Button type='button' intent='outline2' className='ml-auto' onClick={onClose}>
            キャンセル
          </Button>
          <Button
            type='submit'
            className='px-4 text-base'
            size='sm'
            loading={loading}
            disabled={!isDirty || !isValid}
          >
            保存
          </Button>
        </div>
      </FormField>
    </form>
  )
}
