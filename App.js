import { View, Text, Button } from "react-native";
import React from "react";
import { createDrawerNavigator, DrawerContentScrollView,
         DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IPage from "./pages/IPage";
import IIPage from "./pages/IIPage";
import IIIPage from "./pages/IIIPage";

const Stack = createNativeStackNavigator();

const IStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="IPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IPage" component={IPage} />
    </Stack.Navigator>
  );
};
const IIStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="IIPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IIPage" component={IIPage} />
      <Stack.Screen name="IIIPage" component={IIIPage} />
    </Stack.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#b0e0e6",
          width: 240,
        },
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="IPage"
        component={IStack}
        options={{ title: "First Stack", drawerLabel: "First Page Option" }}
      />
      <Drawer.Screen
        name="IIPage"
        component={IIStack}
        options={{ title: "Second Stack", drawerLabel: "Second Page Option" }}
      />
    </Drawer.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;

