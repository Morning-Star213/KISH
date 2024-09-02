'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Product, useCreateListingMutation, useProductsQuery } from '@/api/index'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/Breadcrumb'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormProps = {
  keyword: string
}

export default function ListingNew() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const brandId = searchParams.get('brandId') || ''
  const [searchKeyword, setSearchKeyword] = useState<string>()
  const { register, handleSubmit } = useForm<FormProps>({
    mode: 'onBlur',
    defaultValues: {
      keyword: '',
    },
  })

  const { data: { products: { products = [] } = {} } = {} } = useProductsQuery({
    variables: { brandId, search: { keyword: searchKeyword } },
    fetchPolicy: 'cache-and-network',
    skip: !searchKeyword,
  })

  const onSubmit = (values: FormProps) => {
    setSearchKeyword(values.keyword)
  }

  const [createListing] = useCreateListingMutation({
    onCompleted: (data) => {
      if (!data?.createListing?.error) {
        alert('商品を登録しました')
        router.push(`/listings/${data.createListing.listing?.uuid}?${searchParams.toString()}`)
      }
    },
  })
  const handleSelect = (product: Product) => {
    if (confirm('商品を登録しますか？')) {
      createListing({ variables: { uuid: product.uuid } })
    }
  }

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
            <BreadcrumbPage>新規追加</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className='mt-10 text-lg'>商品登録</h1>
      <div className='bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='relative'>
            <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input placeholder='Search' className='pl-8' {...register('keyword')} />
          </div>
        </form>

        <div className='flex flex-col items-start gap-2 rounded-lg p-3 text-left text-sm transition-all hover:bg-accent'>
          {products.map((product) => (
            <div key={`product-${product.id}`} className='flex items-center gap-2 h-[150px] w-full'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg'
                className='h-full object-cover object-center group-hover:opacity-75'
                alt=''
              />
              <div>
                <div>{product.productMaster.name}</div>
                <div>{product.color?.name}</div>
              </div>
              <Button size='sm' className='ml-auto' onClick={() => handleSelect(product)}>
                選択
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
