import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./src/components/NativeBaseIcon";
import ToggleDarkMode from "./src/components/ColorSwitchComponent";
import MainNav from "./src/Navigation/MainNav";
import 'react-native-gesture-handler';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg="blueGray.500"
        _text={{
          color: "white",
        }}
        safeAreaTop
        width="100%"
      >
        <MainNav />
      </Box>
    </NativeBaseProvider>
  );
}

// Color Switch Component
