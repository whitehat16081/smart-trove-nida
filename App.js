import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from "./screens/Login"
import WelcomeScreen from './screens/WelcomeScreen'

export default function App() {
  return (
    <AppContainer/>
  );
}

const stackNavigator = createStackNavigator({
  WelcomeScreen : {
    screen:WelcomeScreen,
    navigationOptions:{
      headerShown : false
    }},
    LoginScreen:{
    screen: LoginScreen,
    navigationOptions:{
      headerShown : false
    }},
  SearchScreen:{
    screen: SearchScreen,
    navigationOptions:{
      headerShown : false
    }},
    
})
const stackNavigator1 = createStackNavigator({
  WelcomeScreen : {
    screen:WelcomeScreen,
    navigationOptions:{
      headerShown : false
    }},
  LoginScreen:{
    screen: LoginScreen,
    navigationOptions:{
      headerShown : false
    }}
})

const AppContainer =  createAppContainer(stackNavigator);
