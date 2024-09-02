import { useCallback, useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

type SubmenuProps = {
  name: string
  href: string
}
type Props = {
  name: string
  href: string
  icon?: any
  subMenus: SubmenuProps[] | undefined
}
export const Menu = ({ name, href, icon, subMenus }: Props) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isCurrent = useCallback(
    (targetHref: string) => {
      if (targetHref === '/') {
        return pathname === targetHref
      } else {
        return pathname.startsWith(targetHref)
      }
    },
    [pathname],
  )

  return (
    <li className='text-sm font-semibold'>
      <Collapsible.Root className='CollapsibleRoot' open={open} onOpenChange={setOpen}>
        <Link
          href={href}
          className={cn(
            'group flex gap-x-3 rounded-md py-2 px-6 leading-6 hover:cursor-pointer',
            isCurrent(href) && 'text-primary bg-secondary',
          )}
        >
          <Collapsible.Trigger asChild>
            <div className='flex items-center gap-x-2'>
              {icon && <Image src={icon} alt='icon' />}
              <div className='flex items-center'>{name}</div>
            </div>
          </Collapsible.Trigger>
        </Link>
        {subMenus && (
          <Collapsible.Content>
            <div className={cn('flex flex-col mb-4')}>
              {subMenus.map((subMenu) => (
                <div
                  key={subMenu.name}
                  className={cn(
                    'py-2 pl-12',
                    isCurrent(subMenu.href) && 'text-primary bg-secondary',
                  )}
                >
                  <Link href={subMenu.href}>{subMenu.name}</Link>
                </div>
              ))}
            </div>
          </Collapsible.Content>
        )}
      </Collapsible.Root>
    </li>
  )
}
