import { Route, Switch } from 'react-router-dom';

import ConsultantFaqList from '../../Components/Admin/ConsultantFaqList';
import ConsultantFaqAddEdit from '../../Components/Admin/ConsultantFaqAddEdit';
import ConsultantFaqDelete from '../../Components/Admin/ConsultantFaqDelete';

function AdminConsultantFaqs() {
  return (
    <>
      <div className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Consultant FAQs</h1>
          </div>
        </div>
      </div>
      <ConsultantFaqList />
      <Switch>
        <Route path="/admin/client-faqs/add">
          <ConsultantFaqAddEdit isActive={true} />
        </Route>
        <Route path="/admin/client-faqs/edit/:id">
          <ConsultantFaqAddEdit isActive={true} />
        </Route>
        <Route path="/admin/client-faqs/delete/:id">
          <ConsultantFaqDelete isActive={true} />
        </Route>
      </Switch>
    </>
  );
}

export default AdminConsultantFaqs;