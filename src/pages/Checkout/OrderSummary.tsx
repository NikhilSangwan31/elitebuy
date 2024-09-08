import { OrderSummaryProps } from "../../types/types";


const OrderSummary = ({ subtotal, taxes, shipping, total }: OrderSummaryProps) => (
  <div>
    <h2 className="mb-4 text-xl font-bold">Order Summary</h2>
    <div className="space-y-4">
      <div className="grid grid-cols-2 items-center">
        <div>Subtotal</div>
        <div className="text-right">${subtotal.toFixed(2)}</div>
      </div>
      <div className="grid grid-cols-2 items-center">
        <div>Taxes</div>
        <div className="text-right">${taxes.toFixed(2)}</div>
      </div>
      <div className="grid grid-cols-2 items-center">
        <div>Shipping</div>
        <div className="text-right">${shipping.toFixed(2)}</div>
      </div>
      <div className="grid grid-cols-2 items-center font-bold">
        <div>Total</div>
        <div className="text-right">${total.toFixed(2)}</div>
      </div>
    </div>
  </div>
);

export default OrderSummary;
