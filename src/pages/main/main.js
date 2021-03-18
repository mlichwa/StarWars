import React, { Component } from 'react';
import { withRouter, Route } from "react-router-dom";
import AllFilms from './tabs/allFilms';
import FavoritedFilms from './tabs/favoritedFilms';
import FavoritedActors from './tabs/favoritedActors';
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import styles from './main.module.scss';
>>>>>>> Initial UI tweaks to layout the app.

=======
import styles from './main.module.scss';
import Sync from '../../store/api/sync'
>>>>>>> Stashed changes

class MainPage extends Component {
   
    constructor(props){
        super(props)

        this.routes = [
            {
                path: "/",
                component: AllFilms
            },
            {
                path: "/favoritedFilms",
                component: FavoritedFilms
            },
            {
                path: "/favoritedActors",
                component: FavoritedActors
            }
        ];
    }



    render() {
        return(
<<<<<<< HEAD
<<<<<<< Updated upstream
            <div>
=======
            
            
            <div className={styles.appBody}>
>>>>>>> Stashed changes
=======
            <div className={styles.appBody}>
>>>>>>> Initial UI tweaks to layout the app.
                {
                    this.routes.map((route, i) => (
                        <Route key={i} exact path={route.path} component={route.component} />
                    ))
                }
            </div>
           
            
        )
    }
}
export default withRouter(MainPage);