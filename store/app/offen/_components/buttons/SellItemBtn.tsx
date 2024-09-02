import React from "react";
import SellItemBtnIcon from "../icons/SellItemBtnIcon";
import { useRouter } from "next/navigation";

const SellItemBtn = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <button
      className="fixed flex flex-row gap-2 items-center justify-center text-[12px] lg:text-[13px] bottom-4 right-4 w-[135px] lg:w-[155px] lg:left-4 text-quaternary bg-quinary py-3 px-6 rounded-full"
      onClick={handleClick}
    >
      <SellItemBtnIcon color="#f2d34f" />
      <p>買取に出す</p>
    </button>
  );
};

export default SellItemBtn;
