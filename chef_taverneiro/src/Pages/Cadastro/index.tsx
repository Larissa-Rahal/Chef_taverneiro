import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styleCadastro";
import background from "../../assets/images/Pagina de Cadastro.png";
import cadastro from "../../assets/images/balao_cadastrar.png";

const CadastroScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground style={styles.loginBackground} source={background}>
      <View style={styles.loginContainer}>

        <View style={styles.loginInputContainer}>
          <TextInput
            placeholder="Login"
            placeholderTextColor="#fff"
            style={styles.loginInput}
          />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#fff"
            style={styles.loginInput}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#fff"
            secureTextEntry
            style={styles.loginInput}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginCadastroText}>Já tenho cadastro</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginImageContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
            <Image source={cadastro} style={styles.loginButtonImage} />
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
};

export default CadastroScreen;