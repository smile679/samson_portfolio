import html33 from "@/assets/images/html33.png";
import react from "@/assets/images/react.png";
import tailwindcss from "@/assets/images/tailwindcss.png";
import Ps from "@/assets/images/Ps.png";
import Ai from "@/assets/images/Ai.png";
import Pr from "@/assets/images/Pr.png";
import Reveal from '@/components/motions/Reveal';
import RevealX from "@/components/motions/RevealX";
import ProjectOverView from "@/components/projectOverView";
import CountUp from "@/components/motions/CountUp";

const Skills = ()=>{

  return (
    <section className='skills' name="Skills">
      <svg class="absolute -top-8 left-0 w-full h-10 rotate-180" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L110,0C35,150 35,0 0,100z" fill="#059669"></path>
      </svg>
      <Reveal>   
      <div className='skills-header'>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
        </svg>
      <h1>Skills</h1>
      </div>
      </Reveal>
      <div className="skills-grid">
        <div className="ul-grid">
      <Reveal>
        <div className='py-2 p-5 rounded-lg overflow-x-hidden'>
          <h2>Tech Skills:</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className='flex flex-col shadow-inner shadow-dark-100 py-4 px-5 rounded-md gap-3'>
              <p className='text-xl text-white font-bold text-shadow-emerald-800 text-shadow-lg'>- Html, CSS</p>
              <div className='w-full max-w-75 h-2 rounded-md shadow-inner shadow-dark-100'>
                <div className='w-12/13 h-full bg-white rounded-md'/>
              </div>
            </div>
            <div className='flex flex-col shadow-inner shadow-dark-100 py-4 px-5 rounded-md gap-3'>
              <p className='text-xl text-white font-bold text-shadow-emerald-800 text-shadow-md'>- Javascript</p>
              <div className='w-full max-w-75 h-2 shadow-inner shadow-dark-100 rounded-md'>
                <div className='w-5/6 h-full bg-white rounded-md'/>
              </div>
            </div>
            <div className='flex flex-col shadow-inner shadow-dark-100 py-4 px-5 rounded-md gap-3'>
              <p className='text-xl text-white font-bold text-shadow-emerald-800 text-shadow-lg'>- NodeJs, Express</p>
              <div className='w-full max-w-75 h-2 shadow-inner shadow-dark-100 rounded-md'>
                <div className='w-5/6 h-full bg-white rounded-md'/>
              </div>
            </div>
            <div className='flex flex-col shadow-inner shadow-dark-100 py-4 px-5 rounded-md gap-3'>
              <p className='text-xl text-white font-bold text-shadow-emerald-800 text-shadow-lg'>- MongoDb</p>
              <div className='w-full max-w-75 h-2 shadow-inner shadow-dark-100 rounded-md'>
                <div className='w-7/8 h-full bg-white rounded-md'/>
              </div>
            </div>
          </div>
          <div className='flex justify-evenly md:justify-center lg:justify-evenly py-5 max-xs:-ml-2'>
            <img src={ html33 } alt="html icon" className="w-30 xs:w-60 md:w-40 lg:w-60 drop-shadow-green-800 drop-shadow-sm object-cover"/>
            <img src={ react } alt="react icon" className="w-10 xs:w-20 md:w-15 lg:w-20 drop-shadow-sky-500 drop-shadow-sm object-cover"/>
            <img src={ tailwindcss } alt="react icon" className="w-10 xs:w-20 md:w-15 lg:w-20 object-cover"/>
          </div>
        </div>
          </Reveal>
          <Reveal>
          <div className='py-5 px-5 rounded-lg box-border overflow-x-hidden'>
            <h2>Design Skills:</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <div className='flex flex-col shadow-inner shadow-dark-100 py-4 px-5 rounded-md gap-3'>
                <p className='text-xl text-white font-bold text-shadow-emerald-800 text-shadow-lg'>- Adobe Photoshop</p>
                <div className='w-full max-w-75 h-2 rounded-md shadow-inner shadow-dark-100'>
                  <div className='w-12/13 h-full bg-white rounded-md'/>
                </div>
              </div>
              <div className='flex flex-col shadow-inner shadow-dark-100 py-4 px-5 rounded-md gap-3'>
                <p className='text-xl text-white font-bold text-shadow-emerald-800 text-shadow-md'>- Adobe illustrator</p>
                <div className='w-full max-w-75 h-2 shadow-inner shadow-dark-100 rounded-md'>
                  <div className='w-5/6 h-full bg-white rounded-md'/>
                </div>
              </div>
              <div className='flex flex-col shadow-inner shadow-dark-100 py-4 px-5 rounded-md gap-3'>
                <p className='text-xl text-white font-bold text-shadow-emerald-800 text-shadow-lg'>- Adobe Primere</p>
                <div className='w-full max-w-75 h-2 shadow-inner shadow-dark-100 rounded-md'>
                  <div className='w-5/6 h-full bg-white rounded-md'/>
                </div>
              </div>
              <div className='flex flex-col shadow-inner shadow-dark-100 py-4 px-5 rounded-md gap-3'>
                <p className='text-xl text-white font-bold text-shadow-emerald-800 text-shadow-lg'>- Figma</p>
                <div className='w-full max-w-75 h-2 shadow-inner shadow-dark-100 rounded-md'>
                  <div className='w-7/8 h-full bg-white rounded-md'/>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-3 py-5 md:gap-x-2 max-xs:-ml-2'>
              <img src={ Ps } alt="Pr icon" className=" drop-shadow-cyan-500 drop-shadow-lg"/>
              <img src={ Ai } alt="Ai icon" className=" drop-shadow-amber-500 drop-shadow-lg"/>
              <img src={ Pr } alt="pr icon" className=" drop-shadow-fuchsia-500 drop-shadow-lg"/>
            </div>
          </div>
          </Reveal>
        </div>
        <div className='comp-img w-full flex flex-col justify-evenly max-md:my-10 '>
          <RevealX>
            <img src={"https://res.cloudinary.com/dineyc77u/image/upload/v1763842496/manInFront_j6vgzl.png"} alt="computer" className='hidden md:flex'/>
          </RevealX>
          <RevealX>
            <img src={"https://res.cloudinary.com/dineyc77u/image/upload/v1763842518/manWithComp_kpghvy.png"} alt="computer"/>
          </RevealX>
        </div>
      </div>
      <div className='w-full flex justify-evenly items-center py-5 mt-10 text-center gap-2 bg-blue-800 rounded-2xl shadow-lg shadow-blue-800/50'>
        <div className='flex flex-col items-center'>
          <div className='flex items-center'>
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-gray-900 text-2xl sm:text-4xl md:text-5xl font-bold text-shadow-gray-800 text-shadow-md"
            />
            <h3 className='text-3xl ml-2 font-extrabold'>%</h3>
          </div>
          <h3 className='text-sm sm:text-xl'>Projects Completed</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center'>
            <CountUp
              from={0}
              to={10}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-gray-900 text-2xl sm:text-4xl md:text-5xl font-bold text-shadow-gray-800 text-shadow-md"
            />
            <h3 className='text-3xl ml-2 font-extrabold'>+</h3>
          </div>
          <h3 className='text-sm sm:text-xl'>Website Made</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center'>
            <CountUp
              from={0}
              to={2}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-gray-900 text-2xl sm:text-4xl md:text-5xl font-bold text-shadow-gray-800 text-shadow-md"
            />
            <h3 className='text-3xl ml-2 font-extrabold'>+</h3>
          </div>
          <h3 className='text-sm sm:text-xl'>Years of Experiance</h3>
        </div>
      </div>
      <ProjectOverView />
    </section>
  )
}


export default Skills;