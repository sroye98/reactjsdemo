import {
  Link,
  useHistory,
  useLocation
} from "react-router-dom";

import { useAuth } from '../../Hooks/Auth';

function RenderLoginForm() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/admin" } };
  let login = () => {
    auth.signin('', '', () => {
      history.replace(from);
    });
  };

  return (
    <form className="has-text-left">
      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <input className="input" type="text" placeholder="" autoFocus={true} />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" placeholder="" />
        </div>
      </div>
      <button className="button is-block is-info is-fullwidth" type="button" onClick={login}>
        Login
      </button>
    </form>
  );
}

function Login() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-4 is-offset-4">
              <h1 className="is-size-3 has-text-weight-bold">Login</h1>
              <RenderLoginForm />
            </div>
          </div>
          <p>
            <Link to="../" className="has-text-grey">Need Help?</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;