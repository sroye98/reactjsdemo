import parse from 'html-react-parser';

function BlogTile(props) {
  return (
    <article className="notification has-background-white">
      <p className="title is-size-4">{parse(props.post.title)}</p>
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
        <img src="https://bulma.io/images/placeholders/640x480.png" alt="" />
      </figure>
      <div className="content py-6">
        {parse(props.post.content)}
      </div>
    </article>
  );
}

export default BlogTile;