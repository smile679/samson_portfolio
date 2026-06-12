import About from "../../pages/home/About";
import ContactMe from "../../pages/home/ContactMe";
import Hero from "../../pages/home/hero/Hero";
import Services from "../../pages/home/Services";
import Skills from "../../pages/home/Skills";
import GeminiChatbot from "../geminiChatbot/GeminiChatBot";
import Header from "../header/Layout";


const Home = ()=>{

  return (
    <section className="home">
      <Header />
      <Hero />
      <About />
      <Services />
      <Skills />
      <ContactMe />
      <GeminiChatbot />
    </section>
  );
}

export default Home;