import React from "react";
import { Box, HStack, IconButton, Pressable, Text, VStack } from "native-base";
import { CartI } from "../types";
import { MaterialIcons } from "@expo/vector-icons";

interface CartItemProps {
  item: CartI;
  handleEditCartItem: (item: CartI) => void;
  removeCartItem: (item: CartI) => void;
}

const CartItem = ({
  item,
  handleEditCartItem,
  removeCartItem,
}: CartItemProps) => {
  const SUB_TOTAL = item.price * item.quantity;

  return (
    <Box
      p="2"
      bg="coolGray.100"
      _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "coolGray.500",
        letterSpacing: "lg",
      }}
      w={"100%"}
      alignItems="center"
      flexDirection="row"
    >
      <Pressable
        onPress={() => handleEditCartItem(item)}
        overflow="hidden"
        borderWidth="1"
        borderColor="coolGray.300"
        shadow="3"
        w={"100%"}
        bg="coolGray.100"
        p="2"
      >
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          w={"100%"}
        >
          <HStack
            space={2}
            alignItems="flex-start"
            justifyContent={"space-between"}
            w={"100%"}
          >
            <Text isTruncated w="50%" fontSize={"sm"}>
              {item.product.name}
            </Text>
            <Text fontSize={11} color="coolGray.800">
              {` X ${item.quantity}`}
            </Text>
            <Text fontWeight={"bold"}> {SUB_TOTAL.toFixed(2)}</Text>
            <IconButton
              size={"xs"}
              variant="outline"
              colorScheme="secondary"
              _icon={{
                as: MaterialIcons,
                name: "close",
              }}
              onPress={() => {
                removeCartItem(item);
              }}
            />
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );
};

export default CartItem;
