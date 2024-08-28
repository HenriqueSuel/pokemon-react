import axios from "axios";


const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});



export const getApi = <T>(url: string) => {
    return api.get<T>(url);
}

export const getApiFullUrl = <T>(url: string) => {
    return axios.get<T>(url);
}

export const getApiFetch = (url: string) => {
    return fetch('https://pokeapi.co/api/v2' + url)
}
