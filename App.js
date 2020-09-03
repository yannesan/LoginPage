import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import bgImage from './Images/background.jpg'
import logo from './Images/logo.png'
import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')

//Utilisation de ImageBackground et source pour poser une image de fond

export default class  App extends Component {

  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }

    showPass = () => {
      if (this.state.press == false ){
        this.setState({ showPass: false, press: true})
      } else {
        this.setState({ showPass: true, press: false})
      }
    }


  render() {
  return (
    <ImageBackground source={bgImage} style={styles.BackgroundContainer}>
      <View style={styles.logoContainer}>
      <Image source={logo} style={styles.logo}></Image>
      
      </View>

      <View style={styles.InputContainer}>
        <Icon name={'ios-person'} size={28} color={'pink'}  style={styles.inputIcon}/>
        <TextInput
        style={styles.input}
        placeholder={'Username'}
        placeholderTextColor={'white'}
        underlineColorAndroid='transparent'
        />
      </View>

      <View style={styles.InputContainer}>
        <Icon name={'ios-lock'} size={28} color={'pink'}  style={styles.inputIcon}/>
        <TextInput
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry={this.state.showPass}
        placeholderTextColor={'white'}
        underlineColorAndroid='transparent'
        />

        <TouchableOpacity style={styles.buttonEye} onPress={this.showPass.bind(this)}>
          <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off' } size={28} color={'pink'} />
         </TouchableOpacity>

         <TouchableOpacity style={styles.buttonLogin}>
         <Text style={styles.text}>Login</Text>
         </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  BackgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  logo: {
    width: 170,
    height: 170,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  TextLogo: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 1
  },
  InputContainer: {
    marginTop: 10
  }, 

  input: {
    width: WIDTH -100,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    marginHorizontal: 25,
    opacity: 0.5
  },

  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37
  },
  buttonEye:{
    position: 'absolute',
    top: 8,
    right: 37
  },
  buttonLogin:{
    width: WIDTH - 150,
    left: 50,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'pink',
    justifyContent: 'center',
    marginTop: 20
  },

  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  }


});
