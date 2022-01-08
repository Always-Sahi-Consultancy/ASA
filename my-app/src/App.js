import { useState } from 'react';
import './css/root.css'
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

function App() {

  const [active, setActive] = useState("Landing");

  return (
    <div>
      
      <Header2 onChange={setActive} />
      {/* {active === "Landing" && <Landing />} */}
      {/* <Footer2/> */}
      <ContactUs/>
    </div>
  );
}


export default App;
