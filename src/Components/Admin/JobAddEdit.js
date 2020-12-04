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
import JobListing from '../../Models/JobListing';

const defaultValues = JobListing;

function JobAddEdit(props) {
  let history = useHistory();
  const { listings, addJobListing, editJobListing } = useContext(GlobalContext);
  const { register, handleSubmit, reset } = useForm({
    defaultValues
  });
  const [isActive, setIsActive] = useState(props.isActive);
  let { slug } = useParams();
  const currentJobListingSlug = slug;
  const isAddMode = !currentJobListingSlug;

  useEffect(() => {
    if (!isActive) {
      history.replace('/admin/jobs');
    }

    const jobListingSlug = currentJobListingSlug;
    const selectJobListing = listings.find(listing => listing.slug === jobListingSlug);
    reset(selectJobListing);
  }, [history, isActive, currentJobListingSlug, listings, reset]);

  const onSubmit = (listing) => {
    if (isAddMode) {
      addJobListing(listing);
    } else {
      editJobListing(listing);
    }
    setIsActive(false);
  };

  return (
    <div className={`modal ${isActive ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{ isAddMode ? 'Add New' : 'Update' } Job Posting</p>
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

export default JobAddEdit;