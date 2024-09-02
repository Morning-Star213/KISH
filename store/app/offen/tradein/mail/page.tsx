"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Layout, { Header, Footer, Content } from "../../_components/layout";
import PcImage from "../images/pc.jpg";
import GiftImage from "../images/giftcard.jpg";
import ShippingImage from "../images/shipping.jpg";
import TradeinWatermark from "../images/tradein_watermark.png";

export default function Tradein() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <Layout>
      <Header />
      <div className="relative">
        <div className="absolute left-1 sm:left-4 w-1/4 sm:w-[100px] top-48 z-[-10]">
          <Image src={TradeinWatermark} alt="Trade-in watermark" />
        </div>
      </div>
      <Content>
        <div className="relative flex flex-col items-center gap-8 px-2.5 pb-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="mt-10 text-2xl text-center font-heading tracking-wide text-senary">
              Mail To Pre-Loved Store
            </h1>
            <span className="text-[12px] text-center">
              「郵送」回収の方法​​
            </span>
          </div>
          <div className="flex justify-between gap-3 w-[300px] sm:w-[500px] md:w-[700px]">
            <div className="flex flex-col items-center gap-2">
              <span className="relative flex items-center justify-center w-8 h-8 border border-black rounded-full bg-quaternary">
                <div className="absolute left-4 w-[230px] sm:w-[430px] md:w-[640px] border-t-2 border-black z-[-20]"></div>
                1
              </span>
              <div className="text-[10px] text-center">
                <p>回収申し込み</p>
                <p>フォームへの入力</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 border border-black rounded-full bg-quaternary">
                2
              </span>
              <div className="text-[10px] text-center">
                <p>アイテムを</p>
                <p>郵送</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 border border-black rounded-full bg-quaternary">
                3
              </span>
              <div className="text-[10px] text-center">
                <p>ギフトカードが</p>
                <p>届く</p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col w-full gap-5 md:gap-10 lg:flex-row">
            <div className="flex flex-col items-center justify-around w-full px-7 py-11 bg-white rounded-lg gap-7 lg:justify-center">
              <div className="w-3/5">
                <Image src={PcImage} alt="Store trade-in option" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span className="flex items-center justify-center w-8 h-8 border rounded-full bg-quaternary">
                  1
                </span>
                <p className="text-base">買取申し込みフォームへの入力</p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-center text-[12px]">
                  「買取申し込みフォームへの入力」ボタンから、お客様の個人情報とアイテム情報をご記入下さい。​
                </p>
                <div className="flex flex-col gap-3">
                  <p className="text-center text-[14px]">買取対象アイテム</p>
                  <p className="text-left text-[12px]">
                    対象アイテムは、インソールを含むシューズ、​となります。
                  </p>
                </div>
                <div className="flex flex-col text-left text-[10px]">
                  <p>※靴下などのgoodsは買取の対象となりません。</p>
                  <p>※事前に手洗いされてからお持ち込みお願いします。</p>
                  <p>
                    ※あまりにも状態が悪く、洗浄・補修による再販が困難な商品は、買取不可となります。
                  </p>
                  <p>※18歳未満（高校生含む）のお客様は申し込みが出来ません。</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-around w-full px-1 py-11 bg-white rounded-lg gap-7 lg:justify-center">
              <div className="w-3/5">
                <Image src={ShippingImage} alt="Store trade-in option" />
              </div>
              <div className="flex items-center justify-end gap-5">
                <span className="flex items-center justify-center w-8 h-8 border rounded-full bg-quaternary">
                  2
                </span>
                <p>アイテムを郵送</p>
              </div>
              <div className="flex flex-col gap-5 px-6">
                <div className="text-left text-[12px]">
                  <p>
                    申し込みフォームへの入力が完了した後、メールにてお送りさせて頂く住所宛てに、元払いにてご発送お願い致します。​
                  </p>
                  <p>
                    梱包方法の指定は御座いませんが、アイテムに欠損が生じない方法にてお送り下さい。
                  </p>
                </div>
                <div className="text-left text-[12px]">
                  <p>
                    環境に配慮し、過度な梱包（緩衝材を入れる等）は必要御座いません。ご自宅に既にある紙袋など、ご活用いただけますと幸いです。（新品購入時の包装袋・靴紐を活用いただいても問題ございません。）
                  </p>
                  <p>
                    あくまで一例ではございますが、梱包方法の例は、
                    <Link href="/" className="text-[#5D95DD]">
                      こちら
                    </Link>
                    の通りにお伝えさせて頂きます。
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 px-6 py-6 w-full rounded-lg bg-[#efefef]">
                <p className="text-[14px]">郵送先住所</p>
                <div className="text-[12px]">
                  <p>〒134-086</p>
                  <p>東京都江戸川区臨海町3-5-1 東京団地倉庫C棟</p>
                  <p>03-3877-7251</p>
                  <p>Öffen Pre-Loved Store買取受付宛</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-around w-full px-7 py-11 bg-white rounded-lg gap-7 lg:justify-center">
              <div className="w-3/5">
                <Image src={GiftImage} alt="Store trade-in option" />
              </div>
              <div className="flex items-center justify-end gap-5">
                <span className="flex items-center justify-center w-8 h-8 border rounded-full bg-quaternary">
                  3
                </span>
                <p>ギフトカードのお渡し​​</p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-left text-[12px]">
                  <p>
                    アイテム発送後、2週間を目途にご登録頂いたメールアドレス宛に、2,000円分のギフトカードをお送りします。
                  </p>
                  <p>
                    ギフトカードはÖffenのオンラインサイトにて、ご利用いただけます。店舗では使えません。
                  </p>
                </div>
                <div className="text-left text-[10px]">
                  <p>
                    ※ギフトカードはアーカイブ品・セール品の購入にはご利用頂けません。​
                  </p>
                  <p>
                    ※ギフトカードの有効期限は、ギフトカード発行から、1年となります。
                  </p>
                </div>
                <div className="px-3">
                  <button
                    className="w-full py-3 bg-quaternary border rounded-full text-[12px]"
                    onClick={handleClick}
                  >
                    回収申込フォームへ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <p className="text-left text-[12px]">質問はございますか？</p>
            <div className="flex justify-between w-full">
              <button
                className="w-[47%] py-3 border border-black bg-white rounded-full text-[12px]"
                onClick={handleClick}
              >
                FAQ
              </button>
              <button
                className="w-[47%] py-3 border border-black bg-white rounded-full text-[12px]"
                onClick={handleClick}
              >
                お問い合わせ
              </button>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
