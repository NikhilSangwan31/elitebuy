import {useState} from "react";
import Form from "../../components/common/Forms"; // Adjust the path
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import {CartItem} from "../../types/types";
import {addOrder} from "../../redux/slices/orderSlice";
import useNavigation from "../../hooks/useNavigation";

const Checkout = () => {
  const {goTo} = useNavigation();
  const dispatch = useAppDispatch();
  const [billingInfo, setBillingInfo] = useState<{[key: string]: string}>({});
  const [paymentInfo, setPaymentInfo] = useState<{[key: string]: string}>({});
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const cart = useAppSelector((state) => state.cart);
  const subtotal = cart.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0
  );
  const taxes = subtotal * 0.1;
  const shipping = 5.0;
  const total = subtotal + taxes + shipping;

  const handleBillingSubmit = (data: {[key: string]: string}) => {
    setBillingInfo(data);
    setIsConfirm(true);
  };

  const handlePaymentSubmit = (data: {[key: string]: string}) => {
    setPaymentInfo(data);
    // Dispatch the addOrder action
    dispatch(
      addOrder({
        id: Math.random().toString(),
        items: cart,
        subtotal,
        taxes,
        shipping,
        total,
        billingInfo,
        paymentInfo: paymentInfo
      })
    );
    goTo({
      path: "/order-success" // Target route
    });
    // Proceed with payment process
  };

  const formFields = [
    {
      name: "name",
      type: "text",
      value: "",
      placeholder: "Name"
    },
    {
      name: "address",
      type: "text",
      value: "",
      placeholder: "Address"
    },
    {
      name: "city",
      type: "text",
      value: "",
      placeholder: "City"
    },
    {
      name: "postalCode",
      type: "text",
      value: "",
      placeholder: "Postal Code"
    }
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
      <h1 className="mb-8 text-2xl font-bold md:text-3xl">Checkout</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {isConfirm ? (
          <PaymentMethod onSubmit={handlePaymentSubmit} />
        ) : (
          <div>
            <h2 className="mb-4 text-xl font-bold">Billing Information</h2>
            <Form
              fields={formFields}
              onSubmit={handleBillingSubmit}
              submitText="Confirm Order"
              className="grid grid-cols-1 gap-4"
            />
          </div>
        )}
        <div>
          <OrderSummary
            subtotal={subtotal}
            taxes={taxes}
            shipping={shipping}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
