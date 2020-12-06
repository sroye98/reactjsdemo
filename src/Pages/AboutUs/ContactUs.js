import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";

const defaultValues = {
  name: '',
  email: '',
  message: ''
};

function ContactUs() {
  let fullNameRegex = /^([a-zA-Z'-.]+ [a-zA-Z'-.]+)$/;
  let emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues
  });

  const { dirtyFields, touched } = formState;

  const onSubmit = (data) => console.log(data);

  return (
    <div className="contactPage">
      <Helmet>
        <title>Contact Us | Creative Team</title>
        <meta name="description" content="Contact Us | Creative Team" />
        <link rel="canonical" href={`${process.env.PUBLIC_URL}/contact-us`} />
      </Helmet>
      <section className="hero is-medium" style={{borderTop: '1px solid hsl(0, 0%, 86%)'}}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1 has-text-centered pb-6">
              Contact Us
            </h1>
            <h2 className="subtitle has-text-centered has-text-grey-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra nisl, a hendrerit nunc ultricies vel.
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-two-fifths">
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className={`input ${errors.name ? 'is-danger' : touched.name && dirtyFields.name ? 'is-info' : ''}`} type="text" name="name" ref={register({ required: true, pattern: fullNameRegex })} />
                  </div>
                  {errors.name && errors.name.type === 'required' && <p className="help is-danger">This field is required</p>}
                  {errors.name && errors.name.type === 'pattern' && <p className="help is-danger">Enter your full name</p>}
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className={`input ${errors.email ? 'is-danger' : touched.email && dirtyFields.email ? 'is-info' : ''}`} type="text" name="email" ref={register({ required: true, pattern: emailRegex })} />
                  </div>
                  {errors.email && errors.email.type === 'required' && <p className="help is-danger">This field is required</p>}
                  {errors.email && errors.email.type === 'pattern' && <p className="help is-danger">Enter a valid email address</p>}
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className={`textarea ${errors.message ? 'is-danger' : touched.message && dirtyFields.message ? 'is-info' : ''}`} name="message" ref={register({ required: true })}></textarea>
                  </div>
                  {errors.message && errors.message.type === 'required' && <p className="help is-danger">This field is required</p>}
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="column is-three-fifths">
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;