import axios, { AxiosResponse } from 'axios';
import { UserProps } from '../../@types/interface';

const jsonServerApi = axios.create({
<<<<<<< HEAD
    baseURL: 'https://closing-definitely-dinosaur.ngrok-free.app/'
=======
    baseURL: 'https://closing-definitely-dinosaur.ngrok-free.app'
>>>>>>> b6e36d1bb4b33c01f9817cba8797524da227e69c
})

export async function PostUser(user: UserProps) {
    const url = '/users/'
    
    try{
        const response = await jsonServerApi.post(url);
        return response;
    } catch(erro) {
        console.error('Erro de requisição:', erro)
        throw erro;
    }
}

export  function GetAllUsers() {
    const url = '/users' 
    
    try{
        const response =  jsonServerApi.get(url);
        return response;

    } catch(erro) {
        console.error('Erro de requisição:', erro)
        throw erro;
    }
}