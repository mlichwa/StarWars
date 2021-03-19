import React, { Component } from 'react';
import styles from './card.module.scss';
import { observer } from 'mobx-react';
import { useFilmsStore } from '../../store/filmsContext';


// const Card = observer(
//     function Card(){
    


const Card = observer(
    class Card extends Component{
    
        constructor(props){
            super(props)
            this.state = {

            }
        }


        render(){

            return(
                <ul>
                {this.props.store.films.map(item => (
                    <li key={item.id}>
                    <label>{item.text}</label>
                    </li>
                ))}
                </ul>
            )   
        }
    }
)


export default Card;