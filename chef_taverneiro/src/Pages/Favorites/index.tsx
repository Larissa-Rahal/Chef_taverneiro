import { useState, useEffect } from "react";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs/";
import { RootTabParamList } from "../../Routes/BottomTabRoutes";
import { ImageBackground, ScrollView } from "react-native";
import { styles } from "./FavStyle";
import background from "../../assets/images/Madeira.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealByCategoryProps } from "../../@types/interface";
import { MealCategory } from "../../components/Cards/MealCategory";

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "Favorites"
>;

export const Favorites = () => {
  const [receitas, setReceitas] = useState<MealByCategoryProps[]>([]);

  const getFavorite = async () => {
    try {
      const jsonValue = (await AsyncStorage.getItem("favorites")) || "[]";
      return JSON.parse(jsonValue);
    } catch (e) {
      throw new Error("Erro ao buscar favoritos");
    }
  };

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favorites = await getFavorite();
        setReceitas(favorites);
      } catch (error) {
        console.error("Erro ao buscar favoritos:", error);
      }
    };
    fetchFavorites();
  });

  return (
    <>
      <ImageBackground source={background} style={styles.favBackground}>
        <ScrollView>
          {receitas.map((item) => (
            <MealCategory key={item.idMeal} item={item} />
          ))}
        </ScrollView>
      </ImageBackground>
    </>
  );
};
