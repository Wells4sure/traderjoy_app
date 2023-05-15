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
      <Pressable maxW="140" width={"100%"} onPress={onPress}>
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              bg={
                isPressed
                  ? `${color}.500`
                  : isHovered
                  ? `${color}.500`
                  : `${color}.800`
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
              rounded="5"
              shadow={2}
              borderWidth="1"
              borderColor="coolGray.400"
            >
              <Text color="warmGray.100" isTruncated w="100%" bold>
                {name}
              </Text>

              <Text
                mt="2"
                fontSize={12}
                fontWeight="medium"
                color="darkBlue.200"
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
