'use client'

import { FormFieldGroup } from '@/components/ui/FormFieldGroup'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/Breadcrumb'

import { useProductQuery } from '@/api/index'
import { useParams, useSearchParams } from 'next/navigation'
import { ProductMaster } from './ProducMastert'
import { useState } from 'react'
import { ProductMasterForm } from './ProducMastertForm'
import { Button } from '@/components/ui/Button'
import { ProductForm } from './ProductForm'

export default function ProductPage() {
  const searchParams = useSearchParams()
  const brandId = searchParams.get('brandId') || ''
  const params = useParams()
  const [isProductMasterForm, setIsProductMasterForm] = useState(false)
  const { data: { product, colors, sizes, categories } = {} } = useProductQuery({
    variables: { brandId, uuid: String(params.id) },
    skip: !params.id,
  })

  if (!product || !colors || !sizes || !categories) return null

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
            <BreadcrumbPage>{product.productMaster?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className='mt-10 text-lg'>商品を編集</h1>

      <FormFieldGroup>
        {!isProductMasterForm ? (
          <>
            <Button size='xs' intent='outline' onClick={() => setIsProductMasterForm(true)}>
              編集
            </Button>
            <ProductMaster product={product} />
          </>
        ) : (
          <ProductMasterForm
            productMaster={product.productMaster}
            sizes={sizes}
            categories={categories}
            onClose={() => setIsProductMasterForm(false)}
          />
        )}
      </FormFieldGroup>

      <FormFieldGroup>
        <ProductForm product={product} colors={colors} />
      </FormFieldGroup>
    </div>
  )
}
