import React from 'react';
import Cards from './Cards';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const App = () => {
    return (
        <Router>
        <Navbar />
          <Switch>
             <Route exact path="/" />
              <Route exact path="/cards" component={Cards} />
          </Switch>
      </Router> 

    )
}

export default App
