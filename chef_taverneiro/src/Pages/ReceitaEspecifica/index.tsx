import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import background from "../../assets/images/Madeira.png";
import { MealDetailsProps } from "../../@types/interface";
import { getMealDetailsById } from "../../services/mealApi";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../../Routes/BottomTabRoutes";
import { Link, useNavigation, useRoute } from "@react-navigation/native";

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

  return (
    <ImageBackground source={background}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={{ uri: mealDetails?.strMealThumb }} style={styles.mealImage} />
          <Text style={styles.mealName}>{mealDetails?.strMeal}</Text>
          <Text style={styles.mealName}>Category: {mealDetails?.strCategory}</Text>
          <Text style={styles.mealName}>Region: {mealDetails?.strArea}</Text>
          <Text style={styles.mealName}>Ingredients</Text>
          <View style={styles.ingredientContainer}>
            {ingredients.map((ingredient, index) => (
              <Text
                key={index}
                style={styles.ingredient}
              >{`${ingredient} - ${measures[index]}`}</Text>
            ))}
          </View>
          <Text style={styles.mealName}>Instructions</Text>
          <Text style={styles.instructions}>{mealDetails?.strInstructions}</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(237, 222, 199, 0.9)", // Cor de fundo com transparência
    borderRadius: 5,
    width: "90%",
    padding: 6,
    marginVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center", // Centraliza o conteúdo horizontalmente
    flex: 1,
  },
  content: {
    padding: 16,
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
  },
});
