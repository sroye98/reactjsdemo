import logo from '../Assets/Images/logo3.png';

import Address from './Footer/Address';
import Links from './Footer/Links';
import SocialMedia from './Footer/SocialMedia';

function AdminFooter() {
  return (
    <footer className="footer has-background-dark">
      <div className="content has-text-centered">
        <img src={logo} alt="CreativeTeam" width="200px" />
      </div>
      <hr className="has-background-grey-dark" />
      <div className="container">
        <div className="columns is-mobile is-multiline">
          <div className="column is-one-fourth is-half-mobile has-text-left">
            <Links />
          </div>
          <div className="column is-one-fourth is-half-mobile">
            <Address />
          </div>
          <div className="column is-one-fourth is-hidden-mobile"></div>
          <div className="column is-one-fourth is-full-mobile has-text-right has-text-left-mobile">
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AdminFooter;