import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import wishlistReducer from "./wishlistReducer"
import cartReducer from "./cartReducer"
import currentProductReducer from "./currentProductReducer"
import userInfoReducer from './userReducer'

const rootReducer = combineReducers({
    user:userReducer,
    wishlist:wishlistReducer,
    cart:cartReducer,
    currentProduct:currentProductReducer,
    userInfo: userInfoReducer,

})

export default rootReducer