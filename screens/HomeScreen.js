
import React, { useReducer } from 'react';
import { StyleSheet, Text, View,Image, KeyboardAvoidingView,TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import * as firebase from "firebase";


export default class HomeScreen extends React.Component {
  
    state = {
        email:""
    }

  static navigationOptions = {
    title:"Home"
  }

  componentDidMount(){
    this.unsubscribeAuth = firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setState({
          email:user.email
        })
      }
      else{
        this.props.navigation.replace("login");
      }
    })
  }

  userSignOut(){
    firebase.auth().signOut()
    .catch(error=>{
      Alert.alert(error.message);
    })
  }

  componentWillUnmount(){
      this.unsubscribeAuth();
  }

  render(){
        return (
            <View style={styles.container}>
                <Text style={{textAlign:"center"}}>You are logged in as {this.state.email}</Text>

            <Button full rounded danger style={{margin:10,justifyContent:"center"}} onPress={()=>this.userSignOut()}>
              <Text style={{fontSize:22,color:'white'}}>Logout</Text>
            </Button>
        
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
