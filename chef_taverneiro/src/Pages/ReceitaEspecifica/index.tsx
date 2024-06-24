import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { getMealDetailsById } from '../../services/mealApi';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../Routes/BottomTabRoutes';
import { styles } from './stylePagEspecifica'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { MealByCategoryProps, MealDetailsProps } from "../../@types/interface";
import { Link, useNavigation, useRoute } from "@react-navigation/native";
import background from '../../assets/images/Madeira.png';
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "MealById"
>;

interface MealByIdProps {
  mealId: string;
}

export const ReceitaEspecifica = () => {
  const [mealDetails, setMealDetails] = useState<MealDetailsProps | null>(null);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [measures, setMeasures] = useState<string[]>([]);
  const [showIngredients, setShowIngredients] = useState<boolean>(false);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const route = useRoute();
  const { mealId } = route.params as MealByIdProps;

  useEffect(() => {
    async function fetchMealDetails() {
      try {
        const response = await getMealDetailsById(mealId);
        const meal = response.data.meals[0];
        setMealDetails(meal);
        const listIngredients = [];
        const listMeasures = [];
        for (let i = 1; i <= 20; i++) {
          if (meal[`strIngredient${i}`]) {
            listIngredients.push(meal[`strIngredient${i}`]);
          }
          if (meal[`strMeasure${i}`]) {
            listMeasures.push(meal[`strMeasure${i}`]);
          }
        }
        setIngredients(listIngredients);
        setMeasures(listMeasures);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }

    fetchMealDetails();
  }, [mealId]);

  const getFavorite = async () => {
    try {
      const jsonValue = (await AsyncStorage.getItem("favorites")) || "[]";
      return JSON.parse(jsonValue);
    } catch (e) {
      throw new Error("Erro ao buscar favoritos");
    }
  };

  const checkFavorite = async () => {
    const favorites: MealByCategoryProps[] = await getFavorite();
    if (favorites) {
      const isFavorite = favorites.some((favorite) => favorite.idMeal === mealId);
      setIsFavorite(isFavorite);
    }
  };

  useEffect(() => {
    checkFavorite();
  }, []);

  const saveFavorite = async () => {
    const favorites: MealByCategoryProps[] = await getFavorite();
    const isFavorite = favorites.some((favorite) => favorite.idMeal === mealId);
    if (isFavorite) {
      const newFavorites = favorites.filter((favorite) => favorite.idMeal !== mealId);
      await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      const newFavorite = {
        idMeal: mealId,
        strMeal: mealDetails?.strMeal,
        strMealThumb: mealDetails?.strMealThumb,
      };
      const newFavorites = [...favorites, newFavorite];
      await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(true);
    }
  };

  return (
    <ImageBackground source={background}>
      <ScrollView>
        <View style={styles.PgEspContainer}>
          <Pressable style={styles.back} onPress={() => navigation.goBack()}> 
            <Text>Voltar</Text>
          </Pressable>
          <Image source={{ uri: mealDetails?.strMealThumb }} style={styles.mealImage} />
          {isFavorite ? (
            <Pressable onPress={saveFavorite}>
              <FontAwesomeIcon icon={faHeart} color={"red"} size={30} />
            </Pressable>
          ) : (
            <Pressable onPress={saveFavorite}>
              <FontAwesomeIcon icon={faHeartRegular} color={"red"} size={30} />
            </Pressable>
          )}
          <Text style={styles.mealName}>{mealDetails?.strMeal}</Text>
          <Text style={styles.mealName}>Category: {mealDetails?.strCategory}</Text>
          <Text style={styles.mealName}>Region: {mealDetails?.strArea}</Text>
          <Pressable
            style={styles.PgEspbutton}
            onPress={() => setShowIngredients(!showIngredients)}
          >
            <Text>Ingredients</Text>
          </Pressable>
          {showIngredients && (
            <View style={styles.ingredientContainer}>
              {ingredients.map((ingredient, index) => (
                <Text
                  key={index}
                  style={styles.ingredient}
                >{`${ingredient} - ${measures[index]}`}</Text>
              ))}
            </View>
          )}
          <Pressable
            style={styles.PgEspbutton}
            onPress={() => setShowInstructions(!showInstructions)}
          >
            <Text>Instructions</Text>
          </Pressable>
          {showInstructions && (
            <Text style={styles.instructions}>{mealDetails?.strInstructions}</Text>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
