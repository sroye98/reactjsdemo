import {
  Route
} from 'react-router-dom';

import AdminIndex from '../Pages/Admin/Index';
import AdminJobs from '../Pages/Admin/Jobs';
import AdminPosts from '../Pages/Admin/Posts';

function AdminLayout(props) {
  return (
    <div>
      <Route path="/admin/posts" component={AdminPosts} />
      <Route path="/admin/jobs" component={AdminJobs} />
      <Route exact={true} path="/admin" component={AdminIndex} />
    </div>
  );
}

export default AdminLayout;