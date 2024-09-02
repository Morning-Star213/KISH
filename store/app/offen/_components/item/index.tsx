import Image from "next/image";
import ItemImage from "./shoe02.png";
import Link from "next/link";

export default function Products() {
  return (
    <Link href="/products/1" className="flex flex-col gap-2 relative">
      <Image src={ItemImage} alt="shoes" className="aspect-[4/3] w-full" />
      <span className="text-xs font-heading inline-block absolute top-0.5 left-0.5 bg-[#EBEBEB] px-2 py-[1px]">
        Pre-Loved
      </span>
      <h3 className="text-[12px] sm:text-base font-heading mt-2">
        Pointed-CROWNP MESH / ORANGE
      </h3>
      <div className="text-[10px] sm:text-sm">size: 36 / 23.0cm, 38 / 24.0cm</div>
      <div className="flex items-center gap-2 text-[10px] sm:text-sm">
        <s className="text-tertiary">¥15,950</s>
        <span>¥9,600</span>
      </div>
    </Link>
  );
}
