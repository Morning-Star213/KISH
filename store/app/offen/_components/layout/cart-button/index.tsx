import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CartIcon from "../../icons/CartIcon";
import Item from "./Item";

const CartButton = () => (
  <Drawer direction="right">
    <DrawerTrigger>
      <CartIcon className="stroke-[#282626]" />
    </DrawerTrigger>
    <DrawerContent
      className="
    fixed inset-x-auto inset-y-0 bottom-auto top-0 right-0 z-50 mt-0 p-0 flex h-full w-96 flex-col rounded-none border-none bg-white
    "
    >
      <DrawerHeader className="px-5 flex items-center justify-between">
        <DrawerTitle className="text-2xl">カート (2)</DrawerTitle>
        <DrawerClose>
          <Button variant="ghost">╳</Button>
        </DrawerClose>
      </DrawerHeader>
      <div className="px-5 flex flex-col gap-4 flex-1 overflow-scroll">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <DrawerFooter className="flex flex-col gap-3">
        <div className="flex justify-between text-sm font-bold">
          <h4>Subtotal</h4>
          <span>8,000円</span>
        </div>
        <div className="flex justify-between text-sm font-bold">
          <h4>Shipping</h4>
          <span>FREE</span>
        </div>
        <Button className="rounded-none text-white">お会計に進む</Button>
        <Button variant="outline" className="border-base rounded-none">
          カートを見る
        </Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default CartButton;
