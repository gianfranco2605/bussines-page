import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constans";
import { fadeIn, } from "../utils/motion";

const ProjectsCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
      options={{
        max:45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[150px]">
          <img
             src={image}
             alt={name}
             className="rounded-2xl object-cover h-fit w-fit" 
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">

          </div>
   
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text[14px] ${tag.color}`}>#{tag.name}</p>
          ))}

        </div>

      </Tilt>
      
    </motion.div>
  )

}

const Works = () => {
  return (
    <>
      <motion.div>
        <p  className={styles.sectionSubText} >Works </p>
        <h2 className={styles.sectionHeadText}>Progetti</h2>
      </motion.div>

      <div>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[-17px] max-w-3xl leading-[-30px]" >Di seguito, presentiamo alcuni dei progetti che abbiamo sviluppato nel mondo reale. Questi progetti riflettono la nostra abilità nel risolvere problemi complessi, lavorando con diverse tecnologie, e dimostrano come siamo in grado di gestire efficacemente i progetti.

        </motion.p>
        
      </div>
      
      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectsCard key={`project-${index}`} index={index} {...project} />
        ))}
       
      </div>
      
    </>
  )
}

export default SectionWrapper(Works, "lavori")