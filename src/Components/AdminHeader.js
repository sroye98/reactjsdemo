import { useState, useEffect } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import logo from '../Assets/Images/logo3.png';

function AdminHeader() {
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
          <Link to="/" className="navbar-item">
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
            <NavLink activeClassName="is-active" exact={true} to="/admin/" className="navbar-item is-size-7">
              Home
            </NavLink>
            <NavLink activeClassName="is-active" to="/admin/posts" className="navbar-item is-size-7">
              Posts
            </NavLink>
            <NavLink activeClassName="is-active" to="/admin/jobs" className="navbar-item is-size-7">
              Jobs
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminHeader;