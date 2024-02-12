import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../features/product/ProductSlice';
import AuthReducer from '../features/auth/components/authSlice';
import CartReducer  from '../features/cart/CartSlice';

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    user:AuthReducer,
    cart:CartReducer,
  },
});
