import { View, Text } from "react-native";
import React from "react";
import { Button } from "native-base";

interface CategoryBtnProps {
  text: string;
  color: string;
  onPress: () => void;
}

export default function CategoryBtn({
  onPress,
  text,
  color,
}: CategoryBtnProps) {
  return (
    <Button
      shadow={2}
      onPress={onPress}
      _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white",
      }}
      bg={`${color}.800`}
    >
      {text}
    </Button>
  );
}
