import Header from './components/header';
import BannerCarousel from './components/carousel';
import Form from './components/form';
import AboutEvent from './components/about';
import Contact from './components/contact';
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerCarousel />
      <AboutEvent />
      <hr style={{color:'orange', height:'3px', margin:'0 120px'}}></hr>
      <Form/>
      <hr style={{color:'white', height:'3px', margin:'0 120px'}}></hr>
      <Contact />
    </div>
  );
}

export default App;
