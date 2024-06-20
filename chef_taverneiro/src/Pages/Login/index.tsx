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
import background from "../../assets/images/Madeira.png";
import personagem from "../../assets/images/Orc.png";
import acessar from "../../assets/images/balao_acessar.png";
import { Link } from "@react-navigation/native";

const LoginScreen = () => {
  return (
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
        <View>
          <Text style={styles.signupText}>Não tem login?</Text>

          <Text>Cadastre-se</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Image source={acessar} />
        </TouchableOpacity>
        <Image source={personagem} style={styles.orcImage} />
      </View>
  );
};

export default LoginScreen;
