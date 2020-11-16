import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Links() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default Links;