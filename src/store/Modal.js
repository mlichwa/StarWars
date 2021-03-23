/*eslint require-yield: "off"*/
import { types, flow } from 'mobx-state-tree';
import Character from './models/Character';
import StarWarsApi, { GET_ERROR } from './api/starWars';
import Films from './Films';
import LocalStorage from './localStorage'

const Modal = types.model('Modal', {
    isLoading: types.optional(types.boolean, false),
    characters: types.optional(types.array(Character), []),
    showModal: types.optional(types.boolean, false),
    error: types.optional(types.string, "") 
})
.actions(self => ({
  
    // Show/hide modal view. Asynchronously load data and update it based on the API return.
    toggleModal: flow(function*( filmData){
        
        self.showModal = !self.showModal
        self.characters = []
        if(self.showModal){
            console.log("open modal view for film", filmData.episode_id);
            
            Films.setActiveFilm(filmData) // set active Film to be used for our Modal.
            
            filmData.characters.forEach(async url => {
                const data = await StarWarsApi.getCharacter(url)
                // console.log("GOT Character:", data)
                if(data !== GET_ERROR){
                    self.addCharacter(data) 
                }else{
                    self.errorMessag()
                }
            });
        }    
    }),

    // Add character to our MobX data. Check local storage to indicate whether character is
    // on a Faved list or not.
    addCharacter: flow(function*(data){
        console.log("Add Character to the stack");
        const localStorage = LocalStorage
        data.isFaved = localStorage.getFavoriteStateForName(data.url)
        self.characters.push(data)
    }),
    

    errorMessage: flow(function(){
        self.error = "Characters API failed"
    })



}))
.create();

export default Modal