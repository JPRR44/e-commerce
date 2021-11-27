import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage.component';


const HatsPage = () => {
  return(
    <h1>
      HATS PAGE
    </h1>
  )
} 

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
