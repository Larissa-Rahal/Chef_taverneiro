import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs/';
import { RootTabParamList } from '../../Routes/BottomTabRoutes';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import { styles } from "../Login/styleLogin";
import background from "../../assets/images/Madeira.png"
import { useEffect, useState } from 'react';
import { getAllMeals } from '../../services/mealApi';
import { MealByCategoryProps } from '../../@types/interface';
import { MealCategory } from '../../components/Cards/MealCategory';

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Home'
>;


export const Home = () => {
    const [receitas, setReceitas] = useState<MealByCategoryProps[]>([]);

    useEffect(() => {
      async function fetchAllMeals() {
        try {
            const response = await getAllMeals();
            setReceitas(response.meals);
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    fetchAllMeals();
    },[])

    return<>
     <ImageBackground source={background} style={styles.background}>
        <ScrollView>
          {receitas.map((categoryMeals) => (
            <MealCategory item={categoryMeals}/>
          ))}
        </ScrollView>
      </ImageBackground>
    </>
}

