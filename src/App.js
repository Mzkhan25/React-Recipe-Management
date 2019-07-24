import React from "react";
import logo from "./logo.svg";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Home from "./components/home/index";
import About from "./components/about/index";
import RecipeState from "./context/recipe/RecipeState";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <RecipeState>
      <Router>
        <div className="App">
          <Header icon="fab fa-github" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              {/* <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} /> */}
              )} />
            </Switch>
          </div>
          <Footer icon="fab fa-github" />
        </div>
      </Router>
    </RecipeState>
  );
};

export default App;
