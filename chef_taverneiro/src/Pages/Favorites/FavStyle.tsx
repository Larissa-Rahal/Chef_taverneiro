import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  favBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  titleBar: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 80,
    justifyContent: "center",
    marginBottom: 30,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  noFav: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFavText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
