import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { ProvideAuth } from '../Hooks/Auth';
import { GlobalProvider } from '../Contexts/GlobalState';

import Login from '../Pages/Auth/Login';
import ScrollToTop from '../ScrollToTop';
import AdminLayout from './AdminLayout';
import AnonymousLayout from './AnonymousLayout';
import BlogLayout from './BlogLayout';
import NotFound from '../Pages/NotFound';

function BlankLayout() {
  return (
    <ProvideAuth>
      <GlobalProvider >
        <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop />
          <Switch>
            <Route path="/admin" component={AdminLayout} />
            <Route path="/blog" component={BlogLayout} />
            <Route path="/careers" component={AnonymousLayout} />
            <Route path="/contact-us" component={AnonymousLayout} />
            <Route path="/industries-we-serve" component={AnonymousLayout} />
            <Route path="/login" component={Login} />
            <Route path="/services" component={AnonymousLayout} />
            <Route path="/who-we-are" component={AnonymousLayout} />
            <Route exact={true} path="/" component={AnonymousLayout} />
            <Route path='/notfound' component={NotFound} />
            <Redirect from='*' to='/notfound' />
          </Switch>
        </Router>
      </GlobalProvider>
    </ProvideAuth>
  );
}

export default BlankLayout;