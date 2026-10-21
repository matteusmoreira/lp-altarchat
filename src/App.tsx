import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { ChaosToOrder } from './sections/ChaosToOrder';
import { Features } from './sections/Features';
import { Steps } from './sections/Steps';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ChaosToOrder />
        <Features />
        <Steps />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
