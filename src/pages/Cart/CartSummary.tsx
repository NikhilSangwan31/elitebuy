 // Import your Button component

import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { CartSummaryProps } from "../../types/types";


const CartSummary: React.FC<CartSummaryProps> = ({ total }) => {
  const navigate = useNavigate(); // Now navigate is a function
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Total: ${total}</h2>
      <Button
        text="Checkout"
        onClick={() => navigate("/checkout")}
        className="bg-green-500 text-white mt-2"
      />
    </div>
  );
};

export default CartSummary;
