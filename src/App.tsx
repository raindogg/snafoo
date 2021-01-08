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
      <header className="site-hd">
          <Logo />
          <div className="masthead u-constrainer">
              <a id="logo">
                  <svg viewBox="0 0 900 300">
                      <use xlinkHref="#logo"></use>
                  </svg>
              </a>
              <nav className="hList">
                  <Link className="navLink" to="/">Home</Link>
                  <Link className="navLink" to="/current">Current</Link>
                  <Link className="navLink" to="/voting">Voting</Link>
                  <Link className="navLink" to="/signup">Sign Up</Link>
              </nav>
          </div>
        </header>
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
