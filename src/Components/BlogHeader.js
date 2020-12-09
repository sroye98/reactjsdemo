import { useState, useEffect } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import logo from '../Assets/Images/logo3.png';

function BlogHeader(props) {
  const history = useHistory();
  const [menuIsActive, setMenuIsActive] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setMenuIsActive(false);
    });
  });

  return (
    <nav className="navbar my-3" role="navigation" aria-label="main navigation">
      <div className="container is-fluid">
        <div className="navbar-brand">
          <Link to="/blog" className="navbar-item">
            <img src={logo} alt="CreativeTeam" />
          </Link>
          <div role="button" className={`navbar-burger burger ${menuIsActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setMenuIsActive(menuIsActive => !menuIsActive)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${menuIsActive ? 'is-active': ''}`} key={window.location.href}>
          <div className="navbar-start">
          </div>
          <div className="navbar-end">
            <NavLink activeClassName="is-active" exact={true} to="/blog" className="navbar-item is-size-7">
              Home
            </NavLink>
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/" className="button is-small is-primary">
                  <span className="icon is-small">
                    <i className="fas fa-arrow-left"></i>
                  </span>
                  <span>Back to Main Site</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BlogHeader;