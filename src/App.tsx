import React from "react";
import "./App.css";
import Chargement from "./composants/Chargement";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./composants/Header";
import Home from "./composants/Home";
import Projets from "./composants/Projets";
import Moi from "./composants/Moi";
import Contact from "./composants/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    // Attendre 6 secondes avant de changer l'état isLoading
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    return (
      <div className="App">
        {/* Afficher le composant de chargement tant que l'application est en cours de chargement */}
        {this.state.isLoading ? (
          <Chargement />
        ) : (
          // Afficher le reste de l'application une fois le chargement terminé
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Projets" component={Projets} />
              <Route path="/Moi" component={Moi} />
              <Route path="/Contact" component={Contact} />
            </Switch>
          </Router>
        )}
      </div>
    );
  }
}

export default App;
