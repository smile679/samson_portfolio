import Info from './Info';
import Image from './Image'

const Hero =()=>{

  return (
    <section
      className="w-full max-w-6xl mx-auto flex justify-between items-center flex-col-reverse md:flex-row max-md:my-20 md:my-15 md:pb-5"
      name="Hero"
    >
      <Info />
      <Image />
    </section>
  );
}

export default Hero;