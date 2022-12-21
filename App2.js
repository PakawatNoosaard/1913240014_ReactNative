import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import HomePost from "./screens/HomePost";
import CreatePost from "./screens/CreatePost";
import FirstPage from "./screens/FirstPage";
import SecondPage from "./screens/SecondPage";
import IPage from "./pages/IPage";
import IIPage from "./pages/IIPage";
import IIIPage from "./pages/IIIPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName="Home"
       screenOptions={{
        headerStyle:{
          backgroundColor :'#66cdaa'
        },
        headerTintColor:'#ffff',
        headerTitleStyle:{
          fontWeight:'bold'
        }
       }}
      >
{/*     <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} /> 
        <Stack.Screen name="HomePost" component={HomePost} />
        <Stack.Screen name="CreatPost" component={CreatePost} /> 
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} /> */}
        <Stack.Screen name="IPage" component={IPage} />
        <Stack.Screen name="IIPage" component={IIPage} />
        <Stack.Screen name="IIIPage" component={IIIPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

