import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,createAppContainer } from "react-navigation"
import SignupScreen from './screens/Signup';
import LoginScreen from "./screens/LoginScreen"
import LoadingScreen from "./screens/LoadingScreen"
import HomeScreen from "./screens/HomeScreen"

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

const mystack = createStackNavigator({
  loading:LoadingScreen,
  login:LoginScreen,
  Home:HomeScreen,
  Signup:SignupScreen
},
{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'#d9534f',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }
})

export default createAppContainer(mystack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
