import { View, Text, Pressable } from "react-native";
import React from "react";
import { Box, Button, Checkbox, HStack, Icon, VStack } from "native-base";
import InputForm from "../../../components/InputForm";
import SelectForm from "../../../components/SelectForm";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthStackParamList } from "../../../types/navigation";
import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  navigation: NativeStackNavigationProp<
    AuthStackParamList,
    "Register",
    undefined
  >;
  route: RouteProp<AuthStackParamList, "Register">;
};

const RegistrationForm = (props: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [businessName, setBusinessName] = React.useState<string>("");
  const [country, setCountry] = React.useState<string>("");
  const [terms, setTerms] = React.useState<boolean>(false);
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
          <InputForm
            placeholder={"Business Name"}
            type={"text"}
            value={businessName}
            name={"Business Name"}
            required={true}
            onChange={(e) => {
              setBusinessName(e.nativeEvent.text);
            }}
          />
          <SelectForm
            placeholder={"Country"}
            selectItems={[]}
            value={country}
            name={"Country"}
            onValueChange={(itemValue) => {
              setCountry(itemValue);
            }}
          />
          <HStack space={6} mt={4}>
            <Checkbox
              shadow={2}
              value={terms.toString()}
              accessibilityLabel="tos"
              onChange={(e) => {
                setTerms(!terms);
              }}
              isChecked={terms}
            >
              I accept the terms & conditions
            </Checkbox>
          </HStack>
          <Button
            className="mt-10 rounded-lg bg-mainColour"
            onPress={() => {
              console.log("Register");
            }}
          >
            <Text className="text-lg text-white">Register</Text>
          </Button>
          <HStack space="1" alignItems="center" className="mt-3">
            <Text className="text-gray-900">Already have an account?</Text>
            <Text
              onPress={() => {
                props.navigation.navigate("Login");
              }}
              className="text-blue-500"
            >
              Log in
            </Text>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default RegistrationForm;
