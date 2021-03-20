import axios from './../../shared/axios/config'

export const POST_ERROR = 1

class StarWarsApi {


    async getFilms(filmsStore){
        console.log("StarWarsApi: Get Films");
        axios.get(`films/`, '', {

        }).then((response) => {
            console.log("GOT FILMS DATA:", response.data.results)
            
            response.data.results.map( film => {
                filmsStore.addFilm(film)
            })
             
        })
        .catch(error => {
            console.log(error)
            return POST_ERROR
        })
    }



    async getCharacter(forURLs, characterStore){
        
        forURLs.forEach(url => {
            axios.defaults.baseURL = url
            axios.get(``, '',{

            }).then((response) => {
                characterStore.addCharacter(response.data)
                
            })
            .catch(error => {
                console.log(error)
                return POST_ERROR
            })
        });


        
    }
}

export default new StarWarsApi()