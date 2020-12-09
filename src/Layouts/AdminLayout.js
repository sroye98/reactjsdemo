import ProtectedRoute from '../ProtectedRoute';

import AdminFooter from '../Components/AdminFooter';
import AdminHeader from '../Components/AdminHeader';
import AdminSidebar from '../Components/AdminSidebar';
import AdminIndex from '../Pages/Admin/Index';
import AdminClientFaqs from '../Pages/Admin/ClientFaqs';
import AdminConsultantFaqs from '../Pages/Admin/ConsultantFaqs';
import AdminJobs from '../Pages/Admin/Jobs';
import AdminPosts from '../Pages/Admin/Posts';

function AdminLayout(props) {
  return (
    <>
      <AdminHeader />
      <div className="container is-fluid">
        <section className="columns">
          <div className="column is-3">
            <AdminSidebar />
          </div>
          <div className="column is-9">
          <ProtectedRoute path="/admin/client-faqs">
            <AdminClientFaqs />
          </ProtectedRoute>
          <ProtectedRoute path="/admin/consultant-faqs">
            <AdminConsultantFaqs />
          </ProtectedRoute>
          <ProtectedRoute path="/admin/posts">
            <AdminPosts />
          </ProtectedRoute>
          <ProtectedRoute path="/admin/jobs">
            <AdminJobs />
          </ProtectedRoute>
          <ProtectedRoute exact={true} path="/admin">
            <AdminIndex />
          </ProtectedRoute>
          </div>
        </section>
      </div>
      <AdminFooter />
    </>
  );
}

export default AdminLayout;