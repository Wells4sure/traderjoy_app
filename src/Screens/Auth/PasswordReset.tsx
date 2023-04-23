import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types/navigation";
import { VStack } from "native-base";
import GeneralHeader from "../../components/GeneralHeader";
import PasswordResetForm from "./Forms/PasswordResetForm";

type Props = NativeStackScreenProps<AuthStackParamList, "PasswordReset">;

const PasswordReset = (props: Props) => {
  return (
    <>
      <VStack flex={1} w="100%">
        <GeneralHeader title="Password Reset" />
        <PasswordResetForm navigation={props.navigation} route={props.route} />
      </VStack>
    </>
  );
};

export default PasswordReset;
