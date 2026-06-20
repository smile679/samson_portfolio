import { Link } from "react-router-dom";


function ProjectOverView() {
  const projectImages = [{
    image : "https://res.cloudinary.com/dineyc77u/image/upload/v1763652914/nn3_yz6lwo.jpg",
    title : "Merkato Gebeya Full-Stack App",
    link: "https://ecommerce-app-1-q5og.onrender.com/",
  },
{
    image : "https://res.cloudinary.com/dineyc77u/image/upload/v1763417061/bakerFront_xvptpc.jpg",
    title : "Bakery Full-Stack App",
    link : "https://bakery-full-stack-webisite-front.onrender.com/",
},
{
    image : "https://res.cloudinary.com/dineyc77u/image/upload/v1763846372/foodiehome2_hlitdu.webp",
    title : "Foodie Delight",
    link : "https://foodiedelightapp.netlify.app/",
},
{
    image : "https://res.cloudinary.com/dineyc77u/image/upload/v1763846926/movieScope_vhccly.webp",
    title : "Movie Scope",
    link : "https://moviescopapp.netlify.app/",
}]

  return (
    <section className="w-full flex justify-center items-center bg-emerald-600">
      <div className="w-full max-w-6xl mx-auto flex flex-col text-center py-5">
        <h1 className="text-4xl text-gray-800 font-extrabold text-shadow-emerald-800 text-shadow-lg py-15">
          Project Highlight
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projectImages &&
            projectImages.map((pro) => (
              <a href={pro.link} target="_blank">
                <div className="relative w-full max-w-md max-h-70 rounded-2xl hover:scale-105 overflow-hidden shadow-md shadow-gray-800">
                  <img src={pro.image} className="w-full h-full object-cover" />
                  <h2 className="absolute bottom-3 left-6 text-lg">
                    {pro.title}
                  </h2>
                </div>
              </a>
            ))}
        </div>
        <Link to="/projects">
          <button className="pt-10 text-white hover:text-blue-800 font-semibold hover:underline cursor-pointer">
            See More
          </button>
        </Link>
        <svg
          class="absolute -bottom-8 left-0 w-full h-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#059669"></path>
        </svg>
      </div>
    </section>
  );
}

export default ProjectOverView;