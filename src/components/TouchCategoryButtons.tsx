import { View, Text } from "react-native";
import React from "react";
import { Box, Button, Flex } from "native-base";
import { CategoryI } from "../types";
import CategoryBtn from "./CategoryBtn";

interface TouchCategoryButtonsProps {
  onPress: (category: CategoryI) => void;
  resetAll: () => void;
  categories: CategoryI[];
}

const TouchCategoryButtons = ({
  onPress,
  resetAll,
  categories,
}: TouchCategoryButtonsProps) => {
  return (
    <Flex direction="row" flexWrap="wrap" justifyContent="space-evenly">
      <Box m={2}>
        <Button
          onPress={() => resetAll()}
          bg="coolGray.800"
          _text={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          All
        </Button>
      </Box>
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
