import React, { Component } from 'react';
import styles from './header.module.scss';
import { withRouter, NavLink } from "react-router-dom";
import { observer } from 'mobx-react';


const Header = observer(
    class Header extends Component{

        constructor(props){
            super(props)
            this.state = {

            }
        }

        render(){
            return(
                <header className={styles.component} >
                    <div className={styles.header}>
                        <NavLink to="/" className={styles.item} activeClassName={styles.active} exact={true}>
                            All Films
                        </NavLink>
                        <NavLink to="/favoritedFilms" className={styles.item} activeClassName={styles.active} exact={true}>
                            Faved Films
                        </NavLink>
                        <NavLink to="/favoritedCharacters" className={styles.item} activeClassName={styles.active} exact={true}>
                            Faved Characters
                        </NavLink>
                    </div>
                </header>
            );
        }   
    }
)

export default withRouter(Header);