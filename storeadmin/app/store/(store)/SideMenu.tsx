import {
  CartIcon,
  ChartIcon,
  HomeIcon,
  MarketingIcon,
  PersonIcon,
  TagIcon,
  YenIcon,
} from '@/components/icons'
import { Menu } from './Menu'

type SubItemProps = {
  name: string
  href: string
}
type ItemProps = {
  name: string
  href: string
  icon?: any
  children?: SubItemProps[]
}
const navigation: ItemProps[] = [
  { name: 'ホーム', href: '/', icon: HomeIcon },
  { name: '注文管理', href: '/orders', icon: CartIcon },
  {
    name: '商品管理',
    href: '/listings',
    icon: TagIcon,
  },
  { name: '商品マスター', href: '/products', icon: TagIcon },
  { name: '顧客管理', href: '#', icon: PersonIcon },
  { name: '分析', href: '#', icon: ChartIcon },
  {
    name: 'マーケティング',
    href: '#',
    icon: MarketingIcon,
  },
  {
    name: 'ディスカウント',
    href: '#',
    icon: YenIcon,
  },
]

const settingNavigations: ItemProps[] = [{ name: '状態管理', href: '/conditions' }]

export const SideMenu = () => {
  return (
    <div className='pt-10 w-72 bg-[#FAFAFA] border-r border-border'>
      <nav className='flex flex-1 flex-col'>
        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
          <li>
            <ul role='list' className='-mx-2 space-y-1'>
              {navigation.map((item) => (
                <Menu
                  key={item.name}
                  name={item.name}
                  href={item.href}
                  icon={item.icon}
                  subMenus={item.children}
                />
              ))}
            </ul>
          </li>
        </ul>
      </nav>

      <nav className='flex flex-1 flex-col mt-6'>
        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
          <li>
            <ul role='list' className='-mx-2 space-y-1'>
              {settingNavigations.map((item) => (
                <Menu key={item.name} name={item.name} href={item.href} subMenus={item.children} />
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}
