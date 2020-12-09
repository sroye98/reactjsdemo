import { 
  useState, 
  useEffect, 
  useContext 
} from 'react';
import { useForm } from "react-hook-form";
import { 
  useHistory,
  useParams 
} from "react-router-dom";

import { GlobalContext } from '../../Contexts/GlobalState';
import BlogPost from '../../Models/BlogPost';

const defaultValues = BlogPost;

function PostAddEdit(props) {
  let history = useHistory();
  const { posts, addBlogPost, editBlogPost } = useContext(GlobalContext);
  const { register, handleSubmit, reset } = useForm({
    defaultValues
  });
  const [isActive, setIsActive] = useState(props.isActive);
  let { slug } = useParams();
  const currentBlogPostSlug = slug;
  const isAddMode = !currentBlogPostSlug;

  useEffect(() => {
    if (!isActive) {
      history.replace('/admin/posts');
    }

    const blogPostSlug = currentBlogPostSlug;
    const selectBlogPost = posts.find(post => post.slug === blogPostSlug);
    reset(selectBlogPost);
  }, [history, isActive, currentBlogPostSlug, posts, reset]);

  const onSubmit = (post) => {
    if (isAddMode) {
      addBlogPost(post);
    } else {
      editBlogPost(post);
    }
    setIsActive(false);
  };

  return (
    <div className={`modal ${isActive ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{ isAddMode ? 'Add New' : 'Update' } Blog Post</p>
          <button className="delete" aria-label="close" onClick={() => setIsActive(false)}></button>
        </header>
        <section className="modal-card-body">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input className="input" 
                       type="text" 
                       name="title"
                       placeholder="Title" 
                       ref={register({ required: true })} />
              </div>
            </div>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input className="input" 
                       type="text" 
                       name="slug"
                       placeholder="Slug" 
                       ref={register({ required: true })} />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" type="submit">Submit</button>
              </div>
              <div className="control">
                <button className="button is-link is-light" onClick={(e) => {
                  e.preventDefault();
                  setIsActive(false);
                }}>Cancel</button>
              </div>
            </div>
          </form>
        </section>
        <footer className="modal-card-foot">
        </footer>
      </div>
    </div>
  );
}

export default PostAddEdit;