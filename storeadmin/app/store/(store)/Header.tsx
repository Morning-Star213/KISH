import { useCurrentUserQuery } from '@/api'
import { useSignoutMutation } from '@/api/index'
import Logo from '@/images/logo.svg'
import { useApolloClient } from '@apollo/client'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const Header = () => {
  const { data: { currentUser } = {} } = useCurrentUserQuery()

  const [signout] = useSignoutMutation()
  const client = useApolloClient()
  const router = useRouter()

  const handleSignout = () => {
    if (confirm('ログアウトしますか？')) {
      signout().then(() => {
        client.clearStore()
        router.push('/login')
      })
    }
  }

  if (!currentUser) return null

  return (
    <div className='flex h-16 items-center gap-x-6 bg-[#2D6E55] px-8'>
      <Link href='/'>
        <Image src={Logo} alt={`logo`} />
      </Link>
      <div className='ml-auto text-white text-sm'>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className='IconButton flex items-center gap-x-2 focus:outline-none'
              aria-label='Customise options'
            >
              {currentUser.organization?.name} : {currentUser.email}
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className='bg-white px-4 py-6 rounded-sm shadow-md text-sm min-w-56'
              sideOffset={5}
            >
              <DropdownMenu.Separator className='h-0.5 bg-gray m-2' />

              <DropdownMenu.Item className='focus:outline-none flex items-center px-6 pt-2'>
                <button className='text-sm' type='button' onClick={handleSignout}>
                  ログアウト
                </button>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  )
}
