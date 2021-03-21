class LocalStorage{

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
}

export default new LocalStorage()