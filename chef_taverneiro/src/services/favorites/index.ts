import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFavorite = async () => {
  try {
    const jsonValue = (await AsyncStorage.getItem("favorites")) || "[]";
    return JSON.parse(jsonValue);
  } catch (e) {
    throw new Error("Erro ao buscar favoritos");
  }
};
