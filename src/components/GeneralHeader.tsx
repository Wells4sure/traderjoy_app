import { View, Text } from "react-native";
import React from "react";
import { Box, Heading, Icon, IconButton, Stack, VStack } from "native-base";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

interface Props {
  title: string;
}
const GeneralHeader = ({ title }: Props) => {
  const navigation = useNavigation();
  return (
    <VStack
      space="2.5"
      py={1}
      className="bg-blue-900"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        space={3}
      >
        <IconButton
          variant="unstyled"
          icon={
            <Icon size="lg" color="blue.200" as={Entypo} name={"back"} />
          }
          color="blue.200"
          onPress={() => {
           navigation.goBack();
          }}
        />

        <Heading size="sm" className="text-white">{title}</Heading>
       <Box>
       </Box>
      </Stack>
    </VStack>
  );
};

export default GeneralHeader;
