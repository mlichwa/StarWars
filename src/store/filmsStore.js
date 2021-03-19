import {nanoid} from 'nanoid'

export function createFilmsStore(){
    console.log("CREATING FILMS STORE:")
    return {
        films: [],
        addFilm(text){
            // console.log(text, this.films)
            this.films.push({
              text, id: nanoid()
            })
          }
    }
}