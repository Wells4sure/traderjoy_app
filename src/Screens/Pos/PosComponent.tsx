import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import React from "react";
import { Box, Center, Flex, HStack, ScrollView, VStack } from "native-base";
import HomeHeader from "../../components/HomeHeader";
import InputForm from "../../components/InputForm";
import TouchPointButton from "../../components/TouchPointButton";
import CartSections from "../../components/CartSections";

function useStyles() {
  const { width, height } = useWindowDimensions();

  return StyleSheet.create({
    root: {
      flex: 1,
      flexDirection: "row",
    },
    left: {
      flex: 1,
      maxWidth: width > 500 ? 780 : 100,
    },
    right: {
      backgroundColor: "#c3c3c3",
      width: width > 500 ? width - 780 : width - 100,
    },
  });
}

const PosComponent = () => {
  function rand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randColor() {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    return colors[rand(0, colors.length - 1)];
  }

  const Styles = useStyles();
  return (
    <>
      <VStack flex={1}>
        <HomeHeader title="POS" />
        {/* 2 responsive columns with a flex of 1 */}
        <HStack>
          <VStack space={4} alignItems="center" style={Styles.left}>
            <Box px={5} w="100%">
              <InputForm
                placeholder={"Search"}
                type={"text"}
                value={""}
                name={"Search"}
                onChange={function (e: any): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </Box>
            <Box px={5} w="100%">
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              >
                <HStack space={3} justifyContent="center">
                  <Flex
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-evenly"
                  >
                    <Box mx={1}>This is Category</Box>
                    <Box>This is Category</Box>
                    <Box>This is Category</Box>
                    <Box>This is Category</Box>
                    <Box>This is Category</Box>
                    <Box>This is Category</Box>
                    <Box>This is Category</Box>
                    <Box>This is Category</Box>
                    <Box>This is Category</Box>
                    <Box>This is Category</Box>
                    <Box>This is Category</Box>
                  </Flex>
                </HStack>
              </ScrollView>
            </Box>
            <Box px={5} w="100%" h="80%">
              <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={3} justifyContent="center">
                  <Flex
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-evenly"
                  >
                    {[...Array(35)].map((_, i) => (
                      <TouchPointButton
                        key={i}
                        name={`Long ass Test name ${i}`}
                        description={`${i + rand(0, 999)} mls`}
                        color={randColor()}
                        onPress={() => console.log(`this is ${i}`)}
                      />
                    ))}
                  </Flex>
                </VStack>
              </ScrollView>
            </Box>
          </VStack>
          <VStack space={2} alignItems="center" style={Styles.right}>
            <Text>Cart</Text>
            <CartSections />
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default PosComponent;
