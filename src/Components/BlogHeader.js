import { Link, NavLink } from 'react-router-dom';
import logo from '../Assets/Images/logo3.png';

function BlogHeader() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container is-fluid">
        <div className="navbar-brand">
          <Link to="/blog" className="navbar-item">
            <img src={logo} width="200" alt="CreativeTeam" />
          </Link>

          <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
          </div>

          <div className="navbar-end">
            <NavLink activeClassName="is-active" exact={true} to="/blog" className="navbar-item">
              Home
            </NavLink>
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/" className="button is-primary">
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