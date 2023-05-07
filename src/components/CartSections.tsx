import { View, Text } from "react-native";
import React from "react";
import { CartI } from "../types/posTypes";
import ReusableTable from "./ReusableTable";
import CartItem from "./CartItem";
import Totals from "./Totals";

export default function CartSections() {
  const tableHead = ["Item", "Quantity", "Price", "Total"];

  return (
    <>
      <CartItem />
      <Totals />
    </>
  );
}
