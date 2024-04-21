import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';


export default class Usuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false
    };
  }

toggleOpen = () => {
  this.setState({ open: !this.state.open });
};
getGreeting() {
  const currentHour = new Date().getHours();
  if (currentHour >= 5 && currentHour < 13) {
    return "Buenos días";
  } else if (currentHour >= 13 && currentHour < 19) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}
drawerContent = () => {
  return (
    
    <View style={styles.animatedBox}>
    <Text stlye={{color:'black'}}>Bienvenido {this.props.route.params.nombre}</Text>
    <TouchableOpacity onPress={this.toggleOpen} >
    
       <Text>Close </Text> 
      
      
    </TouchableOpacity>
    </View>
  );
};
  render() {
    return (
<View style={styles.container}>
  
  <ImageBackground source={require('./assets/fondo_inicio.jpg')} style={{width:'100%', height:'100%'}}>
  
        <MenuDrawer
          open={this.state.open}
          position={'left'}
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
          
        >
          <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
            <Text style={{color:'white'}}>Open</Text>
          </TouchableOpacity>
          <View style={{flex: 1}}>
          <View style={{flex: 1}}>

          <Text style={{color:'#560000', fontSize:50}}>{this.getGreeting()} {this.props.route.params.nombre}</Text>
        </View>
        <View style={{flex: 1,marginTop:-550}}>
  <ScrollView>
    <Image source={require('./assets/elecciones2024.jpg')} style={{marginLeft:'10%',marginTop:'10%',width: 300, height: 200}} />
    <Image source={require('./assets/candidatos.png')} style={{marginLeft:'10%',marginTop:'10%',width: 300, height: 200}} />
    <Image source={require('./assets/votolibre.jpg')} style={{marginLeft:'10%',marginTop:'10%',width: 300, height: 200}} />
    <Image source={require('./assets/fechaselecciones.jpg')} style={{marginLeft:'10%',marginTop:'10%',width: 300, height: 400}} />
    <View style={{height:70}}>

    </View>
  </ScrollView>
</View>
        </View>
        </MenuDrawer>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    zIndex: 0
  },
  animatedBox: {
    height:30,
    flex: 1,
    backgroundColor: "#38C8EC",
    padding: 10
  },
  body: {
    width:'100%',
    height:30,
    backgroundColor: '#F04812'
  }
})