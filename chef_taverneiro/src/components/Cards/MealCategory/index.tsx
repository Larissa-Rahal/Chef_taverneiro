import { TouchableOpacity, Text, Image, View, Linking } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackRoutesParamList } from "../../../Routes/StackRoutes";
import { styles } from "./styles";
import { MealByCategoryProps } from "../../../@types/interface";
import { Link, useNavigation } from "@react-navigation/native";

interface MealCategoryComponentProps {
  item: MealByCategoryProps;
}

type DetailsNavigationProp = StackNavigationProp<
  StackRoutesParamList,
  "ReceitaEspecifica"
>;

export const MealCategory = ({ item }: MealCategoryComponentProps) => {
  const navigation = useNavigation<DetailsNavigationProp>();

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: item.strMealThumb }} style={styles.cardImage} />
      <Text style={styles.mealText}>{item.strMeal}</Text>
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate("ReceitaEspecifica", { mealId: item.idMeal })}
          style={styles.link}
        >
          Learn more
        </Text>
      </TouchableOpacity>
    </View>
  );
};
