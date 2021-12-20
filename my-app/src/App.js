import { useState } from 'react';
import './css/root.css'
import Header from './components/header/header';
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

function App() {
  const [active, setActive] = useState("");

  return (
    <div>
      {/* { <Testimonials />} */}
      {/* <Freebies /> */}
      {/* <Index /> */}
      {/* <OurStroy /> */}
      {/* <ContactUs /> */}
      {/* <TermsOfUse />   */}
      <Header onChange={setActive} />
      {active === "Testimonials" && <Testimonials />}
      {active === "Freebies" && <Freebies />}
      {active === "Enrollnow" && <Enrollnow />}
      {active === "Index" && <Index />}
      {active === "OurStory" && <OurStory />}
      {active === "ContactUs" && <ContactUs />}
      {active === "Terms" && <TermsOfUse />}
      <Footer onChange={setActive} />
    </div>
  );
}


export default App;
