<<<<<<< HEAD
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs/";
import { RootTabParamList } from "../../Routes/BottomTabRoutes";
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "./style";
import background from "../../assets/images/Madeira.png";
import { useEffect, useState } from "react";
import { getAllMeals, getMealByName } from "../../services/mealApi";
import { MealByCategoryProps } from "../../@types/interface";
import { MealCategory } from "../../components/Cards/MealCategory";
=======
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs/';
import { RootTabParamList } from '../../Routes/BottomTabRoutes';
import { ImageBackground, ScrollView, Text, TextInput, View, Image } from 'react-native';
import { styles } from "./styleHome";
import background from "../../assets/images/Madeira.png"
import tarjacheftaberneiro from "../../assets/images/TarjaChefTaberneiro.png";
import { useEffect, useState } from 'react';
import { getAllMeals, getMealByName } from '../../services/mealApi';
import { MealByCategoryProps } from '../../@types/interface';
import { MealCategory } from '../../components/Cards/MealCategory';
>>>>>>> 2f2370ff3544bd224ac716859be62fb618ad105d

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "Home"
>;

export const Home = () => {
  const [receitas, setReceitas] = useState<MealByCategoryProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await getMealByName(searchTerm);
      if (!response) {
        return setReceitas([]);
      }
      setReceitas(response);
    } catch (error) {
      console.error("Erro ao buscar refeição:", error);
    }
  };

  useEffect(() => {
    async function fetchAllMeals() {
      try {
        const response = await getAllMeals();
        setReceitas(response.meals);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }

    fetchAllMeals();
  }, []);

  return (
<<<<<<< HEAD
    <>
      <View>
        <ImageBackground source={background} style={styles.background} />
      </View>
      <ScrollView>
        <TextInput
          style={styles.input}
=======
    <ImageBackground source={background} style={styles.background}>
      <Image style={styles.tarjacheftaberneiro} source={tarjacheftaberneiro} />
      <TextInput
          style={styles.textInput}
>>>>>>> 2f2370ff3544bd224ac716859be62fb618ad105d
          placeholder="Digite o nome da refeição"
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch} // Chame a função de busca ao pressionar Enter
        />
      <ScrollView>
        
        {receitas.map((categoryMeals) => (
          <MealCategory key={categoryMeals.idMeal} item={categoryMeals} />
        ))}
      </ScrollView>
    </>
  );
};
