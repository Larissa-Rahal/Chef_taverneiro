import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import LoginScreen from './src/Pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import CadastroScreen from './src/Pages/Cadastro';

export default function App() {
  return (
  <NavigationContainer>
    {/* <LoginScreen/> */}
    <CadastroScreen/>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
