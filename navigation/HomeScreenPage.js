import React from 'react';
import {
  Text,
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
//import 'react-push-menu/styles/component.css';
//import PushMenu from 'react-push-menu';
import {Token} from './Token';


export default class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View>
        <Button title="Show me more of the app pluto" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        <Text>{Token}</Text>
      </View>
    );
  }

  _showMoreApp = () => {
    console.log(AsyncStorage.getItem('X-Auth-Token'));
    //this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}