"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Layout, { Header, Footer, Content } from "./_components/layout";
import SellItemBtn from "./_components/buttons/SellItemBtn";
import SellItemBtnIcon from "./_components/icons/SellItemBtnIcon";
import BackgroudImage1 from "./asset/images/bg_resale.jpg";
import BackgroudImage2 from "./asset/images/bg_pass_the_baton.jpg";
import ResaleImage from "./asset/images/resale_coming_soon.png";
import ButtonImage from "./asset/images/pass_the_baton.png";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/tradein");
  };

  return (
    <Layout>
      <Header />
      <Content>
        <div className="flex flex-col -mx-4 sm:-mx-0 md:-mx-4 lg:-mx-12 lg:gap-12">
          <video
            className="w-full h-[467px] lg:h-[516px] object-cover"
            src=""
            muted
            autoPlay
            loop
            playsInline
          />

          <div className="flex flex-col lg:flex-row items-center lg:bg-white lg:text-left lg:mx-20 lg:rounded-lg lg:justify-around justify-center w-auto py-11 text-center gap-4 font-heading">
            <div className="text-[19px] lg:text-[26px]">
              <p>Walk The Path Of Sustainability</p>
              <p>With Our Pre-Loved Shoes</p>
            </div>
            <div className="text-[10px] lg:text-[14px] font-mincho">
              <p>Pre-Loved Storeはöffenのリユースサイトです。</p>
              <p>歩き出す、サステナブルな未来へ。あなたの足もとから</p>
            </div>
            <button
              className="w-[190px] py-3 bg-quaternary rounded-full text-[12px]"
              onClick={handleClick}
            >
              Concept
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <div
              className="flex w-full h-auto py-16 px-9 bg-center bg-cover bg-no-repeat flex-col justify-center"
              style={{ backgroundImage: `url(${BackgroudImage1.src})` }}
            >
              <div className="relative flex h-full flex-col items-center gap-6 py-24 px-8 lg:px-24 bg-[#EFEFEF]">
                <div className="absolute top-0 left-0 w-1/2 border-t-4 md:border-t-8 border-quaternary"></div>
                <Image src={ResaleImage} alt="resale" />
                <div className="font-heading text-center">
                  <p className="text-[31px]">RESALE</p>
                  <p className="text-[13px]">Coming SOON</p>
                </div>
                <div className="font-mincho text-[12px]">
                  <p>洗浄・補修済みのPre-Loved Shoesは、</p>
                  <p>10月中旬を目途に、販売を開始します。</p>
                  <p>もう少々お待ち頂けますと幸いです。</p>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col justify-center w-full h-auto py-16 px-9 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${BackgroudImage2.src})` }}
            >
              <div className="relative flex flex-col items-center gap-8 pt-12 pb-5 px-8 lg:px-24 bg-[#EFEFEF] font-mincho h-full">
                <div className="absolute top-0 left-0 w-1/2 border-t-4 md:border-t-8 border-quaternary"></div>
                <Image src={ButtonImage} alt="button" />
                <div className="text-center">
                  <p className="text-[31px] font-heading">Pass and enjoy</p>
                  <p className="text-[31px] font-heading">the next journey</p>
                  <p className="text-[12px]">次の人に受け継いでいく</p>
                </div>
                <div className="text-[12px]">
                  <p>
                    あなたのÖffenを店頭にお持ちいただく、又は
                    ご郵送頂くと、￥2,000分のギフトカードをプレゼント。
                  </p>
                  <p>
                    そのÖffenは、洗浄・補修され、Pre-Loved
                    Storeを通じて、次の人に受け継がれていきます。
                  </p>
                </div>
                <div className="text-[10px]">
                  <p>*事前に手洗いされてからお持ち込み・ご郵送お願いします。</p>
                  <p>
                    *あまりにも状態が悪く、洗浄・補修による再販が困難な商品は買取不可となります。
                  </p>
                </div>
                <button
                  className="flex items-center gap-2 px-14 py-3 text-[12px] bg-quaternary rounded-full"
                  onClick={handleClick}
                >
                  <SellItemBtnIcon color="#000000" />
                  買取に出す
                </button>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <SellItemBtn />
      <Footer />
    </Layout>
  );
}
