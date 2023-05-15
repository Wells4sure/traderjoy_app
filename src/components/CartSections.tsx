import React from "react";
import CartItem from "./CartItem";
import Totals from "./Totals";
import ChargeButton from "./ChargeButton";
import { useAppSelector } from "../redux/hooks";
import { currentPos } from "../redux/slice/PosSlice";
import { Box, ScrollView } from "native-base";
import { CartI } from "../types";

interface CartSectionsProps {
  handleEditCartItem: (cartItem: CartI) => void;
  removeCartItem: (cartItem: CartI) => void;
  handleCharge: () => void;
}

export default function CartSections({
  handleEditCartItem,
  removeCartItem,
  handleCharge,
}: CartSectionsProps) {
  const { cartItems } = useAppSelector(currentPos);

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"column"}
        flex={1}
      >
        <Box w="100%" h="84%">
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            {/* CART ITEMS */}
            {cartItems &&
              cartItems.map((item, i) => (
                <CartItem
                  key={i}
                  item={item}
                  handleEditCartItem={handleEditCartItem}
                  removeCartItem={function (item: CartI): void {
                    removeCartItem(item);
                  }}
                />
              ))}
            {/* CART ITEMS */}
          </ScrollView>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          flexDirection={"column"}
          height={"100%"}
          flex={1}
          width={"100%"}
        >
          <Totals cartItems={cartItems} />
          <ChargeButton
            text={"Charge"}
            onPress={function (): void {
              handleCharge();
            }}
          />
        </Box>
      </Box>
    </>
  );
}
