import {nanoid} from 'nanoid'

export function createFilmsStore(){
    console.log("CREATING FILMS STORE:")


    

    return {
        films: [],
        addFilm(filmObject){
            

            // Check if object with given ID ( episode ID ) is stored in the 
            var isFaved = false
            const arrayOfFavedFilms = JSON.parse(localStorage.getItem('faved_films'));
            if(arrayOfFavedFilms !== null && arrayOfFavedFilms.length > 0){

                
                arrayOfFavedFilms.forEach(id => {
                    if(id === filmObject.episode_id){
                        isFaved = true
                    }
                })
            }else{
                localStorage.setItem('faved_films', JSON.stringify([]));
            }

            const convertedToDate = Date.parse(filmObject.release_date)


            this.films.push({
                id: nanoid(),
                title: filmObject.title, 
                episode_id: filmObject.episode_id,
                opening_crawl: filmObject.opening_crawl,
                director: filmObject.director,
                producer:filmObject.producer,
                release_date: convertedToDate,
                characters: filmObject.characters,
                isFaved: isFaved
            })
        },


        getAllFilms(){

            return this.films.slice().sort(function compare(a, b) {
                var dateA = new Date(a.release_date);
                var dateB = new Date(b.release_date);
                return dateA - dateB;
            });
        },

        getFavedFilms(){

        },

        changeFavedForAFilmID(episode_id){

            const episode = this.films.find(x => x.episode_id === episode_id)
            const episodeIndex = this.films.findIndex(x => x.episode_id === episode_id)
            
            if(episode.isFaved){
                
                var arrayOfFavedFilms = localStorage.getItem('faved_films')
                let favedIndex = arrayOfFavedFilms.findIndex(x => x === episode_id)
                arrayOfFavedFilms.splice(favedIndex, 1)
                localStorage.setItem('faved_films', JSON.stringify(arrayOfFavedFilms))
            
            }else{

                var arrayOfFavedFilms = JSON.parse(localStorage.getItem('faved_films'))
                arrayOfFavedFilms.push(episode_id)
                localStorage.setItem('faved_films', JSON.stringify(arrayOfFavedFilms))
            }
            
            
            
            episode.isFaved = !episode.isFaved



            this.films[episodeIndex] = episode

        }
    }
}