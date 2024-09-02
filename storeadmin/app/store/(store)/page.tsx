'use client'
import { useCurrentUserQuery } from '@/api'

export default function Home() {
  const { data: { currentUser } = {} } = useCurrentUserQuery()
  return (
    <main className='px-4'>
      <div className='bg-white p-10'>{currentUser?.organization?.name} 様用画面</div>
    </main>
  )
}
