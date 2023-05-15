import { View } from "react-native";
import React from "react";
import { Box, Text } from "native-base";
import { CartI } from "../types";

interface TotalsProps {
  cartItems: CartI[];
}

const Totals = ({ cartItems }: TotalsProps) => {
  const TOTAL = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Box
      p="3"
      px={5}
      w={"100%"}
      bg="coolGray.100"
      flexDirection="row"
      justifyContent={"space-between"}
      alignItems={"center"}
      mb={2}
    >
      <Text>Total</Text>
      <Text fontWeight="bold">K {TOTAL.toFixed(2)}</Text>
    </Box>
  );
};

export default Totals;
