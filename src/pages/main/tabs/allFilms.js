import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import AppBody from '../../../components/appBody/appBody';
import styles from "./allFilms.module.scss";

function AllFilms() {
    
    return(
        <div className={styles.component}>
            <h1 className={styles.header} >All Films</h1>
            <AppBody />
        </div>   
    )
}

export default withRouter(AllFilms);