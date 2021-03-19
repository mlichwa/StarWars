import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { observer } from 'mobx-react';

import MainPage from './pages/main/main';
import Header from './components/header/header';
<<<<<<< Updated upstream
=======
import Logger from './components/logger/logger';
import AllFilms from './pages/main/tabs/allFilms';
import { FilmsProvider } from './store/filmsContext';
>>>>>>> Stashed changes


  function App(){

<<<<<<< Updated upstream
const App = observer(
    class App extends Component{
        
      constructor(props){
        super(props)
        this.state = {
          isLoading: true
        }
      }

      componentDidMount = async () => {
        // Todo: Initial setup once component mounts.
      
      }

      triggerFilmFilter = () => {
        // Todo: filter films based on selected values.
      }


      render(){
        return(
          <Router>
            <div>
=======
      function triggerFilmFilter() {
        // Todo: filter films based on selected values.
      }
      return(
        <Router>
          <FilmsProvider>
            <div className={styles.container}>
>>>>>>> Stashed changes
              <Header triggerFilter={()=> this.triggerFilmFilter()} />
              <Route path="*" component={() => <MainPage />} />
            </div>
            </FilmsProvider>
        </Router>
      ) 
}


export default App;