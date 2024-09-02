'use client'

import { useCurrentUserQuery, useListingsLazyQuery } from '@/api/index'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Pagination } from '@/components/ui/Pagination'
import { Select } from '@/components/ui/Select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Listings() {
  const { data: { currentUser } = {} } = useCurrentUserQuery()
  const searchParams = useSearchParams()
  const brandId = searchParams.get('brandId') || ''
  const router = useRouter()
  const [getListings, { data: { listings: { listings = [], pagination = null } = {} } = {} }] =
    useListingsLazyQuery({ fetchPolicy: 'cache-and-network' })

  const handleSelectBrand = (brandId: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('brandId', brandId)
    router.push(`/listings?${params.toString()}`)
  }

  useEffect(() => {
    if (!brandId) return

    getListings({ variables: { brandId } })
  }, [getListings, brandId])

  return (
    <div>
      <h1 className='text-xl font-bold'>商品管理</h1>

      <div className='flex items-center gap-x-4 text-sm mb-4'>
        <Button
          className='px-4 ml-auto'
          size='sm'
          onClick={() => router.push(`/listings/new?${searchParams.toString()}`)}
        >
          商品を追加
        </Button>
      </div>

      <Select className='w-48' value={brandId} onChange={(e) => handleSelectBrand(e.target.value)}>
        <option value=''>ブランドを選択</option>
        {currentUser?.organization?.brands?.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </Select>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-32'>ステータス</TableHead>
            <TableHead>商品名</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>対応方針</TableHead>
            <TableHead>カラー</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.map((listing) => (
            <TableRow key={listing.uuid}>
              <TableCell className='font-medium'>
                <Badge variant='outline'>{listing.statusI18n}</Badge>
              </TableCell>
              <TableCell>
                <Link href={`/listings/${listing.uuid}?${searchParams.toString()}`}>
                  {listing.product.productMaster.name}
                </Link>
              </TableCell>
              <TableCell>
                <Badge variant='default'>{listing.statusI18n}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant='destructive'>{listing.repairMethodI18n}</Badge>
              </TableCell>
              <TableCell>{listing.product.color?.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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
  )
}
