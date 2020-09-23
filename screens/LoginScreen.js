import React from 'react';
import { StyleSheet, Text, View,Image, KeyboardAvoidingView,TouchableOpacity,Alert } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import * as firebase from "firebase";


export default class LoginScreen extends React.Component {
  
  static navigationOptions = {
    title:"Sign In"
  }

  state = {
    email:"",
    password:""
  }

  userSignIn(email,password){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
          this.props.navigation.replace("Home");
    })
    .catch(error=>{
       Alert.alert(error.message);
    })
}


  render(){
        return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
           
          <View style={{alignItems:"center"}}>
              
            <Image 
              source={require("../assets/logo-signup.jpg")}
              style={{width:280,height:200,borderRadius:100}}
            />

          </View>

            
           <Item floatingLabel style={{borderBottomColor:"#d9534f"}}>
              <Label>Email id</Label>
              <Input 
                value={this.state.email}
                onChangeText={(text)=>this.setState({email:text})}
              />
            </Item>

            <Item floatingLabel style={{borderBottomColor:"#d9534f"}}>
              <Label>Password</Label>
              <Input 
              secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text)=>this.setState({password:text})}
              />
            </Item>

            <Button full rounded danger style={{margin:10,justifyContent:"center"}} onPress={this.userSignIn(this.state.email,this.state.password)}>
              <Text style={{fontSize:22,color:'white'}}>Sign up</Text>
            </Button>
        
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>
            <Text style={{textAlign:'center'}}>don't have an account ?</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding:10
  },
});
