import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  favBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
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
