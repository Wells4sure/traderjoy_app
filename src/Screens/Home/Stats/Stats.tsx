import { View } from "react-native";
import React from "react";
import { Box, Center, HStack, Text } from "native-base";
import StatsComponent from "./StatsComponent";

const Stats = () => {
  return (
    <HStack space={3} justifyContent="space-between">
      <StatsComponent
        title="Total Sales"
        value="₦ 1,000,000"
        percentage="20"
        from="last month"
      />
      <StatsComponent
        title="Total Sales"
        value="₦ 1,000,000"
        percentage="20"
        from="last month"
      />
      <StatsComponent
        title="Total Sales"
        value="₦ 1,000,000"
        percentage="20"
        from="last month"
      />
     <StatsComponent
        title="Total Sales"
        value="₦ 1,000,000"
        percentage="20"
        from="last month"
      />
    </HStack>
  );
};

export default Stats;
