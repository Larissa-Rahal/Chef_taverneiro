import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styleCadastro";
import background from "../../assets/images/Pagina de Cadastro.png";
import cadastro from "../../assets/images/balao_cadastrar.png";
import personagem from "../../assets/images/marcille.png";

const CadastroScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground style={styles.background} source={background}>
      <View style={styles.container}>

        <View style={styles.inputContainer}>
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
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.cadastroText}>Já tenho cadastro</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Image source={cadastro} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
};

export default CadastroScreen;