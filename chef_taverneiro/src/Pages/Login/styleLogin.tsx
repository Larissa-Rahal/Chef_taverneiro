import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loginBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    loginContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    loginInput: {
      width: '90%',
      height:'8%',
      backgroundColor: '#6B3F24',
      padding: 10,
      marginBottom: 10,
      borderRadius: 20,
      color: '#fff',
    },
    loginButton: {
      backgroundColor: 'transparent',
    },
    loginCadastroButton:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      fontSize: 16,
      color: '#fff',
    },
  });