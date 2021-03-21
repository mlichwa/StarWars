import axios from './../../shared/axios/config'

export const POST_ERROR = 1
export const GET_ERROR = 2

class StarWarsApi {


    async getAllFilms(){
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
        
        axios.defaults.baseURL = url

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
        axios.defaults.baseURL = 'https://swapi.dev/api/';
        console.log("StarWarsApi:: Get Character with a given ID")
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