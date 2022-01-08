import { useState } from 'react';
import './css/root2.css';
import TermsOfUse from './components/Terms/TermsOfUse';
import EarningDiscalimer from './components/Terms/EarningDisclaimer';
import PrivacyPolicy from './components/Terms/PrivacyPolicy';
import RefundPolicy from './components/Terms/RefundPolicy';
import Landing from './components/Landing/Landing';
import Header2 from './components/header/header2';
import Signup from './components/Signup/Signup';
import Header_Dash from './components/Dashboard/Header/Header_Dash';
import RegisterMain from './components/Register/RegisterMain';
import Footer2 from './components/Footer2/footer2';
import ContactUs from './components/ContactUs/ContactUs';
import OurStroy from './components/ourStory/OurStory';
import Testimonials from './components/Testimonials2/Testimonials';

function App() {

  const [active, setActive] = useState("Landing");

  return (
    <div>
      <Signup />
      <Header2 onChange={setActive} />
      {active === "Landing" && <Landing />}
      {active === "ContactUs" && <ContactUs />}
      {active === "Header_Dash" && <Header_Dash />}
      {active === "Signup" && <Signup />}
      {active === "RegisterMain" && <RegisterMain />}
      {active === "TermsOfUse" && <TermsOfUse />}
      {active === "EarningDiscalimer" && <EarningDiscalimer />}
      {active === "PrivacyPolicy" && <PrivacyPolicy />}
      {active === "RefundPolicy" && <RefundPolicy />}
      {active === "OurStory" && <OurStroy />}
      {active === "Testimonials" && <Testimonials />}
      <Footer2/>
    </div>
  );
}


export default App;
