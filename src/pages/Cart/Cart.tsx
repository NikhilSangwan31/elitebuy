

import CartSummary from "./CartSummary";
import CartItems from "./CartItems";
import { CartItem, CartItemProps } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const total = cart.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
        {cart.map((item: CartItem) => (
          <CartItems key={item?.id} item={item} />
        ))}
          
          <CartSummary total={total} />
        </>
      )}
    </div>
  );
};

export default Cart;
