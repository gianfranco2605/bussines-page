import { motion } from 'framer-motion';

import { styles } from '../styles'
// import { ComputersCanvas } from './canvas';
import { computer } from '../assets';

const Hero = () => {
  return (
    <section className=' w-full  height-screen mx-auto'>
       <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#D8FF00]' />
            <div className='w-1 sm:h80 h-40 florence-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text.white`}>Ciao, Sono <span className='text-[#D8FF00]'>Navas</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>We code digital craft per humans</p>
          <p>by ElPuas Digital Craft</p>
        </div>        
       </div>

        <img src={computer} className="absolute top-[520px] left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

    

      

       {/* <ComputersCanvas /> */}

       <div className='absolute hidden xs:bottom-10 bottom-32 w-full justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2' >
            <motion.dev
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
             />
          </div>
        </a>

       </div>
    </section>
     
  )
}

export default Hero