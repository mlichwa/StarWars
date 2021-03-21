import { flow, types } from 'mobx-state-tree';
import LocalStorage from '../localStorage'

const Film = types.model('Film', {
    episode_id: types.identifierNumber,
    title: types.maybeNull(types.string),
    opening_crawl: types.maybeNull(types.string),
    characters : types.optional(types.array(types.string), []),
    director: types.maybeNull(types.string),
    producer: types.maybeNull(types.string),
    release_date: types.maybeNull(types.string),
    isFaved: types.optional(types.boolean, false)
})
.actions(self => ({
    
    toggleFave: flow(function* () {
        
        console.log(self.episode_id);
        self.isFaved = !self.isFaved

        LocalStorage.updateFavoriteMovieForID(self.episode_id)
        // var localFavorites = JSON.parse(localStorage.getItem('faved_films'))
        // console.log('localFavorites: ', localFavorites)
        // if(localFavorites !== null && localFavorites.length > 0){

        //     let favedIndex = localFavorites.findIndex(x => x === self.episode_id)
        //     console.log('favedIndex: ', favedIndex)
        //     if(favedIndex !== -1){
        //         // ID was found on a local array. Remove it and update the localStorage.
        //         console.log("Index exists. Remove it.")
        //         localFavorites.splice(favedIndex, 1)
        //         localStorage.setItem('faved_films', JSON.stringify(localFavorites))
        //     }else{
        //         // var arrayOfFavedFilms = JSON.parse(localStorage.getItem('faved_films'))
        //         console.log("index doesn't exist locally. Add it.", self.episode_id)
        //         localFavorites.push(self.episode_id)
        //         localStorage.setItem('faved_films', JSON.stringify(localFavorites))
        //     }  
        // }else{
        //     let arrayOfFavedFilms = [];
        //     arrayOfFavedFilms.push(self.episode_id)
        //     localStorage.setItem('faved_films', JSON.stringify(arrayOfFavedFilms))
        // }
        

    })
    
}))
.views(self => ({
    niceReleaseDate(){
        return Date(self.release_date)
    }
}));

export default Film