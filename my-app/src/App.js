
import './css/root.css'
import Header from './components/header/header';
import Freebies from './components/Freebies/Freebies';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      {/* { <Testimonials />} */}
      <Freebies />
      <Footer />
    </div>
  );
}


export default App;
