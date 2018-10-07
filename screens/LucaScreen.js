import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", 
      password: ""
    };
  }
  static navigationOptions = {
    header: null,
  };

  userLogin() {
    console.log(this.state);

    fetch('https://www.topjet.it/admin/login', {
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
    .then((response) => response.json())
    .then((responseJson) => {
        if(response.error) {
          this.setState({message: response.message})
        }
        else {
          console.log(responseJson);
          this.state.message = response.message;
        }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput 
                  onChangeText={(username) => this.setState({username})}
                  value={this.state.username}
                  />
                <TextInput 
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                />
                <View style={{margin:7}} />
                <Button onPress={() => this.userLogin()} title="Submit"/>
                  </ScrollView>
    );
  }
};
