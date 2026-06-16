import linkedin from "@/assets/images/linkedin.png";
import behance from "@/assets/images/behance.png";
import tg from "@/assets/images/tg.png";
import whatsapp from "@/assets/images/whatsapp.png";
import instagram from "@/assets/images/instagram.png";
import github from "@/assets/images/github.png";
import { useNavigate } from 'react-router-dom'
import Reveal from "@/components/motions/Reveal";
import RotatingText from "@/components/motions/RotatingText";
import TypeIt from "typeit-react";
// import Reveal from "../../../motions/Reveal";

const Info = () =>{
   const navigate = useNavigate();

   function handleClick(){
    navigate('/projects')
   }

  return (
    <div className="info">
      <Reveal>
        <div className="flex flex-col max-md-items-center md:pl-10">
          <h2 className="text-gray-200 text-xl font-bold">Hello , I'm</h2>
          <h1 className="flex flex-col sm:flex-row text-shadow-white text-shadow-2xs">
            <span className="text-nowrap"> SAMSON GIDEY</span>
          </h1>
          <h2 className="text-emerald-500 font-extrabold -tracking-tighter flex justify-items-center items-center">
            <RotatingText
              texts={["WEBSITE", "FULLSTACK"]}
              mainClassName=" text-white font-bold -tracking-tighter overflow-hidden rounded-lg flex items-center 
             text-xl xs:text-2xl sm:text-3xl text-shadow-gray-800 text-shadow-lg px-2 bg-emerald-500 mr-2"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              rotationInterval={5000}
            />
            DEVELOPER
          </h2>
        </div>
      </Reveal>
      <Reveal>
        <div className="text-center w-1/1 h-30">
          <TypeIt
            className="para"
            options={{
              speed: 200,
              waitUntilVisible: true,
            }}   
            getBeforeInit={(instance) => {
              instance
                .type(`" I build modern, secure, nnd<br/>`, { delay: 300 })
                .move(-3)
                .delete(1)
                .type("a")
                .move(null, { to: "END" })
                .type(`scalable web applications withhh`)
                .pause(300)
                .delete(2)
                .type("<br/> clean UI and strong backnd <br/>")
                .move(-4)
                .type("e")
                .move(null, { to: "END" })
                .type(`architecture. ".e`)
                .pause(300)
                .delete(2)
                .move(null, { to: "END" });

              return instance;
            }}
          />
        </div>
      </Reveal>
      <div className="flex flex-col-reverse">
        <Reveal>
          <div className="relative my-5 sm:ml-20 flex">
            <button
              className="button mr-5 xs:mr-10"
              onClick={() => {
                const button = document.getElementById("contact-button");
                button.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's talk
            </button>
            <button className="button2" onClick={handleClick}>
              My Projects
            </button>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex justify-evenly">
            <a href="https://t.me/sami_gra" target="_blank">
              <img
                src={tg}
                alt="link"
                className="icons hover:drop-shadow-sky-500"
              />
            </a>
            <a href="https://wa.me/251943712048" target="_blank">
              <img
                src={whatsapp}
                alt="link"
                className="icons hover:drop-shadow-green-500"
              />
            </a>
            <a href="https://instagram.com/samison_gidey" target="_blank">
              <img
                src={instagram}
                alt="link"
                className="icons hover:drop-shadow-pink-500"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/samson-gidey-b5a905303"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="icons hover:drop-shadow-sky-500"
              />
            </a>
            <a href="https://www.behance.net/samuelgidey1" target="_blank">
              <img
                src={behance}
                alt="link"
                className="icons pt-2 hover:drop-shadow-blue-500"
              />
            </a>
            <a href="https://github.com/smile679" target="_blank">
              <img
                src={github}
                alt="link"
                className="icons hover:drop-shadow-black"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Info;

