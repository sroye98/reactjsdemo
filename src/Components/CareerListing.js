import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

function CareerListing(props) {
  const job = props.job;

  return (
    <article className="message">
      <div className="message-body">
        <div className="content">
          <p className="title is-size-4 has-text-weight-bold">{parse(job.title)}</p>
          <p className="subtitle is-size-7">{parse(job.created)}</p>
          <div className="block">
            {parse(job.description)}
          </div>
          <div className="block">
            <Link to={`/careers/${job.slug}`} className="button is-rounded is-primary">Learn More</Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CareerListing;