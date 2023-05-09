import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStateI } from "../../types";
import { RootState } from "../store";

const initialState: AuthStateI = {
  isLoggedIn: false,
  token: "",
  user: {
    name: "",
    email: "",
    role: "",
  },
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLoggedIn: (state: AuthStateI, action: PayloadAction<AuthStateI>) => {
      const newState = Object.assign({}, state, action.payload);
      console.log("setLogin", state);
      return newState;
    },
  },
});

export const { setIsLoggedIn } = LoginSlice.actions;
export default LoginSlice.reducer;
export const currentUser = (state: RootState) => state.login;
