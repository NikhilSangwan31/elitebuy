import { useEffect } from 'react';
import { fetchProducts, filterByCategory } from '../../redux/slices/ProductSlice';
import { CartItem, Product } from '../../types/types';
import { addToCart, updateQuantity } from '../../redux/slices/CartSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Card from '../../components/common/Card';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { filteredProducts, categories, selectedCategory, status } = useAppSelector(
    (state) => state.products
  );
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategoryChange = (category: string) => {
    dispatch(filterByCategory(category));
  };

  const handleAddToCart = (product: Product) => {
    const existingCartItem = cart?.find((item: CartItem) => item?.id === product?.id.toString());

    if (existingCartItem) {
      dispatch(updateQuantity({ id: product?.id?.toString(), quantity: existingCartItem?.quantity + 1 }));
    } else {
      const cartItem = {
        id: product?.id.toString(),
        quantity: 1,
        name: product.title,
        price: product.price,
        image: product.image,
      };
      dispatch(addToCart(cartItem));
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products List</h1>

      {/* Category Filter Dropdown */}
      <div className="mb-4">
        <label htmlFor="category" className="mr-2">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="border px-4 py-2"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product: Product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
