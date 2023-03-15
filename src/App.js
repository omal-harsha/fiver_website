
import './App.css';
import Cover from './component/Cover';
import Explore from './component/Explore';
import Features from './component/Features';
import Header from './component/Header.jsx';
import Hero from './component/Hero';
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
      
    </div>
  );
}

export default App;
