import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';



//import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from './AuthLoadingScreen';
import SignInScreen from './LoginPage';
import HomeScreen from './HomeScreenPage';

const AppStack = createStackNavigator({HomeScreen:HomeScreen});
const AuthStack = createStackNavigator({SignInScreen: SignInScreen});

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //Main: MainTabNavigator,
  App: AppStack,
  Auth: AuthStack,
},
{
	initialRouteName: 'AuthLoading',
}
)