import Form from "../../components/common/Forms";
import { PaymentFormProps } from "../../types/types";


const PaymentForm = ({ onSubmit }: PaymentFormProps) => {
  const paymentFields = [
    { name: 'cardNumber', type: 'text', placeholder: 'Enter your card number', value: '', className: 'border p-2 w-full' },
    { name: 'expirationMonth', type: 'text', placeholder: 'Month', value: '', className: 'border p-2 w-full' },
    { name: 'expirationYear', type: 'text', placeholder: 'Year', value: '', className: 'border p-2 w-full' },
    { name: 'cvv', type: 'text', placeholder: 'Enter your CVV', value: '', className: 'border p-2 w-full' }
  ];

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Payment Information</h2>
      <Form fields={paymentFields} onSubmit={onSubmit} submitText="Place Order" />
    </div>
  );
};

export default PaymentForm;
