import { TouchableOpacity, Text, Image } from "react-native"
import { styles } from "./styles"
import { MealByCategoryProps } from "../../../@types/interface";

interface MealCategoryComponentProps {
    item: MealByCategoryProps;
}

export const MealCategory = ({ item }: MealCategoryComponentProps) => {
    return <TouchableOpacity style={styles.buttonMeal} key={item.idMeal}>
        <Image source={{ uri: item.strMealThumb }} style={styles.cardImage} />
        <Text style={styles.mealText}>
            {item.strMeal}
        </Text>
    </TouchableOpacity>
}