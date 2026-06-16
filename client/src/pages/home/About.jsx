import { ChevronsLeftRight, Database, Focus, Globe } from "lucide-react";
import Reveal from "@/components/motions/Reveal";



const About = () => {
  const aboutSkills = [{
    icon : <ChevronsLeftRight />,
    title : "Frontend Expert",
    skills : "HTML, CSS, Js ,React,Taiwind CSs and other modern CSS framworks",
  },
  {
    icon : <Database />,
    title : "Backend Mastery",
    skills : "NodeJS, ExpressJs, MongoDb, and API architecture",
  },
  {
    icon : <Globe />,
    title : "Full-Stack Development",
    skills : "End-to-end application development and deployment",
  },
  {
    icon: <Focus />,
    title: "Performance Focuse",
    skills : "Optimaized, scalable, and maintainable solutions",
  },
]

  return (
    <section className="about" name="About">
      <svg class="absolute -top-13 left-0 w-full h-15 rotate-180" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#059669"></path>
      </svg>
      <Reveal>
        <h1>About Me</h1>
      </Reveal>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:mt-10 gap-5">
        <Reveal>
          <div className="w-full">
            <p className="text-md text-gray-900 text-shadow-lg leading-relaxed max-md:text-center">
                I'm a dedicated <span className="font-semibold text-amber-50"> Full-Stack MERN Developer </span>
                with strong experience building  <span className="font-semibold">modern, scalable,</span>  and user focused 
                <span className="font-semibold"> web applications.</span>
                My expertise spans both <span className="font-semibold text-amber-50">frontend and backend development</span>, allowing me to deliver complete 
                end-to-end solutions from clean, responsive interfaces to secure API architectures and database management.
                I build with <span className="font-semibold text-amber-50">HTML, CSS, JavaScript, React, Tailwind CSS,
              Node.js, Express, and MongoDB </span>and I follow clean coding practices, reusable component design, and 
              performance driven development. I enjoy solving real problems through technology, turning ideas into functional, production-ready applications.
              I also have experience in UI/UX tools such as <span className="font-semibold text-amber-50">Figma, Illustrator, and Photoshop</span>, 
              which helps me blend strong visual design with 
              technical execution to create seamless, intuitive user experiences.
              <span className="text-amber-50">
                My goal is to build fast, secure, maintainable applications that deliver real value for users and businesses.
              </span>
              </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex flex-col gap-y-4">
            {
              aboutSkills && aboutSkills.map(skill=>(
                <div className="w-full max-w-lg flex items-center shadow-inner shadow-dark-100 rounded-lg p-2">
                  <div className="w-13 h-13 flex justify-center items-center rounded-lg shadow-inner shadow-dark-100 px-2">
                    {skill.icon}
                  </div>
                  <div className="flex flex-col justify-start items-start ml-5">
                    <h3>{skill.title}</h3>
                    <p className="text-sm text-gray-900 text-shadow-lg leading-relaxed py-2">{skill.skills}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </Reveal>
      </div>
      <svg class="absolute -bottom-13 left-0 w-full h-15 " viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#059669"></path>
      </svg>
    </section>
  );
};

export default About;
