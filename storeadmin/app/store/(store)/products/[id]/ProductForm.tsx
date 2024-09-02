'use client'

import {
  Color,
  Product,
  useCreateProductImageMutation,
  useUpdateProductImageMutation,
  useUpdateProductMutation,
} from '@/api/index'
import { Button } from '@/components/ui/Button'
import { FormField } from '@/components/ui/FormField'
import { FormFieldGroup } from '@/components/ui/FormFieldGroup'
import { Label } from '@/components/ui/Label'
import { Select } from '@/components/ui/Select'
import { MAX_FILE_SIZE, imageUrl } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  colorId: z.string(),
})

type Props = {
  product: Product
  colors: Color[]
}

export const ProductForm = ({ product, colors }: Props) => {
  const [createImage] = useCreateProductImageMutation()
  const [updateImage] = useUpdateProductImageMutation()
  const [updateProduct, { loading }] = useUpdateProductMutation()

  const { register, handleSubmit } = useForm<Product>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      colorId: product?.colorId,
    },
  })

  const onSubmit = (values: Product) => {
    console.log('🚀 ~ onSubmit ~ values:', values)
    updateProduct({
      variables: {
        uuid: product.uuid,
        attributes: values,
      },
    })
  }

  const handleUpdateImage = (e: React.ChangeEvent<HTMLInputElement>, imageId?: string) => {
    const file = e.currentTarget.files ? e.currentTarget.files[0] : null
    if (file && file?.size / 1024 > MAX_FILE_SIZE) {
      alert(
        'アップロードしようとしているファイルの容量が10MBを超えています。\n1ファイル10MBまでのアップロードが可能です。',
      )
      return
    }

    if (imageId) {
      updateImage({
        variables: {
          id: imageId,
          file,
        },
      })
    } else {
      createImage({
        variables: {
          uuid: product.uuid,
          file,
        },
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormFieldGroup>
        <FormField>
          <Label htmlFor='code' className='flex items-center gap-2'>
            色
          </Label>

          <Select id='color' {...register('colorId')}>
            <option value=''>選択してください</option>
            {colors?.map((color) => (
              <option key={`color-${color.id}`} value={color.id}>
                {color.name}
              </option>
            ))}
          </Select>
        </FormField>

        <Button type='submit' className='px-10' size='sm' loading={loading}>
          保存
        </Button>
        <FormField>
          <Label htmlFor='code' className='flex items-center gap-2'>
            画像
          </Label>

          <div className='flex items-center gap-2 flex-wrap'>
            {product.images?.map((image, index) => (
              <div
                key={index}
                className='aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-28 w-28'
              >
                <label className='cursor-pointer' htmlFor={`file_photo-${index}`}>
                  <img
                    src={imageUrl(image)}
                    alt='img'
                    className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                  />
                </label>
                <input
                  id={`file_photo-${index}`}
                  type='file'
                  style={{ display: 'none' }}
                  accept='.jpg,.gif,.png,image/gif,image/jpeg,image/png'
                  onChange={(e) => {
                    handleUpdateImage(e, image.id)
                  }}
                />
              </div>
            ))}

            <label className='p-2 text-sm cursor-pointer' htmlFor='file_photo'>
              <input
                id='file_photo'
                type='file'
                style={{ display: 'none' }}
                accept='.jpg,.gif,.png,image/gif,image/jpeg,image/png'
                onChange={(e) => {
                  handleUpdateImage(e)
                }}
              />
              <div className='border border-dashed border-primary bg-[#F1F8F4] h-28 w-28 cursor-pointer'>
                <span className='flex items-center justify-center h-full w-full text-primary'>
                  +
                </span>
              </div>
            </label>
          </div>
        </FormField>
      </FormFieldGroup>
    </form>
  )
}
