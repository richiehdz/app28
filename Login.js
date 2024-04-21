// import { Button,Input,Icon } from '@rneui/base';
import { Button,Input } from '@rneui/themed';
import Icon from "react-native-vector-icons/FontAwesome";
import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
//import icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Usuario from './Usuario';
// import Usuario from './ManejoTabs';
//checar que 'Usuario' sea el correcto
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    siono:0,
    correo:'',
    password:'',
    correoRegistar:'',
    passwordRegistrar:'',
    nombreRegistar:'',
    };
  }
//El boton de Entrar ponerlo solo cuando se vean los campos del login y ocultarlo cuando se vean los campos de Alta
//El '1', '2' o '3' del xhttp son del SCRIPT no del estado de 'siono'

//crear tabla 'datos' con 4 elementos, id int10 se comparte con los ids creados en la otra tabla, nombre varchar70, direccion varchar70 y telefono varchar12
  render() {
    const login= () =>{
      console.log("login");
        this.setState({siono:1});
    }
    const alta = () =>{
        this.setState({siono:2});
    }
    const registrar = () =>{
      this.setState({siono:10});
      
  }
  const Entrar=()=>{
    let _this=this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
      console.log("entrar");
      if(this.readyState==4 && this.status==200){
        var response = JSON.parse(xhttp.responseText);
        if(response.status === "1"){
          console.log("entro");
          // Navega a la siguiente pantalla y pasa el nombre del usuario
          _this.props.navigation.navigate("USUARIO", { nombre: response.nombre });
        }
        if(xhttp.responseText==="0"){
          //mal password
          console.log("malpassword");
          Alert.alert('Error','Password erroneo, intenta de nuevo',[
            {text:'OK',onPress:()=>console.log('OK Pressed')},
          ]);
        }
        if(xhttp.responseText==="3"){
          //mal correo
          console.log("malcorreo");
          Alert.alert('Error','Correo erroneo, registrate para ingresar',[
            {text:'OK',onPress:()=>console.log('OK Pressed')},
          ]);
        }
      }
    }
    xhttp.open("GET", "https://equisdedez.000webhostapp.com/login.php?correo="+this.state.correo+"&password="+this.state.password, true);
    xhttp.send();
  }
  
    /*
      switch(xhttp.responseText){
        case 0:
          Alert.alert('Error)

          break;
        case 1:

        break;
        case 2:

        break;
        case 3:
Alert.alert('Error','Registrate, para ingresar',[
    {text:'OK', onPress:()=>console.log('OK PRESSED')},
]);
        break;
        default: _this.props.navigation.navigate("Usuario",(varnombre:xhttp.responseText));
        break;
      }


    */
    return (
      <View>
        <ImageBackground source={require('./assets/HugeDomains_com.jpg')} style={{width:'100%', height:'100%'}}>
        
      <Button
      title="Login"
      icon={{
        name:"arrow-right",
        size:18,
        color: 'white',
        type: 'font-awesome',
        }}
      iconRight
      iconContainerStyle={{marginLeft:10}}
      titleStyle={{fontWeight:'700'}}
      buttonStyle={{
        backgroundColor:'rgba(199, 43, 98, 1)',
        borderColor:'transparent',
        borderWidth:0,
        borderRadius:30,
      }}
      containerStyle={{
        width:200,
        marginTop:600,
        marginLeft:100,
      }}onPress={login}
      >
      </Button>
      
      <Button
      title='Alta'
      //icon={<Icon name="arrow-right" color="white" size={18} />}
      icon={{
      name:"arrow-right",
      size:18,
      color: 'white',
      type: 'font-awesome',
      }}
      iconRight
      iconContainerStyle={{marginLeft:10}}
      titleStyle={{fontWeight:'700'}}
      buttonStyle={{
        backgroundColor:'rgba(199, 43, 98, 1)',
        borderColor:'transparent',
        borderWidth:0,
        borderRadius:30,
      }}
      containerStyle={{
        width:200,
        marginTop:30,
        marginLeft:100,
      }} onPress={alta}
      >
      </Button>

{this.state.siono===1?<View>
    <View style={{marginTop:-500}}>
    <Input style={{color:'white'}}
    placeholder='Correo'
    placeholderTextColor='white'
    onChangeText={var1=>this.setState({correo:var1})}
    leftIcon={{type:'font-awesome',name:'envelope',color:'white'}}
    >
    </Input>

    <Input style={{color:'white'}}
    placeholder='Password'
    placeholderTextColor='white'
    onChangeText={var1=>this.setState({password:var1})}
    leftIcon={{type:'font-awesome',name:'lock',color:'white'}}
    secureTextEntry={true}
    >
    </Input>

    <View style={{marginTop:30,width:100,height:60,marginLeft:150}}> 

<Button radius ={"sm"} type='solid' onPress={Entrar}>
Entrar
<Icon name="arrow-right" color="white" style={{ marginLeft: 10 }}/>

</Button>
</View>

    </View>
</View>:''}
{this.state.siono===2?<View>
  <View style={{marginTop:-500}}>
  <Input style={{color:'white'}}
    placeholder='Nombre'
    
    placeholderTextColor='white'
    onChangeText={var1=>this.setState({nombreRegistar:var1})}
    leftIcon={{type:'font-awesome',name:'user',color:'white'}}
    >
    </Input>
    <Input style={{color:'white'}}
    placeholder='Correo'
    placeholderTextColor='white'
    onChangeText={var1=>this.setState({correoRegistrar:var1})}
    leftIcon={{type:'font-awesome',name:'envelope',color:'white'}}
    >
    </Input>

    <Input style={{color:'white'}}
    placeholder='Password'
    
    placeholderTextColor='white'
    onChangeText={var1=>this.setState({passwordConfirm:var1})}
    leftIcon={{type:'font-awesome',name:'lock',color:'white'}}
    >
    </Input>
    <Input style={{color:'white'}}
    placeholder='Confirm password'
    
    placeholderTextColor='white'
    onChangeText={var1=>this.setState({passwordRegistrar:var1})}
    leftIcon={{type:'font-awesome',name:'lock',color:'white'}}
    >
    </Input>
    <View style={{width:100,height:60,marginLeft:150}}> 

<Button radius ={"sm"} type='solid' onPress={registrar}>
Registrar
<Icon name="arrow-right" color="white" style={{ marginLeft: 5 }}/>

</Button>
</View>

    </View>

</View>:''}
        </ImageBackground>
      </View>
    );
  }
}
