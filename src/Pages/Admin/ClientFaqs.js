import { Route, Switch } from 'react-router-dom';

import ClientFaqList from '../../Components/Admin/ClientFaqList';
import ClientFaqAddEdit from '../../Components/Admin/ClientFaqAddEdit';
import ClientFaqDelete from '../../Components/Admin/ClientFaqDelete';

function AdminClientFaqs() {
  return (
    <>
      <div className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Client FAQs</h1>
          </div>
        </div>
      </div>
      <ClientFaqList />
      <Switch>
        <Route path="/admin/client-faqs/add">
          <ClientFaqAddEdit isActive={true} />
        </Route>
        <Route path="/admin/client-faqs/edit/:id">
          <ClientFaqAddEdit isActive={true} />
        </Route>
        <Route path="/admin/client-faqs/delete/:id">
          <ClientFaqDelete isActive={true} />
        </Route>
      </Switch>
    </>
  );
}

export default AdminClientFaqs;