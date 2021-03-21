import React, { Component } from 'react';
import { withRouter, Route } from "react-router-dom";
import AllFilms from './tabs/allFilms';
import FavoritedFilms from './tabs/favoritedFilms';
import styles from './main.module.scss';
import FavoritedCharacters from './tabs/favoritedCharacters';

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
                path: "/favoritedCharacters",
                component: FavoritedCharacters
            }
        ];
    }

    render() {
        return(
            <div className={styles.appBody}>
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