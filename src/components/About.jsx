import aboutImg from "../assets/about.jpg";
import { ABOUT_ME_PART1, ABOUT_ME_PART2, ABOUT_ME_PART1_ES, ABOUT_ME_PART2_ES } from "../constants";
import { delay, motion } from "framer-motion";

const About = ({ language }) => {
    return <div className="border-b border-neutral-800 pb-4">
        <h2 className="my-20 text-center text-4xl">
            {language === "es" ? "About " : "Acerca de "} 
            <span className="text-neutral-500"> {language === "es" ? "me" : "mi"} </span>
        </h2>
        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt=""/>
                </div>
            </motion.div>
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/2">
                    <p className="my-2 max-w-xl py-6">{ language === "es" ? ABOUT_ME_PART1: ABOUT_ME_PART1_ES}</p>
                    <p className="py-4 my-2 max-w-xl">{ language === "es" ? ABOUT_ME_PART2: ABOUT_ME_PART2_ES}</p>
            </motion.div>
        </div>
    </div>
}

export default About