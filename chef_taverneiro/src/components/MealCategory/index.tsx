import { TouchableOpacity, Text, Image } from "react-native";
import { MealByCategoryProps } from "../../@types/interface";
import { styles } from "./styles"

interface MealCategoryComponentProps {
    item: MealByCategoryProps
}

export const MealCategory = ({ item }: MealCategoryComponentProps) => {
    return <TouchableOpacity style={styles.buttonMeal}>
        <Image source={{ uri: item.strMealThumb }} style={styles.cardImage} />
        <Text style={styles.mealText}>
            {item.strMeal}
        </Text>
    </TouchableOpacity>
}