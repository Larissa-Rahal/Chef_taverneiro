import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styleCadastro";
import background from "../../assets/images/Pagina de Cadastro.png";
import cadastro from "../../assets/images/balao_cadastrar.png";
import api from "../../services/api/api";
import { PostUser } from "../../services/jsonServerApi/index";;
import { StackNavigationProp } from "@react-navigation/stack";
import { StackRoutesParamList } from "../../Routes/StackRoutes";

export type CadastroScreenNavigationProp = StackNavigationProp<
StackRoutesParamList,
  'CadastroScreen'
>;


const CadastroScreen = () => {
  const navigation = useNavigation<CadastroScreenNavigationProp>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await api.post("/users", {
        nome: name,
        email: email,
        senha: password,
      });
      console.log("Usuário cadastrado com sucesso:", response.data);

      setName("");
      setEmail("");
      setPassword("");
      Alert.alert("Usuário cadastrado com sucesso!");
      if (response.status === 201) {
        navigation.navigate("LoginScreen");
        console.log(response)
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      Alert.alert('Erro ao cadastrar usuário!');
    }
  };

  return (
    <ImageBackground style={styles.loginBackground} source={background}>
      <View style={styles.loginContainer}>
        <View style={styles.loginInputContainer}>
          <TextInput
            placeholder="Nome"
            placeholderTextColor="#fff"
            style={styles.loginInput}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#fff"
            style={styles.loginInput}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#fff"
            secureTextEntry
            style={styles.loginInput}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.loginCadastroText}>Já tenho cadastro</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginImageContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
            <Image source={cadastro} style={styles.loginButtonImage} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CadastroScreen;