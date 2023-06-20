import { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';



const Contact = () => {
  const formRef = useRef();
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [ loading, setLoading ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    // Validate form fields
    if (form.name.trim() === '' || form.email.trim() === '' || form.message.trim() === '') {
      setLoading(false);
      alert('Per favore compila tutti i campi.');
      return;
    }
  
    emailjs
      .send(
        'service_t1a3afn',
        'template_9uoqfqc',
        {
          form_name: form.name,
          to_name: 'Navas',
          from_email: form.email,
          to_email: 'websites@digitalnavas.it',
          message: form.message
        },
        'zEVmLpVrE9INN_MLy'
      )
      .then(() => {
        setLoading(false);
        alert('Grazie, sarai ricontattato il prima possibile');
  
        setForm({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        setLoading(false);
        alert('Qualcosa è andato storto');
        console.log(error);
      });
  };
  

  return (
    <div className='xl:mt-12 xl:mx-20  xl:flex-row flex-col-reverse  overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <h3 className={styles.sectionHeadText}>Contatto</h3>
        <h3 className={`${styles.sectionHeadText} font-thin`}>
        <a href="tel:3382835594">338-283-55-94</a>
        </h3>
        <p className={styles.sectionSubText}>RICHIEDI UN PREVENTIVO</p>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-6 '
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Nome</span>
            <input
            type="text"
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder=''
            className='bg-tertiary py-2 px-3 placeholder:text-secondary text-white rounded-lg outline-none border-none'
             />

          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
            type="email"
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder=''
            className='bg-tertiary py-2 px-3 placeholder:text-secondary text-white rounded-lg outline-none border-none'
             />

          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Mesaggio</span>
            <textarea
            rows="2"
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder=''
            className='bg-tertiary py-2 px-3 placeholder:text-secondary text-whitr rounded-lg outline-none border-none'
             />

          </label>

          <button type="submit" className='bg-tertiary py-3 px-8 outline-none w-fit florence font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Inviando' : 'Invia'}

          </button>

        </form>

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, 'contatto')