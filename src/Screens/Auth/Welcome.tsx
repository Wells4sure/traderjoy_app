import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types/navigation";
import {
  Box,
  Button,
  HStack,
  Heading,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { Image } from "react-native";
import shoppingCart from "../../../assets/images/shopping-cart.png";

type Props = NativeStackScreenProps<AuthStackParamList, "Welcome">;

const Welcome = ({ navigation }: Props) => {
  return (
    <>
      <ScrollView h={"100"}>
        <Box className="min-h-screen px-4 py-4 bg-slate-200" flex={1}>
          <Box className="relative self-center " p="12" rounded="lg">
            {/* Welcome image */}
            <Image
              className="z-10"
              source={shoppingCart}
              style={{ width: 220, height: 220 }}
            />
          </Box>

          <VStack className="mt-10 text-center">
            <Heading className="text-4xl text-gray-900 text-center">
              Welcome to TraderJoy
            </Heading>

            <Button
              className="mt-10 rounded-lg bg-mainColour"
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text className="text-lg text-white">Register</Text>
            </Button>
            <Button
              variant="outline"
              className="mt-10 rounded-lg border-mainColour "
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text className="text-lg text-blue-600">Login</Text>
            </Button>
          
          </VStack>
        </Box>
      </ScrollView>
    </>
  );
};

export default Welcome;
