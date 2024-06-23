import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
      container: {
      backgroundColor: "rgba(237, 222, 199, 0.9)",
      borderRadius: 5,
      width: "90%",
      padding: 6,
      marginVertical: 16,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      flex: 1,
    },
    content: {
      padding: 16,
    },
    back: {
      alignSelf: "flex-start",
      backgroundColor: "#fff",
      opacity: 0.8,
      padding: 5,
      borderRadius: 5,
      marginVertical: 2,
      width: "20%",
    },
    button: {
      backgroundColor: "#f1c40f",
      opacity: 0.8,
      padding: 8,
      borderRadius: 5,
      marginVertical: 2,
      width: "90%",
    },
    mealImage: {
      width: "80%",
      height: 200,
      resizeMode: "cover",
      marginBottom: 16,
      alignSelf: "center",
    },
    mealName: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 8,
    },
    mealArea: {
      fontSize: 16,
      color: "gray",
    },
    ingredientContainer: {
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 16,
    },
    ingredient: {
      fontSize: 20,
      fontWeight: "bold",
    },
    instructions: {
      fontSize: 16,
      paddingHorizontal: 16,
    },
  }
);