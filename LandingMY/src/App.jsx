import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopBar from "./components/TopBar";
import WhatsAppButton from "./components/WhatsappButton";
import StickyNav from "./components/StickyNav";
import Bottons from "./components/Bottons";
import TabbedImages from "./components/TabbedImages";
import Works from "./components/Works";
import FlipCardContainer from "./components/FlipCardContainer";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Login from "./components/Login";



function App() {
  const contactFormRef = useRef(null);
  const worksRef = useRef(null);
  const flipCardRef = useRef(null);

  const scrollToContactForm = () => {
    contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans">
        <TopBar onConsultasClick={scrollToContactForm} />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              {/* <StickyNav /> */}
              <main className="max-w-7xl mx-auto px-4">
               
                <TabbedImages />
                <section id="services" ref={worksRef}>
                  <Works />
                </section>
                <section id="about" ref={flipCardRef}>
                  <FlipCardContainer />
                </section>
                <section id="contact" ref={contactFormRef}>
                  <ContactForm />
                </section>
              </main>
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




