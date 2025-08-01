import about from "../assets/about.jpeg"
import { ABOUT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className=" bg-black text-center mx-auto py-16 w-full" id="about">
        <div className="max-w-6xl mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-semibold tracking-tighter
         lg:text-4xl">About Us</h2>
         <div className="flex flex-wrap">
            <div className="w-full p-4 lg:w-1/2">
                <img src={about} className="rounded-3xl lg:-rotate-3" />
            </div>
            <div className="w-full px-2 lg:w-1/2">
                <motion.h2
                 initial={{opacity:0, y: 50}}
                 whileInView={{opacity:1, y:0}}
                 viewport={{once:true}}
                 transition={{duration:0.6, delay:0.2}}
                 className="text-4xl tracking-tighter lg:text-6xl">
                    {ABOUT.header}
                </motion.h2>
                <motion.div 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:0.6, delay:0.4}}
                className="mb-8 mt-1 h-2 w-40 bg-rose-300 lg:-rotate-3">
                </motion.div>
                <div>
                    <motion.p 
                    className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl"
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
                    transition={{duration:0.6, delay:0.6}}>
                        {ABOUT.content}
                    </motion.p>
                </div>
            </div>
         </div>
        </div>
    </section>
  )
}

export default About