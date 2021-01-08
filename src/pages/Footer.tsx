import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

type Props = {
  children: any;
};

const Footer: React.FC<Props> = (props: Props) => {
  return (
            <footer className="site-ft">
              <Logo />
              <div className="footer u-constrainer">
                  <div className="footer-primary">
                      <a className="footLogo">
                          <svg viewBox="0 0 900 300">
                             <use xlinkHref="#logo"></use>
                          </svg>
                      </a>
                    </div>
                    <div className="footer-secondary">
                        <nav className="hList hList_divided u-vr_x3">
                            <Link className="navLink navLink_dark" to="/">Home</Link>
                            <Link className="navLink navLink_dark" to="/current">Current</Link>
                            <Link className="navLink navLink_dark" to="/voting">Voting</Link>
                            <Link className="navLink navLink_dark" to="/signup">Sign Up</Link>
                        </nav>
                        <small className="finePrint">&copy; The Nerdery | 9555 James Ave S #245, Bloomington, MN 55431</small>
                    </div>
                </div>
            </footer>
          );
};

export default Footer;