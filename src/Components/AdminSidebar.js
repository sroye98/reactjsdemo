import { NavLink } from 'react-router-dom';

function AdminSidebar() {
  return (
    <aside className="menu">
      <p className="menu-label">
        General
      </p>
      <ul className="menu-list">
        <li>
          <NavLink activeClassName="is-active" exact={true} to="/admin">Dashboard</NavLink>
        </li>
      </ul>
      <p className="menu-label">
        Administration
      </p>
      <ul className="menu-list">
        <li>
          <NavLink activeClassName="is-active" to="/admin/posts">Blog Posts</NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/admin/client-faqs">Client FAQs</NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/admin/consultant-faqs">Consultant FAQs</NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/admin/jobs">Job Listings</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default AdminSidebar;