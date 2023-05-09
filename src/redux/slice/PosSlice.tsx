import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartI, paymentDetailsI, PosStateI, SaleDetailsI } from "../../types";
import { products } from "../../utils/dummy";
import { RootState } from "../store";

const initialState: PosStateI = {
  products: products, // dummy data
  cart: [],
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
  filteredProducts: [],
};

const PosSlice = createSlice({
  name: "pos",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setCart: (state: PosStateI, action: PayloadAction<CartI>) => {
      // check if product already in cart update it or add product to cart if it's not in cart
      const cartItem = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    removeCartItem: (state: PosStateI, action: PayloadAction<CartI>) => {
      const cartItem = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (cartItem) {
        state.cart = state.cart.filter(
          (item) => item.product.id !== action.payload.product.id
        );
      }
    },
    // update cart item quantity
    updateCart: (state: PosStateI, action: PayloadAction<CartI>) => {
      const cartItem = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (cartItem) {
        cartItem.quantity = action.payload.quantity;
      }
    },

    emptyCart: (state: PosStateI) => {
      state.cart = [];
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
  removeCartItem,
  emptyCart,
  updateCart,
  setSalesDetails,
} = PosSlice.actions;
export default PosSlice.reducer;
export const currentPos = (state: RootState) => state.pos;
