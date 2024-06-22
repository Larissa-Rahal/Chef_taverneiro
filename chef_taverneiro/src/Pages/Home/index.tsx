import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs/';
import { RootTabParamList } from '../../Routes/BottomTabRoutes';
import { ImageBackground, ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from "../Login/styleLogin";
import background from "../../assets/images/Madeira.png"
import { useEffect, useState } from 'react';
import { getAllMeals, getMealByName } from '../../services/mealApi';
import { MealByCategoryProps } from '../../@types/interface';
import { MealCategory } from '../../components/Cards/MealCategory';

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Home'
>;

export const Home = () => {
  const [receitas, setReceitas] = useState<MealByCategoryProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await getMealByName(searchTerm);
        if(!response){
          return setReceitas([])
        }
      setReceitas(response);
    } catch (error) {
      console.error('Erro ao buscar refeição:', error);
    }
  };

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
  }, []);

  return (
    <ImageBackground source={background} style={styles.background}>
      <ScrollView>
        <TextInput
          style={{ 
            marginTop: 50,
            marginBottom: 20,
            borderRadius: 8,
            width: 300, 
            height: 50,
            backgroundColor: 'rgba(233, 233, 233, 0.8)',
            paddingHorizontal: 10,
            fontSize: 16,
            alignSelf: 'center'
          }}
          placeholder="Digite o nome da refeição"
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch} // Chame a função de busca ao pressionar Enter
        />
        {receitas.map((categoryMeals) => (
          <MealCategory key={categoryMeals.idMeal} item={categoryMeals} />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

