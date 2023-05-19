import { View } from "react-native";
import React from "react";
import { Box, Center, Text } from "native-base";

interface StatsComponentProps {
  title: string;
  value: string;
  percentage: string;
  from: string;
}

export default function StatsComponent({
  title,
  value,
  percentage,
  from,
}: StatsComponentProps) {
  return (
    <>
      <Box
        bg="coolGray.700"
        borderRadius="5"
        rounded="md"
        width={185}
        maxWidth="100%"
      >
        <Center>
          <Text color="white" fontSize="lg">
            {title}
          </Text>
          <Text color="white" fontSize="xl" fontWeight="bold">
            {value}
          </Text>
          <Box
            bg="warmGray.300"
            py="2"
            width={"100%"}
            maxWidth="100%"
            alignItems={"center"}
            justifyContent={"center"}
            mt={2}
          >
            <Text  fontSize="xs" fontWeight="bold">
              <Text color="green.700" fontSize="xs" fontWeight="bold">
                + {percentage} %{" "}
              </Text>
              from {from}
            </Text>
          </Box>
        </Center>
      </Box>
    </>
  );
}
