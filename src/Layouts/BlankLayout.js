import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { ProvideAuth } from '../Hooks/Auth';

import Login from '../Pages/Auth/Login';
import SignUp from '../Pages/Auth/SignUp';
import ScrollToTop from '../ScrollToTop';
import AdminLayout from './AdminLayout';
import AnonymousLayout from './AnonymousLayout';
import BlogLayout from './BlogLayout';

function BlankLayout() {
  return (
    <ProvideAuth>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Switch>
          <Route path="/admin" component={AdminLayout} />
          <Route path="/blog" component={BlogLayout} />
          <Route path="/careers" component={AnonymousLayout} />
          <Route path="/contact-us" component={AnonymousLayout} />
          <Route path="/industries-we-serve" component={AnonymousLayout} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/services" component={AnonymousLayout} />
          <Route path="/who-we-are" component={AnonymousLayout} />
          <Route exact={true} path="/" component={AnonymousLayout} />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default BlankLayout;