import About from "../../pages/home/About";
import ContactMe from "../../pages/home/ContactMe";
import Hero from "../../pages/home/hero/Hero";
// import Services from "../../pages/home/Services";
import Services2 from "../../pages/home/Services2";
import Skills from "../../pages/home/Skills";
import GeminiChatbot from "../geminiChatbot/GeminiChatBot";
import Header from "../header/Layout";


const Home = ()=>{

  return (
    <section className="relative w-full flex flex-col items-center scroll-smooth snap-none">
      <Header />
      <Hero />
      <About />
      {/* <Services /> */}
      <Services2 />
      <Skills />
      <ContactMe />
      <GeminiChatbot />
    </section>
  );
}

export default Home;