import styles from './appBody.module.scss';
import { observer } from 'mobx-react';
import { useFilmsStore } from '../../store/filmsContext';
import { useCharacterStore } from '../../store/characterContext';
import Card from '../card/card';
import Modal from '../modal/Modal';
import useModal from '../modal/useModal';
import { Sync } from '../../store/api/sync';

const AppBody = observer(
    function AppBody(){
    
        const filmsStore = useFilmsStore()
        const characterStore = useCharacterStore()
        const {isShowing, toggle, updateObject, filmObject, updateCharacterStore} = useModal();


        //  Open modal with an ID passed back from the Card.
        function openModal(id){
            console.log("OPEN MODAL WITH ID:", id)

            const film = filmsStore.getFilmWithID(id)
            Sync.get_characters_from_array(film.characters, characterStore);

            updateCharacterStore(characterStore)
            updateObject(film)
            toggle()
        }

        return(
            <div>                
                <div className={styles.body_grid}>
                {filmsStore.getAllFilms().map(item => (
                    
                    <Card key={item.id} object={item} filmsStore={filmsStore} openModal={(value) => openModal(value)}/> 
                ))}
                </div>
                <Modal isShowing={isShowing} hide={toggle} object={filmObject} characterStore={characterStore}>
                    <h1>aa</h1>
                </Modal>
                
            </div>
            
        )   
        
    }
)


export default AppBody;