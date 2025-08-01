import { REVIEW } from "../constants"
import xaviour from "../assets/xaviour.jpeg"
import customer1 from "../assets/customer1.jpeg"
import customer2 from "../assets/customer2.jpeg"
import customer3 from "../assets/customer3.jpeg"
import customer4 from "../assets/customer4.jpeg"
import { motion } from "framer-motion"

const containerVarients ={
  hidden: {opacity :0},
  show: {
    opacity:1,
    Transition:{
      staggerChildren: 0.8,
    }
  }
}

const itemVariants = {
  hidden : {opacity:0, y:20},
  show: {opacity:1, y:0, Transition:{duration: 0.5}}
}

const Review = () => {
  return (
    <section id="review" className=" bg-black text-center mx-auto py-8 w-full">
        <motion.div 
        initial="hidden"
        whileInView="show"
        variants={containerVarients}
        viewport={{once:true}}
        className="flex flex-col">
        <motion.p 
        variants={itemVariants}
        className="mb-10 mx-auto text-center text-3xl font-light leading-normal tracking-tighter
         lg:text-[3.5rem] lg:mt-40">{REVIEW.content}
         </motion.p>
         <motion.div 
         initial="hidden"
         whileInView="show"
         variants={itemVariants}
         viewport={{once:true}}
         className="flex items-center justify-center gap-6">
            <img src={xaviour}
             width={80}
             height={80}
            alt={REVIEW.name}
            className="rounded-full border" />
            <div className="tracking-tighter">
                <h6>{REVIEW.name}</h6>
                <p className="text-sm text-neutral-500">
                    {REVIEW.profession}
                </p>
            </div>
         </motion.div>
     </motion.div>
     <div className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
        {[customer1, customer2, customer3, customer4].map((customer, index)=>(
            <motion.img 
                 variants={itemVariants}
                 key={index} 
                 src={customer} 
                 alt="customer"
                 className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover" />
        ))}
     </div>
    </section>
  )
}

export default Review