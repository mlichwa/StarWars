import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { observer } from 'mobx-react';

import MainPage from './pages/main/main';
import Header from './components/header/header';



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
              <Header triggerFilter={()=> this.triggerFilmFilter()} />
              <Route path="*" component={() => <MainPage />} />
            </div>
          </Router>
        )
      }
    }
)

export default App;