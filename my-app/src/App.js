import { useState } from 'react';
import './css/root.css'
import Header from './components/header/header';
import Index from './components/home/Index';
import OurStroy from './components/ourStory/OurStory';
import Freebies from './components/Freebies/Freebies';
import Testimonials from './components/Testimonials/Testimonials';
import ContactUs from './components/ContactUs/ContactUs';
import Enrollnow from './components/EnrollNow/Enrollnow';
import Footer from './components/footer/Footer';
import TermsOfUse from './components/Terms/TermsOfUse';

function App() {
  const [active, setActive] = useState("");

  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}


export default App;
