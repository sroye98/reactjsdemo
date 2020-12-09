import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

function BlogTile(props) {
  return (
    <article className="notification has-background-white">
      <p className="title is-size-4">
        <Link to={`/blog/${props.post.slug}`}>{parse(props.post.title)}</Link>
      </p>
      <p className="subtitle is-size-7">
        <span className="icon">
          <i className="fas fa-user"></i>
        </span>
        {parse(props.post.author)}
        &nbsp;&nbsp;&nbsp;
        <span className="icon">
          <i className="fas fa-calendar"></i>
        </span>
        {props.post.publishedDate}
      </p>
      <hr className="has-background-grey-lighter" />
      <figure className="image is-16by9">
        <iframe className="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=1" title={props.post.title} frameBorder="0" allowFullScreen={true}></iframe>
      </figure>
      <div className="content py-6">
        {parse(props.post.snippet)}
      </div>
    </article>
  );
}

export default BlogTile;