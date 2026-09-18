import ProjectCard from './ProjectCard.jsx';
import Header from './header/Layout.jsx';


const Projects = () => {
  const projectsData = [
    {
      title: "JOZY Tech Digital Menu SaaS",
      images: [
        "https://res.cloudinary.com/dineyc77u/image/upload/v1789481963/jozy_kmhfuc.png",
        "https://res.cloudinary.com/dineyc77u/image/upload/v1789481964/dash_r6egxv.png",
      ],
      description:
        "A multi-tenant digital menu platform for JOZY Tech, giving restaurants, hotels, and cafes their own branded digital menu with a permanent QR code and subdomain. The platform runs on two dashboards: a Super Admin dashboard where JOZY Tech creates and manages every venue, owner account, and subscription plan across the whole platform, and an Owner dashboard where each venue manages its own categories, menu items, images, and branding. Data is strictly isolated per venue at the backend, with role-based JWT authentication and a fast, mobile-first public menu served independently of the dashboards.",
      techStack: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Cloudinary",
      ],
      features: [
        "Super Admin dashboard to create/manage all venues, owners, and plans platform-wide",
        "Owner dashboard scoped to a single venue's categories, menu items, and branding",
        "Permanent QR code and unique subdomain per venue",
        "Strict tenant data isolation enforced at the backend",
        "Role-based JWT authentication in secure httpOnly cookies",
        "Mobile-first public menu with category navigation and search",
      ],
      demoLink: "https://dashboard.jozytech.com",
      githubLink: "#", s
    },
    {
      title: "Applicant Management Dashboard",
      images: [
        "https://res.cloudinary.com/dineyc77u/image/upload/v1784958952/Annotation_2026-07-25_084507_rwpioq.png",
        "https://res.cloudinary.com/dineyc77u/image/upload/v1784958950/Annotation_2026-07-25_084640_wag33s.png",
      ],
      description:
        "Built as a frontend challenge for an internship application, this admin dashboard lets a hiring administrator manage internship applicants end-to-end against a real REST API. Admins can log in, browse a paginated applicant list with live search, filtering, and sorting, drill into a full applicant profile, update application status, leave internal notes, and view summary statistics with charts. The app is fully responsive and handles loading, empty, error, and expired-session states throughout, with a centralized Axios layer that automatically attaches auth tokens and redirects on session expiry.",
      techStack: [
        "JavaScript",
        "React",
        "Vite",
        "Tailwind CSS",
        "shadcn/ui",
        "React Router",
        "Axios",
        "Recharts",
      ],
      features: [
        "Token-based login/logout with auto-expiring sessions",
        "Paginated, searchable, filterable, and sortable applicant table",
        "Full applicant detail view with status updates and internal notes",
        "Dashboard with summary stats and status/track breakdown charts",
        "Collapsible sidebar with responsive mobile drawer navigation",
        "Loading, empty, error, and expired-session states throughout",
      ],
      demoLink: "https://applicant-managment-system.vercel.app",
      githubLink: "https://github.com/smile679/applicant_managment_system.git",
    },
    {
      title: "Bakery Fullstack App",
      images: [
        "https://res.cloudinary.com/dineyc77u/image/upload/v1763417061/bakerFront_xvptpc.jpg",
        "https://res.cloudinary.com/dineyc77u/image/upload/v1763417091/bakerSecond_owhgcg.jpg",
      ],
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
      images: [
        "https://res.cloudinary.com/dineyc77u/image/upload/v1782205362/gef_01_pjen9p.jpg",
        "https://res.cloudinary.com/dineyc77u/image/upload/v1784960133/gef_02_mar87b.png",
      ],
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
      images: [
        "https://res.cloudinary.com/dineyc77u/image/upload/v1784960448/Annotation_2026-07-25_091943_xfkzqj.png",
        "https://res.cloudinary.com/dineyc77u/image/upload/v1784960459/bokra_03_b4kzbs.png",
      ],
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
      images: [
        "https://res.cloudinary.com/dineyc77u/image/upload/v1763846372/foodiehome2_hlitdu.webp",
        // "https://res.cloudinary.com/dineyc77u/image/upload/v1784960672/foodie2_nbypda.webp",
        "https://res.cloudinary.com/dineyc77u/image/upload/v1785576265/Annotation_2026-08-01_122059_uu2tt9.png"
      ],
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
      title: "Mobile Shop Management App",
      images: [
        "https://res.cloudinary.com/dineyc77u/image/upload/v1782205772/mobileShop_gzukzk.jpg",
        "https://res.cloudinary.com/dineyc77u/image/upload/v1784960793/mobileShop3_mldiom.jpg",
      ],
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
    {
      title: "Movie Scope App",
      images: [
        "https://res.cloudinary.com/dineyc77u/image/upload/v1784960990/movieScope2_jforpp.jpg",
        "https://res.cloudinary.com/dineyc77u/image/upload/v1763846926/movieScope_vhccly.webp",
      ],
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
      title: "CBE Receipt Verifier",
      images: [
        "https://res.cloudinary.com/dineyc77u/image/upload/v1782337296/cbe_verifier_irsc9i.png",
        "https://res.cloudinary.com/dineyc77u/image/upload/v1782337296/cbe_verifier_irsc9i.png",
      ],
      description:
        "A lightweight web tool that automates Commercial Bank of Ethiopia (CBE) receipt verification. Instead of manually constructing verification URLs, users simply enter an FT number and the last 8 digits of an account number — the tool instantly builds and opens the correct CBE verification link. Designed for anyone in Ethiopia who regularly verifies CBE transaction receipts, with a clean minimal UI and keyboard-first UX built for speed.",
      techStack: ["JavaScript", "React", "Tailwind CSS", "Vite"],
      features: [
        "Instant CBE verification URL construction",
        "Live URL preview with color-coded segments",
        "One-click receipt verification in new tab",
        "Copy URL to clipboard with visual confirmation",
        "Keyboard navigation (Enter to jump fields and verify)",
        "Input validation before enabling verify button",
        "Responsive and mobile-friendly layout",
        "Clean green UI matching CBE brand identity",
      ],
      demoLink: "https://cbe-verifier-1.vercel.app/",
      githubLink: "https://github.com/smile679/cbe_verifier-1",
    },
  ];

  return (
    <section id="projectId" className="max-w-6xl mx-auto min-h-screen flex flex-col py-10 px-5">
      <Header />
      <h1 className="text-4xl text-white text-center font-bold text-shadow-gray-800 my-10">my Projects</h1>
      {projectsData && projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
};

export default Projects;