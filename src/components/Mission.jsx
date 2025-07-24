import missionImg from "../assets/mission.jpeg"
import mission from "../assets/mission.mp4"
import { MISSION } from "../constants"
import { motion } from "framer-motion"

const Mission = () => {
  return (
    <section id="mission">
        <div className=" bg-black text-center mx-auto py-16 w-full">
            <h2 className="mb-8 text-center text-3xl font-semibold tracking-tighter
         lg:text-4xl">Our Mission</h2>
            <div className="relative flex items-center justify-center">
                <motion.video className="w-full rounded-3xl" autoPlay muted loop
                 playsInline
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 viewport={{once:true}}
                 transition={{duration:1}}
                 poster={missionImg}>
                  <source src={mission} type="video/mp4"/>
                 </motion.video>
                 <motion.div 
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 viewport={{once:true}}
                 transition={{duration:0.5, delay:0.5}}
                 className="absolute h-full w-full rounded-3xl bg-black/40"/>
                 <motion.p className="absolute max-w-lg tracking-tighter lg:text-3xl"
                           initial={{opacity:0, y:20}}
                           whileInView={{opacity:1, y:0}}
                           viewport={{once: true}}
                           transition={{duration:1, delay:0.5}}>
                    {MISSION}
                 </motion.p>
            </div>
        </div>
    </section>
  )
}

export default Mission