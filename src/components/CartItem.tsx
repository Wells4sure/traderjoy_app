import { View } from "react-native";
import React from "react";
import { Box, Pressable, Text } from "native-base";

const CartItem = () => {
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
        onPress={() => console.log("I'm Pressed")}
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
        >
          <Text>This is a cart item</Text>
          <Text> X 2</Text>
          <Text> 200</Text>
        </Box>
      </Pressable>
    </Box>
  );
};

export default CartItem;
