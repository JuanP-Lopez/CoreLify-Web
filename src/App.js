import React, { useRef } from "react"; 
import { LanguageProvider } from "./contexts/LanguageContext";
import "./App.css";

/*Import de componentes*/
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CardsHeader from "./components/Cards/CardsHeader";
import Card from "./components/Cards";
import Carrousel from "./components/Carrousel";
import News from "./components/News";

/*Import de iconos*/
import Happy from "./assets/icons/Simplicity-Icon.svg";
import Strong from "./assets/icons/Strong-Icon.svg";
import Collaboration from "./assets/icons/Collaboration-Icon.svg";

function App() {

  const homeRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  const scroll = (ref) => {
    const scrollMap = {
      home: homeRef,
      info: infoRef,
      form: formRef,
    };
    scrollMap[ref]?.current?.scrollIntoView({behavior: "smooth"});
  };

  return (
    <div>
      <LanguageProvider>
        <Navbar scrollSection={scroll} />
        <Hero ref={homeRef} />
        <CardsHeader />
        <div className="cards" ref={infoRef}>
          <Card icon={Happy} title="cards.card1.title" text="cards.card1.text" variant="red" />
          <Card icon={Strong} title="cards.card2.title" text="cards.card2.text" variant="orange" />
          <Card icon={Collaboration} title="cards.card3.title" text="cards.card3.text" variant="blue" />
        </div>
        <Carrousel />
        <section ref={formRef}>
          <News/>
        </section>
        <footer >
          <h3>CoreLify</h3>
          <p>2025</p>
        </footer>
      </LanguageProvider>
    </div>
  );
}

export default App;
