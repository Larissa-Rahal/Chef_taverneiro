import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import {styles} from './styleCadastro'
import background from "../../src/assets/images/Madeira.png";
import cadastro from "../../assets/images/balao_cadastrar.png";
import personagem from '../../assets/images/marcille.png'

const SignupScreen = () => {
  return (
    <ImageBackground 
      source={background} 
      style={styles.background}
    >
      <View style={styles.container}>
        <TextInput
          placeholder="Login"
          placeholderTextColor="#fff"
          style={styles.input}
        />
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#fff"
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#fff"
          secureTextEntry
          style={styles.input}
        />
        
        <Text style={styles.signupText}>Ja tenho cadastro</Text>
        
        <TouchableOpacity style={styles.button}>
          <Image source={cadastro}/>
        </TouchableOpacity>
        
        <Image 
          source={personagem} 
          style={styles.elfImage} 
        />
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;