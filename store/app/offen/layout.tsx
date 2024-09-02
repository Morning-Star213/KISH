import { ApolloWrapper } from "@/lib/apollo-provider";
import type { Metadata } from "next";
import { Marcellus, Noto_Sans_JP } from "next/font/google";

const marcellus = Marcellus({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-family-heading",
});

const notoSans = Noto_Sans_JP({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-family-base",
});

export const metadata: Metadata = {
  title: "Offen",
  description: "Offen",
};

export default function OffenRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="offen">
      <body className={`${marcellus.variable} ${notoSans.variable} font-base`}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
