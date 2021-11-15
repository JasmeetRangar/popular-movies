import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from "./components/Homepage";
import MoviePage from './components/MoviePage';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
          </Route>   
        <Route exact path="/movies/:id" component={(props) => (
          <MoviePage {...props}/>
        )}>
          
          </Route>    
      </Switch>
    </Router>
  );
}

export default App;
