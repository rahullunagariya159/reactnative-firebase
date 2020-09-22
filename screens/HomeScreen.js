
import React from 'react';
import { StyleSheet, Text, View,Image, KeyboardAvoidingView,TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';



export default class HomeScreen extends React.Component {
  
    state = {
        email:""
    }

  static navigationOptions = {
    title:"Home"
  }

  
  render(){
        return (
            <View style={styles.container}>
                <Text style={{textAlign:"center"}}>You are logged in as {}</Text>

            <Button full rounded danger style={{margin:10,justifyContent:"center"}}>
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
