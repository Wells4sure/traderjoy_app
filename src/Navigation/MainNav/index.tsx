import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "../AuthStack";
import DrawerStack from "../DrawerStack/DrawerStack";
import NetInfo from "@react-native-community/netinfo";

const index = () => {
  const [isOnline, setIsOnline] = useState<boolean | null>(false);
  useEffect(() => {
    NetInfo.addEventListener((state) => {
      console.log("Is connected?", state.isInternetReachable);
      setIsOnline(state.isInternetReachable);
    });
  }, [isOnline]);

  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <DrawerStack />
    </NavigationContainer>
  );
};

export default index;
