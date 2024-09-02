import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  variant?: "default" | "wide";
  children: ReactNode;
};

export default function LayoutContent({
  variant = "default",
  children,
}: Props) {
  return (
    <section className="px-4 md:px-8 lg:px-16 flex-1">
      <div
        className={cn("mx-auto w-full", {
          "max-w-7xl": variant === "default",
          "max-w-full": variant === "wide",
        })}
      >
        {children}
      </div>
    </section>
  );
}
