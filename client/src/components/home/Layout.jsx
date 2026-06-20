import About from "../../pages/home/About";
import ContactMe from "../../pages/home/ContactMe";
import Hero from "../../pages/home/hero/Hero";
import Services from "../../pages/home/Services";
import Skills from "../../pages/home/Skills";
import GeminiChatbot from "../geminiChatbot/GeminiChatBot";
import Header from "../header/Layout";
// import ProjectOverView from "../projectOverView";


const Home = ()=>{

  return (
    <section className="relative w-screen flex flex-col items-center scroll-smooth snap-none">
      <Header />
      <Hero />
      <About />
      <Services />
      <Skills />
      {/* <ProjectOverView /> */}
      <ContactMe />
      <GeminiChatbot />
    </section>
  );
}

export default Home;