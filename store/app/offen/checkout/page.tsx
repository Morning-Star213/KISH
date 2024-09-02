"use client";

import Link from "next/link";
import Image from "next/image";
import Layout, {
  Breadcrumb,
  Content,
  Footer,
  Header,
} from "../_components/layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ItemImage from "../_components/item/shoe01.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
          ご購入手続き
        </h1>
        <div className="mt-6 mb-[120px] lg:mb-[335px] flex flex-col md:flex-row justify-center gap-8 md:gap-10 lg:gap-44">
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
          {!dummyLoggedIn && (
            <div className="w-[100%] lg:max-w-[618px] mt-6 lg:mt-0">
              <div className="px-8 lg:px-[10%] py-6 lg:py-12 bg-neutral-200 flex justify-between items-center">
                <span className="text-xs md:text-base lg:text-xl">
                  まだ会員登録してないですか？
                </span>
                <Link
                  href="#"
                  className="text-xs md:text-base lg:text-xl underline underline-offset-4"
                >
                  新規会員登録
                </Link>
              </div>
              <h2 className="font-bold text-base mt-10 lg:mt-14 lg:text-[22px] text-center">
                ログイン
              </h2>
              <div className="grid mt-6 lg:mt-12 mb-6 lg:mb-8">
                <Label>
                  <span className="text-xs lg:text-xl font-bold">
                    メールアドレス
                  </span>
                  <Input
                    type="text"
                    className="bg-[#f8f8f8] h-[42px] lg:h-[65px] mt-2"
                  />
                </Label>
                <Label className="mt-6">
                  <span className="text-xs lg:text-xl font-bold">
                    パスワード
                  </span>
                  <Input
                    type="text"
                    className="bg-[#f8f8f8] h-[42px] lg:h-[65px] mt-2"
                  />
                </Label>
              </div>
              <Link
                href="#"
                className="text-xs lg:text-xl underline underline-offset-2"
              >
                パスワードをお忘れの方はこちら
              </Link>
              <div className="text-center mt-6 lg:mt-[72px]">
                <Button
                  type="button"
                  className="bg-[#d2883e] text-white text-xs lg:text-2xl h-auto py-5 px-[9rem] rounded-none w-full lg:w-[80%] lg:max-w-[398px]"
                >
                  ログイン
                </Button>
              </div>
            </div>
          )}
          <div className="max-w-[618px] w-[100%] hidden md:block">
            <h2 className="font-bold text-base lg:text-[22px] text-center border-b border-[#424242] py-2.5">
              ショッピングカート内の商品
            </h2>
            <div className="flex flex-col gap-4 mt-8 mb-16">
              {hasCartItems ? (
                dummyCartItems.map((dummyCartItem) => {
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
                })
              ) : (
                <p className="px-8 lg:px-[10%] py-6 lg:py-12 bg-neutral-200 text-center">
                  カートに商品がありません
                </p>
              )}
              {hasCartItems && (
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
              )}
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
