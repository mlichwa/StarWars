import { types, flow } from 'mobx-state-tree';
import Film from '../models/Film';
import Character from '../models/Character';
import StarWarsApi, { GET_ERROR } from '../api/starWars';

const Modal = types.model('Modal', {
    isLoading: types.optional(types.boolean, false),
    film: types.maybe(types.reference(Film)),
    characters: types.optional(types.array(Character), []),
    showModal: types.optional(types.boolean, false),
})
.actions(self => ({
  
    toggleModal: flow(function*( filmData){
        console.log("open modal view");
        self.showModal = !self.showModal

        self.characters = []
        if(self.showModal){
            filmData.characters.forEach(async url => {
                const data = await StarWarsApi.getCharacter(url)
                // console.log("GOT Character:", data)
                if(data !== GET_ERROR){
                    self.addCharacter(data)
                }
            });
        }
        
    }),

    addCharacter: flow(function*( data){
        console.log("Add Character to the stack");
        self.characters.push(data)
    })
  
}))
.create();

export default Modal