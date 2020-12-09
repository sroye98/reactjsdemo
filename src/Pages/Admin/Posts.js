import { Route, Switch } from 'react-router-dom';

import PostList from '../../Components/Admin/PostList';
import PostAddEdit from '../../Components/Admin/PostAddEdit';
import PostDelete from '../../Components/Admin/PostDelete';

function AdminPosts() {
  return (
    <>
      <div className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Blog Posts</h1>
          </div>
        </div>
      </div>
      <PostList />
      <Switch>
        <Route path="/admin/posts/add">
          <PostAddEdit isActive={true} />
        </Route>
        <Route path="/admin/posts/edit/:slug">
          <PostAddEdit isActive={true} />
        </Route>
        <Route path="/admin/posts/delete/:slug">
          <PostDelete isActive={true} />
        </Route>
      </Switch>
    </>
  );
}

export default AdminPosts;