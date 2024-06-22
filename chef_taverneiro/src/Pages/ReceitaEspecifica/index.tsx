import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import background from '../../assets/images/Madeira.png';
import { MealDetailsProps } from '../../@types/interface';
import { getMealDetailsById } from '../../services/mealApi';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../Routes/BottomTabRoutes';

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'MealById'
>;

interface MealByIdProps {
  mealId: string; 
}

export const ReceitaEspecifica = ({ mealId }: MealByIdProps) => {
  const [mealDetails, setMealDetails] = useState<MealDetailsProps | null>(null);

  useEffect(() => {
    async function fetchMealDetails() {
      try {
        const response = await getMealDetailsById(mealId);
        const meal = response.data.meals; 
        setMealDetails(meal);
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }

    fetchMealDetails();
  }, [mealId]);

  if (!mealDetails) {
    return <Text>Carregando...</Text>;
  }


  return (
      <View>
        <Image source={{ uri: mealDetails.strMealThumb }} style={styles.mealImage} />
        <Text style={styles.mealName}>{mealDetails.strMeal}</Text>
        <Text style={styles.mealArea}>{mealDetails.strArea}</Text>

        {mealDetails.strIngredient1 && (
          <Text>{`${mealDetails.strIngredient1} - ${mealDetails.strMeasure1}`}</Text>
        )}
       
      </View>
  );
};

const styles = StyleSheet.create({
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