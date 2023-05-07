import { View } from "react-native";
import React from "react";
import { CartI } from "../types/posTypes";
import { Box, IconButton, VStack, Text } from "native-base";

interface PropsI<T> {
  tableHead: string[];
  tableData: T[];
  showEditIcon?: boolean;
  showDeleteIcon?: boolean;
  showAddIcon?: boolean;
  showMinusIcon?: boolean;
}

export default function ReusableTable<T>({
  tableData,
  tableHead,
  showAddIcon,
  showMinusIcon,
  showEditIcon,
  showDeleteIcon,
}: PropsI<T>) {
  return (
    <Box
      bg="blueGray.500"
      style={{
        width:"100%"
      }}
      _text={{
        color: "white",
      }}
    >
      {/* table head */}

      <Box
        flexDirection="row"
        px={5}
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        bg="coolGray.500"
        _text={{
          color: "white",
        }}
      >
        {tableHead.map((item, index) => (
          <Text key={index} color={"warmGray.100"}>{item}</Text>
        ))}
      </Box>

      {/* table body */}
      {tableData.map((item, index) => (
        <Box
          key={index}
          flexDirection="row"
          px={5}
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          bg="blueGray.500"
          _text={{
            color: "white",
          }}
        >
          <Text>{item}</Text>
          {showAddIcon && (
            <IconButton
              variant="solid"
              colorScheme="emerald"
              icon={<Text>+</Text>}
              onPress={() => console.log("hello world")}
            />
          )}
          {showMinusIcon && (
            <IconButton
              variant="solid"
              colorScheme="emerald"
              icon={<Text>-</Text>}
              onPress={() => console.log("hello world")}
            />
          )}
          {showEditIcon && (
            <IconButton
              variant="solid"
              colorScheme="emerald"
              icon={<Text>Edit</Text>}
              onPress={() => console.log("hello world")}
            />
          )}
          {showDeleteIcon && (
            <IconButton
              variant="solid"
              colorScheme="emerald"
              icon={<Text>Delete</Text>}
              onPress={() => console.log("hello world")}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
