import { 
  useContext, 
  useEffect, 
  useState 
} from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { GlobalContext } from '../../Contexts/GlobalState';

import RenderFAQs from '../../Components/RenderFAQs';
import Pagination from '../../Components/Pagination';

const pageSize = 3;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function ClientFaqs() {
  let query = useQuery();
  let page = query.get('page');
  
  const { clientFaqs } = useContext(GlobalContext);
  const [data, setData] = useState(clientFaqs);

  if (!page) page = 1;

  useEffect(() => {
    const slicedData = clientFaqs.slice((page - 1) * pageSize, page * pageSize);
    setData(slicedData);
  }, [clientFaqs, page]);

  return (
    <>
      <Helmet>
        <title>Client FAQs | Creative Team</title>
        <meta name="description" content="Client FAQs | Creative Team" />
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/services/client-faqs/${page}`} />
      </Helmet>
      <section className="hero is-medium has-background-light" style={{borderTop: '1px solid hsl(0, 0%, 86%)'}}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1 has-text-centered pb-6">
              Client FAQs
            </h1>
            <h2 className="subtitle has-text-centered has-text-grey-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra nisl, a hendrerit nunc ultricies vel.
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
        <RenderFAQs items={data} />
        <Pagination totalRecords={clientFaqs.length}
                    pageLimit={pageSize}
                    renderPage={page}
                    baseUrl='/services/client-faqs?page=' />
      </section>
    </>
  );
}

export default ClientFaqs;