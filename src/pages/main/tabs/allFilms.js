import React from 'react';
import styles from "./allFilms.module.scss";
import Films from './../../../store/Films';
import { observer } from 'mobx-react';
import FilmsComponent from './../../../components/films/filmsComponent';


const AllFilms = observer(
    class AllFilms extends React.Component{
        
        render() {
            return(
                <div className={styles.component}>
                <h1 className={styles.header} >All Films</h1>
                {
                    Films.isLoading ? <p>Is loading....</p> : <FilmsComponent />
                }
            </div>   
            )
        }
    }
)

export default AllFilms;