import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Blog | Creative Team</title>
        <meta name="description" content="Blog | Creative Team" />
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/blog`} />
      </Helmet>
      <div className="columns">
        <div className="column is-full">
          <BlogTile post={primaryPost} />
          <hr className="has-background-grey-lighter" />
          <div className="pb-6">
            <div className="columns is-multiline">
              {renderedPosts}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogIndex;