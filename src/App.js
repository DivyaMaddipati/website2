import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Why from "./Components/Why"
import Cards from "./Components/Cards"
import Why2 from './Components/Why2'
import Services from "./Components/Services";
import What from "./Components/What";
import Provide2 from './Components/Provide2'

function App() {
  return (
    <div className="App">
      <Home />
      {/* <About /> */}
      <Work /> 
      <Why />
      <Cards />
      <Why2 />
      <Services />
      <What />
      {/* <Provide2 /> */}
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
