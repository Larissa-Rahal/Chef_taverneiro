
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
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styleLogin";
import background from "../../assets/images/Pagina de Login.png";
import personagem from "../../assets/images/Orc.png";
import acessar from "../../assets/images/balao_acessar.png";
import api from '../../services/api/api';
import { setItem, getItem } from '../../services/storage/LocalStorageFuncs'; 

const LoginScreen = () => {
  const [login, setLogin] = useState({ email: '', senha: '' });
  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await api.get('/users');
      const user = response.data.filter(data => data.email === login.email && data.senha === login.senha);

      if (user.length > 0) {
        Alert.alert('Login realizado com sucesso!');
        setItem('usuarioLogado', user);
        
        const favoritos = getItem('favoritos') || [];
        if (!favoritos || favoritos.length === 0) {
          navigation.navigate('Home');
        } else {
          navigation.navigate('Favoritos');
        }
      } else {
        Alert.alert('Usuário ou senha inválidos');
        handleZerar();
      }
    } catch (error) {
      console.error('Erro ao realizar login', error);
    }
  };

  const handleZerar = () => {
    setLogin({
      email: '',
      senha: ''
    });
  };

  return (
    <ImageBackground style={styles.background} source={background}>
      <View style={styles.container}>
        <TextInput
          placeholder="Login"
          placeholderTextColor="#fff"
          style={styles.input}
          value={login.email}
          onChangeText={(value) => handleChange('email', value)}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#fff"
          secureTextEntry
          style={styles.input}
          value={login.senha}
          onChangeText={(value) => handleChange('senha', value)}
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
