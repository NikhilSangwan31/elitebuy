// src/pages/order/OrderDetailsCard.tsx
import {useAppSelector} from "../../hooks/hooks";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import PaymentMethodDetails from "./PaymentMethodDetails";
import PriceDetails from "./PriceDetails";
import ShippingAddressDetails from "./ShippingAddressDetails";
import useNavigation from "../../hooks/useNavigation";

const OrderDetailsCard = () => {
  const {goTo} = useNavigation();
  const orders = useAppSelector((state) => state.order?.orders || []);
  const latestOrder = orders[orders?.length - 1];
  // latestOrder.orders = []; // add the orders property

  if (!latestOrder) {
    return <div>No order found!</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 md:px-8 lg:px-10">
      <Card
        image=""
        title="Order Confirmation"
        price={latestOrder?.total}
        // onAddToCart={() => console.log("Returning to Home")}
      >
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PriceDetails
              subtotal={latestOrder?.subtotal}
              taxes={latestOrder.taxes}
              shipping={latestOrder?.shipping}
            />
            <ShippingAddressDetails orders={orders} />
          </div>
          <PaymentMethodDetails orders={orders} />
        </div>
        <div className="bg-muted/50 px-6 py-4 rounded-b-lg">
          <Button
            text="Return to Home"
            onClick={() =>
              goTo({
                path: "/" // Back to Home
              })
            }
            className="w-full sm:w-auto"
          />
        </div>
      </Card>
    </div>
  );
};

export default OrderDetailsCard;
