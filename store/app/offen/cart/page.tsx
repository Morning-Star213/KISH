import Layout, {
  Header,
  Footer,
  Breadcrumb,
  Content,
} from "../_components/layout";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import ItemImage from "../_components/item/shoe01.jpg";
import Item from "../_components/item";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const breadcrumbItems = [
  { label: "Pre-Loved TOP​", href: "/" },
  { label: "Shoping cart", isCurrentPage: true },
];

export default function Products() {
  return (
    <Layout>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <Content>
        <h1 className="text-center text-2xl tracking-widest font-heading">
          カートに入っている商品
        </h1>
        <div className="flex flex-col gap-4 mt-8 mb-16 md:hidden">
          <div className="flex gap-3 relative pr-6">
            <Image src={ItemImage} alt="shoes" className="aspect-[4/3] w-28" />
            <div className="flex flex-col gap-1">
              <h3 className="text flex-1">border pattern / PURPLE & MINT</h3>
              <div className="flex flex-col gap-1">
                <h4 className="text-xs">サイズ: 36/23.0cm</h4>
                <h4 className="text-xs">状態: 新品に近い</h4>
              </div>
              <Trash2 className="cursor-pointer absolute top-0 right-0 text-[#565656] w-4 h-4" />
            </div>
            <h5 className="text-sm absolute right-0 bottom-0">¥15,950</h5>
          </div>
          <div className="flex gap-3 relative pr-6">
            <Image src={ItemImage} alt="shoes" className="aspect-[4/3] w-28" />
            <div className="flex flex-col gap-1">
              <h3 className="text flex-1">border pattern / PURPLE & MINT</h3>
              <div className="flex flex-col gap-1">
                <h4 className="text-xs">サイズ: 36/23.0cm</h4>
                <h4 className="text-xs">状態: 新品に近い</h4>
              </div>
              <Trash2 className="cursor-pointer absolute top-0 right-0 text-[#565656] w-4 h-4" />
            </div>
            <h5 className="text-sm absolute right-0 bottom-0">¥15,950</h5>
          </div>
          <hr />
          <div className="flex items-center text-sm">
            <p className="text-right flex-1">小計(税込)</p>
            <p className="text-right w-36">¥15,950</p>
          </div>
          <div className="flex items-center text-sm">
            <p className="text-right flex-1">送料(税込)</p>
            <p className="text-right w-36">¥15,950</p>
          </div>
          <div className="flex items-center text-sm">
            <p className="text-right flex-1">商品合計(税込)</p>
            <p className="text-right w-36">¥15,950</p>
          </div>
        </div>
        <div className="max-w-4xl mt-8 mb-16 hidden md:block">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">商品情報</TableHead>
                <TableHead className="w-40 text-right">価格(税込)</TableHead>
                <TableHead className="w-40" />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="">
                  <div className="flex gap-6 relative pr-6">
                    <Image
                      src={ItemImage}
                      alt="shoes"
                      className="aspect-[4/3] w-36"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold mb-2">
                        border pattern / PURPLE & MINT
                      </h3>
                      <h4 className="text-xs">サイズ: 36/23.0cm</h4>
                      <h4 className="text-xs">状態: 新品に近い</h4>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">¥15,950</TableCell>
                <TableCell className="align-middle text-center">
                  <Trash2 className="text-[#565656] w-4 h-4 inline-block" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="">
                  <div className="flex gap-6 relative pr-6">
                    <Image
                      src={ItemImage}
                      alt="shoes"
                      className="aspect-[4/3] w-36"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold mb-2">
                        border pattern / PURPLE & MINT
                      </h3>
                      <h4 className="text-xs">サイズ: 36/23.0cm</h4>
                      <h4 className="text-xs">状態: 新品に近い</h4>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">¥15,950</TableCell>
                <TableCell className="align-middle text-center">
                  <Trash2 className="text-[#565656] w-4 h-4 inline-block" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell className="text-right">
                  <div className="flex flex-col gap-2">
                    <p>小計(税込)</p>
                    <p>送料(税込)</p>
                    <p>商品合計(税込)</p>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex flex-col gap-2">
                    <p>¥23,170</p>
                    <p>¥23,170</p>
                    <p>¥23,170</p>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-center gap-8">
          <Button className="w-56 bg-white border border-primary rounded-none h-12 font-heading">
            カートに入れる
          </Button>
          <Button className="w-56 bg-base border border-base rounded-none h-12 font-heading text-white">
            ご購入手続きに進む
          </Button>
        </div>

        <section className="my-16 md:my-32 flex flex-col items-center">
          <h1 className="text-center text-2xl tracking-widest font-heading">
            Checked Items
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-9 mt-8 mb-16 w-full">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
          <Link
            href="/products"
            className="flex items-center justify-center w-56 bg-white border border-primary rounded-none h-12 font-heading text-base"
          >
            Shop All
          </Link>
        </section>
      </Content>
      <Footer />
    </Layout>
  );
}
