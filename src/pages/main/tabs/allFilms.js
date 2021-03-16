import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import styles from "./allFilms.module.scss";



class AllFilms extends Component {

    render() {
        return(
            <div className={styles.component}>
                <h1>All Films</h1>
            </div>
        )
    }
}

export default withRouter(AllFilms);