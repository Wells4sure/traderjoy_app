import { View, Text } from "react-native";
import React from "react";
import { VStack } from "native-base";
import GeneralHeader from "../../components/GeneralHeader";
import LoginForm from "./Forms/LoginForm";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types/navigation";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

const Login = (props: Props) => {
  return (
    <>
      <VStack flex={1} w="100%">
        <GeneralHeader title="Login" />
        <LoginForm navigation={props.navigation} route={props.route} />
      </VStack>
    </>
  );
};

export default Login;
