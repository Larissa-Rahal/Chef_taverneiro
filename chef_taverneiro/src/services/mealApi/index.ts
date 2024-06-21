import axios, { AxiosResponse } from 'axios';
import { getMealByCategoryListProps, MealDetailsProps } from '../../@types/interface';

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