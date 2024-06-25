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
      const response = await PostUser({ nome: name, email, senha: password });
      
      setName("");
      setEmail("");
      setPassword("");
      Alert.alert("Usuário cadastrado com sucesso!");
      if (response.status === 201) {
        navigation.navigate("LoginScreen");
      }
    } catch (error) {
      Alert.alert("Erro ao cadastrar usuário:");
    }
  };
  
  return (
    <>
    <View>
      <ImageBackground style={styles.cadastroBackground} source={background}/>
    </View>
      <View style={styles.cadastroContainer}>
        <View style={styles.cadastroInputContainer}>
          <TextInput
            placeholder="Nome"
            placeholderTextColor="#fff"
            style={styles.cadastroInput}
            value={name}
            onChangeText={setName}
            />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#fff"
            style={styles.cadastroInput}
            value={email}
            onChangeText={setEmail}
            />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#fff"
            secureTextEntry
            style={styles.cadastroInput}
            value={password}
            onChangeText={setPassword}
            />
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.cadastroCadastroText}>Já tenho cadastro</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cadastroImageContainer}>
          <TouchableOpacity style={styles.cadastroButton} onPress={handleSubmit}>
            <Image source={cadastro} style={styles.cadastroButtonImage} />
          </TouchableOpacity>
        </View>
      </View>
</>
  );
};

export default CadastroScreen;