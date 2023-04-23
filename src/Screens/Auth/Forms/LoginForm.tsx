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
  navigation: NativeStackNavigationProp<AuthStackParamList, "Login", undefined>;
  route: RouteProp<AuthStackParamList, "Login">;
};

const LoginForm = (props: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [show, setShow] = React.useState(false);

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
          <InputForm
            placeholder={"Password"}
            type={show ? "text" : "password"}
            value={""}
            name={"Password"}
            required={true}
            onChange={(e) => {
              setPassword(e.nativeEvent.text);
            }}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
          />
          <Button
            className="mt-10 rounded-lg bg-mainColour"
            onPress={() => {
              console.log("Login");
            }}
          >
            <Text className="text-lg text-white">Login</Text>
          </Button>
          <HStack space="1" className="mt-3" justifyContent={"space-between"}>
            <HStack space="1" alignItems="center" className="mt-3">
              <Text className="text-gray-900">Don't have an account?</Text>
              <Text
                onPress={() => {
                  props.navigation.navigate("Register");
                }}
                className="text-blue-500"
              >
                Register
              </Text>
            </HStack>
            <Divider className="mt-3" orientation="vertical" />
            <HStack space="1" alignItems="center" className="mt-3">
              <Text
                onPress={() => {
                  props.navigation.navigate("PasswordReset");
                }}
                className="text-blue-500"
              >
                Forgot your password
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default LoginForm;
