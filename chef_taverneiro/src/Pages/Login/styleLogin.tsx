import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    input: {
      width: '80%',
      backgroundColor: '#6B3F24',
      padding: 10,
      marginBottom: 10,
      borderRadius: 20,
      color: '#fff',
    },
    signupText: {
      color: '#fff',
      marginBottom: 20,
    },
    button: {
      backgroundColor: 'transparent',
    },
    orcImage: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
  });