import { types, flow } from 'mobx-state-tree';
import Film from './models/Film';
import StarWarsApi, { GET_ERROR } from './api/starWars';
import LocalStorage from './localStorage'

const Films = types.model('Films', {
  isLoading: types.optional(types.boolean, false),
  films: types.optional(types.array(Film), []),
  activeFilm: types.maybeNull(types.reference(Film), null)
})
.actions(self => ({
  
  loadFilms: flow(function* () {
    console.log("Loading films")
    yield self.isLoading = true
    const data = yield StarWarsApi.getAllFilms()
    console.log("GOT FILMS:", data)

    if(data !== GET_ERROR){
      yield self.films = data
      yield self.isLoading = false

      self.setInitialFavoritesState()
    }
  }),

  setInitialFavoritesState: flow(function* (){
    
      const localStorage = LocalStorage
      yield self.films.forEach( (object) => {
        object.isFaved = localStorage.getFavoriteStateForID(object.episode_id)
      })
  }),

  setActiveFilm: flow(function * (film){
    yield self.activeFilm = film
    console.log('set active film for our modal view', film.episode_id)
    return self.activeFilm
  })


  
}))
.create();

export default Films