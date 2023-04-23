import { View, Text } from "react-native";
import React from "react";
import { Heading, Icon, IconButton, Stack, VStack } from "native-base";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

interface Props {
  title: string;
}
const HomeHeader = ({ title }: Props) => {
  const navigation = useNavigation();
  return (
    <VStack space="2.5" py={1} px={0}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        space={3}
      >
        <IconButton
          variant="unstyled"
          icon={
            <Icon size="lg" color="coolGray.800" as={Entypo} name={"menu"} />
          }
          color="coolGray.800"
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        />

        <Heading size="sm">{title}</Heading>
        <IconButton
          variant="unstyled"
          icon={
            <Icon
              size="md"
              color="coolGray.800"
              as={Ionicons}
              name={"power-outline"}
            />
          }
          color="coolGray.800"
          onPress={() => {}}
        />
      </Stack>
    </VStack>
  );
};

export default HomeHeader;
