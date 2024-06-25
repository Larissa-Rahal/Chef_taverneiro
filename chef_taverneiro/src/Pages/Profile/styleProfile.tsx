import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  profileBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  profileContainer: {
    flex: 1,
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
  },

  circulo: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },

  profileIcon: {
    position: "absolute",
    left: "10%",
    top: "20%",
    opacity: 0.7,
  },

  containerCirculo: {
    flex: 1,
    flexDirection: "column",
  },

  containerImput: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  profileInputNome: {
    width: '90%',
    backgroundColor: '#6B3F24',
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    color: '#fff',
  },

  profileContainerEmail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "0%",
    backgroundColor: "red",
  },

  flexTextNome: {
    flexDirection: "row",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },

  flexTextEmail: {
    flexDirection: "row",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },

  profileInputEmail: {
    width: '90%',
    backgroundColor: '#6B3F24',
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    color: '#fff',
  },
});
