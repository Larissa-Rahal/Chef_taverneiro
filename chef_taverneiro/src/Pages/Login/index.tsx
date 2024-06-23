import React, { useState } from "react";
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

export type LoginScreenNavigationProp = StackNavigationProp<
  StackRoutesParamList,
  "ReceitaEspecifica"
>;

export type BottomTabsNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "BottomTabs"
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
  const navigation = useNavigation<BottomTabsNavigationProp>();

  const handleSubmit = async () => {
    navigation.navigate("Home");
    try {
      const { data } = await GetAllUsers();
      const user = data.find(
        (u: UserDetailsProps) => u.email === email && u.senha === senha
      );

      if (user) {
        Alert.alert("Login realizado com sucesso!");
        navigation.navigate("BottomTabs");
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
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>
        <TextInput
          placeholder="E-mail"
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
        <Pressable>
          <Text style={styles.signupText}>Não tem login?</Text>
<<<<<<< HEAD
        <Link to={{ screen: '/CadastroScreen'}}>
          <TouchableOpacity>
            <Text style={styles.cadastroButton}>Cadastre-se</Text>
          </TouchableOpacity>
        </Link>
        </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Image source={acessar} />
          </TouchableOpacity>
=======
          <Text>Cadastre-se</Text>
        </Pressable>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Image source={acessar} />
        </TouchableOpacity>
>>>>>>> 816a15418ba984b9ab3d696ef8e8977b7eeb72c9
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
