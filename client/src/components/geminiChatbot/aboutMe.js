const aboutMe = {
  name: "Samson Gidey",
  nickname: "Sami",
  title: "Fullstack Developer (MERN)",
  location: "Addis Ababa, Ethiopia",

  bio: `I'm Samson Gidey — a fullstack MERN developer based in Addis Ababa, Ethiopia.
      I build complete, production ready web applications end-to-end: responsive and 
      pixel-perfect frontends with React, scalable REST API backends with Node.js and 
      Express, and reliable data layers with MongoDB.

      I don't just write code — I architect solutions. From authentication systems and 
      admin dashboards to real-time UI and e-commerce workflows, I handle the full 
      lifecycle of a web product independently.

      Beyond personal projects, I've delivered real client work company websites, 
      internal tools, and branded digital experiences for businesses in Ethiopia. 
      I bring both technical depth and design sensibility to every project, which means 
      what I build doesn't just work it looks professional.

      I'm actively seeking fullstack or MERN developer roles where I can contribute, 
      grow, and ship products that make a real impact.`,

  skills: {
    frontend: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Redux Toolkit",
      "Tailwind CSS",
      "Responsive Design",
      "Component Architecture",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB & Mongoose",
      "REST API Design",
      "JWT Authentication",
      "Role-Based Authorization",
      "bcrypt Password Hashing",
    ],
    design: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "UI/UX Design",
      "Brand Identity Design",
      "Design Systems",
    ],
    tools: [
      "Git & GitHub",
      "Postman",
      "Cloudinary",
      "Render",
      "Netlify",
      "Vite",
    ],
  },

  projects: [
    {
      name: "Merkato E-commerce Platform",
      type: "Personal Project",
      description: `A full MERN stack e-commerce platform built end-to-end. Features include:
        product management, cart system, checkout flow, admin dashboard, JWT authentication,
        and role-based access control for admin vs regular users. Built with a clean,
        responsive UI using Tailwind CSS and React with Redux Toolkit for state management.`,
      technologies: [
        "React",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      Live: "https://ecommerce-app-1-q5og.onrender.com/",
      github: "https://github.com/smile679/eCommerce-app",
    },
    {
      name: "Gefrem Engineering Website",
      type: "Client Project",
      description: `A professional company website built for Gefrem Engineering, a construction
        and engineering firm based in Ethiopia. Features a strong brand identity with an orange
        and charcoal color palette, Syne/DM Sans typography, and sections including Hero, About,
        and Services. Built with React and Tailwind CSS.`,
      technologies: ["React", "Tailwind CSS", "Figma"],
      Live: "https://gefrem-engineering.vercel.app/",
      github: "https://github.com/smile679/gefrem_Engineering.git",
    },
    {
      name: "Mobile Shop Management App",
      type: "Client Project",
      description: `Product showcase and admin management system for a mobile phone shop, 
      allowing customers to view available devices while enabling admins to manage inventory.
      - Features
      - Public product listing for new and used mobile devices and accessories
      - Admin-only access to add, edit, and delete products
      - Device filtering by brand, condition, and storage options
      - Responsive UI optimized for mobile and desktop devices
      - Clean separation between admin and customer views`,
      technologies: ["React", "Vite", "Tailwind CSS"],
      Live: "https://mobileshop-1mku.onrender.com/",
      github: "https://github.com/smile679/mobileShop.git",
    },
    {
      name: "Bakery Fullstack App",
      type: "Personal Project",
      description: `A complete MERN bakery e-commerce application. Includes an admin panel,
        order management system, authentication, and beautifully designed sections including
        hero, about, services, and featured products. Built with a warm, inviting brand aesthetic.`,
      technologies: [
        "React",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      Live: "https://bakery-full-stack-webisite-front.onrender.com",
      github: "https://github.com/smile679/Bakery-Full-stack-Webisite",
    },
    {
      name: "Foodie Delight",
      type: "Personal Project",
      description: `Foodie Delight is a modern, responsive web application that 
      helps users discover and now order delicious meals from around the world. 
      Whether you're in the mood for pasta, dessert, or something brand new, 
      Foodie Delight lets you search, explore, and order with ease.`,
      technologies: [
        "React",
        "HTML & CSS",
        "Tailwind CSS",
        "React Router DOM",
        "Spoonacular API",
        "REST API Integration",
      ],
      Live: "https://foodiedelightapp.netlify.app/",
      github: "https://github.com/smile679/Foodie-Delight",
    },
    {
      name: "Movie Scope",
      type: "Personal Project",
      description: `A movie discovery app where users can search for movies, view details,
        ratings, and explore genres. Clean and responsive design with real-time API data.`,
      technologies: ["React", "REST API", "CSS"],
      Live: "https://moviescopapp.netlify.app/",
      github: "https://github.com/smile679/Movie-App",
    },
    // {
    //   name: "CBE Receipt Verifier",
    //   type: "Client Project (Internal Tool)",
    //   description: `An internal web tool built for Gefrem Engineering's team that automates
    //     manual bank receipt verification. Users input FT numbers and bank account digits,
    //     and the tool automatically constructs the correct CBE verification URL — saving the
    //     team significant time on manual checks.`,
    //   technologies: ["React", "JavaScript"],
    // },
    {
      name: "Bokra Construction Website",
      type: "Client Project",
      description: `A bilingual (English & Amharic) company website for a construction firm.
        Built with Vite + React, featuring an orange brand palette, Noto Sans Ethiopic for Amharic
        text, and fully responsive sections covering the company's services and projects.`,
      technologies: ["React", "Vite", "Tailwind CSS"],
    },
  ],

  experience: [
    {
      role: "Fullstack Developer",
      type: "Freelance / Client Work",
      description: `Delivered multiple end-to-end web projects for real clients in Ethiopia,
        handlhing from brand identity and UI design to frontend development and backend APIs.`,
    },
    {
      role: "Personal Project Builder",
      type: "Self-Directed",
      description: `Continuously building and shipping projects to strengthen fullstack skills —
        from e-commerce platforms to movie apps to food discovery tools — all publicly available on GitHub.`,
    },
  ],

  strengths: [
    "Designs AND codes — rare combination at the junior level",
    "Builds complete fullstack apps independently from scratch",
    "Strong eye for UI detail and brand consistency",
    "Experience delivering real client projects in Ethiopia",
    "Bilingual web experience (English & Amharic / Geez script)",
    "Fast learner who ships working products, not just tutorials",
    "Comfortable across the full MERN stack",
  ],

  currentlyLearning: [
    "Next.js and server-side rendering",
    "Advanced TypeScript",
    "System design patterns",
  ],

  openTo: [
    "Fullstack developer roles (MERN)",
    "Frontend developer roles",
    "Freelance web projects",
    "Remote opportunities",
  ],

  contact: {
    email: "samsongidey9@gmail.com",
    phone: "+251943712048 or +251939663378",
    github: "https://github.com/smile679",
    portfolio: "https://samsongideyportfolio.netlify.app",
    linkedin: "https://www.linkedin.com/in/samson-gidey-b5a905303",
    telegram: "https://www.t.me/sami_gra",
  },

  personalityNote: `When answering questions, be warm, confident, and direct — like Sami himself.
    Don't be overly formal. Highlight real work and real skills. If someone asks if Sami is available
    for work, say yes and share his contact info. If asked about a specific project, go into detail.
    Keep answers concise unless the user asks for more.`,
};

export default aboutMe;
