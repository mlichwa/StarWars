/*eslint require-yield: "off"*/
import { types, flow } from 'mobx-state-tree';
import LocalStorage from '../localStorage'


const Character = types.model('Character', {
    name: types.identifier,
    birth_year: types.maybeNull(types.string),
    eye_color: types.maybeNull(types.string),
    gender: types.maybeNull(types.string),
    hair_color: types.maybeNull(types.string),
    height: types.maybeNull(types.string),
    mass: types.maybeNull(types.string),
    skin_color: types.maybeNull(types.string),
    homeworld: types.maybeNull(types.string),
    home: types.maybeNull(types.string),
    films: types.optional(types.array(types.string), []),
    species: types.optional(types.array(types.string), []),
    starships: types.optional(types.array(types.string), []),
    vehicles: types.optional(types.array(types.string), []),
    url: types.maybeNull(types.string),
    created: types.maybeNull(types.string),
    edited: types.maybeNull(types.string),
    isFaved: types.optional(types.boolean, false)

}).actions(self => ({
    
    toggleFave: flow(function* () {
        console.log("toggleFaved")
        self.isFaved = !self.isFaved
        LocalStorage.updateFavoriteCharacterWithName(self.url)
    })
    
}))

export default Character