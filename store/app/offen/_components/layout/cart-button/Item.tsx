import Image from "next/image";
import { Trash2 } from "lucide-react";
import ItemImage from "../../item/shoe01.jpg";

export default function Item() {
  return (
    <div className="flex gap-3 relative pr-6">
      <Image src={ItemImage} alt="shoes" className="aspect-[4/3] w-28" />
      <div className="flex flex-col gap-1">
        <h3 className="text-xs mb-1">border pattern / PURPLE & MINT</h3>
        <h4 className="text-[10px]">サイズ: 36/23.0cm</h4>
        <h4 className="text-[10px]">状態: 新品に近い</h4>
        <Trash2 className="cursor-pointer absolute top-0 right-0 text-[#565656] w-4 h-4" />
      </div>
      <h5 className="text-sm absolute right-0 bottom-0">¥15,950</h5>
    </div>
  );
}
