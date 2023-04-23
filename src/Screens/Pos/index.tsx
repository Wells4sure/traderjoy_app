import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
import HomeHeader from "../../components/HomeHeader";

function useStyles() {
  const { width, height } = useWindowDimensions();

  return StyleSheet.create({
    root: {
      flex: 1,
      flexDirection: "row",
    },
    left: {
      flex: 1,
      height: height,

      backgroundColor: "red",
    },
    right: {
      width: width > 500 ? 300 : 100,
      height: height,
      backgroundColor: "blue",
    },
  });
}

const index = () => {
  const Styles = useStyles();
  return (
    <>
      <VStack flex={1} >
        <HomeHeader title="POS" />
        {/* 2 responsive columns with a flex of 1 */}
        <HStack>
          <VStack flex={1} space={4} alignItems="center" style={Styles.left}>
            <Text>Left</Text>
          </VStack>
          <VStack space={4} alignItems="center" style={Styles.right}>
            <Text>Right</Text>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default index;
