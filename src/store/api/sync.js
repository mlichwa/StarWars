import { types, flow} from 'mobx-state-tree'
import { useFilmsStore } from '../filmsContext'
import StarWarsApi, { POST_ERROR }  from './starWars'
import Film from '../models/film'

export const Sync = types
    .model('Sync', {
        // fetched_films: types.optional(types.reference(Film), [])
    })
    .actions(self => ({
        
        get_all_films: flow(function* (filmsStore) {
            
            yield StarWarsApi.getFilms(filmsStore)

        })

    })).create()