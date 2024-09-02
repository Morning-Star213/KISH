import React, { useEffect } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import PointedImage from './pointed.png';
import RoundImage from './round.png';
import MensImage from './mens.png';
import BootsImage from './boots.png';
import SquareImage from './square.png';
import ShoppingBagIcon from './ShoppingBagIcon';
import PurchaseBagIcon from './PurchaseBagIcon';
import CloseIcon from './CloseIcon';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  // ハンバーガーメニューが開いている時はbody要素のスクロールを禁止する
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-quaternary z-50 transition-opacity duration-300 w-full sm:w-96 m-0 sm:mt-4 sm:ml-4 sm:rounded-lg ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="h-full w-full overflow-auto p-4 relative">
        <button onClick={onClose} className="absolute top-6 text-3xl">
          <CloseIcon />
        </button>

        <div className="mt-16 mb-12 flex gap-3">
          <Link href="/" className="flex items-center justify-center w-6/12 rounded-3xl bg-white py-3 px-7">
            <ShoppingBagIcon className="text-xl" />
            <span className="ml-2 text-xs">お買い物する</span>
          </Link>
          <Link href="/" className="flex items-center justify-center w-6/12 rounded-3xl bg-white py-3 px-7">
            <PurchaseBagIcon className="text-xl" />
            <span className="ml-2 text-xs">買取に出す</span>
          </Link>
        </div>
        
        <nav className="grid grid-cols-2 gap-x-3 gap-y-7">
          <MenuCategory title="Pointed" imageUrl={PointedImage} />
          <MenuCategory title="Square" imageUrl={SquareImage} />
          <MenuCategory title="Round" imageUrl={RoundImage} />
          <MenuCategory title="Boots" imageUrl={BootsImage} />
          <MenuCategory title="Mens" imageUrl={MensImage} />
        </nav>
        
        <div className="mt-8">
          <MenuLink href="/">Öffenの新品ページへ</MenuLink>
        </div>
      </div>
    </div>
  );
};

const MenuCategory: React.FC<{ title: string; imageUrl: any }> = ({ title, imageUrl }) => (
  <div className="flex flex-col">
    <div className="relative overflow-hidden h-32">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
    </div>
    <h3 className="text-center text-xl font-heading">{title}</h3>
  </div>
);

const MenuLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="block bg-white w-full text-center py-3 rounded-3xl font-medium text-xs">
    {children}
  </Link>
);

export default HamburgerMenu;