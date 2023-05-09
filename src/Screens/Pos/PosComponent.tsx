import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, Center, Flex, HStack, ScrollView, VStack } from "native-base";
import HomeHeader from "../../components/HomeHeader";
import InputForm from "../../components/InputForm";
import TouchPointButton from "../../components/TouchPointButton";
import CartSections from "../../components/CartSections";
import CategoryBtn from "../../components/CategoryBtn";
import TouchScreenButtons from "../../components/TouchScreenButtons";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { currentPos } from "../../redux/slice/PosSlice";
import TouchCategoryButtons from "../../components/TouchCategoryButtons";
import { categories } from "../../utils/dummy";
import { CategoryI, ProductI } from "../../types";
import QtyModal from "./QtyModal";

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
  const dispatch = useDispatch();
  const { products: Items, cart } = useAppSelector(currentPos);
  const [products, setProducts] = useState(Items);
  const [showQtyModal, setShowQtyModal] = useState(false);
  const Styles = useStyles();

  const handleFilterByCategory = (category: CategoryI) => {
    const filteredProducts = Items.filter(
      (product) => product.category.name === category.name
    );

    setProducts(filteredProducts);
  };

  const handleAddToCart = (product: ProductI) => {
    // open QtyModal
    setShowQtyModal(true);
  };

  const addOrRemove = (action: string, value: number) => {
    if (action === "add") {
      // add to cart
      console.log("add to cart");
    } else {
      // remove from cart
      console.log("remove from cart");
    }
  };

  return (
    <>
      <VStack flex={1}>
        <HomeHeader title="POS" />
        {/* 2 responsive columns with a flex of 1 */}
        <HStack>
          <VStack space={4} alignItems="center" style={Styles.left}>
            <Box px={5} w="100%">
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              >
                <HStack space={3} justifyContent="center">
                  <TouchCategoryButtons
                    categories={categories}
                    onPress={(category: CategoryI) =>
                      handleFilterByCategory(category)
                    }
                  />
                </HStack>
              </ScrollView>
            </Box>
            <Box px={5} w="100%" h="87%">
              <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={3} justifyContent="center">
                  <TouchScreenButtons
                    products={products}
                    onPress={(product: ProductI) => handleAddToCart(product)}
                  />
                </VStack>
              </ScrollView>
            </Box>
          </VStack>
          <VStack space={2} alignItems="center" style={Styles.right}>
            <Text>Cart</Text>
            <Box px={1} w="100%" h="87%" justifyContent={"space-between"}>
              <CartSections />
            </Box>
          </VStack>
        </HStack>
      </VStack>

      {/* Modals */}
      <QtyModal
        isOpen={showQtyModal}
        onClose={() => setShowQtyModal(false)}
        qtyValue={0}
        onChange={(value: number) => console.log(value)}
        addOrRemove={(action: string, value: number) =>
          addOrRemove(action, value)
        }
      />
    </>
  );
};

export default PosComponent;
