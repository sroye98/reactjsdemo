import { JobListings } from '../../Constants';

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
          <a href="#" className="dropdown-item">
            Edit
          </a>
          <a href="#" className="dropdown-item">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}

function AdminJobs() {
  const renderedListings = JobListings.map(item => {
    return (
      <tr key={item.id}>
        <td width="75%">{item.title}</td>
        <td>{item.slug}</td>
        <td>
          <ActionDropDown item={item} />
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="hero is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Job Listings</h1>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <table className="table is-fullwidth is-hoverable">
            <thead>
              <tr>
                <th>Title</th>
                <th>Slug</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {renderedListings}
            </tbody>
          </table>
        </div>
      </section>
      <section className="section has-background-light">
        <div className="container">
          <p>Test</p>
        </div>
      </section>
    </>
  );
}

export default AdminJobs;