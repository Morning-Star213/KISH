'use client'

import { useOrdersQuery } from '@/api/index'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table'
import { format } from 'date-fns'
import Link from 'next/link'

import { useRouter } from 'next/navigation'

export default function Orders() {
  const router = useRouter()
  const { data: { orders: { orders = [], pagination = {} } = {} } = {} } = useOrdersQuery({
    fetchPolicy: 'cache-and-network',
  })
  console.log('🚀 ~ Produts ~ pagination:', pagination)

  return (
    <div>
      <h1 className='text-xl font-bold'>注文管理</h1>

      <div className='flex items-center gap-x-4 text-sm mb-4'>
        <Button className='px-4 ml-auto' size='sm' onClick={() => router.push('/orders/new')}>
          注文を追加
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-24'>注文ID</TableHead>
            <TableHead className='w-40'>注文ステータス</TableHead>
            <TableHead className='w-52'>注文日時</TableHead>
            <TableHead className='w-28'>支払い</TableHead>
            <TableHead className='w-28'>配送</TableHead>
            <TableHead>金額</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.uuid}>
              <TableCell className='font-medium'>
                <Link href={`/orders/${order.uuid}`}>{order.orderNumber}</Link>
              </TableCell>

              <TableCell className='font-medium text-center'>
                <Badge variant='outline'>{order.statusI18n}</Badge>
              </TableCell>
              <TableCell>
                {order.orderDate && format(new Date(order.orderDate), 'yyyy年MM月dd日 H:mm')}
              </TableCell>
              <TableCell className='font-medium text-center'>
                <Badge variant='destructive'>{order.paymentStatusI18n}</Badge>
              </TableCell>
              <TableCell className='font-medium text-center'>
                <Badge variant='destructive'>{order.shippingStatusI18n}</Badge>
              </TableCell>
              <TableCell>{order.totalPrice?.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
