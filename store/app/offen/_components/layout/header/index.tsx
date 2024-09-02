"use client";

import Image from "next/image";
import LogoImage from "./logo.png";
import Link from "next/link";
import UserIcon from "./UserIcon";
import SearchIcon from "./SearchIcon";
import CartButton from "../cart-button";
import { HamburgerMenu } from "../hamburger-menu";
import HamburgerIcon from "./HamburgerIcon";
import { useState } from "react";
import HeartIcon from "../../icons/HeartIcon";

type Props = {
  variant?: "default" | "wide";
};

export default function LayoutHeader({ variant = "default" }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-quaternary px-4 md:px-8 m-0 sm:mx-4 sm:my-3 sm:rounded-lg">
      <div className="flex h-16 relative mx-auto items-center justify-between">
        <div className="flex items-center gap-4">
        <HamburgerIcon className="text-2xl cursor-pointer" onClick={toggleMenu} />
          <SearchIcon className="text-2xl cursor-pointer" />
        </div>
        <div className="absolute top-0 bottom-0 right-0 left-0 m-auto w-[140px] flex flex-col items-center justify-center">
          <div className="text-xl md:text-2xl font-normal font-heading">
            Pre-Loved
          </div>
          <Image src={LogoImage} alt="KISH" className="h-4 md:h-6 w-auto" />
        </div>
        <div className="flex items-center gap-[4rem]">
          <div className="flex items-center gap-4">
            <HeartIcon className="text-2xl cursor-pointer fill-none stroke-[#272626]" />
            <Link href="/">
              <UserIcon className="text-2xl cursor-pointer" />
            </Link>
            <CartButton />
          </div>
        </div>
      </div>
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
