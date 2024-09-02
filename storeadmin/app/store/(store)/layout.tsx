'use client'

import { redirect } from 'next/navigation'

import { useCurrentUserQuery } from '@/api'
import { Header } from './Header'
import { SideMenu } from './SideMenu'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { data: { currentUser } = {} } = useCurrentUserQuery()

  if (currentUser === undefined) return null
  if (currentUser === null) {
    redirect('/login')
  }

  return (
    <div className='h-full'>
      <Header />
      <div className='flex' style={{ minHeight: 'calc(100vh - 64px)' }}>
        <SideMenu />

        <div className='pt-10 px-6 bg-[#FAFAFA] flex-1'>{children}</div>
      </div>
    </div>
  )
}
