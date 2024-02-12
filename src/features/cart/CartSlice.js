import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart,fetchItemsByUserId,UpdateItem,DeleteItem} from './CartAPI';


const initialState = {
  items:[],
  status: 'idle',
};

export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async (item) => {
    const response = await addToCart(item);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchItemsByUserIdAsync = createAsyncThunk(
  'cart/fetchItemsByUserId',
  async (userId) => {
    const response = await fetchItemsByUserId(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const UpdateItemAsync = createAsyncThunk(
  'cart/UpdateItem',
  async (update) => {
    const response = await UpdateItem(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const DeleteItemAsync = createAsyncThunk(
  'cart/DeleteItem',
  async (remove) => {
    const response = await DeleteItem(remove);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.items.findIndex(item=>item.id===action.payload.id)
        if(index>=0){
          state.items[index]=action.payload
        }else{
        state.items.push(action.payload);}
      }).addCase(fetchItemsByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items=action.payload
      }).addCase(UpdateItemAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(UpdateItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.items.findIndex(item=>item.id===action.payload.id)
        state.items[index]=action.payload
      }).addCase(DeleteItemAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(DeleteItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.items.findIndex(item=>item.id===action.payload.id)
        state.items.splice(index,1);
      });
  },
});

//export const { increment,incrementByAmount } = counterSlice.actions;
export const selectItems= (state) => state.cart.items;
export default CartSlice.reducer;
