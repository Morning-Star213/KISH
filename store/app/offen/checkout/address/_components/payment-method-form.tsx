"use client";

import Image from "next/image";
import CreditImage from "../_images/credit.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  dummyCreditYearOptions,
  requiredMark,
  monthOptions,
  dummyNumberOfPaymentsOptions,
} from "../_const";
import Link from "next/link";

export const PaymentMethodForm = () => {
  return (
    <div className="md:mt-4 md:ml-[53px]">
      <Image
        src={CreditImage}
        alt="クレジットカード"
        className="mt-2 mx-auto md:mx-0 md:mt-4"
      />
      <div className="mt-6 md:mt-10">
        <Label>
          <span className={`text-xs md:text-[22px] ${requiredMark}`}>
            カード番号
          </span>
          <Input
            autoComplete="cc-number"
            type="text"
            placeholder="例）12345678901234"
            className="mt-2 bg-[#fbfbfb] md:h-[65px] md:p-[20px] text-base md:text-lg w-full lg:w-[390px]"
          />
        </Label>
      </div>
      <div className="mt-6 md:mt-12">
        <Label>
          <span className={`text-xs md:text-[22px] ${requiredMark}`}>
            名義人
          </span>
          <Input
            autoComplete="cc-name"
            type="text"
            placeholder="例）OFFEN HANAKO"
            className="mt-2 bg-[#fbfbfb] md:h-[65px] md:p-[20px] text-base md:text-lg w-full lg:w-[390px]"
          />
        </Label>
        <span className="text-xs md:text-lg text-[#949494]">
          ※クレジットカードに記載されているローマ字の名前を入力してください。（半角英字大文字）
        </span>
      </div>
      <div className="mt-6 md:mt-12">
        <span className={`text-xs md:text-[22px] col-[span_2] ${requiredMark}`}>
          有効期限
        </span>
        <div className="flex gap-x-8 md:gap-x-14">
          <div className="flex items-center w-full lg:w-[calc(100%_/_2_-_56px)] mt-2">
            <Select
              className="md:text-lg bg-[#fbfbfb] h-10 md:h-[65px] md:p-[20px] w-full lg:w-[182px] mr-2"
              options={monthOptions}
              placeholder="-"
              onChange={(value) => console.log(value)}
            />
            <span className="text-xs md:text-[22px]">月</span>
          </div>
          <div className="flex items-center w-full lg:w-[calc(100%_/_2_-_56px)] mt-2">
            <Select
              className="md:text-lg bg-[#fbfbfb] h-10 md:h-[65px] md:p-[20px] lg:w-[182px] mr-2"
              options={dummyCreditYearOptions}
              placeholder="-"
              onChange={(value) => console.log(value)}
            />
            <span className="text-xs md:text-[22px]">年</span>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-10">
        <Label>
          <span className={`text-xs md:text-[22px] ${requiredMark}`}>
            セキュリティコード
          </span>
          <Input
            autoComplete="cc-number"
            type="text"
            placeholder="例）12345678901234"
            className="mt-2 bg-[#fbfbfb] md:h-[65px] md:p-[20px] text-base md:ext-lg w-full lg:w-[390px]"
          />
        </Label>
        <div className="mt-4">
          <Link href="#" className="text-xs md:text-xl underline ">
            セキュリティーコードとは？
          </Link>
        </div>
      </div>
      <div className="mt-6 md:mt-10">
        <span className={`text-xs md:text-[22px] ${requiredMark}`}>
          お支払い回数
        </span>
        <div className="mt-2">
          <Select
            className="md:text-lg bg-[#fbfbfb] h-10 md:h-[65px] md:p-[20px] w-full lg:w-[390px] mr-2"
            options={dummyNumberOfPaymentsOptions}
            placeholder="お支払い回数を選択"
            onChange={(value) => console.log(value)}
          />
        </div>
      </div>
      <div className="mt-8 md:mt-10 bg-[#f8f8f8] py-5 px-2.5  md:p-10">
        <div className="flex items-center">
          <Checkbox
            id="credit_register"
            className="data-[state=checked]:bg-white w-5 md:w-[33px] h-5 md:h-[33px]"
          />
          <Label
            htmlFor="credit_register"
            className="cursor-pointer font-bold text-xs md:text-[22px] pl-3 md:pl-6 leading-none"
          >
            カード情報を登録する
          </Label>
        </div>
        <p className="pl-8 md:pl-0 text-xs md:text-xl mt-3 md:mt-8">
          ※カード情報を登録しておくと、次回以降の購入時にカード情報入力が省略できます。
        </p>
        <p className="pl-8 md:pl-0 text-xs md:text-xl">
          ※カード情報は暗証化化され安全に送信されます
        </p>
      </div>
    </div>
  );
};
