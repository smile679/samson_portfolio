import Reveal from "../../motions/Reveal";
import RevealX from "../../motions/RevealX";


const Services = ()=>{

  return <section className="services" name='Service'>
    <Reveal>
    <div className="div-ser">
      <svg data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"></path>
      </svg>
      <h1>SERVICE</h1>
    </div>
    </Reveal>
    <div className="service-list">
      <RevealX>
      <div>
         <h3>FRONTEND DEVELOPMENT</h3>
        <ul>
          <li className="list-none">💻 What I can help you with:</li>
          <li>Building UIs with Tailwind CSS and React</li>
          <li>Debugging layout issues and improving existing code</li>
          <li>Creating responsive websites using HTML, CSS, and JavaScript</li>
          <li>Converting designs from Figma into pixel-perfect web pages</li>
        </ul>
      </div>
      </RevealX>
      <Reveal>
        <div>
          <h3>BACKEND DEVELOPMENT</h3>
          <ul>
            <li className="list-none">💻 What I can help you with:</li>
            <li>Building RESTful APIs using Node.js and Express</li>
            <li>Implementing authentication & authorization (JWT, bcrypt, roles, permissions)</li>
            <li>Creating secure and scalable backend architectures</li>
            <li>Handling server-side logic, validation, and error management</li>
            <li>Designing and managing databases with MongoDB</li>
        </ul>
        </div>
      </Reveal>
    </div>
    <div className="service-list">
      <Reveal>
      <div>
        <h3>GRAPHICS DESIGN</h3>
        <ul>
          <li className="list-none">🖌 What I can help you with:</li>
          <li>Creating clean, professional UI mockups in Figma</li>
          <li>Designing logos, banners, and social media graphics</li>
          <li>Editing and retouching images using Photoshop</li>
        </ul>
      </div>
      </Reveal>
      <RevealX>
      <div>
        <h3><span>Bonus:-</span> SOCIAL MEDIA MARKETING</h3>
        <ul>
          <li className="list-none">🚀 What I can help you with</li>
          <li>Social Media management</li>
          <li>Facebook Ads (Meta Ads Manager)</li>
          <li>Designing branded posts using Canva or Photoshop</li>
        </ul>
      </div>
      </RevealX>
    </div>
    
  </section>
}

export default Services;