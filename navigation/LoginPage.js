import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  TextInput,
  StyleSheet,
  View,
} from 'react-native';



export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", 
      password: ""
    };
  }

  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <TextInput 
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          />
        <TextInput 
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    let response = await fetch('https://www.topjet.it/admin/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
      _username: this.state.username,
      _password: this.state.password,
      }),
    })

    let responseJson = await response.json();    
    if(response.status == 200 && responseJson.message != "Invalid credentials" ) {
      await AsyncStorage.setItem('X-Auth-Token', responseJson.token); //credo si salvi il token qui
      this.props.navigation.navigate('App');
    }
    else {
      alert('sbagliato');
    }
  };
}