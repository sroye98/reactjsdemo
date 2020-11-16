import BlogTile from '../../Components/BlogTile';
import BlogSmallTile from '../../Components/BlogSmallTile';
import { BlogPosts } from '../../Constants';

function BlogIndex(props) {
  const primaryPost = BlogPosts[0];
  const remainingPosts = BlogPosts.slice(1);

  const renderedPosts = remainingPosts.map((item, index) => {
    return (
      <div className="column is-half" key={index}>
        <BlogSmallTile post={item} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-full"></div>
        <div className="column">
          <BlogTile post={primaryPost} />
          <hr className="has-background-grey-lighter" />
          <div className="pb-6">
            <div className="columns is-multiline">
              {renderedPosts}
            </div>
          </div>
        </div>
        <div className="column is-2"></div>
      </div>
    </div>
  );
}

export default BlogIndex;