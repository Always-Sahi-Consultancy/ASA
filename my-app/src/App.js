import { useState } from 'react';
// import './css/root.css'
import './css/root2.css';
// import Header from './comp1onents/header/header';
import Index from './components/home/Index';
import OurStory from './components/ourStory/OurStory';
import Freebies from './components/Freebies/Freebies';
import Testimonials from './components/Testimonials/Testimonials';
import ContactUs from './components/ContactUs/ContactUs';
import Enrollnow from './components/EnrollNow/Enrollnow';
import Footer from './components/footer/Footer';
import TermsOfUse from './components/Terms/TermsOfUse';
import EarningDiscalimer from './components/Terms/EarningDisclaimer';
import PrivacyPolicy from './components/Terms/PrivacyPolicy';
import RefundPolicy from './components/Terms/RefundPolicy';
import Landing from './components/Landing/Landing';
import Header2 from './components/header/header2';
import Signup from './components/Signup/Signup';

function App() {

  const [active, setActive] = useState("Landing");

  return (
    // <div>
    //   <Header onChange={setActive} />
    //   {active === "Testimonials" && <Testimonials />}
    //   {active === "Freebies" && <Freebies />}
    //   {active === "Enrollnow" && <Enrollnow />}
    //   {active === "Landing" && <Landing />}
    //   {active === "OurStory" && <OurStory />}
    //   {active === "ContactUs" && <ContactUs />}
    //   {active === "Terms" && <TermsOfUse />}
    //   {active === "PrivacyPolicy" && <PrivacyPolicy />}
    //   {active === "EarningDiscalimer" && <EarningDiscalimer />}
    //   {active === "RefundPolicy" && <RefundPolicy />}
    //   <Footer onChange={setActive} />
    // </div>
    <div>
      <Signup />
      <Header2 onChange={setActive} />
      {active === "Landing" && <Landing />}
    </div>
  );
}


export default App;
