import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs/";
import { RootTabParamList } from "../../Routes/BottomTabRoutes";
import { ImageBackground, ScrollView, TextInput, Image, View, Text } from "react-native";
import { styles } from "./styleHome";
import background from "../../assets/images/Madeira.png";
import tarjacheftaberneiro from "../../assets/images/TarjaChefTaberneiro.png";
import { useEffect, useState } from "react";
import { getAllMeals, getMealByName } from "../../services/mealApi";
import { MealByCategoryProps } from "../../@types/interface";
import { MealCategory } from "../../components/Cards/MealCategory";

export type HomeScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "Home"
>;

export const Home = () => {
  const [receitas, setReceitas] = useState<MealByCategoryProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        const response = await getAllMeals();
        setReceitas(response.meals);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }

    fetchAllMeals();
  }, []);

  return (
    <ImageBackground source={background} style={styles.background}>
      <Image style={styles.tarjacheftaberneiro} source={tarjacheftaberneiro} />
      <TextInput
        style={styles.textInput}
        placeholder="Digite o nome da refeição"
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={handleSearch} // Chame a função de busca ao pressionar Enter
      />
      {!isLoading ? (
        <ScrollView>
          {receitas.map((categoryMeals) => (
            <MealCategory key={categoryMeals.idMeal} item={categoryMeals} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      )}
    </ImageBackground>
  );
};
