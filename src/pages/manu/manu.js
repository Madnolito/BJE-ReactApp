import React from 'react';
import './manu.css';
import { motion } from "framer-motion";

var ihunt = "[Nov 2022 - Jun 2023] [8 meses]";

export const Manu = () => {
  return (
      <>
        <div className="manu-container">

        <div className='info-container'>
        
        <motion.div
          className='title-animate'
          whileHover={{ scale: 1.1 }}       
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}>
            
          <h1 className='manu-title'>Portafolio de Emanuel</h1>
        </motion.div>

        <motion.div
          className='title-animate'
          whileHover={{ scale: 1.1 }}       
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}>
          <h2 className='manu-subtitle'>Desarrollador</h2>  
        </motion.div>

        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        >
        <h1 className='about-me'> Sobre mi</h1>
        </motion.div>  
        <motion.div

        whileHover={{ scale: 1.2 }}
        initial={{ opacity: 1, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        >
        <p className='description'>Ingeniero Informático con experiencia en el desarrollo de back-end, front-end de aplicaciones web y móvil. 
        Me considero una persona enérgica, activa y con vocación, para brindar lo mejor de mí en cada proyecto que se me presente.
        Tengo una gran capacidad para trabajar en equipo, con alta adaptación a cambios y a nuevos desafíos, tanto profesionales como personales.
        </p> 
        </motion.div>

        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        >
        <h1 className='experience'>Experiencia</h1>
        <h1 className='business-name'>iHunt</h1>
        <p className="job-time">{ihunt}</p>
        </motion.div>
        
        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        whileHover={{ scale: 1.1 }}
        >
        <div className="card-container">
        <div className='job-card'>
        <h3 className='job-duty'>Tareas realizadas</h3>
        <p className='job-description'>Desarrollo del front-end del sitio web, Diseño de procesos para las interacciones de usuarios en el sitio web,
          Desarrollo de aplicaciones back-end para la página web, Creación y configuración de servidores y bases de datos,
          Garantizar la optimización multi-plataforma del sitio web para teléfonos móviles, Escritura de documentación,
          Responder a las necesidades técnicas de la organización y nuestros clientes, Diseño e implementación de planes de prueba.
        </p>
        </div>
        <div className='job-card'>
        <h3 className='job-duty'>Tecnologías utilizadas</h3>
        <p className='job-tecno'>Docker, Python, Django, Materialize CSS, Git, Microsoft Visual Studio Code,
         Hojas de estilos en cascada (CSS), HTML, JavaScript.
        </p>
        </div>
      </div>
      </motion.div>
        </div>
        </div>

      </>
  );

};


