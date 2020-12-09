import { useContext } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import { GlobalContext } from '../../Contexts/GlobalState';

function ClientFaqListSearch() {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">Search</label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control is-expanded">
            <input className="input" type="text" placeholder="" />
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionDropDown(props) {
  return (
    <div className="dropdown is-secondary is-hoverable">
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
          <span>Actions</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu4" role="menu">
        <div className="dropdown-content">
          <Link to={`/admin/client-faqs/edit/${props.item.id}`} className="dropdown-item">
            Edit
          </Link>
          <Link to={`/admin/client-faqs/delete/${props.item.id}`} className="dropdown-item">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}

function ClientFaqList() {
  const { clientFaqs } = useContext(GlobalContext);

  const renderedClientFaqs = clientFaqs.map((faq, index) => {
    return (
      <tr key={index}>
        <td>{parse(faq.question)}</td>
        <td>{parse(faq.answer)}</td>
        <td>
          <ActionDropDown item={faq} />
        </td>
      </tr>
    );
  });

  return (
    <section className="section">
      <div className="container">
        <div className="level">
          <div className="level-left">
            <ClientFaqListSearch />
          </div>
          <div className="level-right">
            <div className="level-item">
              <Link to="/admin/client-faqs/add" className="button is-primary">
                Add New Client FAQ
              </Link>
            </div>
          </div>
        </div>
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {renderedClientFaqs}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ClientFaqList;