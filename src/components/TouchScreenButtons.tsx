import { View, Text } from "react-native";
import React from "react";
import { Flex } from "native-base";
import TouchPointButton from "./TouchPointButton";
import { ProductI } from "../types";

interface TouchScreenButtonsProps {
  products: ProductI[];
  onPress: (product: ProductI) => void;
}

const TouchScreenButtons = ({ onPress, products }: TouchScreenButtonsProps) => {
  return (
    <Flex direction="row" flexWrap="wrap" justifyContent="space-evenly">
      {products.map((product, i) => (
        <TouchPointButton
          key={i}
          name={product.name}
          description={product.description}
          color={`${product.category.color}`}
          onPress={() => onPress(product)}
        />
      ))}
    </Flex>
  );
};

export default TouchScreenButtons;
