import {
  Condition,
  Listing,
  useCreateListingImageMutation,
  useCurrentUserQuery,
  useUpdateListingImageMutation,
  useUpdateListingMutation,
} from '@/api/index'

import { Button } from '@/components/ui/Button'
import { FormField } from '@/components/ui/FormField'
import { FormFieldGroup } from '@/components/ui/FormFieldGroup'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Select } from '@/components/ui/Select'
import { Textarea } from '@/components/ui/Textarea'
import { MAX_FILE_SIZE, imageUrl } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  sellerId: z.string(),
  status: z.string(),
  repairMethod: z.string(),
  sizeId: z.string(),
  conditionId: z.string(),
  comment: z.string(),
  price: z.number(),
})

type Props = {
  listing: Listing
  conditions: Condition[]
}
export const ListingForm = ({ listing, conditions }: Props) => {
  const { data: { currentUser } = {} } = useCurrentUserQuery()
  const [updateListing, { loading }] = useUpdateListingMutation()
  const [createImage] = useCreateListingImageMutation()
  const [updateImage] = useUpdateListingImageMutation()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isDirty, isValid },
  } = useForm<Listing>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      status: listing?.status || '',
      repairMethod: listing?.repairMethod || '',
      sizeId: listing?.sizeId || '',
      conditionId: listing?.conditionId || '',
      comment: listing?.comment || '',
      price: listing?.price || 0,
      sellerId: listing?.sellerId,
    },
  })

  const sellerId = watch('sellerId')
  console.log('🚀 ~ ListingForm ~ sellerId:', sellerId)

  const onSubmit = async (values: Listing) => {
    if (!listing) return

    updateListing({ variables: { uuid: listing.uuid, attributes: values } })
  }

  const handleCondition = (conditionId: string) => {
    const condition = conditions.find((condition) => condition.id === conditionId)
    setValue(
      'price',
      (listing?.product?.productMaster?.price || 0) * ((condition?.resaleRate || 0) / 100),
      { shouldValidate: true },
    )
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
          uuid: listing.uuid,
          file,
        },
      })
    }
  }
  if (!listing) return null

  return (
    <FormFieldGroup className='py-2'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Label htmlFor='sellerId' className='flex items-center gap-2'>
            販売者
          </Label>
          <Select id='sellerId' {...register('sellerId')}>
            <option value=''>選択してください</option>
            {currentUser?.organization?.sellers?.map((seller) => (
              <option key={`seller-${seller.id}`} value={seller.id}>
                {seller.name}
              </option>
            ))}
          </Select>
        </FormField>

        <FormField>
          <Label htmlFor='size' className='flex items-center gap-2'>
            ステータス
          </Label>
          <Select id='status' {...register('status')}>
            <option value='ready'>出品準備</option>
            <option value='pending'>出品保留</option>
            <option value='sales'>出品</option>
            <option value='waiting'>売却・発送待ち</option>
            <option value='shippied'>発送済み</option>
          </Select>
        </FormField>

        <FormField>
          <Label htmlFor='size' className='flex items-center gap-2'>
            修正方針
          </Label>
          <Select id='repairMethod' {...register('repairMethod')}>
            <option value=''></option>
            <option value='cleaning'>洗浄</option>
            <option value='repair'>補修</option>
            <option value='cleaning_and_repair'>洗浄・補修</option>
            <option value='no_action_required'>対応不要</option>
            <option value='action_pending'>対応保留み</option>
            <option value='remake'>リメイク</option>
            <option value='recycle'>リサイクル</option>
            <option value='discard'>廃棄</option>
          </Select>
        </FormField>

        <FormField>
          <Label htmlFor='size' className='flex items-center gap-2'>
            サイズ
          </Label>
          <Select id='size' {...register('sizeId')}>
            <option value=''>選択してください</option>
            {listing.product.productMaster.sizes?.map((size) => (
              <option key={`sizeoption-${size.id}`} value={size.id}>
                {size.name}
              </option>
            ))}
          </Select>
        </FormField>

        <FormField>
          <Label htmlFor='condition' className='flex items-center gap-2'>
            状態
          </Label>
          <Select
            id='condition'
            {...register('conditionId')}
            onChange={(e) => handleCondition(e.target.value)}
          >
            <option value=''>選択してください</option>
            {conditions.map((condition) => (
              <option key={`condition-${condition.id}`} value={condition.id}>
                {condition.name}
              </option>
            ))}
          </Select>
        </FormField>

        <FormField>
          <Label htmlFor='price' className='flex items-center gap-2'>
            価格
          </Label>
          <Input id='price' type='number' {...register('price', { valueAsNumber: true })} />
        </FormField>

        <FormField>
          <Label htmlFor='code' className='flex items-center gap-2'>
            画像
          </Label>

          <div className='flex items-center gap-2 flex-wrap'>
            {listing.images?.map((image, index) => (
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
        <FormField>
          <Label htmlFor='comment' className='flex items-center gap-2'>
            コメント
          </Label>
          <Textarea id='comment' {...register('comment')} rows={5} />
        </FormField>

        <div className='flex items-center gap-2 mt-10'>
          <Button
            type='submit'
            className='px-10'
            size='sm'
            loading={loading}
            disabled={!isDirty || !isValid}
          >
            保存
          </Button>
        </div>
      </form>
    </FormFieldGroup>
  )
}
