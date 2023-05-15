import { View, useWindowDimensions, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import HomeHeader from "../../components/HomeHeader";
import InputForm from "../../components/InputForm";
import TouchPointButton from "../../components/TouchPointButton";
import CartSections from "../../components/CartSections";
import CategoryBtn from "../../components/CategoryBtn";
import TouchScreenButtons from "../../components/TouchScreenButtons";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import {
  currentPos,
  removeCartItem,
  setCart,
  setOrderQty,
  updateCart,
} from "../../redux/slice/PosSlice";
import TouchCategoryButtons from "../../components/TouchCategoryButtons";
import { categories } from "../../utils/dummy";
import { CartI, CategoryI, ProductI } from "../../types";
import QtyModal from "./QtyModal";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParamList } from "../../types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";

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

type PosNavProp = StackNavigationProp<HomeStackParamList, "Pos">;

const PosComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<PosNavProp>();
  const { products: Items, cartItems, OrderQty } = useAppSelector(currentPos);
  const [products, setProducts] = useState(Items);
  const [selectedProduct, setSelectedProduct] = useState<ProductI | null>(null);
  const [showQtyModal, setShowQtyModal] = useState(false);

  const Styles = useStyles();

  const handleFilterByCategory = useCallback(
    (category: CategoryI) => {
      const filteredProducts = Items.filter(
        (product) => product.category.name === category.name
      );

      setProducts(filteredProducts);
    },
    [Items]
  );

  const handleAddToCart = (product: ProductI) => {
    // check if item is already in cart
    const index = cartItems.findIndex((item) => item.product.id === product.id);
    setSelectedProduct(product);

    if (index !== -1) {
      // update cart
      dispatch(
        setCart({
          ...cartItems[index],
          quantity: cartItems[index].quantity + 1,
        })
      );
    } else {
      // add to cart
      setShowQtyModal(true);
    }
  };

  const addOrRemove = (action: string, value: number) => {
    if (action === "add") {
      // add to cart
      dispatch(setOrderQty(value + 1));
    } else {
      // remove from cart
      if (value > 0) {
        dispatch(setOrderQty(value - 1));
      }
    }
  };

  const handleSubmitQty = () => {
    // add to cart
    if (selectedProduct) {
      const findItem = cartItems.find(
        (item) => item.product.id === selectedProduct.id
      );
      if (findItem) {
        // update cart item with new quantity
        const updatedCartItem: CartI = {
          ...findItem,
          quantity: OrderQty,
        };
        dispatch(updateCart(updatedCartItem));
      } else {
        // add to cart
        const cartItem: CartI = {
          product: selectedProduct,
          quantity: OrderQty,
          price: selectedProduct.price,
        };

        dispatch(setCart(cartItem));
      }
    }
    // close modal
    setShowQtyModal(false);
  };

  // handleEditCartItem
  const handleEditCartItem = (cartItemToEdit: CartI) => {
    const findItem = cartItems.find(
      (item) => item.product.id === cartItemToEdit.product.id
    );
    if (findItem) {
      // set SelectedProduct
      setSelectedProduct(findItem.product);
      // set QtyValue
      dispatch(setOrderQty(findItem.quantity));
      // show modal
      setShowQtyModal(true);
    }
  };

  const handleRemoveCartItem = (cartItemToRemove: CartI) => {
    const findItem = cartItems.find(
      (item) => item.product.id === cartItemToRemove.product.id
    );
    if (findItem) {
      // remove from cart
      dispatch(removeCartItem(cartItemToRemove));
    }
  };

  useEffect(() => {
    if (!showQtyModal) dispatch(setOrderQty(1));
  }, [showQtyModal]);

  return (
    <>
      <VStack flex={1}>
        <HomeHeader title="POS" />
        <Box flex={1} bg="white" />
        {/* 2 responsive columns with a flex of 1 */}
        <HStack>
          <VStack space={4} alignItems="center" style={Styles.left}>
            <Box px={5} w="100%" bg="coolGray.200">
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              >
                <HStack space={3} justifyContent="center" bg="coolGray.200">
                  <TouchCategoryButtons
                    resetAll={() => setProducts(Items)}
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
            <HStack
              w="100%"
              h="12"
              bg="coolGray.200"
              justifyContent={"space-between"}
              alignItems="center"
              px={5}
            >
              <Text fontSize="lg" fontWeight="bold">
                Cart
              </Text>
              <IconButton
                size={"sm"}
                variant="outline"
                colorScheme="indigo"
                _icon={{
                  as: MaterialIcons,
                  name: "save",
                }}
              />
            </HStack>
            <Box px={1} w="100%" h="87%">
              <CartSections
                handleEditCartItem={handleEditCartItem}
                removeCartItem={function (cartItem: CartI): void {
                  handleRemoveCartItem(cartItem);
                }}
                handleCharge={() => {
                  if (cartItems.length > 0) {
                    navigation.navigate("Receipt");
                  } else {
                    console.log("Cart is empty");
                  }
                }}
              />
            </Box>
          </VStack>
        </HStack>
      </VStack>

      {/* Modals */}
      <QtyModal
        isOpen={showQtyModal}
        onClose={() => setShowQtyModal(false)}
        selectedProduct={selectedProduct}
        onChange={(value: number) => dispatch(setOrderQty(value))}
        addOrRemove={(action: string, value: number) =>
          addOrRemove(action, value)
        }
        handleSubmitQty={handleSubmitQty}
      />
    </>
  );
};

export default PosComponent;
