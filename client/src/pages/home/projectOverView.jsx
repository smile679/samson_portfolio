import { Link } from "react-router-dom";
import { MdOutlineSelectAll } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { useState } from "react";
import { SiCloudflareworkers } from "react-icons/si";
import Reveal from "../../components/motions/Reveal";
import BlurText from "../../components/motions/BlurText";
import Tilt from "react-parallax-tilt";
import MenuCard from "../../components/MenuCard";

function ProjectOverView() {
  const [menu, setMenu] = useState("all");

  const projects = [
    {
      title: "Merkato Gebeya Full-Stack App",
      shortDescription:
        "The Merkato eCommerce App was built to offer a smoother, more organized shopping experience for users who often face slow, cluttered, or confusing online stores",
      image:
        "https://res.cloudinary.com/dineyc77u/image/upload/v1763652914/nn3_yz6lwo.jpg",
      link: "https://ecommerce-app-1-q5og.onrender.com/",
      github: "https://github.com/smile679/eCommerce-app.git",
      category: "fullstack",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    },
    {
      title: "Bakery Full-Stack App",
      shortDescription:
        "The Bakery Fullstack App was built to make it easier for customers to discover, browse, and order baked goods online without navigating multiple platforms",
      image:
        "https://res.cloudinary.com/dineyc77u/image/upload/v1763417061/bakerFront_xvptpc.jpg",
      link: "https://bakery-full-stack-webisite-front.onrender.com/",
      github: "https://github.com/smile679/Bakery-Full-stack-Webisite.git",
      category: "fullstack",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    },
    {
      title: "Foodie Delight",
      shortDescription:
        "The Bakery Fullstack App was created to give customers and bakery owners a smoother, more organized online experience.",
      image:
        "https://res.cloudinary.com/dineyc77u/image/upload/v1763846372/foodiehome2_hlitdu.webp",
      link: "https://foodiedelightapp.netlify.app/",
      github: "https://github.com/smile679/Foodie-Delight.git",
      category: "static",
      tags: ["React", "Tailwind"],
    },
    {
      title: "Movie Scope",
      shortDescription:
        "MovieScope is a responsive movie discovery web application that allows users to browse trending films, search titles, and view detailed information",
      image:
        "https://res.cloudinary.com/dineyc77u/image/upload/v1763846926/movieScope_vhccly.webp",
      link: "https://moviescopapp.netlify.app/",
      github: "https://github.com/smile679/Movie-App.git",
      category: "static",
      tags: ["React", "Tailwind"],
    },
    {
      title: "Foodie",
      shortDescription:
        "The Bakery Fullstack App was created to give customers and bakery owners a smoother, more organized online experience.",
      image:
        "https://res.cloudinary.com/dineyc77u/image/upload/v1763846372/foodiehome2_hlitdu.webp",
      link: "https://foodiedelightapp.netlify.app/",
      github: "https://github.com/smile679/Foodie-Delight.git",
      category: "static",
      tags: ["React", "Tailwind"],
    },
    {
      title: "Scope",
      shortDescription:
        "MovieScope is a responsive movie discovery web application that allows users to browse trending films, search titles, and view detailed information",
      image:
        "https://res.cloudinary.com/dineyc77u/image/upload/v1763846926/movieScope_vhccly.webp",
      link: "https://moviescopapp.netlify.app/",
      github: "https://github.com/smile679/Movie-App.git",
      category: "static",
      tags: ["React", "Tailwind"],
    },
  ];


  const filteredProjects =
    menu === "all"
      ? projects
      : projects.filter((project) => project.category === menu);

  return (
    <section className="w-full flex justify-center items-center bg-emerald-600 px-5">
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center py-5">
        <Reveal>
          <div className="py-1.5 px-3 rounded-full inline-flex items-center border border-emerald-500/80 bg-emerald-500/10 gap-2 w-fit my-3">
            <SiCloudflareworkers className="text-amber-50 w-4 h-4" />
            <span className="text-amber-50 text-sm font-medium tracking-wide">
              My Work
            </span>
          </div>
        </Reveal>
        <Reveal>
          <BlurText
            text="Featured Projects"
            delay={200}
            animateBy="words"
            direction="top"
            className="text-5xl md:text-6xl text-center font-semibold leading-tight tracking-tight text-white"
          />
        </Reveal>
        <Reveal>
          <p className="text-[15px] leading-relaxed text-emerald-200/65 py-3">
            Showing my best work & achievements
          </p>
        </Reveal>
        <Reveal>
          <div className="flex justify-center items-center gap-3 mb-10">
            <button
              className={`text-md font-medium inline-flex justify-center items-center py-1 px-5
             gap-2 border border-emerald-500/80 my-3 rounded-full hover:bg-emerald-400 cursor-pointer transition-all duration-200
             ${
               menu === "all"
                 ? "bg-emerald-400 shadow-emerald-400/50 shadow-md text-white animate-bounce"
                 : " bg-emerald-500/10 text-teal-200"
             }`}
              onClick={() => setMenu("all")}
            >
              <MdOutlineSelectAll
                className={`${menu === "all" ? "text-white" : "text-teal-200"}`}
              />
              All
            </button>
            <button
              className={`text-md font-medium inline-flex justify-center items-center py-1 px-5
             gap-2 border border-emerald-500/80 my-3 rounded-full hover:bg-emerald-400 cursor-pointer transition-all duration-200
             ${
               menu === "static"
                 ? "bg-emerald-400 shadow-emerald-400/50 shadow-md text-white  animate-bounce"
                 : " bg-emerald-500/10 text-teal-200"
             }`}
              onClick={() => setMenu("static")}
            >
              <FaLaptopCode
                className={`${menu === "static" ? "text-white" : "text-teal-200"}`}
              />
              Static
            </button>
            <button
              className={`text-md font-medium inline-flex justify-center items-center py-1 px-5
             gap-2 border border-emerald-500/80 my-3 rounded-full hover:bg-emerald-400 cursor-pointer transition-all duration-200
             ${
               menu === "fullstack"
                 ? "bg-emerald-400 shadow-emerald-400/50 shadow-md text-white  animate-bounce"
                 : " bg-emerald-500/10 text-teal-200"
             }`}
              onClick={() => setMenu("fullstack")}
            >
              <FaCode
                className={`${menu === "fullstack" ? "text-white" : "text-teal-200"}`}
              />
              Fullstack
            </button>
          </div>
        </Reveal>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 ">
          {filteredProjects &&
            filteredProjects.map((pro) => (
              <Reveal className="w-full h-full">
                <Tilt className="w-full h-full cursor-pointer">
                  <MenuCard item={pro} />
                </Tilt>
              </Reveal>
            ))}
        </div>
        <Link
          to="/projects"
          className="mt-10 py-0.5 px-3 text-emerald-200 text-md font-mono tracking-wide rounded-full inline-flex items-center gap-1.5
        bg-emerald-900/85 border border-emerald-400/45 backdrop-blur-md hover:scale-110"
        >
        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0 animate-caret-blink" />
          See More
        </Link>
      </div>
    </section>
  );
}

export default ProjectOverView;
