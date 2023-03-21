
import './App.css';
import Banner from './component/Banner';
import Business from './component/Business';
import Cover from './component/Cover';
import Explore from './component/Explore';
import Features from './component/Features';
import Footer from './component/Footer';
import FooterList from './component/FooterList';
import Guide from './component/Guide';
import Header from './component/Header.jsx';
import Hero from './component/Hero';
import LogoAd from './component/LogoAd';
import Team from './component/Team';
import Test from './component/Test';
import Test2 from './component/Test2';
import Trusted from './component/Trusted';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Trusted/>
      <Cover/>
      <Features/>
      <Explore/>
      <Business/>   
      <Team/>
      <LogoAd/>
      <Guide/>
      <Banner/>
      <FooterList/>
      <Footer/>
    </div>
  );
}

export default App;
