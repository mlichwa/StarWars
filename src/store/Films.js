import { types, flow } from 'mobx-state-tree';
import Film from './models/Film';
import StarWarsApi, { GET_ERROR } from './api/starWars';

const Films = types.model('Films', {
  isLoading: types.optional(types.boolean, false),
  films: types.optional(types.array(Film), [])
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
    }
  })
  
}))
.create();

export default Films