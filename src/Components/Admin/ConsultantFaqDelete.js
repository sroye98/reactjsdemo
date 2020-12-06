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

function ConsultantFaqDelete(props) {
  let history = useHistory();
  const { removeConsultantFaq } = useContext(GlobalContext);
  const [isActive, setIsActive] = useState(props.isActive);
  let { id } = useParams();

  useEffect(() => {
    if (!isActive) {
      history.replace('/admin/consultant-faqs');
    }
  });

  const onSubmit = () => {
    removeConsultantFaq(id);
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

export default ConsultantFaqDelete;