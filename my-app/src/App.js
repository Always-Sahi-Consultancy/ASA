import { useState } from 'react';
import './css/root.css'
import Header from './components/header/header';
import Freebies from './components/Freebies/Freebies';
import Testimonials from './components/Testimonials/Testimonials';
import Enrollnow from './components/EnrollNow/Enrollnow';
import Footer from './components/footer/Footer';

function App() {
  const [active, setActive] = useState("");

  return (
    <div>
      <Header onChange={setActive} />
      {active === "Testimonials" && <Testimonials />}
      {active === "Freebies" && <Freebies />}
      {active === "Enrollnow" && <Enrollnow />}

      <Footer />
    </div>
  );
}


export default App;
