import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types/navigation";
import Login from "../../Screens/Auth/Login";
import Register from "../../Screens/Auth/Register";
import Welcome from "../../Screens/Auth/Welcome";

const index = () => {
  const AuthStack = createNativeStackNavigator<AuthStackParamList>();
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

export default index;
