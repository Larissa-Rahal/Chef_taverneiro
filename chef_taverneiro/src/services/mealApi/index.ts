import axios, { AxiosResponse } from 'axios';

const mealApi = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/'
})

export interface MealByCategoryProps {
    strMeal: string,
    strMealThumb: string,
    idMeal: number
}

export interface getMealByCategoryListProps {
    meals: MealByCategoryProps[]
}

export function getItensByCategory( nome: string ): Promise<AxiosResponse<getMealByCategoryListProps, any>> {
    const url = 'filter.php?c=' + nome;
    
    return mealApi.get(url);
}