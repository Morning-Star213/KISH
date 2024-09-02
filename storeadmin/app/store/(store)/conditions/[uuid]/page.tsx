'use client'

import { useConditionQuery } from '@/api/index'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/Breadcrumb'
import { useParams } from 'next/navigation'
import { ConditionForm } from './ConditionForm'

export default function Listing() {
  const params = useParams()
  const { data: { condition } = {} } = useConditionQuery({
    variables: { uuid: params.uuid.toString() },
    skip: params.uuid === 'new',
  })

  if (!condition && params.uuid !== 'new') return null

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/conditions'>状態一覧</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{condition?.name || '新規作成'}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className='mt-10 text-lg'>{condition?.name}</h1>

      <ConditionForm condition={condition} />
    </div>
  )
}
