import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  Pressable,
} from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import { styles } from "./styleLogin";
import background from "../../assets/images/Pagina de Login.png";
import acessar from "../../assets/images/balao_acessar.png";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackRoutesParamList } from "../../Routes/StackRoutes";
import { GetAllUsers } from "../../services/jsonServerApi";
import { RootTabParamList } from "../../Routes/BottomTabRoutes";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import UserContext from "../../context/userContext";

export type BottomTabsNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "BottomTabs"
>;

export type CadastroScreenNavigationProp = StackNavigationProp<
  StackRoutesParamList,
  "CadastroScreen"
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
  const navigation = useNavigation<CadastroScreenNavigationProp>();
  const { setUsuario } = useContext(UserContext);

  const handleSubmit = async () => {
    try {
      const { data } = await GetAllUsers();
      const user = data.find(
        (u: UserDetailsProps) => u.email === email && u.senha === senha
      );

      if (user) {
        Alert.alert("Login realizado com sucesso!");
        navigation.navigate("BottomTabs");
        setUsuario(user);
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
    <ImageBackground source={background} style={styles.loginBackground}>
      <View style={styles.loginContainer}>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#fff"
          style={styles.loginInput}
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#fff"
          secureTextEntry
          style={styles.loginInput}
          value={senha}
          onChangeText={(e) => setSenha(e)}
        />
        <TouchableOpacity onPress={() => navigation.navigate("CadastroScreen")}>
          <Text style={styles.loginCadastroButton}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
        <Image source={acessar} />
      </TouchableOpacity>

      </View>

    </ImageBackground>
  );
};

export default LoginScreen;
