import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    // Add an item to cart
    addItem: (state, action) => {

      const product = action.payload;

      const existingItem = state.items.find(
        item => item.id === product.id
      );

      if (existingItem) {

        existingItem.quantity += 1;

      } else {

        state.items.push({
          ...product,
          quantity: 1
        });

      }
    },


    // Remove an item completely
    removeItem: (state, action) => {

      state.items = state.items.filter(
        item => item.id !== action.payload
      );

    },


    // Update quantity
    updateQuantity: (state, action) => {

      const { id, quantity } = action.payload;

      const item = state.items.find(
        item => item.id === id
      );

      if (item) {

        item.quantity = quantity;

        // Remove item if quantity becomes 0
        if (item.quantity <= 0) {

          state.items = state.items.filter(
            item => item.id !== id
          );

        }
      }
    }

  }
});


// Export the exact reducer functions
export const {
  addItem,
  removeItem,
  updateQuantity
} = cartSlice.actions;


// Export reducer
export default cartSlice.reducer;
