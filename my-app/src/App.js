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

function App() {

  const [active, setActive] = useState("Landing");

  return (
    <div>
      
      <Header2 onChange={setActive} />
      {active === "Landing" && <Landing />}
      {active === "Header_Dash" && <Header_Dash />}
      {active === "Signup" && <Signup />}
      {active === "RegisterMain" && <RegisterMain />}
      {active === "TermsOfUse" && <TermsOfUse />}
      {active === "EarningDiscalimer" && <EarningDiscalimer />}
      {active === "PrivacyPolicy" && <PrivacyPolicy />}
      {active === "RefundPolicy" && <RefundPolicy />}
      <Footer2/>
    </div>
  );
}


export default App;
