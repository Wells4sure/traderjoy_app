import { View, Text } from "react-native";
import React from "react";
import { Box, Button } from "native-base";

interface ChargeButtonProps {
  text: string;
  onPress: () => void;
}

const ChargeButton = ({ onPress, text }: ChargeButtonProps) => {
  return (
    <Button
      _text={{
        textTransform: "uppercase",
        fontWeight: "medium",
      }}
      _light={{
        bg: `indigo.800`,
      }}
      _dark={{
        bg: `indigo.500`,
      }}
      size="md"
      borderRadius="5"  
      p={3}
      onPress={onPress}
    >
      {text}
    </Button>
  );
};

export default ChargeButton;
