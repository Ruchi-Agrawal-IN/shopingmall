import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addTocart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    incrementItemCount(state, action) {
      addTocart(state, action);
    },
    decrementItemCount(state, action) {},
  },
});
export const {
  addTocart,
  removeFromCart,
  incrementItemCount,
  decrementItemCount,
} = cartSlice.actions;
export default cartSlice.reducer;
