export { default as Header } from "./header";
export { default as Footer } from "./footer";
export { default as Breadcrumb } from "./breadcrumb";
export { default as Content } from "./content";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}
