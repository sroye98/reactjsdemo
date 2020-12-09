import {
  Switch,
  Route,
  Redirect,
  useLocation
} from 'react-router-dom';

import { ProvideAuth } from '../Hooks/Auth';
import { GlobalProvider } from '../Contexts/GlobalState';

import Transition from '../Components/Transition';

import Login from '../Pages/Auth/Login';
import ScrollToTop from '../ScrollToTop';
import AdminLayout from './AdminLayout';
import AnonymousLayout from './AnonymousLayout';
import BlogLayout from './BlogLayout';
import NotFound from '../Pages/NotFound';

function BlankLayout(props) {
  const location = useLocation();

  return (
    <ProvideAuth>
      <GlobalProvider >
        <Transition {...props} location={location}>
          <ScrollToTop />
          <Switch location={location} key={location.pathname}>
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
        </Transition>
      </GlobalProvider>
    </ProvideAuth>
  );
}

export default BlankLayout;