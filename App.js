import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "./components/Information";
import Practice1_StyleSheet from "./components/Practice1_StyleSheet";
import Welcome from "./components/Welcome";
import TxtInput from "./components/TxtInput";
import CustomComponent from "./components/CustomComponent";
import Logo from "./components/Logo";
import LotsOfGreeting from "./components/LotsOfGreeting";
import MyCustomTextWith from "./components/MyCustomTextWith";
import Count from "./components/Count";
import TxtInput1 from "./components/TxtInput1";
import UserNamePassword from "./components/UserNamePassword";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Information/> */}
      {/* <Welcome/> */}
      {/* <Practice1_StyleSheet /> */}
      {/* <TxtInput/> */}
      
      {/* <CustomComponent/> */}
      {/* <Logo/> */}
      {/* <LotsOfGreeting/> */}
      {/*<MyCustomTextWith />*/}
      {/*<Count/>*/}
      {/*<TxtInput1/>*/}
      <UserNamePassword/>
    </View>
  );
};

const styles = StyleSheet.create(
  {
      container:{flex:1 , justifyContent:'center', alignItems:'center'}
  }
)

export default App;


