import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

import About from './components/About.jsx';
import Art from './components/Art.jsx';
import Cocktails from './components/Cocktails.jsx';
import Contact from './components/Contact.jsx';
import Hero from './components/Hero.jsx';
import Menu from './components/Menu.jsx';
import Navbar from './components/Navbar.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};

export default App;
