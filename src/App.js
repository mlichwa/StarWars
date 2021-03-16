import { observer } from 'mobx-react';
import styles from './App.module.scss';
import MainPage from './pages/main/main';



const App = ovserver(
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