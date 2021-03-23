/*eslint require-yield: "off"*/
import { types, flow } from 'mobx-state-tree';
import Film from './models/Film';
import StarWarsApi, { GET_ERROR } from './api/starWars';
import LocalStorage from './localStorage'

const Films = types.model('Films', {
  isLoading: types.optional(types.boolean, false),
  films: types.optional(types.array(Film), []),
  activeFilm: types.maybeNull(types.reference(Film), null),
  error: types.optional(types.string, "")
})
.actions(self => ({
  
  loadFilms: flow(function* () {
    console.log("Loading films")
    self.isLoading = true
    const data = yield StarWarsApi.getAllFilms()
    console.log("GOT FILMS:", data)

    if(data !== GET_ERROR){
      
      self.films = data
      self.isLoading = false
      self.setInitialFavoritesState()

    }
  }),

  setInitialFavoritesState: flow(function* (){
    
      const localStorage = LocalStorage
      self.films.forEach( async object  => {
          object.isFaved = localStorage.getFavoriteStateForID(object.episode_id)
      })
  }),

  setActiveFilm: flow(function * (film){
      self.activeFilm = film
      console.log('set active film for our modal view', film.episode_id)
      return self.activeFilm
  }),

  errorMessage: flow(function(){
      self.error = "Characters API failed"
  })
  
}))
.create();

export default Films