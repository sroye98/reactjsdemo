import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../Contexts/GlobalState';

function PostListSearch() {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">Search</label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control is-expanded">
            <input className="input" type="text" placeholder="" />
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionDropDown(props) {
  return (
    <div className="dropdown is-secondary is-hoverable">
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
          <span>Actions</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu4" role="menu">
        <div className="dropdown-content">
          <Link to={`/admin/posts/edit/${props.item.slug}`} className="dropdown-item">
            Edit
          </Link>
          <Link to={`/admin/posts/delete/${props.item.slug}`} className="dropdown-item">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}

function PostList() {
  const { posts } = useContext(GlobalContext);

  const renderedPosts = posts.map((item, index) => {
    return (
      <tr key={index}>
        <td width="55%">{item.title}</td>
        <td>{item.slug}</td>
        <td>
          <ActionDropDown item={item} />
        </td>
      </tr>
    );
  });

  return (
    <section className="section">
      <div className="container">
        <div className="level">
          <div className="level-left">
            <PostListSearch />
          </div>
          <div className="level-right">
            <div className="level-item">
              <Link to="/admin/posts/add" className="button is-primary">
                Add New Listing
              </Link>
            </div>
          </div>
        </div>
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {renderedPosts}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PostList;