import {
  View,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList } from "../../types/navigation";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  CheckIcon,
  Container,
  HStack,
  Heading,
  Icon,
  IconButton,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from "native-base";
import HomeHeader from "../../components/HomeHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { useAppSelector } from "../../redux/hooks";
import { currentPos, removeCartItem } from "../../redux/slice/PosSlice";
import CartItem from "../../components/CartItem";
import { CartI } from "../../types";

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

type ReceiptProps = StackNavigationProp<HomeStackParamList, "Receipt">;

const Receipt = () => {
  const Styles = useStyles();
  const { cartItems } = useAppSelector(currentPos);
  const navigation = useNavigation<ReceiptProps>();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [otherMode, setOtherMode] = useState("Not Specific");
  const [change, setChange] = useState("-.--");
  const [saleIsComplete, setSaleIsComplete] = useState(false);

  // List of payment methods
  const paymentMethods = [
    "Cash",
    "Mobile Money",
    "Credit Card",
    "Cheque",
    "Other",
  ];

  const TOTAL = cartItems
    .reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0)
    .toFixed(2);

  const calChange = () => {
    const change = (Number(amountPaid) - Number(TOTAL)).toFixed(2);
    if (Number(change) < 0) {
      setChange("-.--");
      return;
    }
    setChange(change);
  };

  useEffect(() => {
    if (amountPaid !== "") {
      calChange();
    }
  }, [amountPaid]);

  const completeSale = (paymentMethod: string, amountPaid: number) => {
    console.log(paymentMethod, amountPaid);
    setSaleIsComplete(true);
  };

  return (
    <>
      <VStack flex={1}>
        <HomeHeader title="Receipt" />
        <Box flex={1} bg="white" />
        <HStack>
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
            </HStack>
            <Box px={1} w="100%" h="87%">
              <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              >
                {/* CART ITEMS */}
                {cartItems &&
                  cartItems.map((item, i) => (
                    <CartItem key={i} item={item} viewOnly={true} />
                  ))}
                {/* CART ITEMS */}
              </ScrollView>
            </Box>
          </VStack>

          {!saleIsComplete ? (
            <VStack space={4} alignItems="center" style={Styles.left}>
              <HStack
                w="100%"
                h="12"
                bg="coolGray.200"
                justifyContent={"center"}
                alignItems="center"
                px={5}
              >
                <Text fontSize="lg" fontWeight="bold">
                  Charge
                </Text>
              </HStack>
              <Box p={3} w="100%" h="87%">
                <Center mt={5}>
                  <Heading>{TOTAL}</Heading>
                  <Text fontWeight="medium" color={"coolGray.500"}>
                    Total amount due
                  </Text>
                </Center>
                <Center mt={5}>
                  <Box w={"100%"}>
                    <Select
                      selectedValue={paymentMethod}
                      minWidth="200"
                      accessibilityLabel="Choose Payment Method"
                      placeholder="Choose Payment Method"
                      _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />,
                      }}
                      mt={1}
                      onValueChange={(itemValue) => {
                        setPaymentMethod(itemValue);
                        setAmountPaid("");
                        if (itemValue === "Other") {
                          setOtherMode("Specify");
                        } else {
                          setOtherMode("Not Specific");
                        }
                      }}
                    >
                      {paymentMethods.map((method, i) => (
                        <Select.Item
                          key={i}
                          label={method}
                          value={method}
                          _text={{
                            color: "teal.900",
                          }}
                        />
                      ))}
                    </Select>
                  </Box>
                  <Stack space={4} w="100%" alignItems="center" mt={5}>
                    <Input
                      w={"100%"}
                      InputLeftElement={
                        <Icon
                          as={<MaterialIcons name="money" />}
                          size={5}
                          ml="2"
                          color="muted.400"
                        />
                      }
                      placeholder="Cash Received"
                      isDisabled={
                        paymentMethod === "" ||
                        paymentMethod === "Other" ||
                        paymentMethod !== "Cash"
                      }
                      keyboardType="numeric"
                      onChangeText={(text) => setAmountPaid(text)}
                    />
                  </Stack>
                  <Center mt={5}>
                    <Heading
                      color={
                        change === "-.--" || change === "0.00"
                          ? "coolGray.500"
                          : "green.700"
                      }
                    >
                      {change}
                    </Heading>
                    <Text fontWeight="medium" color={"coolGray.500"}>
                      Change
                    </Text>
                  </Center>
                  <Button
                    mt={5}
                    w={"100%"}
                    onPress={() => {
                      completeSale(paymentMethod, Number(amountPaid));
                    }}
                  >
                    Complete
                  </Button>
                </Center>
              </Box>
            </VStack>
          ) : (
            <VStack space={4} alignItems="center" style={Styles.left}>
              <HStack
                w="100%"
                h="12"
                bg="coolGray.200"
                justifyContent={"center"}
                alignItems="center"
                px={5}
              >
                <Text fontSize="lg" fontWeight="bold">
                  Transaction Complete
                </Text>
              </HStack>
              <Box p={3} w="100%" h="87%">
                <Center mt={5}>
                  <Heading>Sale Complete </Heading>
                </Center>
                <Center mt={5}>
                  <Box w={"100%"}>
                    <Button
                      mt={5}
                      w={"100%"}
                      onPress={() => {
                        navigation.navigate("Pos");
                      }}
                      colorScheme={"teal"}
                      _text={{
                        color: "white",
                        fontSize: "md",
                        fontWeight: "bold",
                      }}
                      // icon
                      endIcon={
                        <Icon as={<MaterialIcons name="new-releases" />} />
                      }
                    >
                      New Sale
                    </Button>
                  </Box>
                </Center>
              </Box>
            </VStack>
          )}
        </HStack>
      </VStack>
    </>
  );
};

export default Receipt;
