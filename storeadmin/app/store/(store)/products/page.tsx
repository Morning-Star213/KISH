'use client'

import { Select } from '@/components/ui/Select'
import { ProductSearch, useCurrentUserQuery, useProductsLazyQuery } from '@/api/index'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Pagination } from '@/components/ui/Pagination'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

type FormProps = {
  keyword: string
}

type TabMode = 'all' | 'resale' | 'noResale' | 'archive'

export default function Produts() {
  const { data: { currentUser } = {} } = useCurrentUserQuery()
  const [tabMode, setTabMode] = useState<TabMode>('all')
  const searchParams = useSearchParams()
  const router = useRouter()

  const page = Number(searchParams.get('page')) || 1
  const keyword = searchParams.get('keyword')
  const isResale = searchParams.get('is_resale')
  const isArchive = searchParams.get('is_archive')
  const brandId = searchParams.get('brandId') || ''
  let search: ProductSearch = {}
  if (keyword) {
    search.keyword = keyword
  }
  if (isResale) {
    search.isResale = isResale
  }
  if (isArchive) {
    search.isArchive = isArchive
  }

  const [getProducts, { data: { products: { products = [], pagination = null } = {} } = {} }] =
    useProductsLazyQuery()

  const { register, handleSubmit } = useForm<FormProps>({
    mode: 'onBlur',
    defaultValues: {
      keyword: searchParams.get('keyword') || '',
    },
  })

  const onSubmit = (values: FormProps) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('keyword', values.keyword)
    router.push(`/products?${params.toString()}`)
  }

  const selectTab = (tabMode: TabMode) => {
    setTabMode(tabMode)

    const params = new URLSearchParams(searchParams.toString())

    if (tabMode === 'resale') {
      params.set('is_resale', '1')
      params.delete('is_archive')
    } else if (tabMode === 'noResale') {
      params.set('is_resale', '0')
      params.delete('is_archive')
    } else if (tabMode === 'archive') {
      params.set('is_archive', '1')
      params.delete('is_resale')
    } else if (tabMode === 'all') {
      params.delete('is_resale')
      params.delete('is_archive')
    }

    router.push(`/products?${params.toString()}`)
  }

  const handleSelectBrand = (brandId: string) => {
    router.replace(`/products?brandId=${brandId}`)
  }

  useEffect(() => {
    const brandId = searchParams.get('brandId')

    if (!brandId) return

    getProducts({
      variables: { brandId, search: { keyword, isResale, isArchive }, page },
      fetchPolicy: 'cache-and-network',
    })
  }, [searchParams, getProducts, isResale, isArchive, keyword, page])

  return (
    <div>
      <div className='flex items-center'>
        <h1 className='text-xl font-bold'>商品マスタ</h1>
        <div className='ml-auto flex items-center gap-x-4'>
          {/* <Button className='px-10 text-base' size='sm' intent='outline'>
            <Image src={ExportIcon} alt='import' className='mr-2' />
            エクスポート
          </Button>
          <Button className='px-10 text-base' size='sm' intent='outline'>
            <Image src={ImportIcon} alt='import' className='mr-2' />
            インポート
          </Button> */}
          <Button
            className='px-10 text-base'
            size='sm'
            onClick={() => router.push(`/products/new?${searchParams.toString()}`)}
          >
            商品を追加
          </Button>
        </div>
      </div>

      <Select className='w-48' value={brandId} onChange={(e) => handleSelectBrand(e.target.value)}>
        <option value=''>ブランドを選択</option>
        {currentUser?.organization?.brands?.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </Select>

      <div className='mt-8'>
        <div className='flex items-center gap-x-2 border border-tableBorder pt-4 px-8'>
          <div
            className={cn(
              'px-8 pb-4 hover:cursor-pointer border-b-4 border-b-primary border-opacity-0',
              tabMode === 'all' && 'border-opacity-100',
            )}
            onClick={() => selectTab('all')}
          >
            すべて
          </div>
          <div
            className={cn(
              'px-8 pb-4 hover:cursor-pointer border-b-4 border-b-primary border-opacity-0',
              tabMode === 'resale' && 'border-opacity-100',
            )}
            onClick={() => selectTab('resale')}
          >
            リセール対象
          </div>
          <div
            className={cn(
              'px-8 pb-4 hover:cursor-pointer border-b-4 border-b-primary border-opacity-0',
              tabMode === 'noResale' && 'border-opacity-100',
            )}
            onClick={() => selectTab('noResale')}
          >
            リセール対象外
          </div>
          <div
            className={cn(
              'px-8 pb-4 hover:cursor-pointer border-b-4 border-b-primary border-opacity-0',
              tabMode === 'archive' && 'border-opacity-100',
            )}
            onClick={() => selectTab('archive')}
          >
            削除済み
          </div>
        </div>

        <div className='border border-tableBorder py-4 px-4'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              className='bg-[#F4F4F5] w-72 border-none placeholder:text-[#6B7280]'
              placeholder='商品を検索'
              {...register('keyword')}
            />
          </form>
        </div>

        <table className='min-w-full divide-y divide-tableBorder border border-tableBorder'>
          <thead className='bg-tableHeader py-2'>
            <tr className=''>
              <th
                scope='col'
                className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-3 w-36'
              >
                品番
              </th>
              <th scope='col' className='px-3 py-3.5 text-left text-sm font-semibold'>
                名称
              </th>
              <th scope='col' className='px-3 py-3.5 text-left text-sm font-semibold'>
                カテゴリ
              </th>
              <th scope='col' className='px-3 py-3.5 text-left text-sm font-semibold w-24'>
                色
              </th>
              <th scope='col' className='px-3 py-3.5 text-left text-sm font-semibold'>
                リセール対象
              </th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {products.map((product) => (
              <tr key={product.id} className='border border-tableBorder'>
                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-3'>
                  <Link href={`/products/${product.uuid}?${searchParams.toString()}`}>
                    {product.productMaster?.code}
                  </Link>
                </td>
                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-3'>
                  <Link href={`/products/${product.uuid}?${searchParams.toString()}`}>
                    {product.productMaster?.name}
                  </Link>
                </td>
                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-3'>
                  {product.productMaster?.categories?.map((category) => category.name).join(' / ')}
                </td>
                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-3'>
                  {product.color?.name}
                </td>
                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-3'>
                  {product.isResale ? '◯' : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {pagination && (
          <div className='mt-6'>
            <Pagination
              totalCount={pagination.totalCount}
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              pageSize={3}
            />
          </div>
        )}
      </div>
    </div>
  )
}
