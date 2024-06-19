import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { styles } from './styleLogin'
import background from '../../src/assets/images/Madeira.png';
import personagem from '../../assets/images/Orc.png'

const LoginScreen = () => {
  return (
    <ImageBackground 
      source={background} 
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Chef Taberneiro</Text>
        </View>
        
        <TextInput
          placeholder="Login"
          placeholderTextColor="#fff"
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#fff"
          secureTextEntry
          style={styles.input}
        />
        
        <Text style={styles.signupText}>Não tem login? Cadastre-se</Text>
        
        <TouchableOpacity style={styles.button}>
          < style={styles.buttonText}/>
        </TouchableOpacity>
        
        <Image 
          source={personagem} 
          style={styles.orcImage} 
        />
      </View>
    </ImageBackground>
  );
};


export default LoginScreen;