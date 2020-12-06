import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import parse from 'html-react-parser';

import { GlobalContext } from '../../Contexts/GlobalState';

function JobListingSkills(props) {
  return props.skills.map((item, index) => {
    return (
      <span className="tag is-success is-rounded" key={index}>{parse(item)}</span>
    );
  });
}

function JobListingResponsibilities(props) {
  return props.responsibilities.map((item, index) => {
    return (
      <li className="is-size-7 has-text-weight-light" key={index}>{parse(item)}</li>
    );
  })
}

function Job(props) {
  let { slug } = useParams();
  const { listings } = useContext(GlobalContext);
  const listing = listings.find(m => m.slug === slug);

  return (
    <div className="industriesPage">
      <Helmet>
        <title>{listing.title} | Careers | Creative Team</title>
        <meta name="description" content={`${listing.title} | Careers | Creative Team`} />
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/careers/${listing.slug}`} />
      </Helmet>
      <section className="hero is-medium" style={{borderTop: '1px solid hsl(0, 0%, 86%)'}}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1 has-text-centered pb-6">
              {parse(listing.title)}
            </h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="block">
              {parse(listing.description)}
            </div>
            <div className="block">
              <p className="is-uppercase has-text-weight-bold">Skills</p>
              <div className="tags are-small">
                <JobListingSkills skills={listing.skills} />
              </div>
            </div>
            <div className="block">
              <p className="is-uppercase has-text-weight-bold">Responsibilites</p>
              <ul>
                <JobListingResponsibilities responsibilities={listing.responsibilities} />
              </ul>
            </div>
            <div className="block">
              <Link to="/careers" className="button is-rounded is-primary">Back to Careers</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Job;