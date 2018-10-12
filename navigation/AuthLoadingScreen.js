import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {

    try{
      const userToken = await AsyncStorage.getItem('X-Auth-Token');
      //alert(userToken);
      this.props.navigation.navigate(userToken ? 'App' : 'Auth'); //QUI VADO NELLA ROUTE APP O AUTH A SECONDA CHE ABBIA IL TOKEN SALVATO O MENO
    }
    catch (error) {
      alert(error);
    }
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.

    //attraverso this.props.navigation.navigate posso switchare i vari route
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}