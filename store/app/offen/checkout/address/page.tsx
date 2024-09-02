"use client";

import Image from "next/image";
import Layout, {
  Breadcrumb,
  Content,
  Footer,
  Header,
} from "../../_components/layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  breadcrumbItems,
  dummyCartItems,
  dummyLoggedIn,
  dummyPrefectures,
  hasCartItems,
  requiredMark,
  dummyCreditData,
  dummyIsNewCreditChecked,
  dummyNumberOfPaymentsOptions,
} from "./_const";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import VisaImage from "../_images/visa.png";
import { PaymentMethodForm } from "./_components/payment-method-form";

export default function Address() {
  return (
    <Layout>
      <Header />
      <Breadcrumb items={breadcrumbItems} variant="wide" />
      <Content variant="wide">
        <h1 className="md:text-4xl text-2xl md:font-medium font-normal text-center">
          ご購入手続き
        </h1>

        <div className="grid grid-cols-3 place-items-center mt-2 md:mt-[63px] md:py-2.5 px-2.5">
          <div className="text-[10px] md:text-2xl">
            1.配送先・お支払い方法選択
          </div>
          <div className="text-[10px] md:text-2xl text-[#b5b5b5]">
            2.ご注文内容確認
          </div>
          <div className="text-[10px] md:text-2xl text-[#b5b5b5]">
            3.ご注文完了
          </div>
        </div>

        <div className="mt-6 md:mt-14 mb-8 md:mb-[130px] flex flex-col md:flex-row justify-center md:gap-14">
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
            <h2 className="font-bold text-base md:text-[22px] text-left md:text-center border-b border-[#424242] py-2.5">
              配送先
            </h2>
            <div className="mt-6 md:mt-14">
              <div className="flex items-center justify-between lg:justify-normal">
                <Label className="md:w-[180px] lg:w-[220px] md:mr-0 lg:mr-[68px]">
                  <span className={`font-bold md:text-[22px] ${requiredMark}`}>
                    郵便番号
                  </span>
                  <Input
                    type="text"
                    placeholder="例）000−0000"
                    className="mt-2 bg-[#fbfbfb] md:h-[65px] md:p-[20px] text-base md:text-lg"
                  />
                </Label>
                <Label className="md:w-[120px] lg:w-[220px]">
                  <span className={`font-bold md:text-[22px] ${requiredMark}`}>
                    都道府県
                  </span>
                  <Select
                    className="font-bold mt-2 bg-[#fbfbfb] h-10 md:h-[65px] md:p-[20px]"
                    options={dummyPrefectures}
                    placeholder="-"
                    onChange={(value) => console.log(value)}
                  />
                </Label>
              </div>
              <div className="mt-4 md:mt-10">
                <Label className="md:mt-10">
                  <span className={`font-bold md:text-[22px] ${requiredMark}`}>
                    市区町村
                  </span>
                  <Input
                    type="text"
                    placeholder="例）市区町村"
                    className="mt-2 bg-[#fbfbfb] md:h-[65px] md:p-[20px] text-base  md:text-lg"
                  />
                </Label>
              </div>
              <div className="mt-4 md:mt-10">
                <Label>
                  <span className={`font-bold md:text-[22px] ${requiredMark}`}>
                    番地
                  </span>
                  <Input
                    type="text"
                    placeholder="例）番地"
                    className="mt-2 bg-[#fbfbfb] md:h-[65px] md:p-[20px] text-base md:text-lg"
                  />
                </Label>
              </div>
              <div className="mt-4 md:mt-10">
                <Label className="md:mt-10">
                  <span className={`font-bold md:text-[22px] ${requiredMark}`}>
                    建物名・部屋番号
                  </span>
                  <Input
                    type="text"
                    placeholder="例）建物名・部屋番号"
                    className="mt-2 bg-[#fbfbfb] md:h-[65px] md:p-[20px] text-base md:text-lg"
                  />
                </Label>
              </div>
              <div className="mt-4 md:mt-10">
                <Label className="md:mt-10">
                  <span className={`font-bold md:text-[22px] ${requiredMark}`}>
                    電話番号
                  </span>
                  <Input
                    type="text"
                    placeholder="例）000-0000-0000"
                    className="mt-2 bg-[#fbfbfb] md:h-[65px] md:p-[20px] text-base md:text-lg"
                  />
                </Label>
              </div>
              <div className="flex items-center mt-8 md:mt-10">
                <Checkbox
                  id="save"
                  className="data-[state=checked]:bg-white w-5 md:w-[33px] h-5 md:h-[33px]"
                />
                <Label
                  htmlFor="save"
                  className="cursor-pointer font-bold text-xs md:text-[22px] pl-3 md:pl-6"
                >
                  お届け先情報を保存する
                </Label>
              </div>
            </div>

            <h2 className="font-bold text-base lg:text-[22px] text-left md:text-center border-b border-[#424242] py-2.5 mt-8 md:mt-20">
              お支払い方法
            </h2>
            <div className="mt-6 md:mt-14">
              {dummyCreditData ? (
                <>
                  <div className="flex items-center">
                    <RadioGroup
                      defaultValue="credit"
                      className="flex flex-col gap-4"
                    >
                      <RadioGroupItem
                        value="credit"
                        id="credit"
                        className="h-5 md:h-6 w-5 md:w-6 text-button"
                      />
                    </RadioGroup>
                    <Label
                      htmlFor="credit"
                      className="text-xs md:text-[22px] ml-3 md:ml-[18px]"
                    >
                      クレジットカード
                    </Label>
                  </div>
                  <PaymentMethodForm />
                </>
              ) : (
                <div className="flex items-center">
                  <RadioGroup
                    defaultValue="default_credit"
                    className="flex flex-col gap-4 w-full"
                  >
                    <div className="flex items-center">
                      <RadioGroupItem
                        value="default_credit"
                        id="default_credit"
                        className="h-5 md:h-6 w-5 md:w-6 text-button"
                      />
                      <Label
                        htmlFor="default_credit"
                        className="text-xs md:text-[22px] ml-3 md:ml-[30px] flex items-center gap-3 md:gap-[18px]"
                      >
                        <span>
                          <Image
                            src={VisaImage}
                            alt="visa"
                            className="w-[60px] md:w-[90px]"
                          />
                        </span>
                        <span>****1234</span>
                      </Label>
                    </div>
                    <div className="mt-6 md:mt-10 ml-0 md:ml-[53px]">
                      <span
                        className={`text-xs md:text-[22px] ${requiredMark}`}
                      >
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

                    <div className="mt-6 md:mt-[58px] flex items-center">
                      <RadioGroupItem
                        value="new_credit"
                        id="new_credit"
                        className="h-5 md:h-6 w-5 md:w-6 text-button"
                      />
                      <Label
                        htmlFor="new_credit"
                        className="text-xs md:text-[22px] ml-3 md:ml-[30px]"
                      >
                        新しいカードを使う
                      </Label>
                    </div>
                    {dummyIsNewCreditChecked && <PaymentMethodForm />}
                  </RadioGroup>
                </div>
              )}
            </div>
          </div>

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
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[90px] mb-20 md:mb-32">
          <Button className="w-56 bg-white border border-primary rounded-none h-12 font-heading order-2 md:order-1">
            前に戻る
          </Button>
          <Button className="w-56 bg-button border border-base rounded-none h-12 font-heading text-white order-1 md:order-2">
            入力内容の確認
          </Button>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
