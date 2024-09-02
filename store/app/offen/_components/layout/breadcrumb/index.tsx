import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import React from "react";

type BreadcrumbItemType = {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
};

type Props = {
  variant?: "default" | "wide";
  items: BreadcrumbItemType[];
};

export default function LayoutBreadcrumb({
  variant = "default",
  items,
}: Props) {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div
        className={cn(
          "flex flex-col md:flex-row gap-8 pt-8 pb-4 text-tertiary mx-auto",
          {
            "max-w-7xl": variant === "default",
            "max-w-full": variant === "wide",
          }
        )}
      >
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink href={item.href}>
                      {item.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < items.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
