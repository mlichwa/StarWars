import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Card from '../../../components/card/card';
import styles from "./allFilms.module.scss";
import { NewFilmForm } from '../../../store/newFilmForm';
import {useFilmsStore} from '../../../store/filmsContext';
import { Sync } from '../../../store/api/sync';

function AllFilms() {


        const filmsStore = useFilmsStore()
        Sync.get_all_films(filmsStore)
        return(
            
            <div className={styles.component}>
                <h1>All Films</h1>
                <NewFilmForm />
                <Card  store={filmsStore}/>
            </div>
            
        )
    
}

export default withRouter(AllFilms);