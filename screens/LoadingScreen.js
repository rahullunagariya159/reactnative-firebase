
import React from 'react';
import { StyleSheet, Text, View,Image, KeyboardAvoidingView,TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import * as firebase from "firebase";

export default class LoadingScreen extends React.Component {
  
  static navigationOptions = {
   header:null
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{

      if(user){
        this.props.navigation.navigate("Home");
      }
      else{
        this.props.navigation.navigate("login");
      }

    });
  }

  
  render(){
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large"  color="#d9534f" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    
  },
});
