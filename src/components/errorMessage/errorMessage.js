import React from 'react';
import styles from './errorMessage.module.scss';

class ErrorMessage extends React.Component{

    render(){

        return(
            <div className={styles.errorMessage}><p>Ups.. something went wrong. Please try again.</p></div>
        )
    }


}

export default ErrorMessage