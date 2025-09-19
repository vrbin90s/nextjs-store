import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";

const CartButton = async () => {

  const numItemsInCart = 9;

  return (
    <Button variant="outline" size="icon" className="flex justify-center items-center relative" asChild>
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          { numItemsInCart } 
        </span>
      </Link>
    </Button>
  );
}
 
export default CartButton;