import { useAnimation, useInView, motion, scale } from "framer-motion";
import { useEffect, useRef } from "react"


 const Reveal= ({ children }) =>{
   const ref =useRef(null);
   const inView = useInView(ref, { once: "true", amount: 0.2 })
   const controls = useAnimation();
   const variants = {
    hidden: {opacity: 0, y: 70, scale: 0.8},
    visible: {opacity: 1, y: 0, scale: 1,
      transition: {
        duration: 0.5,
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
    >
     { children }
    </motion.div>
  )

}

export default Reveal;