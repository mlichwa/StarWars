import { types, flow} from 'mobx-state-tree'
import StarWarsApi  from './starWars'

export const Sync = types
    .model('Sync', {
        // fetched_films: types.optional(types.reference(Film), [])
    })
    .actions(self => ({
        
        get_all_films: flow(function* (filmsStore) {
            
            yield StarWarsApi.getFilms(filmsStore)

        }),

        get_characters_from_array: flow(function* (charactersArray, characterStore){

            yield StarWarsApi.getCharacter(charactersArray, characterStore)
        })

    })).create()