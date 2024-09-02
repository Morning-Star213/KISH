"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Layout, { Header, Footer, Content } from "../../_components/layout";
import Card from "../../_components/card";
import TradinImage from "../images/tradein.png";
import TradeinWatermark from "../images/tradein_watermark.png";
import GiftImage from "../images/gift.jpg";
import StoreImage1 from "../images/store_mb_1.jpg";
import StoreImage2 from "../images/store_mb_2.jpg";
import StoreImage3 from "../images/store_mb_3.jpg";

export default function Tradein() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  const stores = [
    {
      src: StoreImage1,
      alt: "store1",
      store_jp: "代官山店",
      store_en: "Öffen the House",
      postal: "〒150-0033",
      addr: "東京都渋谷区猿楽町30-8",
      building: "ツインビル代官山B棟1階",
      business_hour: "営業時間：11:00-20:00",
      tel: "TEL：03-6433-7950",
    },
    {
      src: StoreImage2,
      alt: "store2",
      store_jp: "House北野店",
      store_en: "Öffen Kitano",
      postal: "〒650-0002",
      addr: "神戸市中央区北野町2-7-18",
      building: "リンズギャラリー2F",
      business_hour: "営業時間：10:00-19:00",
      notify: "※水曜休 *祭日OPEN",
      tel: "TEL：03-6433-7950",
    },
    {
      src: StoreImage3,
      alt: "store3",
      store_jp: "salon 西宮阪急店",
      store_en: "Öffen fitting",
      postal: "〒663-8204",
      addr: "兵庫県西宮市高松町14-1",
      building: "西宮阪急 2階婦人靴売場",
      business_hour: "営業時間：10:00-20:00",
      tel: "TEL：0798-62-7486",
    },
  ];

  return (
    <Layout>
      <Header />
      <div className="relative">
        <div className="absolute left-1 sm:left-4 top-48 z-[-10] w-1/4 sm:w-[100px]">
          <Image src={TradeinWatermark} alt="Trade-in watermark" />
        </div>
      </div>
      <Content>
        <div className="relative flex flex-col items-center gap-8 px-2.5 pb-10">
          <div className="flex flex-col gap-2">
            <h1 className="mt-10 text-center text-2xl font-heading tracking-wide text-senary">
              Drop Off In Store
            </h1>
            <span className="text-[12px] text-center">「店頭」回収の方法​</span>
          </div>
          <div className="flex justify-between gap-3 w-[165px] sm:w-[200px] md:w-[400px]">
            <div className="flex flex-col items-center gap-2">
              <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-quaternary border border-black">
                <div className="absolute left-4 border-t-2 border-black w-[90px] sm:w-[120px] md:w-[350px] z-[-20]"></div>
                1
              </span>
              <span className="text-[10px]">店頭で受付</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-quaternary border border-black">
                2
              </span>
              <span className="text-[10px]">クーポンのお渡し</span>
            </div>
          </div>
          <div className="relative flex flex-col w-full gap-5 md:gap-10 lg:flex-row">
            <div className="flex flex-col items-center justify-around w-full px-7 py-11 bg-white rounded-lg gap-7 lg:justify-center">
              <div className="w-3/5">
                <Image src={TradinImage} alt="Store trade-in option" />
              </div>
              <div className="flex items-center justify-end gap-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border bg-quaternary">
                  1
                </span>
                <p>店頭で受付​</p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-left text-[12px]">
                  回収を希望するアイテムをお持ちの上、下記の回収対象店舗に、ご来店ください。
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
            <div className="flex flex-col gap-4">
              <p className="text-center text-[14px] text-[#424242]">
                回収対象店舗
              </p>
              <div className="flex flex-col gap-4">
                {stores.map((store) => (
                  <Card
                    key={store.store_jp}
                    src={store.src}
                    alt={store.alt}
                    store_jp={store.store_jp}
                    store_en={store.store_en}
                    postal={store.postal}
                    addr={store.addr}
                    building={store.building}
                    business_hour={store.business_hour}
                    notify={store.notify}
                    tel={store.tel}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-around w-full px-7 py-11 bg-white rounded-lg gap-7 lg:justify-center">
              <div className="w-3/5">
                <Image src={GiftImage} alt="Store trade-in option" />
              </div>
              <div className="flex items-center justify-end gap-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border bg-quaternary">
                  2
                </span>
                <p>ギフトカードのお渡し​​</p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col text-left text-[12px]">
                  <p>
                    回収希望アイテム・お客様情報を確認させて頂いた後、2,000円分のギフトカードをLINEアカウントにお送りします。
                  </p>
                  <p>
                    Öffen直営店にて、ストアスタッフにギフトカードをご提示頂くと、2,000円分の値引きをさせて頂きます。
                  </p>
                </div>
                <div className="flex flex-col text-left text-[10px]">
                  <p>
                    ※Öffen直営店は、{`<回収対象店舗>`}{" "}
                    上記同様の3店舗となります。
                  </p>
                  <p>
                    ※ギフトカードはアーカイブ品・セール品の購入にはご利用頂けません。​
                  </p>
                  <p>
                    ※ギフトカードの有効期限は、ギフトカード発行から、1年となります。
                  </p>
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
