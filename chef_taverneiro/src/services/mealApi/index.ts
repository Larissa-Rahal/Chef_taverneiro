import axios, { AxiosResponse } from 'axios';
import { getMealByCategoryListProps } from '../../@types/interface';

const mealApi = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/'
})

export async function getItensByCategory( nome: string ): Promise<AxiosResponse<getMealByCategoryListProps, any>> {
    const url = 'filter.php?c=' + nome;

    try {
        const response = await mealApi.get(url);
        return response;
    } catch (erro) {
        console.error('Erro de requisição:', erro)
        throw erro;
    }
}

export async function getMealDetailsById(id: string) {
    const url = `lookup.php?i=${id}`;

    try {
        const response = await mealApi.get(url);
        return response;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
}

export async function getAllMeals() {
    const categoriesResponse = await mealApi.get('categories.php');
    const categories = categoriesResponse.data.categories;

    const allMeals: getMealByCategoryListProps = {
        meals: [],
        
    };

    for (const category of categories) {
        const mealsResponse = await mealApi.get(`filter.php?c=${category.strCategory}`);
        allMeals.meals.push(...mealsResponse.data.meals);
    }
    
    return allMeals;
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