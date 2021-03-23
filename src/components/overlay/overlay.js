import React, { Component } from 'react'
import { observer } from 'mobx-react';
import styles from './overlay.module.scss'
import classNames from 'classnames'
import Modal from '../../store/Modal'
import CharacterCard from '../characterCard/characterCard'
import Films from '../../store/Films'
import * as Icon from 'react-feather';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

const Overlay = observer(
    class Overlay extends Component {

        constructor(props){
            super(props)
            this.state = {
                
            }
            this.escFunction = this.escFunction.bind(this);
        }

        componentDidMount() {
            console.log("The componentDidMount method is only fired the first time the component is mounted");

            // const filmsStore = useFilmsStore()
            // const characterStore = useCharacterStore()
        }


		escFunction(event){
			if(event.keyCode === 27) {
			  
			  console.log("ESC on Modal")
              Modal.toggleModal();
			}
		 }


        loadCharacters = () =>{
            return(
                    Modal.characters.map((character) => {
                        return(<CharacterCard key={character.name} character={character} />)
                    }) 
            )
        }

        loadFilmInformation = () => {
            const film = Films.activeFilm
            const isFaved = film.isFaved ? <Icon.Star fill="true" size="15" className={classNames(styles.icon)}/> : <Icon.Star size="15" className={classNames(styles.icon)}/>
            return(
                <>
                    <h3>
                        <button className={styles.starButton} onClick={() => film.toggleFave()}> {isFaved}</button>
                        {film.title}
                    </h3>
                    <p>{film.opening_crawl}</p>
                    <label><strong>Director: </strong>{film.director}</label>
                    <label><strong>Producers: </strong>{film.producer}</label>
                    <label><strong>Release date: </strong>{film.release_date}</label> 
                </>
            )
        }

        closeModal = () => {
            Modal.toggleModal();
        }


        render() {
            
            const showModal = Modal.showModal ? styles.show : null
            const error = Modal.error !== "" ? <ErrorMessage /> : null
            const allCharacters = Modal.characters.length !== 0 ? this.loadCharacters() : <Spinner />
            const film = Films.activeFilm != null ? this.loadFilmInformation() : null
            return (
                Modal.error !== "" ? 
                <ErrorMessage /> : 
                <div>
                    <div className={classNames([styles.overlay, showModal])}>
                        <div className={styles.Wrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
                            <div className={styles.Modal}>
                                <div className={styles.Header}>
                                    <button type="button" className={styles.closeButton} data-dismiss="modal" aria-label="Close" onClick={() => this.closeModal()}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className={styles.body}>
                                    {film}
                                    <h3>Characters:</h3>
                                </div>
                                <div className={styles.gridBox}>
                                    
                                    <div className={styles.grid}>
                                         {allCharacters}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
)
export default Overlay