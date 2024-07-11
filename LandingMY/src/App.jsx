import { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopBar from "./components/TopBar";
import WhatsAppButton from "./components/WhatsappButton";
import StickyNav from "./components/StickyNav";
import { useTranslation } from 'react-i18next';
import Bottons from "./components/Bottons";
import TabbedImages from "./components/TabbedImages";
import Works from "./components/Works";
import FlipCardContainer from "./components/FlipCardContainer";
import Footer from "./components/Footer";
import QuoteWizard from "./components/QuoteWizard";
import ContactForm from "./components/ContactForm";
import Login from "./components/Login";


function App() {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();
  const contactFormRef = useRef(null);
  const worksRef = useRef(null);
  const flipCardRef = useRef(null);
  const quoteRef = useRef(null);

  const [quoteData, setQuoteData] = useState({});

  const scrollToContactForm = () => {
    contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div>
        <TopBar onConsultasClick={scrollToContactForm} />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <StickyNav />
              <Bottons />
              <TabbedImages />
              <div id="services" ref={worksRef}>
                <Works />
              </div>
              <div id="about" ref={flipCardRef}>
                <FlipCardContainer />
              </div>
              <div id="quote" ref={quoteRef}>
                <QuoteWizard setQuoteData={setQuoteData} />
              </div>
              <div id="contact" ref={contactFormRef}>
                <ContactForm quoteData={quoteData} />
              </div>
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




