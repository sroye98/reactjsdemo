import {
  Route
} from 'react-router-dom';

import AboutUsIndex from '../Pages/AboutUs/Index';
import AnonymousFooter from '../Components/AnonymousFooter';
import AnonymousHeader from '../Components/AnonymousHeader';
import CareersIndex from '../Pages/Careers/Index';
import ClientFaqs from '../Pages/Services/ClientFAQs';
import ConsultantFaqs from '../Pages/Services/ConsultantFAQs';
import ContactUs from '../Pages/AboutUs/ContactUs';
import Index from '../Pages/Index';
import IndustriesIndex from '../Pages/Industries/Index';
import Job from '../Pages/Careers/Job';
import ServicesIndex from '../Pages/Services/Index';
import TechnologyBranding from '../Pages/Services/TechnologyBranding';

function AnonymousLayout(props) {
  return (
    <div>
      <AnonymousHeader />
      <Route path="/careers/:slug" component={Job} />
      <Route exact={true} path="/careers" component={CareersIndex} />
      <Route exact={true} path="/contact-us" component={ContactUs} />
      <Route exact={true} path="/industries-we-serve" component={IndustriesIndex} />
      <Route path="/services/client-faqs" component={ClientFaqs} />
      <Route path="/services/consultant-faqs" component={ConsultantFaqs} />
      <Route path="/services/technolog-branding" component={TechnologyBranding} />
      <Route exact={true} path="/services" component={ServicesIndex} />
      <Route exact={true} path="/who-we-are" component={AboutUsIndex} />
      <Route exact={true} path="/" component={Index} />
      <AnonymousFooter />
    </div>
  );
}

export default AnonymousLayout;