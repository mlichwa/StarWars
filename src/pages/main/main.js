import React, { Component } from 'react';
import { withRouter, Route } from "react-router-dom";
import AllFilms from './tabs/allFilms';
import FavoritedFilms from './tabs/favoritedFilms';
import FavoritedActors from './tabs/favoritedActors';


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
            <div>
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