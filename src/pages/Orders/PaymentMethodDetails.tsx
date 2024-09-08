import { OrderState } from "../../types/types";

const PaymentMethodDetails = ({orders}: OrderState) => {
    const paymentInfo = orders[orders?.length - 1];
   
  return (
    <div>
      <h2 className="text-lg font-semibold">Payment Method</h2>
      <div className="mt-4 flex items-center gap-2">
        <div className="h-5 w-5 text-muted-foreground" />
        <span>Visa **** **** **** 4532</span>
      </div>
    </div>
  );
};

export default PaymentMethodDetails;
