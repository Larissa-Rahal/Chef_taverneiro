import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loginBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
  },
  loginInputContainer: {
    marginTop: '35%',
    width: '100%',
    alignItems: 'center',
  },
  loginInput: {
    width: '90%',
    backgroundColor: '#6B3F24',
    padding: 20,
    marginBottom: 10,
    borderRadius: 20,
    color: '#fff',
  },
  loginCadastroText: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 16,
  },
  loginImageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    right: 50,
    top:0,
  },
  loginButtonImage: {},
});