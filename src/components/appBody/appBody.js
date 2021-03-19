import styles from './appBody.module.scss';
import { observer } from 'mobx-react';
import { useFilmsStore } from '../../store/filmsContext';
import Card from '../card/card';

const AppBody = observer(
    function AppBody(){
    
        const filmsStore = useFilmsStore()

        function updateFavorite(target) {
            console.log("update", target)

        }

        return(
            <div className={styles.body_grid}>
                {filmsStore.getAllFilms().map(item => (
                    
                    <Card key={item.id} object={item} filmsStore={filmsStore}/>
                    
                ))}
            </div>
        )   
        
    }
)


export default AppBody;