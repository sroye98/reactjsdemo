import { Helmet } from 'react-helmet-async';
import { ClientFAQs } from '../../Constants';
import RenderFAQs from '../../Components/RenderFAQs';

function ConsultantFaqs() {
  return (
    <div className="clientFaqPage">
      <Helmet>
        <title>Consultant FAQs | Creative Team</title>
        <meta name="description" content="Consultant FAQs | Creative Team" />
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/services/consultant-faqs`} />
      </Helmet>
      <section className="hero is-medium has-background-light" style={{borderTop: '1px solid hsl(0, 0%, 86%)'}}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1 has-text-centered pb-6">
              Consultant FAQs
            </h1>
            <h2 className="subtitle has-text-centered has-text-grey-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra nisl, a hendrerit nunc ultricies vel.
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
        <RenderFAQs items={ClientFAQs} />
      </section>
    </div>
  );
}

export default ConsultantFaqs;