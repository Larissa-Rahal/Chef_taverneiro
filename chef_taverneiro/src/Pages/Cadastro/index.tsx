import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./styleCadastro";
import background from "../../assets/images/Madeira.png";
import cadastro from "../../assets/images/balao_cadastrar.png";
import personagem from "../../assets/images/marcille.png";

const CadastroScreen = () => {
  return (
    <>
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
          <Text style={styles.cadastroText}>Já tenho cadastro</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={cadastro} style={styles.buttonImage} />
        </TouchableOpacity>

        <Image source={personagem} style={styles.elfImage} />
      </View>
    </>
  );
};

export default CadastroScreen;
