import Image, { StaticImageData } from "next/image";

type props = {
  src: StaticImageData;
  alt: string;
  store_jp: string;
  store_en: string;
  postal: string;
  addr: string;
  building: string;
  business_hour: string;
  notify?: string;
  tel: string;
};

const Card = ({
  src,
  alt,
  store_jp,
  store_en,
  postal,
  addr,
  building,
  business_hour,
  notify,
  tel,
}: props) => {
  return (
    <div className="grid grid-cols-2 rounded-lg">
      <div className="col-span-1 rounded-l-lg">
        <Image src={src} alt={alt} className="rounded-l-lg" />
      </div>
      <div className="col-span-1 flex flex-col gap-3 text-left pl-[10%] sm:pl-[15%] md:pl-7 justify-center border border-l-0 bg-white rounded-r-lg">
        <div className="text-base sm:text-[28px] md:text-base">
          <p>{store_en}</p>
          <p>{store_jp}</p>
        </div>
        <div className="text-[11px] sm:text-[18px] md:text-[11px] text-[#5C95DD]">
          <p>{postal}</p>
          <p>{addr}</p>
          <p>{building}</p>
        </div>
        <div className="text-[11px] sm:text-[18px] md:text-[11px]">
          <p>{business_hour}</p>
          <p>{notify}</p>
          <p>{tel}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
