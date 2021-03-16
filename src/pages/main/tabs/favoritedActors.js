import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import styles from "./favoritedActors.module.scss";



class FavoritedActors extends Component {

    render() {
        return(
            <div className={styles.component}>
                <h1>Favorited Actors</h1>
            </div>
        )
    }
}

export default withRouter(FavoritedActors);