import {
  Route
} from 'react-router-dom';

import BlogArticle from '../Pages/Blog/Article';
import BlogHeader from '../Components/BlogHeader';
import BlogIndex from '../Pages/Blog/Index';

function BlogLayout() {
  return (
    <div>
      <BlogHeader />
      <Route path="/blog/:slug" component={BlogArticle} />
      <Route exact={true} path="/blog" component={BlogIndex} />
    </div>
  );
}

export default BlogLayout;