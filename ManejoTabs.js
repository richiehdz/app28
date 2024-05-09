import React, {Component} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Usuario from './Usuario';
import Usuario1 from './Usuario1';
import Usuario2 from './Usuario2';


export default class ManejoTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const Tab = createBottomTabNavigator(); 
    return (
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'cyan',
        tabBarActiveBackgroundColor:'gray',
        tabBarInactiveTintColor:'black',
      }}
    >
      <Tab.Screen name="Inicio" component={Usuario} /*initialParams={{nombre:this.props.route.params.nombre}} */
      options={{
        
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color='black' size={size} />
        )
      }}
      
      />
      <Tab.Screen name="Videos" component={Usuario1} /*initialParams={{nombre:this.props.route.params.nombre}}*/
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="youtube" color='red' size={size} />
        )
      }}/>
      <Tab.Screen name="Musica" component={Usuario2} /*initialParams={{nombre:this.props.route.params.nombre}}*/
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="headphones" color='green' size={size} />
        )
      }}/>
      </Tab.Navigator>
    );
  }
}

