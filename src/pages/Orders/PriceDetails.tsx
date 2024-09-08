import Separator from "../../components/common/Separator";
import {PriceDetailsProps} from "../../types/types";

const PriceDetails = ({subtotal, taxes, shipping}: PriceDetailsProps) => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Order Details</h2>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span>${taxes?.toFixed(2)}</span>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${subtotal?.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
