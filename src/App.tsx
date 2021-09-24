import "./App.css";
import About from "./screens/About";
import Shop from "./screens/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import ShowPokemon from "./screens/ShowPokemon";
import { _error } from "./screens/_error";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ShowPokemon} />
          <Route component={_error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
