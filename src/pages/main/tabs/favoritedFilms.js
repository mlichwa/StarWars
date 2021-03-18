import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import styles from "./favoritedFilms.module.scss";



class FavoritedFilms extends Component {

    render() {
        
        return(
            <div className={styles.component}>
                <h1>Favorited Films</h1>
            </div>
        )
    }
}

export default withRouter(FavoritedFilms);