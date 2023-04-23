import {
  View,
  Dimensions,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Home from "../../Screens/Home";
import { HomeStackParamList } from "../../types/navigation";
import {
  Box,
  HStack,
  Avatar,
  Text,
  VStack,
  Link,
  Image,
  Divider,
} from "native-base";
import ToggleDarkMode from "../../components/ColorSwitchComponent";
import {
  FontAwesome5,
  Entypo,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { DrawerHeaderBackground, UserIcon } from "../../../assets/images";
import Pos from "../../Screens/Pos";

const Drawer = createDrawerNavigator<HomeStackParamList>();
const SCREEN_HEIGHT = Dimensions.get("screen").height;

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <Box className="p-5 h-full relative flex flex-col justify-between">
        <Box className="">
          <ImageBackground style={userSection} source={DrawerHeaderBackground}>
            <Image
              size={70}
              borderRadius={100}
              source={UserIcon}
              alt="Alternate Text"
            />
            <Text style={nameText}>Wellington Chanda</Text>
          </ImageBackground>
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome5 name="home" size={size} color={color} />
            )}
            label="Home"
            style={drawerSection}
            activeTintColor="#4b5563"
            labelStyle={{ color: "#4b5563" }}
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Entypo name="shopping-cart" size={size} color={color} />
            )}
            label="POS"
            style={drawerSection}
            activeTintColor="#4b5563"
            labelStyle={{ color: "#4b5563" }}
            onPress={() => {
              props.navigation.navigate("Pos");
            }}
          />
        </Box>

        <HStack
          className={
            "py-2 rounded-xl border flex items-center justify-center " +
            "border-gray-600"
          }
        >
          <MaterialIcons name="logout" size={18} color={"#4b5563"} />
          <Text className={"ml-2 text-center text-lg " + "text-gray-600"}>
            Logout
          </Text>
        </HStack>
      </Box>
    </DrawerContentScrollView>
  );
};

const DrawerStack = () => {
  const dimension = useWindowDimensions();
  const isLargeScreen = dimension.width >= 768;
  return (
    <Drawer.Navigator
      defaultStatus="closed"
      screenOptions={{
        drawerType: "front",
      }}
      drawerContent={(props: any) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="ios-home" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Pos"
        component={Pos}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="cash" size={size} color={color} />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 0,
  },
  userSection: {
    height: SCREEN_HEIGHT * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 200,
    borderRadius: 10,
    backgroundColor: "#EFF2F7",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButtonText: {
    textAlign: "center",
    display: "flex",
    fontWeight: "bold",
  },
  nameText: {
    marginTop: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  editContact: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    height: 50,
    width: 50,
  },
});

const {
  drawerSection,
  userSection,
  button,
  logoutButtonText,
  nameText,
  editContact,
  buttonContainer,
  icon,
} = styles;

export default DrawerStack;
