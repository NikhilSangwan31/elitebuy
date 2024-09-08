import React from "react";
import {OrderState} from "../../types/types";

const ShippingAddressDetails = ({orders}: OrderState) => {
  const latestOrder = orders[orders?.length - 1];
  console.log("billingInfo", latestOrder);

  return (
    <div>
      <h2 className="text-lg font-semibold">Shipping Address</h2>
      <address className="mt-4 not-italic text-muted-foreground">
        <div>Liam Johnson</div>
        <div>1234 Main St.</div>
        <div>Anytown, CA 12345</div>
      </address>
    </div>
  );
};

export default ShippingAddressDetails;
