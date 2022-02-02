import React, { useState, createContext, useReducer, useEffect } from 'react';
import './css/root2.css';
import TermsOfUse from './components/Terms/TermsOfUse';
import EarningDiscalimer from './components/Terms/EarningDisclaimer';
import PrivacyPolicy from './components/Terms/PrivacyPolicy';
import RefundPolicy from './components/Terms/RefundPolicy';
import Landing from './components/Landing/Landing';
import Header2 from './components/header/header2';
import Signin from './components/SignIn/SignIn';
import Logout from './components/Dashboard/Header/Logout';
import Header_Dash from './components/Dashboard/Header/Header_Dash';
import RegisterMain from './components/Register/RegisterMain';
import Footer2 from './components/Footer2/footer2';
import ContactUs from './components/ContactUs/ContactUs';
import OurStroy from './components/ourStory/OurStory';
import Testimonials from './components/Testimonials2/Testimonials';
import CoursePage from './components/CoursePage/CoursePage';
import Course from './components/IndividualCourse/Accounting';
import Error404 from './components/404Error/404Error';
import Dash from './components/Dashboard/dashboard/Dash';

import {initialState, reducer} from './reducer/UseReducer';

import {Link, Routes, Route } from 'react-router-dom';
import DashBoardMain from './components/Dashboard/DashBoardMain';
import VideoModule from './components/Dashboard/VideoModule/VideoModule';
// import VideoContent from './components/Dashboard/VideoModule/VideoContent';
import VideoPlayer from './components/Dashboard/VideoModule/VideoPlayer';
import VideoMain from './components/Dashboard/VideoModule/VideoMain';

export const UserContext = createContext();

const courses = ["Web-development-for-everyone","CERTIFIED-COURSE-IN-FINANCIAL-ACCOUNTING", "A-FREE-TOOLKIT-FOR-18+","FUNDAMENTALS-OF-FINANCIAL-INTELLIGENCE", "NAVRATNAS-OF-TIME-MANAGEMENT","HOW-TO-FIND-YOUR-PASSION"];

const Routing = () => {
  // const [signupState, setSignup] = useState(0);

  return (
    <div>
      <Link to="/RegisterNow"></Link>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/testimonials" element={<Testimonials />} />
        <Route exact path="/contact_us" element={<ContactUs />} />
        <Route exact path="/about_us" element={<OurStroy />} />
        <Route exact path="/RegisterNow" element={<RegisterMain />} />
        {/* <Route exact path="/CourseName" element={<Accounting />} /> */}
        <Route exact path="/TermsofUse" element={<TermsOfUse />} />
        <Route exact path="/EarningDisclaimer" element={<PrivacyPolicy />} />
        <Route exact path="/RefundPolicy" element={<RefundPolicy />} />
        <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route exact path="/CoursePage" element={<CoursePage />} />
        <Route path="/Course/:courseId" element={<Course />} />
        <Route exact path="/Login" element={<Signin />} />
        <Route exact path={"/dash"} element={<Dash/> } />
        <Route exact path={"/DashBoard"} element={<DashBoardMain />} />
        <Route exact path={"/Player"} element={<VideoModule/>} />
        <Route path="/VideoModule" element={<VideoModule/>}/>
        <Route path="/VideoPlayer" element={<VideoPlayer/>}/>
        <Route path="/VideoMain" element={<VideoMain/>}/>
        <Route path="*" element={<Error404 />} />
        
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
