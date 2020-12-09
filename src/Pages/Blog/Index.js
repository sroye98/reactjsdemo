import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';

import { GlobalContext } from '../../Contexts/GlobalState';

import BlogTile from '../../Components/BlogTile';
import BlogSmallTile from '../../Components/BlogSmallTile';

function BlogIndex(props) {
  const { posts } = useContext(GlobalContext);
  const primaryPost = posts[0];
  const remainingPosts = posts.slice(1);

  const renderedPosts = remainingPosts.map((item, index) => {
    return (
      <div className="column is-half" key={index}>
        <BlogSmallTile post={item} />
      </div>
    );
  });

  return (
    <>
      <Helmet>
        <title>Blog | Creative Team</title>
        <meta name="description" content="Blog | Creative Team" />
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/blog`} />
      </Helmet>
      <div className="container">
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
    </>
  );
}

export default BlogIndex;