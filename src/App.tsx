import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './pages/Footer';
import Logo from './pages/Logo';
import Current from './pages/Current';
import Voting from './pages/Voting';
import Signup from './pages/Signup';
import Home from './pages/Home';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="site">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/current">
            <Current />
          </Route>
          <Route path="/voting">
            <Voting />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
