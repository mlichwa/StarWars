class LocalStorage{


    // This function sets 
    updateFavoriteMovieForID(episode_id){
        var localFavorites = JSON.parse(localStorage.getItem('faved_films'))
        console.log('localFavorites: ', localFavorites)
        if(localFavorites !== null && localFavorites.length > 0){

            let favedIndex = localFavorites.findIndex(x => x === episode_id)
            console.log('favedIndex: ', favedIndex)
            if(favedIndex !== -1){
                // ID was found on a local array. Remove it and update the localStorage.
                console.log("Index exists. Remove it.")
                localFavorites.splice(favedIndex, 1)
                localStorage.setItem('faved_films', JSON.stringify(localFavorites))
            }else{
                // var arrayOfFavedFilms = JSON.parse(localStorage.getItem('faved_films'))
                console.log("index doesn't exist locally. Add it.", episode_id)
                localFavorites.push(episode_id)
                localStorage.setItem('faved_films', JSON.stringify(localFavorites))
            }  
        }else{
            let arrayOfFavedFilms = [];
            arrayOfFavedFilms.push(episode_id)
            localStorage.setItem('faved_films', JSON.stringify(arrayOfFavedFilms))
        }
    }


    // This function returns a favorite state for a movie.
    getFavoriteStateForID(id){
        var localFavorites = JSON.parse(localStorage.getItem('faved_films'))
        if(localFavorites !== null && localFavorites.length > 0){
            
            let favedIndex = localFavorites.findIndex(x => x === id)
            if(favedIndex !== -1){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }



    // This function updates the favorite state for a character. 
    // It either adds a new name to the array or removes it.
    updateFavoriteCharacterWithName(url){

        const id = this.extractCharacterIDFromURL(url)

        var localFavorites = JSON.parse(localStorage.getItem('faved_characters'))
        console.log('localFavorites: ', localFavorites)
        if(localFavorites !== null && localFavorites.length > 0){

            let favedIndex = localFavorites.findIndex(x => x === id)
            console.log('favedIndex: ', favedIndex)
            if(favedIndex !== -1){
                // ID was found on a local array. Remove it and update the localStorage.
                console.log("Index exists. Remove it.")
                localFavorites.splice(favedIndex, 1)
                localStorage.setItem('faved_characters', JSON.stringify(localFavorites))
            }else{
                // var arrayOfFavedFilms = JSON.parse(localStorage.getItem('faved_films'))
                console.log("index doesn't exist locally. Add it.", id)
                localFavorites.push(id)
                localStorage.setItem('faved_characters', JSON.stringify(localFavorites))
            }  
        }else{
            let arrayOfFavedCharacters = [];
            arrayOfFavedCharacters.push(id)
            localStorage.setItem('faved_characters', JSON.stringify(arrayOfFavedCharacters))
        }
    }


    // This function returns true if character was favorited. False if it doesn't exist in the array.
    getFavoriteStateForName(url){

        const id = this.extractCharacterIDFromURL(url)

        var localFavorites = JSON.parse(localStorage.getItem('faved_characters'))
        if(localFavorites !== null && localFavorites.length > 0){
            
            let favedIndex = localFavorites.findIndex(x => x === id)
            if(favedIndex !== -1){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }


    // Here we extract the ID of the object so we can use it later on.
    extractCharacterIDFromURL(url){
        var path = url.split('/');
        const characterID = path[5];
        return characterID
    }
}

export default new LocalStorage()