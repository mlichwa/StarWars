
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './pages/main/main';
import Header from './components/header/header';
import Logger from './components/logger/logger';
import { useFilmsStore } from './store/filmsContext';
import styles from './App.module.scss';
import { Sync } from './store/api/sync';


  function App(){

    const filmsStore = useFilmsStore()
    Sync.get_all_films(filmsStore)

      return(
        <Router>
            <div className={styles.container}>
              <Header triggerFilter={()=> this.triggerFilmFilter()} />
              <Route path="*" component={() => <MainPage />} />
              <Logger />
            </div>
        </Router>
      ) 
}


export default App;