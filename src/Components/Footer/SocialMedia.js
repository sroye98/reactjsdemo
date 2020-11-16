import { Fragment } from 'react';

function SocialMedia() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default SocialMedia;