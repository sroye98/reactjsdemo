import { Helmet } from 'react-helmet-async';

function SocialMedia() {
  return (
    <>
      <Helmet>
        <title>Social Media | Creative Team</title>
        <meta name="description" content="Social Media | Creative Team" />
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/social-media`} />
      </Helmet>
      <section className="hero is-fullheight" style={{borderTop: '1px solid hsl(0, 0%, 86%)'}}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1 has-text-centered pb-6">
              Social Media
            </h1>
            <h2 className="subtitle has-text-centered has-text-grey-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra nisl, a hendrerit nunc ultricies vel.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default SocialMedia;