import React, { Component } from 'react';
import styles from './characterCard.module.scss';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import * as Icon from 'react-feather';

const CharacterCard = observer(
    class CharacterCard extends Component{

        render(){

            const { character } = this.props
            const isFaved = character.isFaved ? <Icon.Star fill="true" size="15" className={classNames(styles.icon)}/> : <Icon.Star size="15" className={classNames(styles.icon)}/>

            console.log("RENDER CHARACTER:: ", character)
            return(
                <div className={styles.grid_item}>
                    <h4>{character.name}</h4>
                    <button className={styles.starButton} onClick={() => character.toggleFave()}> {isFaved}</button>
                    <label><strong>Born: </strong>{character.birth_year}</label>
                    <label><strong>Gender: </strong>{character.gender}</label>
                    <label><strong>Hair Color: </strong>{character.hair_color}</label>
                    <label><strong>Mass: </strong>{character.mass}</label>
                </div>
            )   
        }
    }
)
export default CharacterCard;