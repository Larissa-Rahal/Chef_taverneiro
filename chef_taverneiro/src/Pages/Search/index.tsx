import { Picker } from '@react-native-picker/picker';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs/';
import React, { useState } from 'react';
import { ImageBackground, Text, TextInput, View } from 'react-native';
import { RootTabParamList } from '../../Routes/BottomTabRoutes';
import background from "../../assets/images/Madeira.png";
import { getItensByArea, getItensByCategory, getItensByIngredient, getItensByName, getMealByAreaListProps, getMealByCategoryListProps, getMealByIngredientListProps, getMealByNameListProps } from '../../services/mealApi';
import { styles } from "../Login/styleLogin";

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Search'
>;

export const Search = () => {
  const [searchResults, setSearchResults] = useState<getMealByCategoryListProps | getMealByIngredientListProps | getMealByNameListProps | getMealByAreaListProps>({} as any);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('name');

  const handleSearch = async () => {
    try {
      let results;
      switch (searchType) {
        case 'category':
          results = await getItensByCategory(searchQuery);
          break;
        case 'ingredient':
          results = await getItensByIngredient(searchQuery);
          break;
        case 'name':
          results = await getItensByName(searchQuery);
          break;
        case 'area':
          results = await getItensByArea(searchQuery);
          break;
        default:
          break;
      }

      if (results && results.data.meals) {
        setSearchResults(results.data);
      } else {
        setSearchResults({} as any);
      }
    } catch (error) {
      console.error('Não foi encontrado, tente de novo:', error);
    }
  };

    
    return(
    <>
    <ImageBackground source={background} style={styles.background}>
    <Text style={{textAlign: 'center', fontSize: 80}}>SEARCH</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={styles.input}
            placeholder="Pesquisar refeições..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
          />
          <Picker
            selectedValue={searchType}
            onValueChange={(itemValue) => setSearchType(itemValue)}
          >
            <Picker.Item label="Nome" value="name" />
            <Picker.Item label="Categoria" value="category" />
            <Picker.Item label="Ingrediente" value="ingredient" />
            <Picker.Item label="Área Culinária" value="area" />
          </Picker>
        </View>
        {searchResults.meals && searchResults.meals.map((meal) => (
          <Text key={meal.idMeal}>{meal.strMeal}</Text>
        ))}

    </ImageBackground>
    </>
  );
};

