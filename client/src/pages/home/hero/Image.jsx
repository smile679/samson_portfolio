import RevealX from "@/components/motions/RevealX";
import Tilt from "react-parallax-tilt";
import smile2 from "@/assets/images/smile2.png"

const Image = () => {
  return (
    <div
      className="w-full flex justify-center items-start drop-shadow-[#3EB489] drop-shadow-2xl
      bg-[url('./images/code.png')] bg-cover bg-no-repeat bg-blend-overlay p-10 overflow-hidden"
    >
      <RevealX>
        <Tilt
          className="cursor-pointer"
          perspective={500}
          scale={1.05}
        >
          <img
          className="rounded-full p-5 sm:p-10 md:p-10 border-amber-50 border-2 border-b-foreground"
            src={smile2}
            alt="image"
          />
        </Tilt>
      </RevealX>
    </div>
  );
};

export default Image;
