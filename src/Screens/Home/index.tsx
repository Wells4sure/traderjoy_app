import { View, Text } from "react-native";
import React from "react";
import { VStack } from "native-base";
import HomeHeader from "../../components/HomeHeader";

const Home = () => {
  return (
    <>
      <VStack
        flex={1}
        px={2}
        pb={16}
    
      >
        <HomeHeader title="Home" />
      </VStack>
    </>
  );
};

export default Home;
