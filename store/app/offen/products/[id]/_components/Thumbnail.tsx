"use client";

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  active: boolean;
  onClick: () => void;
  id: string;
};

export default function Thumbnail({ src, active, onClick, id }: Props) {
  return (
    <Image
      id={id}
      src={src}
      alt="shoes"
      onClick={onClick}
      className={cn(
        "aspect-[4/3] w-1/5 cursor-pointer",
        active && "border-b-2 border-quaternary"
      )}
    />
  );
}
