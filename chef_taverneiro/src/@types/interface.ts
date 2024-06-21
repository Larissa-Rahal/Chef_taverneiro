export interface MealByCategoryProps {
    strMeal: string,
    strMealThumb: string,
    idMeal: number
}
export interface MealDetailsProps {
    idMeal: string;
    strMeal: string;
    strInstructions: string;
}
export interface getMealByCategoryListProps {
    meals: MealByCategoryProps[];
}

