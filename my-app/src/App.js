import React, { useState, createContext, useReducer } from 'react';
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
import Accounting from './components/IndividualCourse/Accounting';
import Error404 from './components/404Error/404Error';
import Dash from './components/Dashboard/dashboard/Dash';

import {initialState, reducer} from './reducer/UseReducer';

import {Link, Routes, Route } from 'react-router-dom';
import DashBoardMain from './components/Dashboard/DashBoardMain';
import VideoModule from './components/Dashboard/VideoModule/VideoModule';
// import VideoContent from './components/Dashboard/VideoModule/VideoContent';
import VideoPlayer from './components/Dashboard/VideoModule/VideoPlayer';

export const UserContext = createContext();

const courses = ["Web-development-for-everyone","CERTIFIED-COURSE-IN-FINANCIAL-ACCOUNTING", "A-FREE-TOOLKIT-FOR-18+","FUNDAMENTALS-OF-FINANCIAL-INTELLIGENCE", "NAVRATNAS-OF-TIME-MANAGEMENT","HOW-TO-FIND-YOUR-PASSION"];

const Routing = () => {
  return (
    <div>
      <Signin />
      <Link to="/RegisterNow"></Link>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/about_us" element={<OurStroy />} />
        <Route path="/RegisterNow" element={<RegisterMain />} />
        <Route path="/CourseName" element={<Accounting />} />
        <Route path="/TermsofUse" element={<TermsOfUse />} />
        <Route path="/EarningDisclaimer" element={<PrivacyPolicy />} />
        <Route path="/RefundPolicy" element={<RefundPolicy />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/CoursePage" element={<CoursePage />} />
        <Route path={"/dash"} element={<Dash/> } />
        <Route path={"/DashBoard"} element={<DashBoardMain />} />
        <Route path={"/Player"} element={<VideoModule/>} />
        {courses.forEach(element => {
          var elements = "/"+element;
          <Route path={elements} element={<Accounting />} />
        })}
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
<<<<<<< HEAD
      <UserContext.Provider value={{state, dispatch}}>
          <Header2 />
          <Routing/>
      </UserContext.Provider>
=======
      <BrowserRouter>
      <Signin />
      <Header2 />
        <Link to="/RegisterNow"></Link>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/about_us" element={<OurStroy />} />
          <Route path="/RegisterNow" element={<RegisterMain />} />
          <Route path="/CourseName" element={<Accounting />} />
          <Route path="/TermsofUse" element={<TermsOfUse />} />
          <Route path="/EarningDisclaimer" element={<PrivacyPolicy />} />
          <Route path="/RefundPolicy" element={<RefundPolicy />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="CoursePage" element={<CoursePage />} />
          <Route path={"/dash"} element={<Dash/> } />
          <Route path={"/DashBoard"} element={<DashBoardMain />} />
          <Route path={"/Player"} element={<VideoModule/>} />
          {courses.forEach(element => {
            var elements = "/"+element;
            <Route path={elements} element={<Accounting />} />
          })}
          <Route path="*" element={<Error404 />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      <Footer2 />
      </BrowserRouter>
>>>>>>> 4bfa973716edd987f0b57dbc9871974f0a758af1
    </div>
  );
}


export default App;
