import {nanoid} from 'nanoid'

export function createFilmsStore(){
    console.log("CREATING FILMS STORE:")
    return {
        films: [],
        addFilm(filmObject){
            // console.log(text, this.films)
            this.films.push({
                id: nanoid(),
                title: filmObject.title, 
                episode_id: filmObject.episode_id,
                opening_crawl: filmObject.opening_crawl,
                director: filmObject.director,
                producer:filmObject.producer,
                release_date: filmObject.release_date,
                characters: filmObject.characters
            })
        }
    }
}