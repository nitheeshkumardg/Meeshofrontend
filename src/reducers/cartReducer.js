// const initialState = {
//     cartItems: [],
//     cartCounter: 0,
//     totalPrice:0,
//     extraCost:50,
//     taxes:0,
//     grandTotal:0
//   };
  
//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
//         console.log('++++++++++++:',action.payload);
        
//         if (existingItemIndex !== -1) {
//           const updatedCartItems = state.cartItems.map((item, index) => {
//             if (index === existingItemIndex) {
//               return { ...item, quantity:item.quantity + 1,total_item_price:(item.quantity + 1) * item.price };
//             }
//             return item;
//           });
//           return {
//             ...state,
//             cartItems: updatedCartItems,
//             cartCounter: state.cartCounter + 1,
//             totalPrice: state.totalPrice + action.payload.product.price,
//             taxes:(state.totalPrice + action.payload.product.price) * 0.18,
//             grandTotal: state.totalPrice + state.taxes + action.payload.product.price
//           };
//         } else {
//           return {
//             ...state,
//             cartItems: [...state.cartItems, { ...action.payload, quantity: 1, total_item_price: action.payload.product.price }],
//             cartCounter: state.cartCounter + 1,
//             totalPrice: state.totalPrice + action.payload.product.price,
//             taxes:(state.totalPrice + action.payload.product.price) * 0.18,
//             grandTotal: state.totalPrice + state.taxes + action.payload.product.price
//           };
//         }
//       case 'REMOVE_FROM_CART':
//         const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.product.id);
//         const removedItem = state.cartItems.find(item => item.id === action.payload.product.id);
//         return {
//           ...state,
//           cartItems: updatedCartItems,
//           cartCounter: state.cartCounter - removedItem.quantity,
//           totalPrice: state.totalPrice - (removedItem.product.price * removedItem.quantity),
//           taxes:(state.totalPrice + action.payload.product.price) * 0.18,
//           grandTotal: state.totalPrice + state.taxes + action.payload.product.price
//         };
//       default:
//         return state;
//     }
//   };
  
  
//   export default cartReducer;





// const saveCartToLocalStorage = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('cartState', serializedState);
//   } catch (error) {
//     console.error("Could not save cart state", error);
//   }
// };

// const loadCartFromLocalStorage = () => {
//   try {
//     const serializedState = localStorage.getItem('cartState');
//     if (serializedState === null) {
//       return undefined; 
//     }
//     return JSON.parse(serializedState);
//   } catch (error) {
//     console.error("Could not load cart state", error);
//     return undefined;
//   }
// };


// const initialState = loadCartFromLocalStorage() || {
//   cartItems: [],
//   cartCounter: 0,
//   totalPrice: 0,
//   extraCost: 50,
//   taxes: 0,
//   grandTotal: 0
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.product.id);

//       if (existingItemIndex !== -1) {
//         const updatedCartItems = state.cartItems.map((item, index) => {
//           if (index === existingItemIndex) {
//             return {
//               ...item,
//               quantity: item.quantity + 1,
//               total_item_price: (item.quantity + 1) * item.product.price
//             };
//           }
//           return item;
//         });

//         const updatedState = {
//           ...state,
//           cartItems: updatedCartItems,
//           cartCounter: state.cartCounter + 1,
//           totalPrice: state.totalPrice + action.payload.product.price,
//           taxes: (state.totalPrice + action.payload.product.price) * 0.18,
//           grandTotal: state.totalPrice + state.taxes + action.payload.product.price
//         };

     
//         saveCartToLocalStorage(updatedState);

//         return updatedState;
//       } else {
//         const updatedState = {
//           ...state,
//           cartItems: [...state.cartItems, { ...action.payload, quantity: 1, total_item_price: action.payload.product.price }],
//           cartCounter: state.cartCounter + 1,
//           totalPrice: state.totalPrice + action.payload.product.price,
//           taxes: (state.totalPrice + action.payload.product.price) * 0.18,
//           grandTotal: state.totalPrice + state.taxes + action.payload.product.price
//         };

 
//         saveCartToLocalStorage(updatedState);

//         return updatedState;
//       }

//     case 'REMOVE_FROM_CART':
//       const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.product.id);
//       const removedItem = state.cartItems.find(item => item.id === action.payload.product.id);

//       const newState = {
//         ...state,
//         cartItems: updatedCartItems,
//         cartCounter: state.cartCounter - removedItem.quantity,
//         totalPrice: state.totalPrice - (removedItem.product.price * removedItem.quantity),
//         taxes: (state.totalPrice - removedItem.product.price * removedItem.quantity) * 0.18,
//         grandTotal: state.totalPrice + state.taxes - removedItem.product.price
//       };

   
//       saveCartToLocalStorage(newState);

//       return newState;

//     default:
//       return state;
//   }
// };

// export default cartReducer;


// reducers/cartReducer.js
// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//     total: 0
//   },
//   reducers: {
//     setCart: (state, action) => {
//       state.items = action.payload.items;
//       state.total = action.payload.total;
//     },
//     clearCart: (state) => {
//       state.items = [];
//       state.total = 0;
//     }
//   }
// });

// export const { setCart, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;

// // Thunks for async actions

// export const fetchCart = () => async (dispatch) => {
//   try {
//     const response = await axios.get('http://localhost:7777/api/cart'); // Fetch cart for the logged-in user
//     dispatch(setCart(response.data));
//   } catch (error) {
//     toast.error('Failed to load cart');
//   }
// };
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Thunk to fetch cart for logged-in user
// export const fetchCartItems = createAsyncThunk(
//   'cart/fetchCartItems',
//   async (_, { getState, rejectWithValue }) => {
//     const { token } = getState().auth;  // Get token from auth slice
//     try {
//       const response = await axios.get('http://localhost:7777/api/cart', {
//         headers: {
//           Authorization: `Bearer ${token}`,  // Send token in header
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Thunk to add product to cart
// export const addToCart = createAsyncThunk(
//   'cart/addToCart',
//   async ({ productId, quantity }, { getState, rejectWithValue }) => {
//     const { token } = getState().auth;  // Get token from auth slice
//     try {
//       const response = await axios.post(
//         'http://localhost:7777/api/cart/add',
//         { productId, quantity },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,  // Send token in header
//           },
//         }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Slice for cart
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//     total: 0,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     clearCart: (state) => {
//       state.items = [];
//       state.total = 0;
//     },
//   },
//   extraReducers: (builder) => {
//     // Handling fetch cart items
//     builder
//       .addCase(fetchCartItems.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchCartItems.fulfilled, (state, action) => {
//         state.items = action.payload.items;
//         state.total = action.payload.total;
//         state.loading = false;
//       })
//       .addCase(fetchCartItems.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       // Handling add to cart
//       .addCase(addToCart.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(addToCart.fulfilled, (state, action) => {
//         state.items = action.payload.items;
//         state.total = action.payload.total;
//         state.loading = false;
//       })
//       .addCase(addToCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { clearCart } = cartSlice.actions;
// export default cartSlice.reducer;

// redux/cartSlice.js


// src/redux/cartSlice.js
// cartReducer.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  cartCounter: 0,  // Added cartCounter
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
      state.cartCounter = action.payload.length;  // Update cartCounter based on cart items
    },
    addItemToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.cartCounter += 1;  // Increment cartCounter
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartCounter -= 1;  // Decrement cartCounter
    },
  },
});

export const { setCartItems, addItemToCart, removeItemFromCart } = cartSlice.actions;

export const fetchCartItems = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get("http://localhost:7777/api/cart/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setCartItems(response.data.cart.items));
  } catch (error) {
    console.error("Failed to fetch cart items:", error);
  }
};

export default cartSlice.reducer;

