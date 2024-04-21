import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MenuDrawer from 'react-native-side-drawer'
import TrackPlayer from 'react-native-track-player';
import { WebView } from 'react-native-webview';

const SPOTIFY = 'https://www.spotify.com/';
export default class Usuario2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false
    };
  }
//<text><text/>
toggleOpen = () => {
  this.setState({ open: !this.state.open });
};
//<Text>Bienvenido {this.props.route.params.varnombre}</Text>
drawerContent = () => {
  return (
    
    <View style={styles.animatedBox}>
    <Text stlye={{color:'black'}}>Bienvenido {this.props.route.params.nombre}</Text>
    <TouchableOpacity onPress={this.toggleOpen} >
    
      <Text>Close</Text>
    </TouchableOpacity>
    </View>
  );
};
  render() {
    return (
<View style={styles.container}>
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
          <View style={{width:'100%',height:'97%'}}>
          <WebView
            source={{uri:SPOTIFY}}
            onLoad={console.log('spotify loaded')}
          >
            </WebView>
         </View>
        </MenuDrawer>
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