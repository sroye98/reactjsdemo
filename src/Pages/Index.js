import { Helmet } from "react-helmet-async";
import TeamCapabilities  from "../Components/TeamCapabilities";

function Index() {
  return (
    <div>
      <Helmet>
        <title>We're Creative Team</title>
        <meta name="description" content="We're Creative Team | Creative Team" />
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/services`} />
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
      <TeamCapabilities />
    </div>
  );
}

export default Index;