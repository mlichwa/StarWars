import React, { Component } from 'react';
import styles from './filmCard.module.scss';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import * as Icon from 'react-feather';
import Modal from "../../store/models/Modal";

const FilmCard = observer(
    class FilmCard extends Component{


        openModal = () =>{
            const { film } = this.props
            Modal.toggleModal(film)
        }

        render(){

            const { film } = this.props
            const isFaved = film.isFaved ? <Icon.Star fill="true" size="15" className={classNames(styles.icon)}/> : <Icon.Star size="15" className={classNames(styles.icon)}/>

            console.log("RENDER FILM:: ", film)
            return(
                <div className={styles.grid_item}>
                    <h2>{film.title}</h2>
                    <p>{film.opening_crawl}</p>
                    <label><strong>Director: </strong>{film.director}</label>
                    <label><strong>Release date: </strong> {film.release_date}</label>
                    <button className={styles.openMore} onClick={() => this.openModal()}>Show Details</button>
                    <button className={styles.starButton} onClick={() => film.toggleFave()}> {isFaved}</button>
                </div>
            )   
        }
    }
)
export default FilmCard;