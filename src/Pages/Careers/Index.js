import { 
  useContext, 
  useEffect, 
  useState 
} from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { GlobalContext } from '../../Contexts/GlobalState';

import CareerListing from '../../Components/CareerListing';
import Pagination from '../../Components/Pagination';

const pageSize = 1;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function CareersIndex() {
  let query = useQuery();
  let page = query.get('page');
  
  const { listings } = useContext(GlobalContext);
  const [data, setData] = useState(listings);

  if (!page) page = 1;

  useEffect(() => {
    const slicedData = listings.slice((page - 1) * pageSize, page * pageSize);
    setData(slicedData);
  }, [listings, page]);

  const renderedCareerListings = data.map((item, index) => {
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
        <Pagination totalRecords={listings.length}
                    pageLimit={pageSize}
                    renderPage={page}
                    baseUrl='/careers?page=' />
      </section>
    </div>
  );
}

export default CareersIndex;