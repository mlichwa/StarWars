import React from 'react';
import Films from '../../store/Films';
import FilmCard from '../filmCard/filmCard';
import styles from './favoritedFilms.module.scss';
import { observer } from 'mobx-react';

const FavoritedFilmsComponent = observer(
    class FavoritedFilmsComponent extends React.Component{
        
        render() {
            return(
                <div>
                    <div className={styles.grid}>
                        {Films.films.filter(film => film.isFaved).map((film) => {
                            return(<FilmCard key={film.episode_id} film={film} />)
                        })}
                    </div>
                </div>
              
            )
        }
    }
)

export default FavoritedFilmsComponent;