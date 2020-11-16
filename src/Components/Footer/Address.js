import { Fragment } from 'react';

function Address() {
  return (
    <Fragment>
      <p className="is-size-7 is-uppercase has-text-white mb-3">Houston Office</p>
      <address>
        <p className="is-size-7 has-text-grey-light mb-1">
          2825 Wilcrest Dr.<br />
          Suite 456<br />
          Houston, TX 77042
        </p>
      </address>
    </Fragment>
  );
}

export default Address;