
import React from 'react';
import styles from './logger.module.scss';
import { Hook, Console, Decode } from 'console-feed';
import classNames from 'classnames';


class Logger extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            logs: []
          }
    
    }

    componentDidMount = async () => {
        Hook(window.console, log => {
          this.setState(({ logs }) => ({ logs: [...logs, Decode(log)] }))
        })
    
        // console.log(`Hello world!`);
      
    }

    // This function shows/hides the right side LOG panel.
    openCloseComponent = () => {
        console.log("Log:: open/close clicked");
        const newValue = !this.state.isOpen
        this.setState({
            isOpen : newValue
        })
    }


    render(){

        const isOpen = this.state.isOpen === true ? styles.open : null;

        return(
            <div className={classNames([styles.component, isOpen])}>
                <button onClick={() => this.openCloseComponent()} className={styles.openCloseButton}>Show Dev Log</button>
                <Console logs={this.state.logs} variant="dark" />
            </div>
        )
    }
}

export default Logger;