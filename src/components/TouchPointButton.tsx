import { View } from "react-native";
import React from "react";
import { Box, Text, Pressable } from "native-base";

interface TouchPointButtonProps {
  name: string;
  description: string;
  color: string;
  onPress?: () => void;
}

const TouchPointButton = ({
  name,
  description,
  color,
  onPress,
}: TouchPointButtonProps) => {
  return (
    <Box>
      <Pressable maxW="165" onPress={onPress}>
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              bg={
                isPressed
                  ? `${color}.200`
                  : isHovered
                  ? `${color}.200`
                  : `${color}.100`
              }
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}
              p="5"
              my={2}
              rounded="8"
              shadow={3}
              borderWidth="1"
              borderColor="coolGray.300"
            >
              <Text color="coolGray.800">{name}</Text>

              <Text
                mt="2"
                fontSize={12}
                fontWeight="medium"
                color="darkBlue.600"
              >
                {description}
              </Text>
            </Box>
          );
        }}
      </Pressable>
    </Box>
  );
};

export default TouchPointButton;
