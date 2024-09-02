import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import LogoIcon from "./LogoIcon";
import MailIcon from "./MailIcon";

export default function LayoutFooter() {
  return (
    <footer className="bg-quaternary m-0 sm:mx-4 sm:mb-4 px-10 pt-18 pb-22 sm:px-16 sm:pt-20 sm:pb-36">
      <div className="max-w-7xl mx-auto grid grid-rows-[1fr,auto] gap-8">
        <div className="grid md:grid-cols-[2fr,1fr] gap-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="col-span-full sm:col-span-3 md:col-span-1 border-b border-black sm:border-0 pb-8 sm:pb-0">
              <h4 className="text-base font-heading mb-2">Shop</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div className="grid gap-2 content-start">
                  <Link href="/" className="text-sm block">Pointed</Link>
                  <Link href="/" className="text-sm block">Square</Link>
                  <Link href="/" className="text-sm block">Round</Link>
                </div>
                <div className="grid gap-2 content-start">
                  <Link href="/" className="text-sm block">Boots</Link>
                  <Link href="/" className="text-sm block">Mens</Link>
                </div>

              </div>
            </div>
            <div className="grid gap-2 content-start">
              <h4 className="text-base font-heading mb-2">Sell</h4>
              <Link href="/" className="text-sm block whitespace-nowrap">「店頭」買取の方法</Link>
              <Link href="/" className="text-sm block whitespace-nowrap">「郵送」買取の方法</Link>
            </div>
            <div className="grid gap-2 content-start">
              <h4 className="text-base font-heading mb-2">About</h4>
              <Link href="/" className="text-sm block">Concept</Link>
              <Link href="https://offen-gallery.com/about/" target="_blank" rel="noopener noreferrer nofollow" className="text-sm block">About Öffen</Link>
              <Link href="https://offen-gallery.com/sustainability/" target="_blank" rel="noopener noreferrer nofollow" className="text-sm block">Sustainability</Link>
            </div>
          </div>

          <div className="relative grid gap-4 border-t border-black sm:border-0 py-8 sm:py-0">
            <h4 className="text-base font-heading">News Letter</h4>
            <div className="relative">
              <MailIcon className="absolute top-1/2 right-3 z-10 transform -translate-y-1/2" />
              <Input
                type="email"
                placeholder="メールアドレス"
                className="bg-white border-none opacity-60 text-xs"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="data-[state=checked]:bg-white" />
              <label htmlFor="terms" className="text-xs">
                <Link href="/" className="underline">利用規約</Link>、<Link href="/" className="underline">プライバシーポリシー</Link>に同意する
              </label>
            </div>
            <p className="text-xs">
              ご登録頂きましたら、新着商品情報やキャンペーンのお知らせ等の為、お客様の個人情報をÖffen Pre-Loved Store、及びÖffen公式ECに共有させて頂きます。詳細は、利用規約、プライバシーポリシーをご確認お願い致します。
            </p>
          </div>
        </div>

        <div className="border-t border-black"></div>

        <div className="col-span-full grid sm:grid-cols-2 gap-12 sm:gap-4 items-start sm:items-center">
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-2 sm:gap-x-4">
            <Link href="/" className="text-sm">利用規約</Link>
            <Link href="/" className="text-sm">プライバシーポリシー</Link>
            <Link href="/" className="text-sm">お問い合わせ</Link>
            <Link href="/" className="text-sm whitespace-nowrap">特定商法取引に基づく表記</Link>
          </div>
          <div className="flex items-baseline sm:items-center space-x-2 justify-self-start sm:justify-self-end">
            <LogoIcon />
            <span className="text-xs">@2024 Kish Resale Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
