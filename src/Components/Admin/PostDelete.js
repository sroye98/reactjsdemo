import { 
  useState, 
  useEffect, 
  useContext 
} from 'react';
import { 
  useHistory,
  useParams 
} from "react-router-dom";

import { GlobalContext } from '../../Contexts/GlobalState';

function PostDelete(props) {
  let history = useHistory();
  const { removeBlogPost } = useContext(GlobalContext);
  const [isActive, setIsActive] = useState(props.isActive);
  let { slug } = useParams();

  useEffect(() => {
    if (!isActive) {
      history.replace('/admin/posts');
    }
  });

  const onSubmit = () => {
    removeBlogPost(slug);
    setIsActive(false);
  };

  return (
    <div className={`modal ${isActive ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Are You Sure?</p>
          <button className="delete" aria-label="close" onClick={() => setIsActive(false)}></button>
        </header>
        <section className="modal-card-body">
          <p className="mb-1">This action can not be undone.</p>
          <button className="button is-danger mr-1" onClick={() => onSubmit()}>Delete</button>
          <button className="button" onClick={() => setIsActive(false)}>Cancel</button>
        </section>
      </div>
    </div>
  );
}

export default PostDelete;