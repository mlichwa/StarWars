import React from 'react';
import styles from "./favoritedCharacters.module.scss";
import Characters from './../../../store/Characters';
import FavoritedCharactersComponent from '../../../components/favoritedCharacters/favoritedCharacters'
import { observer } from 'mobx-react';
import Spinner from './../../../components/spinner/spinner'
import ErrorMessage from '../../../components/errorMessage/errorMessage'

const FavoritedCharacters = observer(
    class FavoritedCharacters extends React.Component{
        
        componentDidMount = () => {
            Characters.loadFavedCharacters()
        }

        render() {
            return(
                <div className={styles.component}>
                <h1 className={styles.header} >Favorited Characters</h1>
                {
                    Characters.isLoading ? <Spinner /> : 
                    Characters.error !== "" ? <ErrorMessage /> : <FavoritedCharactersComponent />
                }
            </div>   
            )
        }
    }
)

export default FavoritedCharacters;