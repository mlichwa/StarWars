import axios from './../../shared/axios/config'

export const POST_ERROR = 1

class StarWarsApi {


    async getFilms(filmsStore){
        console.log("StarWarsApi: Get Films");
        const object = axios
        .get(`films/`, '', {

        }).then((response) => {
            console.log("GOT FILMS DATA:", response.data.results)
            
            response.data.results.map( object => {
                console.log(object.title)
                filmsStore.addFilm(object.title)
            })
             
            // return response.data
        })
        .catch(error => {
            console.log(error)
            return POST_ERROR
        })
    }

}

export default new StarWarsApi()