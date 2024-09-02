"use client";

import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
};

export default function Slide({ src }: Props) {
  return <Image src={src} alt="shoes" className="aspect-[4/3] w-full" />;
}
