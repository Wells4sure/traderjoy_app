import React from "react";
import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../types/navigation";
import {
  Box,
  Button,
  VStack,
  Icon,
  Stack,
  Pressable,
  Text,
  HStack,
  Divider,
} from "native-base";
import InputForm from "../../../components/InputForm";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  navigation: NativeStackNavigationProp<
    AuthStackParamList,
    "PasswordReset",
    undefined
  >;
  route: RouteProp<AuthStackParamList, "PasswordReset">;
};

const PasswordResetForm = (props: Props) => {
  const [email, setEmail] = React.useState<string>("");

  return (
    <>
      <Box alignItems="center">
        <VStack space={4} w="100%" maxWidth="600px" mt={5}>
          <InputForm
            placeholder={"Email"}
            type={"email"}
            value={email}
            name={"Email"}
            required={true}
            onChange={(e) => {
              setEmail(e.nativeEvent.text);
            }}
          />

          <Button
            className="mt-10 rounded-lg bg-mainColour"
            onPress={() => {
              console.log("Login");
            }}
          >
            <Text className="text-lg text-white">Send</Text>
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default PasswordResetForm;
