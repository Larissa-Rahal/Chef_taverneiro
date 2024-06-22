import { TouchableOpacity, Text, Image, View, Linking } from "react-native"
import { styles } from "./styles"
import { MealByCategoryProps } from "../../../@types/interface";
import { Link, useNavigation } from "@react-navigation/native";

interface MealCategoryComponentProps {
    item: MealByCategoryProps; 
}

export const MealCategory = ({ item }: MealCategoryComponentProps) => {

    if (!item.strMealThumb) {
        return null; // Não renderiza nada se não houver imagem
    }

    return <View key={item.idMeal} style={styles.cardContainer}>
    <Image source={{ uri: item.strMealThumb }} style={styles.cardImage} />
    <Text style={styles.mealText}>
        {item.strMeal}
    </Text>
    <TouchableOpacity onPress={() => console.log('Link clicado')}>
      <Text onPress={() => alert('eitaa nao sei como fazer')} style={styles.link}>Learn more</Text>
    </TouchableOpacity>
</View>
}