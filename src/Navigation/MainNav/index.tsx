import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "../AuthStack";
import DrawerStack from "../DrawerStack/DrawerStack";

const index = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <DrawerStack />
    </NavigationContainer>
  );
};

export default index;
