import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/Header/Header';
import CraftedFor from './components/CraftedFor/CraftedFor';
import Pricing from './components/Pricing/Pricing';
import CalltoAction from './components/CallToAction/CallToAction';
import Testimonial from './components/Testimonial/Testimonial';
import Companies from './components/Companies/Companies';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop';
import GetInTouch from './components/GetInTouch/GetInTouch'

function App() {
  return (
    <div>
      <Header />
      <CraftedFor />
      <Pricing />
      <CalltoAction />
      <Testimonial />
      <Companies />
      <GetInTouch />
      <Footer />
      <ScrollTop /> 


    </div>
  );
}

export default App;
