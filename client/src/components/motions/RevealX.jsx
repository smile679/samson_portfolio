import { useAnimation, useInView, motion, scale } from "framer-motion";
import { useEffect, useRef } from "react"


 const RevealX = ({ children }) => {
   const ref = useRef(null);
   const inView = useInView(ref, { once: "true", amount: 0.2 })
   const controls = useAnimation();
   const variants = {
    hidden: {opacity: 0, x: -200,},
    visible: {opacity: 1, x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
   }

   useEffect(()=>{
     if(inView){
      controls.start(controls.start("visible"));
     }
   }, [inView, controls])
  return(
    <motion.div
     ref={ref}
     initial= "hidden"
     variants= { variants }
     animate= { controls }
    // className="overflow-x-hidden"
    >
     { children }
    </motion.div>
  )

}

export default RevealX;