import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import ProfileScreen from "./ProfileScreen";
import { SavedReceipt } from "./SavedReceipt";
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
  Flex,
  Spacer,
  FormControl,
  Input,
  Button,
  Image,
  View,
  AspectRatio,
  Stack,
  ScrollView,
} from "native-base";
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
import Card from "../components/Card";
import HCard from "../components/HCard";
export function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        overflowX: "hidden",
      }}
      direction="column"
      bg="#181818"
    >
      <Box
        maxWidth="100%"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <HCard />
      </Box>
      <Box
        _web={{
          overflowX: "hidden",
          display: "none",
        }}
        mt={{
          base: "5",
          md: "0",
        }}
        flex={1}
        flexDirection="row"
        mx={{
          base: 5,
          md: 20,
        }}
        flexWrap="wrap"
        justifyContent={{
          md: "space-between",
          base: "center",
        }}
        alignItems="center"
      >
        <ScrollView
          h="auto"
          w={{
            base: "100",
            md: "0",
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </Box>

      <Box
        _android={{
          display: "none",
        }}
        mt={{
          base: "5",
          md: "0",
        }}
        flex={1}
        flexDirection="row"
        mx={{
          base: 5,
          md: 20,
        }}
        flexWrap="wrap"
        justifyContent={{
          md: "space-between",
          base: "center",
        }}
        alignItems="center"
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>

      {/* <Flex
          flex={1}
          bg="yellow.500"
          direction={["row", "column"]}
          justifyContent="space-between"
          m="10"
          mx="20"
          flexWrap="wrap"
          _dark={{
            borderColor: "primary",
            backgroundColor: "success",
          }}
          _light={{
            backgroundColor: "success",
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex> */}
    </View>
  );
}
