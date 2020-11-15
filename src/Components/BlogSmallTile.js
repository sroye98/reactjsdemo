import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

function BlogSmallTile(props) {
  return (
    <article className="notification has-background-white">
      <div className="content is-small">
        <h4 className="title">
          {parse(props.post.title)}
          <br />
          <small className="has-text-grey">
            {parse(props.post.author)}
          </small>
        </h4>
        {parse(props.post.content)}
        <div className="block">
          <Link to={`/blog/${props.post.slug}`}>Read More</Link>
        </div>
      </div>
    </article>
  );
}

export default BlogSmallTile;