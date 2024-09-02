"use client";

import ItemImage from "./_images/shoe01.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "./_components/radio-group";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Thumbnail from "./_components/Thumbnail";
import Slide from "./_components/Slide";
import { Header, Footer } from "../../_components/layout";
import { useRef, useState } from "react";
import CartIcon from "../../_components/icons/CartIcon";
import HeartIcon from "../../_components/icons/HeartIcon";
import { cn } from "@/lib/utils";
import InfoIcon from "../../_components/icons/InfoIcon";
import ArrowIcon from "../../_components/icons/ArrowIcon";

const createThumbId = (index: number) => `product-detail-${index}`;

const dummyItems = [
  ItemImage,
  ItemImage,
  ItemImage,
  ItemImage,
  ItemImage,
  ItemImage,
  ItemImage,
];

const dummyCurrentItems = [ItemImage, ItemImage, ItemImage, ItemImage];

const allItems = [...dummyItems, ...dummyCurrentItems];

export default function Product() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <main>
      <Header variant="wide" />
      <div className="flex justify-center flex-wrap text-xs font-mincho text-quaternary bg-quinary pt-1.5 pb-2 px-2.5 sm:mx-4 sm:mb-6 sm:rounded">
        <p>Pre-Lovedでは、中古品を販売しております。</p>
        <p className="text-center break-all whitespace-pre">
          現状写真・状態の詳細をご確認の上で、
          <wbr />
          ご購入をお願いします。​
        </p>
      </div>
      <section className="md:px-8 lg:px-16 pb-10 mx-auto">
        <div className="flex flex-col gap-8 lg:gap-16 md:flex-row">
          <div className="w-full md:w-[55%]">
            <div className="relative">
              <Swiper
                slidesPerView={1}
                navigation={{
                  prevEl: "#button_prev",
                  nextEl: "#button_next",
                }}
                modules={[Navigation]}
                onActiveIndexChange={(swiper) => {
                  setActiveIndex(swiper.activeIndex);

                  const productDetailId = createThumbId(swiper.activeIndex);
                  const element = document.getElementById(productDetailId);
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                  });
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="relative"
              >
                {allItems.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Slide src={item} />
                  </SwiperSlide>
                ))}
                <span className="absolute text-[10px] text-[#8D8D8D] bg-[#EBEBEB] md:text-xs top-0.5 left-1 z-10 p-1">
                  Pre-Loved
                </span>
                <div className="absolute font-heading text-[10px] md:text-sm bottom-3 right-3 z-10 flex items-center gap-1">
                  <span>{activeIndex + 1}</span>
                  <span>/</span>
                  <span>{allItems.length}</span>
                </div>
                {activeIndex + 1 > dummyItems.length && (
                  <span className="absolute font-heading text-[10px] text-white bg-[#8D8D8D] md:text-xs bottom-0 left-0 z-10 p-1">
                    現状の写真
                  </span>
                )}
              </Swiper>
              <span
                id="button_prev"
                className={cn(
                  "w-7 h-7 md:w-8 md:h-8 cursor-pointer absolute top-1/2 -translate-y-2/4 left-3 z-10 -rotate-90 flex items-center justify-center rounded-full bg-white",
                  activeIndex === 0 && "opacity-20"
                )}
              >
                <ArrowIcon className="md:h-4 md:w-4" />
              </span>
              <span
                id="button_next"
                className={cn(
                  "w-7 h-7 md:w-8 md:h-8 cursor-pointer absolute top-1/2 -translate-y-2/4 right-3 z-10 rotate-90 flex items-center justify-center rounded-full bg-white",
                  activeIndex === allItems.length - 1 && "opacity-20"
                )}
              >
                <ArrowIcon className="md:h-4 md:w-4" />
              </span>
            </div>
            <div className="px-5 md:px-0">
              <div className="flex mt-3 gap-0.5 overflow-scroll hidden-scrollbar">
                {dummyItems.map((item, index) => (
                  <Thumbnail
                    id={createThumbId(index)}
                    key={index}
                    src={item}
                    onClick={() => swiperRef?.current?.slideTo(index)}
                    active={activeIndex === index}
                  />
                ))}
              </div>
              <h3 className="text-[10px] sm:text-xs md:text-sm mt-4 font-mincho">
                現状写真
              </h3>
              <div className="flex mt-2 gap-0.5 overflow-scroll hidden-scrollbar">
                {dummyCurrentItems.map((item, index) => {
                  const allItemIndex = index + dummyItems.length;

                  return (
                    <Thumbnail
                      key={allItemIndex}
                      id={createThumbId(allItemIndex)}
                      src={item}
                      onClick={() => swiperRef?.current?.slideTo(allItemIndex)}
                      active={activeIndex === allItemIndex}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grow px-5 md:px-0">
            <span className="font-heading text-[10px] sm:text-xs md:text-sm py-1.5 px-2.5 bg-white">
              Pre-Loved
            </span>
            <h1 className="text-lg sm:text-2xl md:text-3xl mt-3 font-heading">
              border pattern / PURPLE & MINT
            </h1>
            <div className="flex items-center gap-2 font-heading text-base md:text-xl mt-4">
              <s className="text-tertiary">¥15,950</s>
              <span>¥9,600</span>
            </div>
            <div className="mt-8">
              <label className="font-heading flex items-baseline justify-between">
                Size
                <InfoIcon className="fill-[#6b4d1e]" />
              </label>
              <div className="flex items-center h-12 gap-1.5 mt-3">
                <div>
                  <input
                    type="radio"
                    name="size"
                    id="36"
                    className="peer hidden"
                    defaultChecked
                  />
                  <label
                    htmlFor="36"
                    className="select-none font-mincho cursor-pointer rounded text-xs md:text-sm bg-white border border-base p-4 transition-colors ease-in-out peer-checked:bg-button peer-checked:text-quaternary"
                  >
                    36 / 23.0cm
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="size"
                    id="38"
                    className="peer hidden"
                  />
                  <label
                    htmlFor="38"
                    className="select-none font-mincho cursor-pointer rounded text-xs md:text-sm bg-white border border-base p-4 transition-colors ease-in-out peer-checked:bg-button peer-checked:text-quaternary"
                  >
                    38 / 24.0cm
                  </label>
                </div>
              </div>
            </div>
            <div className="pb-6 mt-8">
              <label className="font-mincho flex items-center justify-between text-sm md:text-base">
                状態
                <InfoIcon className="fill-[#6b4d1e]" />
              </label>
              <RadioGroup
                defaultValue="likeNew"
                className="pt-4 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between text-sm font-mincho">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="likeNew"
                      id="r1"
                      className="h-6 w-6 text-button"
                    />
                    <Label htmlFor="r1">新品に近い</Label>
                  </div>
                  <span>¥11,170</span>
                </div>
                <div className="flex items-center justify-between text-sm font-mincho">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="used"
                      id="r2"
                      className="h-6 w-6 text-button"
                    />
                    <Label htmlFor="r2">やや傷や汚れあり</Label>
                  </div>
                  <span>¥8,000</span>
                </div>
              </RadioGroup>
            </div>
            <div className="mt-2 flex items-center gap-6 pr-2">
              <Button className="px-20 py-4 w-full max-w-96 h-auto flex items-center gap-5 bg-button text-quaternary rounded-full font-mincho">
                <CartIcon className="stroke-quaternary" />
                購入する
              </Button>
              <button
                type="button"
                onClick={() => setIsFavorite((prev) => !prev)}
              >
                <HeartIcon
                  className={cn(
                    "w-5 h-5",
                    isFavorite
                      ? "fill-quaternary stroke-quaternary"
                      : "fill-none stroke-[#272626]"
                  )}
                />
              </button>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full mt-10 font-mincho py-6 px-8 bg-white rounded-lg"
            >
              <AccordionItem value="condition">
                <AccordionTrigger>状態の詳細</AccordionTrigger>
                <AccordionContent>
                  <p>
                    ・目立たない箇所にもシミ・汚れもなく、大変状態の良い新古品
                    <br />
                    ・クリーニング済み、修理の後も御座いません
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="number">
                <AccordionTrigger>品番</AccordionTrigger>
                <AccordionContent>
                  <p>
                    O21SPO-0005-80
                    <br />
                    お問合せの際はこちらの品番をお伝えください。
                  </p>
                  <p>
                    【！】Öffenの商品は全体的にタイトなお作りとなっております。ご注文前に商品詳細の＜サイズガイド＞をご参照ください。
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="size">
                <AccordionTrigger>サイズガイド</AccordionTrigger>
                <AccordionContent>
                  <p>
                    こちらの商品は、普段履いているサイズより1サイズ（0.5cm）大きいものを選ぶことをおすすめします。
                  </p>
                  <p>
                    We recommend choosing one size (0.5cm) up for this product.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="description">
                <AccordionTrigger>商品の説明</AccordionTrigger>
                <AccordionContent>
                  <p>
                    V字のカッティングやポインテットトゥで、足がシャープに見えるよう仕立てたフラットパンプス。編み地で切り替えた立体感のあるボーダーパターンなので、単色でもメリハリのある表情に。スタイリッシュと繊細を兼備する、大人の女性の佇まいを演出します。いつもの着こなしに鮮度をもたらす一足です。
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="material">
                <AccordionTrigger>素材</AccordionTrigger>
                <AccordionContent>
                  <p>
                    素材には、使用済みのペットボトルから生まれたリサイクル糸を採用。軽量でクッション性のあるニット地は、足入れのしやすさや歩きやすさも抜群で、まるで裸足のような心地よさ。環境に配慮するだけでなく、心や体への“心地よさ”にもこだわりました。
                    <br />
                    <br />
                    ※こちらの価格には消費税が含まれています。
                    <br />
                    ※別途送料がかかります。送料を確認する
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
