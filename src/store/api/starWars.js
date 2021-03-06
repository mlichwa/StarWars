import axios from 'axios';
export const POST_ERROR = 1
export const GET_ERROR = 2

class StarWarsApi {


    async getAllFilms(){
        
        axios.defaults.headers.get['Accept'] = 'application/json';
        axios.defaults.baseURL = 'https://swapi.dev/api/';
        console.log("StarWarsApi: Get All Films");
        const films = axios.get(`films/`, '', {
        }).then((response) => {
            console.log("GOT FILMS DATA:", response.data.results)
            return response.data.results
        })
        .catch(error => {
            console.log(error)
            return GET_ERROR
        })
        return films
    }


    async getCharacter(url){
        console.log("StarWarsApi: Get A Character");
        
        axios.defaults.headers.get['Accept'] = 'application/json';
        axios.defaults.baseURL = url.replace("http://", "https://") // By default, the API returns http so we need to fix it here.

        const character = axios.get(``, '', {
        }).then((response) => {
            console.log("GOT CHARACTER DATA:", response.data)
            return response.data
        })
        .catch(error => {
            console.log(error)
            return GET_ERROR
        })
        return character
    }


    async getCharacterWithID(id){

        axios.defaults.headers.get['Accept'] = 'application/json';
        axios.defaults.baseURL = 'https://swapi.dev/api/';

        console.log("StarWarsApi:: Get Character with a given ID", axios.defaults.baseURL)
        const character = axios.get(`people/${id}`, '', {
        }).then((response) => {
            console.log("GOT FILMS DATA:", response.data)
            return response.data
        })
        .catch(error => {
            console.log(error)
            return GET_ERROR
        })
        return character
    }

}

export default new StarWarsApi()