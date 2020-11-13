import { Features } from '../Constants';

function TeamCapabilities() {
  const renderFeatures = Features.map((item, index) => {
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
  );
}

export default TeamCapabilities;