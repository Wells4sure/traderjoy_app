import { View, Text } from "react-native";
import React from "react";
import { Box, Flex } from "native-base";
import { CategoryI } from "../types";
import CategoryBtn from "./CategoryBtn";

interface TouchCategoryButtonsProps {
  onPress: (category: CategoryI) => void;
  categories: CategoryI[];
}

const TouchCategoryButtons = ({
  onPress,
  categories,
}: TouchCategoryButtonsProps) => {
  return (
    <Flex direction="row" flexWrap="wrap" justifyContent="space-evenly">
      <Box m={2}>All</Box>
      {categories.map((category, i) => (
        <Box m={2} key={i}>
          <CategoryBtn
            text={category.name}
            onPress={() => onPress(category)}
            color={category.color}
          />
        </Box>
      ))}
    </Flex>
  );
};

export default TouchCategoryButtons;
