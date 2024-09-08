export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface ProductListProps {
  products: Product[];
}

export interface CardProps {
  image?: string; // Optional for cards without images
  title: string; // Required title for the card
  price?: number; // Optional, allowing flexibility for non-purchase items
  description?: string; // Added to provide a card description if needed
  onAddToCart?: () => void; // Optional for cards without a cart action
  children?: React.ReactNode; // Allow custom content inside the card
}

export interface ButtonProps {
  text: string;
  onClick: (e: any) => void;
  className?: string; // Optional className to allow overriding styles if needed
  disabled?: boolean;
}

export interface CartItem {
  id: string;
  quantity: number;
  name: string;
  image: string;
  price: number;
}

export interface CartItemProps {
  item: CartItem;
}
export interface CartSummaryProps {
  total: number;
}
export interface FormField {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export interface FormProps {
  fields: FormField[];
  onSubmit: (formData: {[key: string]: string}) => void;
  submitText: string;
  className?: string;
}

export interface OrderSummaryProps {
  subtotal: number;
  taxes: number;
  shipping: number;
  total: number;
}
export interface PaymentFormProps {
  onSubmit: (formData: {[key: string]: string}) => void;
}

export interface OrderState {
  orders: {
    id: string;
    items: CartItem[];
    subtotal: number;
    taxes: number;
    shipping: number;
    total: number;
    billingInfo: {[key: string]: string};
    paymentInfo: {[key: string]: string};
  }[];
}
export interface PriceDetailsProps {
  subtotal: number;
  taxes: number;
  shipping: number;
}
// types.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  categories: string[];
  selectedCategory: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
  selectedProduct: Product | null;
}

export interface AuthState {
  user: any | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
