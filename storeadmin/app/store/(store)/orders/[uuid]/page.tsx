'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/Breadcrumb'
import { Listing, useOrderQuery } from '@/api/index'
import { FormField } from '@/components/ui/FormField'
import { FormFieldGroup } from '@/components/ui/FormFieldGroup'
import { useParams } from 'next/navigation'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Badge } from '@/components/ui/Badge'

const imageUrl = (imageUrl?: string) =>
  imageUrl && process.env.NODE_ENV === 'production' ? imageUrl : `http://localhost:8080${imageUrl}`

export default function Order() {
  const params = useParams()
  const { data: { order } = {} } = useOrderQuery({ variables: { uuid: params.uuid.toString() } })

  const productImageUrl = (listing: Listing) => {
    const image = listing?.product?.images && listing?.product?.images[0]
    return imageUrl(image?.imageUrl)
  }

  if (!order) return null

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/orders'>注文一覧</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{order.id}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <FormFieldGroup>
        <FormField className='font-semibold text-lg'>注文</FormField>
        <div className='flex items-center gap-x-2 my-2'>
          <Badge variant='default'>{order.paymentStatusI18n}</Badge>
          <Badge variant='outline'>{order.shippingStatusI18n}</Badge>
        </div>
        {order.items?.map((item) => (
          <div key={`item-${item.id}`} className='flex items-center my-2'>
            <img src={productImageUrl(item.listing)} className='h-28 w-28 mr-2' alt='img' />
            <div className='w-40'>{item.listing?.product?.productMaster?.code}</div>
            <div className='w-60'>{item.listing?.product?.productMaster?.name}</div>
            <div className='w-20'>{item.listing?.product?.color?.name}</div>
            <div className='w-20'>{item.listing?.price?.toLocaleString()}円</div>
          </div>
        ))}
      </FormFieldGroup>

      <FormFieldGroup>
        <FormField className='font-semibold text-lg'>顧客</FormField>
        <div className='flex items-center my-2'>
          <div className='w-40'>顧客ID: </div>
          <div className=''>123</div>
        </div>
        <div className='flex items-center my-2'>
          <div className='w-40'>名前: </div>
          <div className=''>山田太郎</div>
        </div>
        <div className='flex items-center my-2'>
          <div className='w-40'>メールアドレス: </div>
          <div className=''>yamada@gmail.com</div>
        </div>
        <div className='flex items-center my-2'>
          <div className='w-40'>配送住所: </div>
          <div className=''>272-0145 千葉県市川市島尻1-44</div>
        </div>

        <FormField>
          <Label htmlFor='price' className='flex items-center gap-2'>
            追跡番号
          </Label>
          <Input type='text' />
        </FormField>

        <FormField>
          <Label htmlFor='price' className='flex items-center gap-2'>
            配送業者
          </Label>
          <Input type='text' />
        </FormField>
      </FormFieldGroup>

      <FormFieldGroup>
        <FormField className='font-semibold text-lg'>金額</FormField>
        <div className='flex items-center my-2'>
          <div className='w-40'>小計: </div>
          <div className='w-20 text-right'>12,400円</div>
        </div>
        <div className='flex items-center my-2'>
          <div className='w-40'>配送: </div>
          <div className='w-20 text-right'>1,200円</div>
        </div>
        <div className='flex items-center my-2'>
          <div className='w-40'>合計: </div>
          <div className='w-20 text-right'>13,600円</div>
        </div>
      </FormFieldGroup>
    </div>
  )
}
