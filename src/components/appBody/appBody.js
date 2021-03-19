import styles from './appBody.module.scss';
import { observer } from 'mobx-react';
import { useFilmsStore } from '../../store/filmsContext';
import Card from '../card/card';

const AppBody = observer(
    function AppBody(){
    
        const filmsStore = useFilmsStore()
        return(
            <div className={styles.body_grid}>
                {filmsStore.films.map(item => (
                    
                    <Card key={item.id} object={item} />
                    
                ))}
            </div>
        )   
        
    }
)


export default AppBody;