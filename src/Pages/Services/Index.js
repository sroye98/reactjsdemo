import { Helmet } from 'react-helmet-async';
import TeamCapabilities  from '../../Components/TeamCapabilities';

function ServicesIndex() {
  return (
    <>
      <Helmet>
        <title>Services | Creative Team</title>
        <meta name="description" content="Services | Creative Team" />
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/services`} />
      </Helmet>
      <section className="hero is-fullheight" style={{borderTop: '1px solid hsl(0, 0%, 86%)'}}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1 has-text-centered pb-6">
              Our Services
            </h1>
            <h2 className="subtitle has-text-centered has-text-grey-light">
              Our experince has taught us, that any IT issue can be either fixed or worked around, and that business of any type eventually needs diligent IT solutions implementations
            </h2>
          </div>
        </div>
      </section>
      <TeamCapabilities />
    </>
  );
}

export default ServicesIndex;