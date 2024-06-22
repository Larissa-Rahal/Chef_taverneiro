import axios, { AxiosResponse } from 'axios';
import { UserProps } from '../../@types/interface';

const jsonServerApi = axios.create({
    baseURL: 'https://closing-definitely-dinosaur.ngrok-free.app/'
})

export async function PostUser(user: UserProps) {
    const url = 'users/'
    
    try{
        const response = await jsonServerApi.post(url);
        return response;
    } catch(erro) {
        console.error('Erro de requisição:', erro)
        throw erro;
    }
}

export  function GetAllUsers() {
    const url = 'users' 
    
    try{
        const response =  jsonServerApi.get(url);
        console.log(response)
        return response;

    } catch(erro) {
        console.error('Erro de requisição:', erro)
        throw erro;
    }
}