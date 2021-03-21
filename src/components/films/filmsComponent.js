import React from 'react';
import Films from '../../store/Films';
import FilmCard from '../filmCard/filmCard';
import styles from './filmsComponent.module.scss';
import { observer } from 'mobx-react';

const FilmsComponent = observer(
    class FilmsComponent extends React.Component{
        
        render() {
            return(
                <div>
                    <div className={styles.grid}>
                        {Films.films.map((film) => {
                            return(<FilmCard key={film.episode_id} film={film} />)
                        })}
                    </div>
                </div>
              
            )
        }
    }
)

export default FilmsComponent;