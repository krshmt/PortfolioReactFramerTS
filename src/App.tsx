import React from "react";
import "./App.css";
import Chargement from "./composants/Chargement";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./composants/Header";
import Home from "./composants/Home";
import Projets from "./composants/Projets";
import Moi from "./composants/Moi";
import Contact from "./composants/Contact";
import ProjetDetail from "./composants/ProjetDetail";
import Test from "./composants/Test";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      projets: []
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
        {this.state.isLoading ? (
          <Chargement />
        ) : (
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Projets" exact component={Projets} />
              <Route path="/Moi" exact component={Moi} />
              <Route path="/Contact" exact component={Contact} />
              <Route path="/projet/:id" exact component={ProjetDetail} />
              <Route path="/test" exact component={Test} />
            </Switch>
          </Router>
        )}
      </div>
    );
  }
}

export default App;
