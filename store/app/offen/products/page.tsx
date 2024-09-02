"use client";

import Image from "next/image";
import ItemImage from "../_components/item/shoe02.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import Layout, { Header, Footer, Content } from "../_components/layout";
import Item from "../_components/item";
import SellItemBtn from "../_components/buttons/SellItemBtn";
import Pagination from "../_components/pagination";
import { useListingsQuery } from "@/api";
import { imageUrl } from "@/lib/utils";

// 全アイテムリスト
const items = new Array(500).fill(null); // これらのデータをDBから取得する

const ITEMS_PER_PAGE = 48;

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const { data: { listings: { listings = [], pagination = {} } = {} } = {} } =
    useListingsQuery({
      variables: { brandId: process.env.NEXT_PUBLIC_BRAND_ID_OFFEN || "" },
    });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <Header />
      <Content>
        <h1 className="mt-10 text-2xl tracking-widest font-heading text-start">
          Pointed
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-9 mt-8 mb-24">
          {listings.map((listing) => (
            <Link
              key={listing.uuid}
              href={`/products/${listing.uuid}`}
              className="flex flex-col gap-2 relative"
            >
              {/* <Image
                src={ItemImage}
                alt="shoes"
                className="aspect-[4/3] w-full"
              /> */}
              {listing.product?.images &&
                listing.product?.images.length > 0 && (
                  <Image
                    src={imageUrl(listing.product.images[0])}
                    alt="shoes"
                    width={245}
                    height={184}
                    className="aspect-[4/3] w-full"
                  />
                )}
              <span className="text-xs font-heading inline-block absolute top-0.5 left-0.5 bg-[#EBEBEB] px-2 py-[1px]">
                Pre-Loved
              </span>
              <h3 className="text-[12px] sm:text-base font-heading mt-2">
                {listing.product.productMaster.name}
              </h3>
              <div className="text-[10px] sm:text-sm">
                {listing.product.sizes?.map((size) => size.name).join(" / ")}
              </div>
              <div className="flex items-center gap-2 text-[10px] sm:text-sm">
                <s className="text-tertiary">
                  ¥{listing.product.productMaster.price?.toLocaleString()}
                </s>
                <span>¥{listing.price?.toLocaleString()}</span>
              </div>
            </Link>
          ))}
          {/* <Item key={index} /> */}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Content>
      <SellItemBtn />
      <Footer />
    </Layout>
  );
}
