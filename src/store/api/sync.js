import { types, flow} from 'mobx-state-tree'
import StarWarsApi  from './starWars'

export const Sync = types
    .model('Sync', {
        // fetched_films: types.optional(types.reference(Film), [])
    })
    .actions(self => ({
        
        get_all_films: flow(function* (filmsStore) {
            
            yield StarWarsApi.getFilms(filmsStore)

        })

    })).create()