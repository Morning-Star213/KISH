'use client'

import { useConditionsQuery } from '@/api/index'
import { Button } from '@/components/ui/Button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Listings() {
  const router = useRouter()

  const { data: { conditions = [] } = {} } = useConditionsQuery({
    fetchPolicy: 'cache-and-network',
  })

  return (
    <div>
      <h1 className='text-xl font-bold'>状態管理</h1>

      <div className='flex items-center gap-x-4 text-sm mb-4'>
        <Button className='px-4 ml-auto' size='sm' onClick={() => router.push('/conditions/new')}>
          追加
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-32'>名称</TableHead>
            <TableHead>買取価格割率</TableHead>
            <TableHead>再販価格割率</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {conditions.map((condition) => (
            <TableRow key={condition.uuid}>
              <TableCell className='w-72'>
                <Link href={`/conditions/${condition.uuid}`}>{condition.name}</Link>
              </TableCell>
              <TableCell className='w-48'>{condition.tradeInRate}</TableCell>
              <TableCell className='w-48'>{condition.resaleRate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
