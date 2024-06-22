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
import { styles } from "./styleLogin";
import background from "../../assets/images/Pagina de Login.png";
import acessar from "../../assets/images/balao_acessar.png";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackRoutesParamList } from "../../Routes/StackRoutes";
import { GetAllUsers } from "../../services/jsonServerApi";
import { RootTabParamList } from "../../Routes/BottomTabRoutes";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type LoginScreenNavigationProp = StackNavigationProp<
  StackRoutesParamList,
  "ReceitaEspecifica"
>;

export type HomeScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Home'
>;

type UserDetailsProps = {
  id: string;
  nome: string;
  email: string;
  senha: string;
};

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleSubmit = async () => {
    try {
      const { data } = await GetAllUsers();
      const user = data.find(
        (u: UserDetailsProps) => u.email === email && u.senha === senha
      );

      if (user) {
        Alert.alert("Login realizado com sucesso!");
        navigation.navigate('Home');
      } else {
        Alert.alert("Usuário ou senha inválidos");
        handleZerar();
      }
    } catch (error) {
      console.error("Erro ao realizar login", error);
    }
  };

  const handleZerar = () => {
    setEmail("");
    setSenha("");
  };

  return (
    <ImageBackground style={styles.background} source={background}>
      <View style={styles.container}>
        <TextInput
          placeholder="Login"
          placeholderTextColor="#fff"
          style={styles.input}
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#fff"
          secureTextEntry
          style={styles.input}
          value={senha}
          onChangeText={(e) => setSenha(e)}
        />
        <View>
          <Text style={styles.signupText}>Não tem login?</Text>
          <Text>Cadastre-se</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Image source={acessar} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
