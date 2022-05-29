import React from "react";
// import {Text,View} from "react-native" ;
// import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./app/screen/HomeScreen";
import AboutScreen from "./app/screen/AboutScreen";

// import { View, Text, ActivityIndicator } from "react-native";
// import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";

const Stack=createStackNavigator()
console.log(Stack);

// const HomeScreen = () => {
//   return(
//     <View>
//       <Text style = {{fontSize:30}} >Home Screen</Text>
//     </View>
//   )
// }
// const AboutScreen = () => {
//   return(
//     <View>
//       <Text style = {{fontSize:30}} >About Screen</Text>
//     </View>
//   )
// }
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="About">
        <Stack.Screen name="About" component={AboutScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}