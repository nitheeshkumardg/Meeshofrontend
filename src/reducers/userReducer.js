import { createSlice } from "@reduxjs/toolkit";

// Create a slice for user information
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    isLogin: false,
    userDetails: null,
  },
  reducers: {
    // Reducer to handle login
    login: (state, action) => {
      state.isLogin = true;
      state.userDetails = action.payload; // Update user details with the payload
    },
    // Reducer to handle logout
    logout: (state) => {
      state.isLogin = false;
      state.userDetails = null; // Clear user details on logout
    },
  },
});
export const { login, logout } = userInfoSlice.actions;
export default userInfoSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async thunk to fetch the cart after login
// export const fetchCartItems = createAsyncThunk(
//   'cart/fetchCartItems',
//   async (_, { rejectWithValue }) => {
//     // Retrieve token from localStorage
//     const token = localStorage.getItem('token'); 

//     if (!token) {
//       return rejectWithValue("No token provided");
//     }

//     try {
//       const response = await axios.get('http://localhost:7777/api/cart', {
//         headers: {
//           Authorization: `Bearer ${token}`,  // Send token in header
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response ? error.response.data : error.message);
//     }
//   }
// );

// const userInfoSlice = createSlice({
//   name: "userInfo",
//   initialState: {
//     isLogin: false,
//     userDetails: null, // Holds user information including token
//     cart: [],          // Holds cart items
//     cartLoading: false,
//     cartError: null,
//   },
//   reducers: {
//     // Reducer to handle login
//     login: (state, action) => {
//       state.isLogin = true;
//       state.userDetails = action.payload; // Store user details including token
//     },
//     // Reducer to handle logout
//     logout: (state) => {
//       state.isLogin = false;
//       state.userDetails = null;
//       state.cart = []; // Clear cart when logging out
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Fetch cart items after login
//       .addCase(fetchCartItems.pending, (state) => {
//         state.cartLoading = true;
//         state.cartError = null;
//       })
//       .addCase(fetchCartItems.fulfilled, (state, action) => {
//         state.cart = action.payload.items;  // Populate cart items
//         state.cartLoading = false;
//       })
//       .addCase(fetchCartItems.rejected, (state, action) => {
//         state.cartLoading = false;
//         state.cartError = action.payload;
//       });
//   },
// });

// export const { login, logout } = userInfoSlice.actions;
// export default userInfoSlice.reducer;





