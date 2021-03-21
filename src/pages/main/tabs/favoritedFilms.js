import React from 'react';
import FavoritedFilmsComponent from '../../../components/favoritedFilms/favoritedFilms';
import styles from "./favoritedFilms.module.scss";
import Films from './../../../store/Films';
import { observer } from 'mobx-react';


const FavoritedFilms = observer(
    class FavoritedFilms extends React.Component{
        
        render() {
            return(
                <div className={styles.component}>
                <h1 className={styles.header} >Favorited Films</h1>
                {
                    Films.isLoading ? <p>Is loading....</p> : <FavoritedFilmsComponent />
                }
            </div>   
            )
        }
    }
)

export default FavoritedFilms;