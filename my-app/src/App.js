import React, { useState, createContext, useReducer, useEffect, useContext } from 'react';
import './css/root2.css';
import TermsOfUse from './components/Terms/TermsOfUse';
import EarningDiscalimer from './components/Terms/EarningDisclaimer';
import PrivacyPolicy from './components/Terms/PrivacyPolicy';
import RefundPolicy from './components/Terms/RefundPolicy';
import Landing from './components/Landing/Landing';
import Header2 from './components/header/header2';
import Signin from './components/SignIn/SignIn';
import RegisterMain from './components/Register/RegisterMain';
import Footer2 from './components/Footer2/footer2';
import ContactUs from './components/ContactUs/ContactUs';
import OurStroy from './components/ourStory/OurStory';
import Testimonials from './components/Testimonials2/Testimonials';
import CoursePage from './components/CoursePage/CoursePage';
// import Course from './components/IndividualCourse/Accounting';
import Error404 from './components/404Error/404Error';
import Dash from './components/Dashboard/dashboard/Dash';
import Logout from './components/Dashboard/Header/Logout';

import {initialState, reducer} from './reducer/UseReducer';

import {Link, Routes, Route } from 'react-router-dom';
import DashBoardMain from './components/Dashboard/DashBoardMain';
import VideoMain from './components/Dashboard/VideoModule/VideoMain';
import CCAC from './components/IndividualCourse/CCAC';
import CCT from './components/IndividualCourse/CCT';
import CCFA from './components/IndividualCourse/CCFA';
import ACFI from './components/IndividualCourse/ACFI';
import FFI from './components/IndividualCourse/FFI';
import WDE from './components/IndividualCourse/WDE';
// import CareerPage from './components/CareerPage/CareerPage';

export const UserContext = createContext();

const Routing = () => {

  return (
    <div>
      <Link to="/RegisterNow"></Link>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/testimonials" element={<Testimonials />} />
        <Route exact path="/contact_us" element={<ContactUs />} />
        <Route exact path="/about_us" element={<OurStroy />} />
        <Route exact path="/RegisterNow" element={<RegisterMain />} />
        <Route exact path="/TermsofUse" element={<TermsOfUse />} />
        <Route exact path="/EarningDiscalimer" element={<PrivacyPolicy />} />
        <Route exact path="/RefundPolicy" element={<RefundPolicy />} />
        <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route exact path="/CoursePage" element={<CoursePage />} />
        {/* <Route path="/Course/:courseId" element={<Course />} /> */}
        <Route exact path="/Course/Certified-Course-in-Accounts-&-Compliance" element={<CCAC />} />
        <Route exact path="/Course/Certified-Course-in-Taxation" element={<CCT />} />
        <Route exact path="/Course/Certified-Course-in-Financial-Accounting" element={<CCFA />} />
        <Route exact path='/Course/Advance-Course-in-Financial-Intelligence' element={<ACFI />} />
        <Route exact path='/Course/Fundamentals-of-Financial-Intelligence' element={<FFI />} />
        <Route exact path='/Course/Web-Development-for-Everyone' element={<WDE />} />
        {/* <Route exact path="/Career" element={<CareerPage />} /> */}
        <Route exact path="/Login" element={<Signin />} />
        <Route exact path={"/dash"} element={<Dash/> } />
        <Route exact path="/dash/:dashSection" element={<Dash/>} />
        <Route exact path={"/DashBoard"} element={<DashBoardMain />} />
        <Route path="/Course/:courseid/:videoid" element={<VideoMain/>}/>
        <Route path="*" element={<Error404 />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
      <Footer2 />
    </div>
  );
} 
  
function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <UserContext.Provider value={{state, dispatch}}>
          <Header2 />
          <Routing />
      </UserContext.Provider>
    </div>
  );
}


export default App;
