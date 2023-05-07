import { View } from "react-native";
import React from "react";
import { Box, Text } from "native-base";

const Totals = () => {
  return (
    <Box
      p="3"
      px={5}
      w={"100%"}
      bg="coolGray.100"
      flexDirection="row"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Text fontWeight="bold">Total</Text>
      <Text>K 200</Text>
    </Box>
  );
};

export default Totals;
