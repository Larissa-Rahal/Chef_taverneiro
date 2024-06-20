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
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    // width:'100%',
    // position: 'absolute',
    // bottom: 130,
    // left: '10%',
    // marginLeft: -50, // Metade da largura da imagem do botão para centralizar
  },
  buttonImage: {
    width: 100%,
    height: 50,
    resizeMode: 'contain',
  },
  elfImage: {
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom:-435 ,
    left: 56
  },
});