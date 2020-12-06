import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import parse from 'html-react-parser';

import { GlobalContext } from '../../Contexts/GlobalState';

function BlogArticle(props) {
  const { posts } = useContext(GlobalContext);
  let { slug } = useParams();
  const post = posts.find(m => m.slug === slug);

  return (
    <>
    <Helmet>
      <title>{parse(post.title)} | Blog | Creative Team</title>
      <meta name="description" content={`${parse(post.title)} | Blog | Creative Team`} />
      <link rel="canonical" href={`${process.env.PUBLIC_URL}/blog/${post.slug}`} />
    </Helmet>
    <div className="container is-fluid">
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><Link to="/blog">Home</Link></li>
          <li className="is-active"><Link to={`/blog/${post.slug}`}>{parse(post.title)}</Link></li>
        </ul>
      </nav>
    </div>
      <div className="hero">
        <div className="hero-head">
          <div className="container has-text-centered">
            <h1 className="is-size-1">{parse(post.title)}</h1>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <figure className="image is-16by9">
                  <iframe className="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=1" title={post.title} frameBorder="0" allowFullScreen={true}></iframe>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="content is-medium">
                <h2 className="subtitle is-size-7">Published: {parse(post.publishedDate)}</h2>
                {parse(post.content)}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BlogArticle;