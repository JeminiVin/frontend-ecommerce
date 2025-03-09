import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(item => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item._id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.find(item => item._id === action.payload.productId);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
