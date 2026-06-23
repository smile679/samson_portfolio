// src/components/Projects.jsx
// import portfolio from '../images/projectImages/portfolio.webp';
import movieScope from "@/assets/images/projectImages/movieScope.webp";
import movieScope2 from "@/assets/images/projectImages/movieScope2.jpg";
import foodiehome2 from '@/assets/images/projectImages/foodiehome2.webp';
import foodie2 from "@/assets/images/projectImages/foodie2.webp";
import bakeryFront from "@/assets/images/projectImages/Bakery_front.jpg";
import bakeryListing from "@/assets/images/projectImages/Bakery_listing.jpg";
import mobileShop from "@/assets/images/projectImages/mobileShop.jpg";
import mobileShop2 from "@/assets/images/projectImages/mobileShop2.jpg";
import form from "@/assets/images/projectImages/form.jpeg";
import gef_01 from "@/assets/images/projectImages/gef_01.jpg";
import gef_02 from "@/assets/images/projectImages/gef_02.jpg";
import bokra_01 from "@/assets/images/projectImages/bokra_01.png";
import bokra_02 from "@/assets/images/projectImages/bokra_02.png";


import ProjectCard from './ProjectCard.jsx';
import Header from './header/Layout.jsx';


const Projects = () => {
  const projectsData = [
    {
      title: "Bakery Fullstack App",
      images: [bakeryFront, bakeryListing],
      description:
        "The Bakery Fullstack App was built to make it easier for customers to discover, browse, and order baked goods online without navigating multiple platforms. Many small bakeries struggle to present their products clearly or handle orders efficiently, so this app brings everything into one streamlined experience. Users can explore breads, pastries, and cakes, learn details about each item, add them to their cart, and place orders, while the admin side manages products and content. The goal is to provide a smooth, modern shopping experience for both customers and bakery owners.",
      techStack: [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "React Router",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      features: [
        "Responsive bakery card layout",
        "Detailed product pages",
        "Add to cart functionality",
        "Cart summary and order receipt",
        "Order/payment simulation",
      ],
      demoLink: "https://bakery-full-stack-webisite-front.onrender.com",
      githubLink: "https://github.com/smile679/Bakery-Full-stack-Webisite.git",
    },
    {
      title: "Gefrem Engineering Website",
      images: [gef_01, gef_02],
      description:
        "The Gefrem Engineering website was developed to establish a strong online presence for an engineering and construction company. The platform showcases the company's services, expertise, completed projects, and business values in a modern and professional way. The goal was to create a visually appealing, responsive website that helps potential clients understand the company's capabilities, explore its services, and easily get in touch for inquiries and project consultations.",
      techStack: [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "React Router",
        "Vite",
      ],
      features: [
        "Modern responsive landing page",
        "Professional hero section",
        "Services showcase",
        "About company section",
        "Project portfolio gallery",
        "Contact and inquiry section",
        "Mobile-friendly design",
        "Optimized user experience",
      ],
      demoLink: "https://gefrem-engineering.vercel.app/",
      githubLink: "https://github.com/smile679/gefrem_Engineering",
    },
    {
      title: "Merkato eCommerce App",
      images: [
        "https://res.cloudinary.com/dineyc77u/image/upload/v1763652914/nn3_yz6lwo.jpg",
        "https://res.cloudinary.com/dineyc77u/image/upload/v1763652914/nn2_apgwdx.jpg",
      ],
      description:
        "The Merkato eCommerce App was built to offer a smoother, more organized shopping experience for users who often face slow, cluttered, or confusing online stores. It provides a clear product catalog, detailed item pages, and a simple cart and checkout process that helps customers shop without frustration. The platform also includes an admin system for managing products and store content, giving business owners an easy way to operate their online shop. Overall, the app delivers a modern and efficient marketplace experience for both shoppers and sellers.",
      techStack: [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "MongoDB",
        "PayPal API",
      ],
      features: [
        "Responsive ecommerce card layout",
        "Detailed product pages",
        "Add to cart functionality",
        "Cart summary and order receipt",
        "Order/payment simulation",
      ],
      demoLink: "https://ecommerce-app-1-q5og.onrender.com",
      githubLink: "https://github.com/smile679/eCommerce-app.git",
    },
    {
      title: "Bokra Construction Website",
      images: [bokra_01, bokra_02],
      description:
        "Developed a modern and responsive corporate website for Bokra Construction to showcase the company's construction services, completed projects, and industry expertise. The platform was designed to strengthen the company's online presence, provide potential clients with detailed information about its capabilities, and create a professional channel for project inquiries and business communication.",
      techStack: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "React Router",
        "Vite",
      ],
      features: [
        "Responsive corporate website design",
        "Professional hero and company introduction sections",
        "Construction services showcase",
        "Project portfolio and gallery",
        "About Us and company values section",
        "Contact and inquiry forms",
        "Smooth navigation and user experience",
        "Mobile and tablet optimization",
      ],
      demoLink: "https://bokra-constraction.vercel.app/",
      githubLink: "https://github.com/smile679/Bokra_Constraction.git",
    },
    {
      title: "Foodie Delight App",
      images: [foodiehome2, foodie2],
      description:
        "The Bakery Fullstack App was created to give customers and bakery owners a smoother, more organized online experience. Many local bakeries have great products but lack an easy way for customers to explore items, view details, or place orders without confusion. This application solves that by offering a clean marketplace where users can browse breads, pastries, and cakes, read descriptions, add items to their cart, and check out with a simple flow. At the same time, the admin panel allows bakery owners to manage products and content efficiently, creating a unified system that keeps both sides connected and reduces the friction found in typical bakery websites.",
      techStack: ["JavaScript", "React", "Tailwind CSS", "React Router"],
      features: [
        "Search recipes by name",
        "Responsive recipe card layout",
        "Detailed recipe pages",
        "Add to cart functionality",
        "Cart summary and order receipt",
        "Order and payment simulation",
      ],
      demoLink: "https://foodiedelightapp.netlify.app/",
      githubLink: "https://github.com/smile679/Foodie-Delight.git",
    },
    {
      title: "Movie Scope App",
      images: [movieScope2, movieScope],
      description:
        "MovieScope is a responsive movie discovery web application that allows users to browse trending films, search titles, and view detailed information including rating, description, and posters. The application is built using JavaScript, React, Tailwind CSS v4, and React Router to deliver a clean, fast, and interactive user experience.",
      techStack: ["JavaScript", "React", "Tailwind CSS", "React Router"],
      features: [
        "Search movies by title",
        "Browse trending and popular movies",
        "View detailed movie info",
        "Add to cart functionality",
        "Fully responsive design",
      ],
      demoLink: "https://moviescopapp.netlify.app/",
      githubLink: "https://github.com/smile679/Movie-App.git",
    },
    {
      title: "Mobile Shop Management App",
      images: [mobileShop, mobileShop2],
      description:
        "Product showcase and admin management system for a mobile phone shop, allowing customers to view available devices while enabling admins to manage inventory.",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      features: [
        "Public product listing for new and used mobile devices and accessories",
        "Admin-only access to add, edit, and delete products",
        "Device filtering by brand, condition, and storage options",
        "Responsive UI optimized for mobile and desktop devices",
        "Clean separation between admin and customer views",
      ],
      demoLink: "https://mobileshop-1mku.onrender.com",
      githubLink: "https://github.com/smile679/mobileShop.git",
    },
  ];
  
  return (
    <section id="projectId" className="max-w-6xl mx-auto min-h-screen flex flex-col py-10 px-5">
      <Header />
      <h1 className="text-4xl font-bold text-shadow-gray-800 my-15">Projects</h1>
      {projectsData && projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
};

export default Projects;