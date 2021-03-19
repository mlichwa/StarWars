import React, { Component } from 'react';
import styles from './card.module.scss';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import * as Icon from 'react-feather';

const Card = observer(
    class Card extends Component{

        constructor(props){
            super(props)
            this.state = {

            }
        }

        setAsFavorite = () =>{

        }

        render(){
            
            

            return(
                <div className={styles.grid_item}>
                
                    <h2>{this.props.object.title}</h2>
                    <p>{this.props.object.opening_crawl}</p>
                    
                    <button className={styles.starButton} onClick={() => this.setAsFavorite()}>
                        <Icon.Star fill="true" size="15" className={classNames(styles.icon)}/>
                    </button>
                    
                    
                </div>
            )   
        }
        
        
    }
)


export default Card;