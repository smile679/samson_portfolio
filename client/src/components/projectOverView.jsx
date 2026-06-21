import { Link } from "react-router-dom";
import { MdOutlineSelectAll } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { useState } from "react";


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
    },
  ];

  const MenuCard = ({item})=>{

    return (
      <div className="relative w-full md:max-w-md rounded-2xl hover:scale-105 overflow-hidden shadow-md shadow-gray-800">
        <a href={item.link} target="_blank">
          <img
            src={item.image}
            className="w-full max-h-70 object-cover rounded-b-2xl"
          />
        </a>
        <div className="w-full flex justify-between items-center px-5 py-2">
          <h3 className="text-sm">{item.title}</h3>
          <div className="flex justify-center items-center gap-3">
            <MdOutlineLiveTv size={20} />
            <FaGithub size={20} />
          </div>
        </div>
        <p className="text-sm font-medium text-start text-gray-900 px-5 pb-2">{item.shortDescription}</p>
      </div>
    );}

  const filteredProjects = 
            menu === "all" ? projects :
            projects.filter((project)=> project.category === menu)


  return (
    <section className="w-full flex justify-center items-center bg-emerald-600 px-5">
      <div className="w-full max-w-6xl mx-auto flex flex-col text-center py-5">
        <h1 className="text-4xl text-gray-800 font-extrabold text-shadow-emerald-800 text-shadow-lg tracking-normal ">
          Project Highlight
        </h1>
        <div className="flex justify-center items-center gap-5 mb-10">
          <button
            className="inline-flex justify-center items-center py-0.5 px-3 gap-3 border-[1px] my-5 rounded-lg hover:bg-emerald-400 cursor-pointer"
            onClick={() => setMenu("all")}
          >
            <MdOutlineSelectAll className="text-white" />
            <p className="text-white">All</p>
          </button>
          <button
            className="inline-flex justify-center items-center bg-emerald-600 py-0.5 px-3 gap-3 border-[1px] my-5 rounded-lg hover:bg-emerald-400 cursor-pointer"
            onClick={() => setMenu("static")}
          >
            <FaLaptopCode className="text-white" />
            <p className="text-white">Static</p>
          </button>
          <button
            className="inline-flex justify-center items-center bg-emerald-600 py-0.5 px-3 gap-3 border-[1px] my-5 rounded-lg hover:bg-emerald-400 cursor-pointer"
            onClick={() => setMenu("fullstack")}
          >
            <FaCode className="text-white" />
            <p className="text-white">Fullstack</p>
          </button>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 ">
          {filteredProjects &&
            filteredProjects.map((pro) => <MenuCard item={pro} />)}
        </div>
        <Link to="/projects">
          <button className="pt-10 text-white hover:text-blue-800 font-semibold hover:underline cursor-pointer">
            See More
          </button>
        </Link>
        {/* <svg
          class="absolute -bottom-8 left-0 w-full h-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#059669"></path>
        </svg> */}
      </div>
    </section>
  );
}

export default ProjectOverView;