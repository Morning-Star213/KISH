import ItemImage from "../../../_components/item/shoe01.jpg";

export const breadcrumbItems = [
  { label: "Pre-Loved TOP​", href: "/" },
  { label: "Shopping cart", href: "/offen/cart", isCurrentPage: true },
];

// TODO: カート情報の設計、実装ができ次第書き換える
export const dummyCartItems = [
  {
    id: 1,
    image: ItemImage,
    alt: "shoes",
    title: "border pattern / PURPLE & MINT",
    size: "36/23.0cm",
    condition: "新品に近い",
    price: "¥11,170",
  },
  {
    id: 2,
    image: ItemImage,
    alt: "shoes",
    title: "border pattern / PURPLE & MINT",
    size: "36/23.0cm",
    condition: "新品に近い",
    price: "¥11,170",
  },
];
export const hasCartItems = !!dummyCartItems.length;

// TODO: ログイン情報の設計、実装ができ次第書き換える
export const dummyLoggedIn = false;

// TODO: 都道府県データの管理決定次第書き換える
export const dummyPrefectures = [
  {
    value: "北海道",
    label: "北海道",
  },
  {
    value: "東京",
    label: "東京",
  },

  {
    value: "沖縄",
    label: "沖縄",
  },
];

// クレジットカード 有効期限の月選択肢
export const monthOptions = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "7",
    label: "7",
  },
  {
    value: "8",
    label: "8",
  },
  {
    value: "9",
    label: "9",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "11",
    label: "11",
  },
  {
    value: "12",
    label: "12",
  },
];

// TODO: 有効期限の年データの管理決定次第書き換える
// クレジットカード 有効期限の年選択肢
export const dummyCreditYearOptions = [
  {
    value: "2024",
    label: "2024",
  },
  {
    value: "2025",
    label: "2025",
  },
  {
    value: "2026",
    label: "2026",
  },
];

// TODO: お支払い回数を選択データの管理決定次第書き換える
// クレジットカード お支払い回数を選択の選択肢
export const dummyNumberOfPaymentsOptions = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "10",
    label: "10",
  },
];

// TODO: クレジットカード情報の管理決定次第書き換える
// クレジットカード情報
export const dummyCreditData: {
  number: `${string}-${string}-${string}-${string}`;
} | null = {
  number: "1234-0000-1234-0000",
};

export const dummyIsNewCreditChecked = false;

export const requiredMark =
  "relative after:block after:absolute after:top-[-4px] after:right-[-8px] md:after:right-[-12px] after:content-['*'] after:text-[#ff0000]";
