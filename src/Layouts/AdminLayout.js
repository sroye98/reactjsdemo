import ProtectedRoute from '../ProtectedRoute';

import AdminFooter from '../Components/AdminFooter';
import AdminHeader from '../Components/AdminHeader';
import AdminIndex from '../Pages/Admin/Index';
import AdminJobs from '../Pages/Admin/Jobs';
import AdminPosts from '../Pages/Admin/Posts';

function AdminLayout(props) {
  return (
    <div>
      <AdminHeader />
      <ProtectedRoute path="/admin/posts">
        <AdminPosts />
      </ProtectedRoute>
      <ProtectedRoute path="/admin/jobs">
        <AdminJobs />
      </ProtectedRoute>
      <ProtectedRoute exact={true} path="/admin">
        <AdminIndex />
      </ProtectedRoute>
      <AdminFooter />
    </div>
  );
}

export default AdminLayout;