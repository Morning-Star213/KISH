"use client";

import Link from "next/link";
import Image from "next/image";
import Layout, {
  Breadcrumb,
  Content,
  Footer,
  Header,
} from "../../_components/layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ItemImage from "../../_components/item/shoe01.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import VisaImage from "../_images/visa.png";

const breadcrumbItems = [
  { label: "Pre-Loved TOP​", href: "/" },
  { label: "Shopping cart", href: "/offen/cart", isCurrentPage: true },
];

// TODO: カート情報の設計、実装ができ次第書き換える
const dummyCartItems = [
  {
    id: 1,
    image: ItemImage,
    alt: "shoes",
    title: "border pattern / PURPLE & MINT",
    size: "36/23.0cm",
    condition: "新品に近い",
    price: "¥11,170",
  },
  {
    id: 2,
    image: ItemImage,
    alt: "shoes",
    title: "border pattern / PURPLE & MINT",
    size: "36/23.0cm",
    condition: "新品に近い",
    price: "¥11,170",
  },
];
const hasCartItems = !!dummyCartItems.length;

// TODO: ログイン情報の設計、実装ができ次第書き換える
const dummyLoggedIn = false;

export default function Checkout() {
  return (
    <Layout>
      <Header />
      <Breadcrumb items={breadcrumbItems} variant="wide" />
      <Content variant="wide">
        <h1 className="md:text-4xl text-2xl md:font-medium font-normal text-center">
          カートに入っている商品
        </h1>

        <div className="grid grid-cols-3 place-items-center mt-2 md:mt-[63px] md:py-2.5 px-2.5">
          <div className="text-[10px] md:text-2xl  text-[#b5b5b5]">
            1.配送先・お支払い方法選択
          </div>
          <div className="text-[10px] md:text-2xl">2.ご注文内容確認</div>
          <div className="text-[10px] md:text-2xl text-[#b5b5b5]">
            3.ご注文完了
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-center gap-8 md:gap-10 lg:gap-44">
          <div className="block md:hidden">
            <Accordion type="single" collapsible defaultValue="products">
              <AccordionItem value="products" className="border-[#424242]">
                <AccordionTrigger className="hover:no-underline">
                  <h2 className="font-bold text-base">
                    ショッピングカート内の商品
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4 mt-8 mb-6 md:hidden">
                    {hasCartItems ? (
                      dummyCartItems.map((dummyCartItem) => {
                        return (
                          <div
                            key={dummyCartItem.id}
                            className="flex gap-3 relative pr-6"
                          >
                            <Image
                              src={dummyCartItem.image}
                              alt={dummyCartItem.alt}
                              className="aspect-[4/3] w-28"
                            />
                            <div className="flex flex-col gap-1">
                              <h3 className="text text-xs font-medium flex-1">
                                {dummyCartItem.title}
                              </h3>
                              <div className="flex flex-col gap-1">
                                <h4 className="text-xs">
                                  サイズ: {dummyCartItem.size}
                                </h4>
                                <h4 className="text-xs">
                                  状態: {dummyCartItem.condition}
                                </h4>
                              </div>
                            </div>
                            <h5 className="text-sm absolute right-0 bottom-0">
                              {dummyCartItem.price}
                            </h5>
                          </div>
                        );
                      })
                    ) : (
                      <p className="px-8 lg:px-[10%] py-6 lg:py-12 bg-neutral-200 text-center">
                        カートに商品がありません
                      </p>
                    )}
                    {hasCartItems && (
                      <div className="mt-8">
                        <div className="flex items-center text-sm mt-2">
                          <p className="text-right flex-1">小計(税込)</p>
                          <p className="text-right w-36">¥23,170</p>
                        </div>
                        <div className="flex items-center text-sm mt-2">
                          <p className="text-right flex-1">送料(税込)</p>
                          <p className="text-right w-36">¥850</p>
                        </div>
                        <div className="flex items-center text-sm mt-2">
                          <p className="text-right flex-1">商品合計(税込)</p>
                          <p className="text-right w-36">¥24,020</p>
                        </div>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="w-full lg:max-w-[762px] mt-6 md:mt-0">
            <div className="relative border-b border-[#424242] flex items-center pb-7 md:py-2.5 justify-between">
              <h2 className="font-bold text-base md:text-[22px] mx-0 min-[1420px]:mx-auto">
                お届け先
              </h2>
              <Button className="w-[88px] md:w-[118px] h-8 md:h-[52px] bg-white border border-primary rounded-none font-heading max-[1420px]:static min-[1420px]:absolute md:right-0.5 md:top-[68px]">
                変更
              </Button>
            </div>
            <div className="pl-0 md:pl-10 py-6 md:py-14">
              <div className="flex gap-7 md:gap-8 lg:gap-32 w-full">
                <span className="text-sm md:text-base inline-block w-16 md:w-20">
                  お名前
                </span>
                <span className="text-sm md:text-base">Offen Hanako</span>
              </div>
              <div className="flex gap-7 md:gap-8 lg:gap-32 mt-4 md:mt-16 w-full">
                <span className="text-sm md:text-base inline-block w-16 md:w-20">
                  住所
                </span>
                <div className="flex gap-4">
                  <span className="text-sm md:text-base">000-0000</span>
                  <span className="text-sm md:text-base">
                    東京都渋谷区1-1-1
                    <br />
                    XXXビル#101
                  </span>
                </div>
              </div>
              <div className="flex gap-7 md:gap-8 lg:gap-32 mt-4 md:mt-16 w-full">
                <span className="text-sm md:text-base inline-block w-16 md:w-20">
                  電話番号
                </span>
                <span className="text-sm md:text-base">070-1234-5678</span>
              </div>
            </div>

            <div className="relative border-b border-[#424242] flex items-center pb-7 md:py-2.5 justify-between mt-14 md:mt8">
              <h2 className="font-bold text-base md:text-[22px] mx-0 min-[1420px]:mx-auto">
                お支払い方法
              </h2>
              <Button className="w-[88px] md:w-[118px] h-8 md:h-[52px] bg-white border border-primary rounded-none font-heading max-[1420px]:static min-[1420px]:absolute md:right-0.5 md:top-[68px]">
                変更
              </Button>
            </div>
            <div className="pl-0 md:pl-10 py-6 md:py-14">
              <div className="flex items-center gap-7 md:gap-8 lg:gap-32 w-full">
                <span className="text-sm md:text-base inline-block w-16 md:w-20">
                  支払方法
                </span>
                <div className="flex items-center gap-4">
                  <Image
                    src={VisaImage}
                    alt="visa"
                    className="w-[60px] md:w-[90px]"
                  />
                  <span className="text-sm md:text-base tracking-widest">
                    ****1234
                  </span>
                </div>
              </div>
              <div className="flex gap-7 md:gap-8 lg:gap-32 mt-4 md:mt-16 w-full">
                <span className="text-sm md:text-base inline-block w-16 md:w-20">
                  支払回数
                </span>
                <div className="flex gap-4">
                  <span className="text-sm md:text-base">一括払い</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[618px] w-[100%] hidden md:block">
            <h2 className="font-bold text-base lg:text-[22px] text-center border-b border-[#424242] py-2.5">
              ショッピングカート内の商品
            </h2>
            <div className="flex flex-col gap-4 mt-8 mb-16">
              {dummyCartItems.map((dummyCartItem) => {
                return (
                  <div
                    key={dummyCartItem.id}
                    className={`flex ${
                      !dummyLoggedIn && "md:flex-col"
                    } lg:flex-row gap-3 px-2.5 py-2.5 border-b`}
                  >
                    <Image
                      src={dummyCartItem.image}
                      alt={dummyCartItem.alt}
                      className={`aspect-[4/3] ${
                        !dummyLoggedIn ? "md:w-4/5 lg:w-44" : "w-44"
                      } md:m-auto`}
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text text-lg">{dummyCartItem.title}</h3>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-sm indent-2.5">
                          サイズ: {dummyCartItem.size}
                        </h4>
                        <h4 className="text-sm indent-2.5">
                          状態: {dummyCartItem.condition}
                        </h4>
                      </div>
                    </div>
                    <h5 className="text-[22px] self-end ml-auto">
                      {dummyCartItem.price}
                    </h5>
                  </div>
                );
              })}
              <div className="py-7 pr-3.5">
                <div className="flex items-center text-sm">
                  <p className="text-right text-lg flex-1">小計(税込)</p>
                  <p className="text-right text-2xl w-5/12">¥23,170</p>
                </div>
                <div className="flex items-center text-sm mt-3">
                  <p className="text-right text-lg flex-1">送料(税込)</p>
                  <p className="text-right text-2xl w-5/12">¥850</p>
                </div>
                <div className="flex items-center text-sm mt-3">
                  <p className="text-right text-lg flex-1">商品合計(税込)</p>
                  <p className="text-right text-2xl w-5/12">¥24,020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[90px] mb-20 md:mb-32 mt-10 md:mt-44">
          <Button className="w-56 bg-white border border-primary rounded-none h-12 font-heading order-2 md:order-1">
            前に戻る
          </Button>
          <Button className="w-56 bg-button border border-base rounded-none h-12 font-heading text-white order-1 md:order-2">
            注文を確定する
          </Button>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
