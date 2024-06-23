import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover',
    },
    content: {
      padding: 16,
    },
    mealImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      marginBottom: 16,
    },
    mealName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    mealArea: {
      fontSize: 16,
      color: 'gray',
    },
  });