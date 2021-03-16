import axios from './../../shared/axios/config'

export const POST_ERROR = 1

class StarWarsApi {


    async getFilms(){
        console.log("StarWarsApi: Get Films");
        const object = axios
        .get(`films/`, '', {

        }).then((response) => {
            console.log(response)
            const data = response.data
        })

    }

}

export default new StarWarsApi()