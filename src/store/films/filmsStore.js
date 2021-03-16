import { Component } from 'react'


export default class FilmsStore extends Component {


    // Return an array of films... or an empty array if no films are stored.
    static return_films = () => {
        const films = localStorage.getItem('films');
        if(films){
            return JSON.parse(films);
        }else{
            return {}
        }
    }
}