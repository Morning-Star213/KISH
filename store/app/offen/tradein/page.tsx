"use client";

import Image from "next/image";
import Layout, { Header, Footer, Content } from "../_components/layout";
import TradinImage from "./images/tradein.png";
import ShippingImage from "./images/shipping.jpg";
import TradeinWatermark from "./images/tradein_watermark.png";
import { useRouter } from "next/navigation";

export default function Tradein() {
  const router = useRouter();
  const handleClick = (opt: string) => {
    router.push(`/tradein/${opt}`);
  };
  return (
    <Layout>
      <Header />
      <div className="relative">
        <div className="absolute left-1 sm:left-4 md:left-4 w-1/4 sm:w-[100px] md:w-[100px] !-z-10 top-48">
          <Image src={TradeinWatermark} alt="Trade-in watermark" />
        </div>
      </div>
      <Content>
        <div className="px-[10px] pb-10 flex flex-col gap-8 relative">
          <h1 className="mt-10 text-2xl text-senary tracking-wide font-heading text-center">
            Selling Made Simple
          </h1>
          <div className="flex flex-col gap-3">
            <p className="text-center text-[12px]">
              買い取りの方法は、
              <br />
              店頭へのお持ち込みと、ご郵送の、2通りとなります。
            </p>
            <p className="text-left sm:text-center md:text-center text-[10px]">
              *事前に手洗いされてからお持ち込み・ご郵送お願いします。
              <br />
              *あまりにも状態が悪く、洗浄・補修による再販が困難な商品は買取不可となります。
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full relative">
            <div className="bg-white rounded-lg w-full h-[450px] sm:h-[600px] flex flex-col justify-around items-center px-7 py-9">
              <div className="w-3/5">
                <Image src={TradinImage} alt="Store trade-in option" />
              </div>
              <div className="text-base">店頭へのお持ち込み​</div>
              <p className="text-[12px] text-center">
                買取を希望するアイテムをお持ちの上、指定の店舗までご来店ください。店舗でのお買い物に利用頂けるギフトカードをお渡しいたします。
              </p>
              <button
                className="w-5/6 py-3 border text-[12px] border-black rounded-full"
                onClick={() => handleClick("dropoff-in-store")}
              >
                もっと知る
              </button>
            </div>
            <div className="bg-white rounded-lg w-full h-[450px] sm:h-[600px] flex flex-col justify-around items-center px-7 py-9">
              <div className="w-3/5">
                <Image src={ShippingImage} alt="Shipping trade-in option" />
              </div>
              <div className="text-base">ご郵送​</div>
              <p className="text-[12px] text-center">
                買取を希望するアイテムを、元払いにてご発送下さい。Öffenのオンラインサイトにてご利用頂けるギフトカードをお送りします。
              </p>
              <div className="flex flex-col gap-3 w-full items-center">
                <button
                  className="w-5/6 py-3 border text-[12px] border-black rounded-full"
                  onClick={() => handleClick("mail")}
                >
                  もっと知る
                </button>
                <button
                  className="w-5/6 py-3 border text-[12px] rounded-full bg-quaternary"
                  onClick={() => handleClick("")}
                >
                  回収申込フォームへ
                </button>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
