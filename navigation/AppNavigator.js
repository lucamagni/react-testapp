import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';



//import MainTabNavigator from './MainTabNavigator';
//devo importare le schermate da visualizzare
import AuthLoadingScreen from './AuthLoadingScreen';
import SignInScreen from './LoginPage';
import HomeScreen from './HomeScreenPage';

//info su Stack Navigator -> https://reactnavigation.org/docs/en/stack-navigator.html

const AppStack = createStackNavigator({HomeScreen:HomeScreen});
//il primo valore è il nome che diamo al routing, il secondo valore dopo i due punti è il nome del componente
const AuthStack = createStackNavigator({SignInScreen: SignInScreen});

export default createSwitchNavigator({
  //qui, attraverso lo SwitchNavigator, posso gestire i routing e indirizzare dove voglio le schermate
  //lo scopo dello SwitchNavigator è di far visualizzare uno screen alla volta e resettare i routes e le azioni una volta che si passa da uno all'altro, mentre lo stack navigator posso implementare più screen e tra uno switch e l'altro rimangono salvate le azioni
  AuthLoading: AuthLoadingScreen,
  //Main: MainTabNavigator,
  App: AppStack,
  Auth: AuthStack,
},
{
	initialRouteName: 'AuthLoading',
}
)