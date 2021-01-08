import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
          <header className="site-hd">
          <Logo />
          <div className="masthead u-constrainer">
              <a className="logo">
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
      <div className="site-bd">
          <div className="site-bd-section">
            <div className="heroBanner">
                <div className="heroBanner-content u-constrainer">
                    <div className="heroBanner-content-hd">
                        <h1 className="hdg hdg_1">Nerdery Snack Food System</h1>
                    </div>
                    <div className="heroBanner-content-bd">
                        <p className="copy">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="heroBanner-content-ft">
                        <button className="btn"><Link to="/voting">Vote Now</Link></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    );
};

export default Home;
