import { Link } from 'react-router-dom';
import logo from '../Assets/Images/logo3.png';

function BlogFooter() {
  return (
    <footer className="footer has-background-dark">
      <div className="content has-text-centered">
        <img src={logo} alt="CreativeTeam" width="200px" />
      </div>
      <hr className="has-background-grey-dark" />
      <div className="container">
        <div className="columns">
          <div className="column is-one-fourth has-text-left">
            <p className="is-size-7 is-uppercase has-text-white mb-3">Links</p>
            <p className="is-size-7 mb-1">
              <Link to="/" className="has-text-grey-light">Home</Link>
            </p>
            <p className="is-size-7 mb-1">
              <Link to="/services" className="has-text-grey-light">Services</Link>
            </p>
            <p className="is-size-7 mb-1">
              <Link to="/industries-we-serve" className="has-text-grey-light">Industries We Serve</Link>
            </p>
            <p className="is-size-7 mb-1">
              <Link to="/who-we-are" className="has-text-grey-light">Who We Are</Link>
            </p>
            <p className="is-size-7 mb-1">
              <Link to="/careers" className="has-text-grey-light">Careers</Link>
            </p>
            <p className="is-size-7 mb-1">
              <Link to="/blog" className="has-text-grey-light">Blog</Link>
            </p>
            <p className="is-size-7 mb-1">
              <Link to="/contact-us" className="has-text-grey-light">Contact Us</Link>
            </p>
          </div>
          <div className="column is-one-fourth">
            <p className="is-size-7 is-uppercase has-text-white mb-3">Houston Office</p>
            <p className="is-size-7 has-text-grey-light mb-1">
              <address>
                2825 Wilcrest Dr.<br />
                Suite 456<br />
                Houston, TX 77042
              </address>
            </p>
          </div>
          <div className="column is-one-fourth"></div>
          <div className="column is-one-fourth has-text-right">
            <p className="is-size-7 is-uppercase has-text-white mb-3">Connect</p>
            <p className="is-size-7 mb-1">
              <a href="https://www.linkedin.com/creativeteam-io" className="has-text-grey-light">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </p>
            <p className="is-size-7 mb-1">
              <a href="https://www.twitter.com/creativeteamio" className="has-text-grey-light">
                <i className="fab fa-twitter-square"></i> Twitter
              </a>
            </p>
            <p className="is-size-7 mb-1">
              <a href="https://www.instagram.com/creativeteamio" className="has-text-grey-light">
                <i className="fab fa-instagram-square"></i> Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BlogFooter;