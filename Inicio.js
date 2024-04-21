import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';  
import Usuario from './ManejoTabs';


export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
        const Stack= createNativeStackNavigator();


    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="INICIO" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='USUARIO' component={Usuario} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
