import { useState, useEffect } from "react";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs/";
import { RootTabParamList } from "../../Routes/BottomTabRoutes";
import { ImageBackground, ScrollView, View, Text } from "react-native";
import { styles } from "./FavStyle";
import background from "../../assets/images/Madeira.png";
import { MealByCategoryProps } from "../../@types/interface";
import { MealCategory } from "../../components/Cards/MealCategory";
import { getFavorite } from "../../services/favorites";

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "Favorites"
>;

export const Favorites = () => {
  const [receitas, setReceitas] = useState<MealByCategoryProps[]>([]);

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
        <View style={styles.titleBar}>
          <Text style={styles.title}>Favorites</Text>
        </View>
        {receitas.length > 0 ? (
          <ScrollView>
            {receitas.map((item) => (
              <MealCategory key={item.idMeal} item={item} />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.noFav}>
            <Text style={styles.noFavText}>You don't have any favorites</Text>
          </View>
        )}
      </ImageBackground>
    </>
  );
};
