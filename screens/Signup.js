import React from 'react';
import { StyleSheet, Text, View,Image, KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
// import { TouchableOpacity } from 'react-native-gesture-handler';


export default class SignupScreen extends React.Component {
  
  static navigationOptions = {
    title:"Sign up"
  }

  state = {
    email:"",
    password:""
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

            <Button full rounded danger style={{margin:10,justifyContent:"center"}}>
              <Text style={{fontSize:22,color:'white'}}>Sign up</Text>
            </Button>
        
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("login")}>
            <Text style={{textAlign:'center'}}>already have an account ?</Text>
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
