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
import ConsultantFaq from '../../Models/ConsultantFaq';

const defaultValues = ConsultantFaq;

function ConsultantFaqAddEdit(props) {
  let history = useHistory();
  const { consultantFaqs, addConsultantFaq, editConsultantFaq } = useContext(GlobalContext);
  const { register, handleSubmit, reset } = useForm({
    defaultValues
  });
  const [isActive, setIsActive] = useState(props.isActive);
  let { id } = useParams();
  const currentConsultantFaqId = id;
  const isAddMode = !currentConsultantFaqId;

  useEffect(() => {
    if (!isActive) {
      history.replace('/admin/consultant-faqs');
    }

    const consultantFaqId = currentConsultantFaqId;
    const selectConsultantFaq = consultantFaqs.find(faq => faq.id === consultantFaqId);
    reset(selectConsultantFaq);
  }, [history, isActive, currentConsultantFaqId, consultantFaqs, reset]);

  const onSubmit = (faq) => {
    if (isAddMode) {
      addConsultantFaq(faq);
    } else {
      editConsultantFaq(faq);
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
            <input type="hidden" name="id" ref={register({ required: true })} />
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

export default ConsultantFaqAddEdit;