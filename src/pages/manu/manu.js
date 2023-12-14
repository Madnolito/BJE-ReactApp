import React from 'react';
import './manu.css';
import { Portafolio } from './portafolio';
import { motion } from "framer-motion"
const Manu = () => {

  return (
      <>
        <div className="manu-container">
        <motion.div
        whileHover={{ scale: 1.2 }}       
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
      <h1 style={{ color: 'white' }}>Hola! Soy Emanuel,<br></br> este es mi portafolio</h1>
      </motion.div>  
      
        <Portafolio />

        </div>

      </>
  );

};

export default Manu;
