import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, ProductState } from '../../types/types';

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk<Product[]>('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

export const fetchProductById = createAsyncThunk<Product, number>(
  'products/fetchProductById',
  async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  }
);

// Initial state for the product slice
const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  categories: [],
  selectedCategory: 'all',
  status: 'idle',
  error: null,
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      if (action.payload === 'all') {
        // If 'all' is selected, show all products
        state.filteredProducts = state.products;
      } else {
        // Filter products based on the selected category
        state.filteredProducts = state.products.filter(
          (product) => product.category === action.payload
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.products = action.payload;

        // Set filteredProducts to all products initially
        state.filteredProducts = action.payload;

        // Extract categories from products and add 'all' category
        const categories = Array.from(new Set(action.payload.map((product) => product.category)));
        state.categories = ['all', ...categories];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<Product>) => {
        state.status = 'succeeded';
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const { filterByCategory } = productSlice.actions;

export default productSlice.reducer;
