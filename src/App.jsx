import './App.css'
import Navbar from './components/Navbar'
import Intro1 from './components/Intro1'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
// import { Link, animateScroll as scroll } from "react-scroll";
// import { SocialIcon } from 'react-social-icons';

function App() {

  return (
    <div className="App">
      <div className='sidebar' >
        <Navbar/>
      </div>
      <div className="other">
        <Intro1/>
        <About/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;