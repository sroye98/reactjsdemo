import { Helmet } from 'react-helmet-async';

function TechnologyBranding() {
  return (
    <>
      <Helmet>
        <title>Technology/Branding | Creative Team</title>
        <meta name="description" content="Technology/Branding | Creative Team" />
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/services/technology-branding`} />
      </Helmet>
      <section className="hero is-fullheight has-background-light" style={{borderTop: '1px solid hsl(0, 0%, 86%)'}}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1 has-text-centered pb-6">
              Technology/Branding
            </h1>
            <h2 className="subtitle has-text-centered has-text-grey-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra nisl, a hendrerit nunc ultricies vel.
            </h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default TechnologyBranding;