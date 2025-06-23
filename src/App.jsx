import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

import About from './components/About.jsx';
import Cocktails from './components/Cocktails.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
};

export default App;
