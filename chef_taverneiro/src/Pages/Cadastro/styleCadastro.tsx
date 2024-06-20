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
    marginTop:75,
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
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    right: 50,
    top:25
  },
  buttonImage: {},
  elfImage: {
    width: '100%',
    resizeMode: 'contain',
    bottom:0 ,
    left: 56
  },
});