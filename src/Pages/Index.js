import {Helmet} from "react-helmet-async";

function Index() {
  const features = [
    { icon: 'fas fa-laptop fa-2x', title: 'Corporate Branding', subtitle: 'Strong, distinct brand identities' },
    { icon: 'fas fa-layer-group fa-2x', title: 'UI/UX Design', subtitle: 'Powerful, intuitive & user-friendly designs for web and mobile interfaces' },
    { icon: 'fas fa-code fa-2x', title: 'Application Development', subtitle: 'Using the latest technology, Creative Team members can produce high-quality, responsive app experiences for your enterprise' },
    { icon: 'fas fa-database fa-2x', title: 'Cloud Computing', subtitle: 'Well versed in IAAS utilizing all major cloud services providers like Amazon AWS, MS Azure and Google Cloud' },
    { icon: 'fas fa-search fa-2x', title: 'Advanced Analytics & Data Science', subtitle: 'Our team of creatives can help you deploy solutions in the areas of AI, Machine Learning and Predictive Analysis' },
    { icon: 'fas fa-mobile-alt fa-2x', title: 'Mobile App Dev', subtitle: 'With powerful tools Creative Team members create engaging mobile apps to grow your business\' reach' }
  ];

  const renderFeatures = features.map((item, index) => {
    return (
      <div key={index} className="column is-one-third">
        <div className="has-text-centered">
          <div className="p-3">
            <span className="icon has-text-info is-large">
              <i className={item.icon}></i>
            </span>
          </div>
          <h6 className="is-size-6 has-text-weight-bold pb-3">
            {item.title}
          </h6>
          <p className="is-size-7 has-text-grey-light pb-3 px-6">
            {item.subtitle}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Helmet>
        <title>We're Creative Team</title>
        <meta name="description" content="We're Creative Team" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="hero is-fullheight" style={{borderTop: '1px solid hsl(0, 0%, 86%)'}}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1 has-text-centered pb-6">
              We're Creative Team
            </h1>
            <h2 className="subtitle has-text-centered has-text-grey-light">
              Providing everything technology you need to reach awesomeness
            </h2>
          </div>
        </div>
      </section>
      <section className="hero is-medium has-background-light">
        <div className="hero-body">
            <div className="container">
              <h2 className="title is-size-3 has-text-centered pb-6">
                Development is our creative expression
              </h2>
              <p className="subtitle is-size-6 has-text-centered has-text-grey-light">
                We're creatives that have enthusiasm towards helping corporations, to enhance their application experience and to reach their potential clients.
              </p>
            </div>
          </div>
      </section>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-size-3 has-text-centered pb-6">
              Our team's capabilities
            </h2>
            <p className="subtitle is-size-6 has-text-centered has-text-grey-light pb-6">
              We have carefully selected a team of great capabilities according to today's market and always on the lookout for other talented creatives to join our team.
            </p>
            <hr className="has-background-grey-lighter mb-6" />
            <div className="columns is-multiline">
              {renderFeatures}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;