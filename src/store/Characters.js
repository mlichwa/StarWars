import { types, flow } from 'mobx-state-tree';
import Character from './models/Character';
import StarWarsApi, { GET_ERROR } from './api/starWars';
import LocalStorage from './localStorage'

const Characters = types.model('Characters', {
  isLoading: types.optional(types.boolean, false),
  characters: types.optional(types.array(Character), []),
})
.actions(self => ({
  
    loadFavedCharacters: flow(function* () {

        yield self.characters = []
        const charactersIDs = LocalStorage.getAllCharacters()
        //console.log("Loading characters: ", charactersIDs)
        self.isLoading = true
        charactersIDs.forEach(async id => {
            
            const data = await StarWarsApi.getCharacterWithID(id)
            
            if(data !== GET_ERROR){
                self.addCharacter(data) 
            }
        });
    }),

    // Add character to our MobX data. Set isFaved to true.
    addCharacter: flow(function*(data){
        //console.log("Add Character to the stack");
        data.isFaved = true

        self.characters.push(data)
        yield self.isLoading = false  
    })
}))
.create();

export default Characters