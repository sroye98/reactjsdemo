import { Route, Switch } from 'react-router-dom';

import JobList from '../../Components/Admin/JobList';
import JobAddEdit from '../../Components/Admin/JobAddEdit';
import JobDelete from '../../Components/Admin/JobDelete';

function AdminJobs() {
  return (
    <>
      <div className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Job Listings</h1>
          </div>
        </div>
      </div>
      <JobList />
      <Switch>
        <Route path="/admin/jobs/add">
          <JobAddEdit isActive={true} />
        </Route>
        <Route path="/admin/jobs/edit/:slug">
          <JobAddEdit isActive={true} />
        </Route>
        <Route path="/admin/jobs/delete/:slug">
          <JobDelete isActive={true} />
        </Route>
      </Switch>
    </>
  );
}

export default AdminJobs;