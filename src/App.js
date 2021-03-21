import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './pages/main/main';
import Header from './components/header/header';
import styles from './App.module.scss';
import Films from './store/Films';
import { observer } from 'mobx-react';
import Overlay from './components/overlay/overlay';


const App = observer(
  class App extends React.Component{
      
      componentDidMount = () => {
          Films.loadFilms()
      }
      
      render() {
          return(
              <Router>
                  <div className={styles.container}>
                      <Header />
                      <Route path="*" component={() => <MainPage />} />
                      <Overlay/>
                  </div>
              </Router>
          )
      }
  }
)

export default App;