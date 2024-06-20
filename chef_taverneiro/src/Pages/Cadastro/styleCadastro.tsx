import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    marginTop: 105,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    backgroundColor: '#6B3F24',
    padding: 20,
    marginBottom: 10,
    borderRadius: 20,
    color: '#fff',
  },
  cadastroText: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 16,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    right: 50,
    top:0,
  },
  buttonImage: {},
  elfImage: {
    width: '100%',
    resizeMode: 'contain',
    bottom:0 ,
    left: 56
  },
});