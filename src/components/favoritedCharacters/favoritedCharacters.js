import React from 'react';
import Characters from '../../store/Characters';
import CharacterCard from '../characterCard/characterCard';
import styles from './favoritedCharacters.module.scss';
import { observer } from 'mobx-react';

const FavoritedCharactersComponent = observer(
    class FavoritedCharactersComponent extends React.Component{
        
        render() {
            console.log("Loaded Characters:", Characters.characters)
            return(
                <div>
                    <div className={styles.grid}>
                        {Characters.characters.filter(character => character.isFaved).map((character) => {
                            return(<CharacterCard key={character.name} character={character} />)
                        })}
                    </div>
                </div>
              
            )
        }
    }
)

export default FavoritedCharactersComponent;