'use client'

import { Image, useListingQuery } from '@/api/index'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/Breadcrumb'
import { FormField } from '@/components/ui/FormField'
import { FormFieldGroup } from '@/components/ui/FormFieldGroup'
import { Label } from '@/components/ui/Label'
import { Separator } from '@/components/ui/Separator'
import { useParams, useSearchParams } from 'next/navigation'
import { ListingForm } from './ListingForm'
import Link from 'next/link'

const imageUrl = (image: Image) =>
  process.env.NODE_ENV === 'production' ? image.imageUrl : `http://localhost:8080${image.imageUrl}`

export default function Listing() {
  const searchParams = useSearchParams()
  const brandId = searchParams.get('brandId') || ''
  const params = useParams()
  const { data: { listing = null, conditions = [] } = {} } = useListingQuery({
    variables: { brandId, uuid: params.uuid.toString() },
  })

  if (!listing) return null

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/listings?${searchParams.toString()}`}>商品一覧</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{listing.product.productMaster.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className='mt-10 text-lg'>{listing.product.productMaster.name}</h1>

      <FormFieldGroup className='py-2'>
        <h2 className='font-semibold py-4'>商品</h2>
        <Separator />
        <FormField>
          <Label>品番</Label>
          <Link
            href={`/products/${listing.product.uuid}?${searchParams.toString()}`}
            target='_blank'
          >
            {listing.product.productMaster.code}
          </Link>
        </FormField>
        <FormField>
          <Label>商品名</Label>
          {listing.product.productMaster.name}
        </FormField>
        <FormField>
          <Label>金額</Label>
          {listing.product.productMaster.priceTotal?.toLocaleString()}
        </FormField>
        <FormField>
          <Label>画像</Label>
          <div className='flex gap-2'>
            {listing.product.images?.map((image, index) => (
              <div
                key={index}
                className='aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-28 w-28'
              >
                <img
                  src={imageUrl(image)}
                  alt='img'
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                />
              </div>
            ))}
          </div>
        </FormField>
      </FormFieldGroup>

      <ListingForm listing={listing} conditions={conditions} />
    </div>
  )
}
