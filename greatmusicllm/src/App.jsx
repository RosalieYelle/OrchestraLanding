import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import EventCarousel from './components/EventCarousel/EventCarousel.jsx';
import AppSection from './components/AppSection/AppSection.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <About />
        <EventCarousel />
        <AppSection />
      </main>
      <Footer />
    </>
  )
}

export default App
