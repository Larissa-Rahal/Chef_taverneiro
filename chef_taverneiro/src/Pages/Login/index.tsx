import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { styles } from "./styleLogin";
import background from "../../assets/images/Pagina de Login.png";
import personagem from "../../assets/images/Orc.png";
import acessar from "../../assets/images/balao_acessar.png";

const LoginScreen = () => {
  return (
    <ImageBackground style={styles.background} source={background}>
      <View style={styles.container}>
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
        <View>
          <Text style={styles.signupText}>Não tem login?</Text>

          <Text>Cadastre-se</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Image source={acessar} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
