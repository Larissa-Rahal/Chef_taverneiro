import axios, { AxiosResponse } from 'axios';

const jsonServerApi = axios.create({
    baseURL: 'http://192.168.1.7:3001/'
})

export interface UserDetailsProps {
    id: string;
    nome: string;
    email: string;
    senha: string;
}

export async function PostUser(id:string) {
    const url = 'users/' + id
    
    try{
        const response = await jsonServerApi.post(url);
        return response;
    } catch(erro) {
        console.error('Erro de requisição:', erro)
        throw erro;
    }
}

// export  function GetAllUsers() {
//     const url = 'users' 
    
//     try{
//         const response =  jsonServerApi.get(url);
//         console.log(response)
//         return response;

//     } catch(erro) {
//         console.error('Erro de requisição:', erro)
//         throw erro;
//     }
// }