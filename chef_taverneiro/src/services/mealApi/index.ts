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

export interface MealByIngredientProps {
    strMeal: string,
    strMealThumb: string,
    idMeal: number
}

export interface getMealByIngredientListProps {
    meals: MealByIngredientProps[]
}

export function getItensByIngredient(ingredient: string): Promise<AxiosResponse<getMealByIngredientListProps, any>> {
    const url = 'filter.php?i=' + ingredient;
    return mealApi.get(url);
}

export interface MealByNameProps {
    strMeal: string,
    strMealThumb: string,
    idMeal: number
}

export interface getMealByNameListProps {
    meals: MealByNameProps[]
}

export function getItensByName(name: string): Promise<AxiosResponse<getMealByNameListProps, any>> {
    const url = 'search.php?s=' + name;
    return mealApi.get(url);
}

export interface MealByAreaProps {
    strMeal: string,
    idMeal: number
}

export interface getMealByAreaListProps {
    meals: MealByAreaProps[]
}

export function getItensByArea(area: string): Promise<AxiosResponse<getMealByAreaListProps, any>> {
    const url = 'filter.php?a=' + area;
    return mealApi.get(url);
}