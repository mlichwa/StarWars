import { types, flow } from 'mobx-state-tree'
import StarWarsApi, {POST_ERROR} from '../api/starWars'


export const Films = types
    .model('Films', {

    
    
    })
    .actions(self => {

        const get_all_films = flow(function* (){
            const films = DatabaseStore
        })



        // clean up data.
        const hydrate = flow(function*(){

        })


        return {
            hydrate
        }

    })
    .create()

