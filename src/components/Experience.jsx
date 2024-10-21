import { EXPERIENCES, EXPERIENCES_ES } from "../constants";
import { motion } from "framer-motion";
const Experience = ( { language } ) => {
    const experiences = language === "es" ? EXPERIENCES : EXPERIENCES_ES;
  
    return (
    <div className="border-b border-l-neutral-900 pb-4">
        <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="mt-20 mb-10 text-center text-4xl">{language === "es" ? "Experience" : "Experiencia"}</motion.h2>
        <div>
            {experiences.map((experience, index) => (
                <div 
                    key={index} 
                    className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">
                                {experience.year}
                            </p>
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 1}}
                        className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experience.role} - <span className="text-sm text-purple-100">
                                     {experience.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-sm text-neutral-400">
                                {experience.description}
                            </p>
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className=" bg-purple-100 rounded-full px-2 py-1 text-sm text-neutral-900 mr-2">
                                    {tech}
                                </span>
                            )) }
                        </motion.div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Experience