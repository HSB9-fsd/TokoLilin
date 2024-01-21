import {combineReducers} from "@reduxjs/toolkit";
import productSlice from "./product.slice";
import cartSlice from "./cart.slice";
import userSlice from "./user.slice";
import addressSlice from "./address.slice";
import shippingSlice from "./shipping.slice";

const rootReducer = combineReducers({
  products: productSlice,
  carts: cartSlice,
  users: userSlice,
  address: addressSlice,
  shippings: shippingSlice,
});

export default rootReducer;
