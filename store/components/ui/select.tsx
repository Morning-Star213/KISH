"use client";

import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  options: {
    value: string;
    label: string;
  }[];
  placeholder: string;
  onChange: (value: string) => void;
  value?: string;
};

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & Props
>(({ className, options, placeholder, onChange, value, ...restProps }, ref) => {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onChange} {...restProps}>
      <SelectPrimitive.Trigger
        className={cn(
          "h-10 w-full text-sm md:text-lg inline-flex items-center justify-between rounded border px-3 py-2 text-[13px] leading-none h-[35px] gap-[5px] bg-white data-[placeholder]:text-violet9 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon className="text-violet11">
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] px-2 py-3">
          <SelectPrimitive.Viewport className="SelectViewport">
            {options.map((option) => (
              <SelectPrimitive.SelectItem
                key={option.value}
                className="leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                value={option.value}
              >
                <SelectPrimitive.ItemText>
                  {option.label}
                </SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <CheckIcon />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.SelectItem>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
});

Select.displayName = SelectPrimitive.Root.displayName;

export { Select };
