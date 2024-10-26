import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  cartCounter: 0,  
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
      // state.cartCounter = action.payload.length;  
      state.cartCounter = action.payload.reduce((total, item) => total + (item.quantity || 1), 0);
    },
    addItemToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.cartCounter += 1; 
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartCounter -= 1;  
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartCounter = 0;
    },
  },
});

export const { setCartItems, addItemToCart, removeItemFromCart,clearCart } = cartSlice.actions;

export const fetchCartItems = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get("http://localhost:7777/api/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    
    // if (response.data.cart && response.data.cart.items) {
      
    //   dispatch(setCartItems(response.data.cart.items));
    // } else {
      
    //   dispatch(setCartItems([]));
    // }
    if (response.data.items) {
     
      dispatch(setCartItems(response.data.items));
    } else {
      dispatch(setCartItems([]));  
    }

    
  } catch (error) {
    console.error("Failed to fetch cart items:", error);
  }
};

export default cartSlice.reducer;

