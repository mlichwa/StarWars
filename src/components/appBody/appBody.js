import styles from './appBody.module.scss';
import { observer } from 'mobx-react';
import { useFilmsStore } from '../../store/filmsContext';
import Card from '../card/card';
import Modal from '../modal/Modal';
import useModal from '../modal/useModal';

const AppBody = observer(
    function AppBody(){
    
        const filmsStore = useFilmsStore()
        const {isShowing, toggle} = useModal();
        
        return(
            <div>
                <button className="button-default" onClick={toggle}>Show Modal</button>
                
                <div className={styles.body_grid}>
                {filmsStore.getAllFilms().map(item => (
                    
                    <Card key={item.id} object={item} filmsStore={filmsStore}/>
                    
                ))}
                </div>
                <Modal isShowing={isShowing} hide={toggle} />
            </div>
            
        )   
        
    }
)


export default AppBody;