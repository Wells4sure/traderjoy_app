import { View, Text } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList } from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";
import { Box, VStack } from "native-base";
import HomeHeader from "../../components/HomeHeader";

type ReceiptProps = StackNavigationProp<HomeStackParamList, "Receipt">;

const Receipt = () => {
  const navigation = useNavigation<ReceiptProps>();

  return (
    <>
      <VStack flex={1}>
        <HomeHeader title="Receipt" />
        <Box flex={1} bg="white" />

        
      </VStack>
    </>
  );
};

export default Receipt;
