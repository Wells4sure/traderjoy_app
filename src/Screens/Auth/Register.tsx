import { View, Text } from "react-native";
import React from "react";
import { VStack } from "native-base";
import GeneralHeader from "../../components/GeneralHeader";
import RegistrationForm from "./Forms/RegistrationForm";
import { AuthStackParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<AuthStackParamList, "Register">;

const Register = (props: Props) => {
  return (
    <>
      <VStack flex={1} w="100%">
        <GeneralHeader title="Register" />
        <RegistrationForm navigation={props.navigation} route={props.route} />
      </VStack>
    </>
  );
};

export default Register;
