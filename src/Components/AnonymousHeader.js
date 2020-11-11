import { Link, NavLink } from 'react-router-dom';
import logo from '../Assets/Images/logo3.png';

function AnonymousHeader() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container is-fluid">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="CreativeTeam" />
            </figure>
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
            <NavLink activeClassName="is-active" exact={true} to="/" className="navbar-item">
              Home
            </NavLink>
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink activeClassName="is-active" to="/services" className="navbar-link">
                Services
              </NavLink>
              <div className="navbar-dropdown">
                <NavLink activeClassName="is-active" to="/services/client-faqs" className="navbar-item">
                  Client FAQs
                </NavLink>
                <NavLink activeClassName="is-active" to="/services/consultant-faqs" className="navbar-item">
                  Consultant FAQs
                </NavLink>
                <NavLink activeClassName="is-active" to="/services/technolog-branding" className="navbar-item">
                  Technology/Branding
                </NavLink>
              </div>
            </div>
            <NavLink activeClassName="is-active" to="/industries-we-serve" className="navbar-item">
              Industries We Serve
            </NavLink>
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink activeClassName="is-active" exact={true} to="/who-we-are" className="navbar-link">
                Who We Are
              </NavLink>
              <div className="navbar-dropdown">
                <NavLink activeClassName="is-active" exact={true} to="/who-we-are" className="navbar-item">
                  Introduction
                </NavLink>
                <NavLink activeClassName="is-active" to="/who-we-are/our-team" className="navbar-item">
                  Our Team
                </NavLink>
                <NavLink activeClassName="is-active" to="/who-we-are/social-media" className="navbar-item">
                  Social Media
                </NavLink>
                <NavLink activeClassName="is-active" to="/who-we-are/contact-us" className="navbar-item">
                  Contact Us
                </NavLink>
              </div>
            </div>
            <NavLink activeClassName="is-active" to="/careers" className="navbar-item">
              Careers
            </NavLink>
            <NavLink activeClassName="is-active" to="/blog" className="navbar-item">
              Blog
            </NavLink>
            <NavLink activeClassName="is-active" to="/contact-us" className="navbar-item">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AnonymousHeader;