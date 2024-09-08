import React from "react";
import {useDispatch} from "react-redux";
import Button from "../../components/common/Button";

import {CartItem, CartItemProps} from "../../types/types";
import {removeFromCart, updateQuantity} from "../../redux/slices/CartSlice";

const CartItems: React.FC<CartItemProps> = ({item}) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({id: item.id, quantity: item?.quantity + 1}));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({id: item.id, quantity: item?.quantity - 1}));
    }
  };

  return (
    <li className="flex justify-between p-2 border-b">
      <div>
        <h2 className="font-bold">{item?.name}</h2>
        <p>${item.price}</p>
        <div className="flex items-center">
          <Button
            text="-"
            onClick={handleDecrease}
            className="bg-gray-300 text-black px-2 py-1 rounded mr-2"
            disabled={item.quantity <= 1}
          />
          <span className="font-bold">{item.quantity}</span>
          <Button
            text="+"
            onClick={handleIncrease}
            className="bg-gray-300 text-black px-2 py-1 rounded ml-2"
          />
        </div>
      </div>
      <Button
        text="Remove"
        onClick={() => dispatch(removeFromCart(item.id))}
        className="bg-red-500"
      />
    </li>
  );
};

export default CartItems;
