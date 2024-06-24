import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cadastroBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    minHeight:'100%',
    minWidth: '100%'
  },
  cadastroContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cadastroInputContainer: {
    marginTop: '35%',
    width: '100%',
    alignItems: 'center',
  },
  cadastroInput: {
    width: '90%',
    backgroundColor: '#6B3F24',
    padding: 20,
    marginBottom: 10,
    borderRadius: 20,
    color: '#fff',
  },
  cadastroCadastroText: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 16,
  },
  cadastroImageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  cadastroButton: {
    right: 50,
    top:0,
  },
  cadastroButtonImage: {},
});