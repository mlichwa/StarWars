import React, { Component } from 'react';
import styles from './card.module.scss';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import * as Icon from 'react-feather';

const Card = observer(
    class Card extends Component{

        constructor(props){
            super(props)
            this.state = {

            }
        }

        updateFavorite = () =>{
            console.log("clicked star with ID")
            this.props.filmsStore.changeFavedForAFilmID(this.props.object.episode_id);

        }

        openMoreView = () =>{
            console.log('open more view');
        }

        render(){

            const isFaved = this.props.object.isFaved === true ? <Icon.Star fill="true" size="15" className={classNames(styles.icon)}/> : <Icon.Star size="15" className={classNames(styles.icon)}/>
            const releaseDate = new Date(this.props.object.release_date).toLocaleDateString();
            
            return(
                <div className={styles.grid_item}>
                
                    <h2>{this.props.object.title}</h2>
                    <p>{this.props.object.opening_crawl}</p>
                    <label><strong>Director: </strong>{this.props.object.director}</label>
                    <label><strong>Release date: </strong> {releaseDate}</label>
                    <button className={styles.openMore} onClick={() => this.openMoreView }>Show Details</button>
                    <button className={styles.starButton} onClick={() => this.updateFavorite()}>
                        {isFaved}
                    </button>

                </div>
            )   
        }
        
        
    }
)


export default Card;