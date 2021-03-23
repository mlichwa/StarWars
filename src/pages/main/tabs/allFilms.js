import React from 'react';
import styles from "./allFilms.module.scss";
import Films from './../../../store/Films';
import { observer } from 'mobx-react';
import FilmsComponent from './../../../components/films/filmsComponent';
import Spinner from './../../../components/spinner/spinner'
import ErrorMessage from '../../../components/errorMessage/errorMessage'

const AllFilms = observer(
    class AllFilms extends React.Component{
        
        render() {
            return(
                <div className={styles.component}>
                <h1 className={styles.header} >All Films</h1>
                {
                    Films.isLoading ? 
                        <Spinner /> : Films.error !== 
                            "" ? <ErrorMessage /> : <FilmsComponent />
                }
            </div>   
            )
        }
    }
)

export default AllFilms;