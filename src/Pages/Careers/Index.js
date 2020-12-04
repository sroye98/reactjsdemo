import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';

import { GlobalContext } from '../../Contexts/GlobalState';

import CareerListing from '../../Components/CareerListing';

function CareersIndex() {
  const { listings } = useContext(GlobalContext);

  const renderedCareerListings = listings.map((item, index) => {
    return (
      <CareerListing job={item} key={index} />
    );
  });

  return (
    <div className="industriesPage">
      <Helmet>
        <title>Careers | Creative Team</title>
        <meta name="description" content="Careers | Creative Team" />
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/careers`} />
      </Helmet>
      <section className="hero is-medium" style={{borderTop: '1px solid hsl(0, 0%, 86%)'}}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1 has-text-centered pb-6">
              Careers
            </h1>
            <h2 className="subtitle has-text-centered has-text-grey-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra nisl, a hendrerit nunc ultricies vel.
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
        {renderedCareerListings}
      </section>
    </div>
  );
}

export default CareersIndex;