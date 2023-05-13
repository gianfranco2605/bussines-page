import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constans'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon}) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75 )} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div
            options={{
              max:45,
              scale: 1,
              speed:450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3> 

          </div>
         
        </motion.div>

      </Tilt>
      
    )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Chi Siamo</h2>
      </motion.div>
      <motion.div variants={fadeIn("", "", 0.1, 1)} className='"mt-4 text-secondary text-[17px] max-w3x leading-[30px]'>Ci occupiamo di progettazione, sviluppo e implementazione di soluzioni web su misura. Siamo in grado di creare soluzioni web funzionali ed intuitive che soddisfano le specifiche esigenze dei nostri clienti. Inoltre, ci impegniamo a garantire un'attenzione ai dettagli e una cura nella progettazione che assicurano la massima qualità dei nostri servizi. Siamo sempre a disposizione per discutere i tuoi progetti e fornirti un preventivo gratuito per i nostri servizi di sviluppo web personalizzati. Contattaci per maggiori informazioni.
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'>{services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service}/>
      ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "chi siamo")