'use client'

import { Product } from '@/api/index'
import { FormField } from '@/components/ui/FormField'
import { Label } from '@/components/ui/Label'

type Props = {
  product: Product
}
export const ProductMaster = ({ product }: Props) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className='col-span-2'>
        <FormField>
          <Label htmlFor='code' className='flex items-center gap-2'>
            品番
          </Label>
          {product.productMaster.code}
        </FormField>

        <FormField className='mt-10'>
          <Label htmlFor='name' className='flex items-center gap-2'>
            商品名
          </Label>
          {product.productMaster.name}
        </FormField>

        <FormField className='mt-10'>
          <Label htmlFor='name' className='flex items-center gap-2'>
            ケア
          </Label>
          {product.productMaster.care}
        </FormField>

        <FormField className='mt-10'>
          <Label htmlFor='name' className='flex items-center gap-2'>
            金額
          </Label>
          {product.productMaster.priceTotal?.toLocaleString()}
        </FormField>

        <FormField className='mt-10'>
          <Label htmlFor='name' className='flex items-center gap-2'>
            性別
          </Label>
          {product.productMaster.sexI18n}
        </FormField>

        <FormField className='mt-10'>
          <Label className='flex items-center gap-2'>年度</Label>
          {product.productMaster.year}
        </FormField>

        <FormField className='mt-10'>
          <Label>サイズ</Label>
          <div className='flex items-center gap-2 text-xs'>
            {product.productMaster?.sizes?.map((size) => (
              <div key={`size-${size.id}`} className='bg-gray px-4 py-2 rounded-md'>
                {size.name}
              </div>
            ))}
          </div>
        </FormField>

        <FormField className='mt-10'>
          <Label>カテゴリー</Label>
          <div className='flex items-center gap-2 text-xs'>
            {product.productMaster?.categories?.map((category) => (
              <div key={`category-${category.id}`} className='bg-gray px-4 py-2 rounded-md'>
                {category.name}
              </div>
            ))}
          </div>
        </FormField>
      </div>
    </div>
  )
}
