import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartI, paymentDetailsI, PosStateI, SaleDetailsI } from "../../types";
import { products } from "../../utils/dummy";
import { RootState } from "../store";

const initialState: PosStateI = {
  products: products, // dummy data
  cartItems: [],
  saleDetails: {
    cart: [],
    paymentDetails: {
      paymentMethod: "",
      amountPaid: 0,
    },
    invoiceNo: "",
    salesPerson: {
      name: "",
      email: "",
      role: "",
    },

    date: "",
  },
  OrderQty: 1,
};

const PosSlice = createSlice({
  name: "pos",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setOrderQty: (state, action) => {
      state.OrderQty = action.payload;
    },

    setCart: (state: PosStateI, action: PayloadAction<CartI>) => {
      // check if product already in cart update it or add product to cart if it's not in cart
      const cartItem = state.cartItems.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },


    removeCartItem: (state: PosStateI, action: PayloadAction<CartI>) => {
      const cartItem = state.cartItems.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (cartItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.product.id !== action.payload.product.id
        );
      }
    },
    // update cart item quantity
    updateCart: (state: PosStateI, action: PayloadAction<CartI>) => {
      const cartItem = state.cartItems.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (cartItem) {
        cartItem.quantity = action.payload.quantity;
      }
    },

    emptyCart: (state: PosStateI) => {
      state.cartItems = [];
    },

    setSalesDetails: (
      state: PosStateI,
      action: PayloadAction<SaleDetailsI>
    ) => {
      state.saleDetails = action.payload;
    },
  },
});

export const {
  setProducts,
  setCart,
  setOrderQty,
  removeCartItem,
  emptyCart,
  updateCart,
  setSalesDetails,
} = PosSlice.actions;
export default PosSlice.reducer;
export const currentPos = (state: RootState) => state.pos;
