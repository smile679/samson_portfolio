import RevealX from "@/components/motions/RevealX";
import Tilt from "react-parallax-tilt";

const Image=()=>{
  return (
    <div className="image">
      <RevealX>
        <Tilt
        className="cursor-pointer"
          perspective={500}
          // glareEnable={true}
          // glareMaxOpacity={0.45}
          scale={1.05}
        >
          <img
            src={
              "https://res.cloudinary.com/dineyc77u/image/upload/v1763844322/smile_phcyvp.webp"
            }
            alt="image"
          />
        </Tilt>
      </RevealX>
    </div>
  );
}

export default Image;