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
import ClientFaq from '../../Models/ClientFaq';

const defaultValues = ClientFaq;

function ClientFaqAddEdit(props) {
  let history = useHistory();
  const { clientFaqs, addClientFaq, editClientFaq } = useContext(GlobalContext);
  const { register, handleSubmit, reset } = useForm({
    defaultValues
  });
  const [isActive, setIsActive] = useState(props.isActive);
  let { id } = useParams();
  const currentClientFaqId = id;
  const isAddMode = !currentClientFaqId;

  useEffect(() => {
    if (!isActive) {
      history.replace('/admin/client-faqs');
    }

    const clientFaqId = currentClientFaqId;
    const selectClientFaq = clientFaqs.find(faq => faq.id === clientFaqId);
    reset(selectClientFaq);
  }, [history, isActive, currentClientFaqId, clientFaqs, reset]);

  const onSubmit = (faq) => {
    if (isAddMode) {
      addClientFaq(faq);
    } else {
      editClientFaq(faq);
    }
    setIsActive(false);
  };

  return (
    <div className={`modal ${isActive ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{ isAddMode ? 'Add New' : 'Update' } Client FAQ</p>
          <button className="delete" aria-label="close" onClick={() => setIsActive(false)}></button>
        </header>
        <section className="modal-card-body">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label className="label">Question</label>
              <div className="control">
                <input className="input" 
                       type="text" 
                       name="question"
                       placeholder="Question" 
                       ref={register({ required: true })} />
              </div>
            </div>
            <div className="field">
              <label className="label">Answer</label>
              <div className="control">
                <input className="input" 
                       type="text" 
                       name="answer"
                       placeholder="Answer" 
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

export default ClientFaqAddEdit;