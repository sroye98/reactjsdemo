import { useState, useEffect } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import logo from '../Assets/Images/logo3.png';

function AnonymousHeader(props) {
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
            <NavLink activeClassName="is-active" exact={true} to="/" className="navbar-item is-size-7">
              Home
            </NavLink>
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink activeClassName="is-active" to="/services" className="navbar-link is-size-7">
                Services
              </NavLink>
              <div className="navbar-dropdown">
                <NavLink activeClassName="is-active" to="/services/client-faqs" className="navbar-item is-size-7">
                  Client FAQs
                </NavLink>
                <NavLink activeClassName="is-active" to="/services/consultant-faqs" className="navbar-item is-size-7">
                  Consultant FAQs
                </NavLink>
                <NavLink activeClassName="is-active" to="/services/technolog-branding" className="navbar-item is-size-7">
                  Technology/Branding
                </NavLink>
              </div>
            </div>
            <NavLink activeClassName="is-active" to="/industries-we-serve" className="navbar-item is-size-7">
              Industries We Serve
            </NavLink>
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink activeClassName="is-active" exact={true} to="/who-we-are" className="navbar-link is-size-7">
                Who We Are
              </NavLink>
              <div className="navbar-dropdown">
                <NavLink activeClassName="is-active" exact={true} to="/who-we-are" className="navbar-item is-size-7">
                  Introduction
                </NavLink>
                <NavLink activeClassName="is-active" to="/who-we-are/our-team" className="navbar-item is-size-7">
                  Our Team
                </NavLink>
                <NavLink activeClassName="is-active" to="/who-we-are/social-media" className="navbar-item is-size-7">
                  Social Media
                </NavLink>
                <NavLink activeClassName="is-active" to="/who-we-are/contact-us" className="navbar-item is-size-7">
                  Contact Us
                </NavLink>
              </div>
            </div>
            <NavLink activeClassName="is-active" to="/careers" className="navbar-item is-size-7">
              Careers
            </NavLink>
            <NavLink activeClassName="is-active" to="/blog" className="navbar-item is-size-7">
              Blog
            </NavLink>
            <NavLink activeClassName="is-active" to="/contact-us" className="navbar-item is-size-7">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AnonymousHeader;