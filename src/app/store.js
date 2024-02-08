import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../features/product/ProductSlice';
import AuthReducer from '../features/auth/components/authSlice';

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    user:AuthReducer,
  },
});
