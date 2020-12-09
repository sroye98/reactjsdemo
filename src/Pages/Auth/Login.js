import {
  Link,
  useHistory,
  useLocation
} from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";

import { useAuth } from '../../Hooks/Auth';

const defaultValues = {
  identifier: '',
  password: ''
};

function RenderLoginForm() {
  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues
  });
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  const { dirtyFields, touched } = formState;

  let { from } = location.state || { from: { pathname: "/admin" } };
  let login = (data) => {
    auth.signin(
      data.identifier, 
      data.password, 
      () => {
        history.replace(from);
      }
    );
  };

  return (
    <form className="has-text-left" onSubmit={handleSubmit(login)}>
      <div className="field">
        <label className="label">Username or Email Address</label>
        <div className="control">
          <input className={`input ${errors.identifier ? 'is-danger' : touched.identifier && dirtyFields.identifier ? 'is-info' : ''}`} 
                 type="text" 
                 name="identifier"
                 placeholder="" 
                 autoFocus={true} 
                 ref={register({ required: false })} />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className={`input ${errors.password ? 'is-danger' : touched.password && dirtyFields.password ? 'is-info' : ''}`} 
                 type="password" 
                 name="password"
                 placeholder=""
                 ref={register({ required: false })} />
        </div>
      </div>
      <button className="button is-block is-info is-fullwidth" type="submit">
        Login
      </button>
    </form>
  );
}

function Login() {
  return (
    <>
      <Helmet>
        <title>Log In | Creative Team</title>
        <meta name="description" content="Log In | Creative Team" />
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/login`} />
      </Helmet>
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
    </>
  );
}

export default Login;