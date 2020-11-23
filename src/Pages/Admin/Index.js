import { JobListings, BlogPosts } from '../../Constants';

function AdminIndex() {
  return (
    <section className="section is-medium">
      <div className="tile is-ancestor has-text-centered">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">1</p>
            <p className="subtitle">Users</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">{BlogPosts.length}</p>
            <p className="subtitle">Posts</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">{JobListings.length}</p>
            <p className="subtitle">Listings</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AdminIndex;