import {nanoid} from 'nanoid'

export function createFilmsStore(){
    console.log("CREATING FILMS STORE:")

    const arrayOfFavedFilms = localStorage.getItem('faved_films');

    return {
        films: [],
        addFilm(filmObject){
            

            // Check if object with given ID ( episode ID ) is stored in the 
            const isFaved = false
            if(arrayOfFavedFilms !== null){

                
                arrayOfFavedFilms.forEach(id => {
                    if(id === filmObject.episode_id){
                        isFaved = true
                    }
                })
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
            
            console.log(episodeIndex)
            console.log(episode)
            
            episode.isFaved = !episode.isFaved
            this.films[episodeIndex] = episode
            
            
            console.log(episode.title)
        }
    }
}