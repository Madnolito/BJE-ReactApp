import React from 'react';
import { motion } from "framer-motion"
import './manu.css';

export const Portafolio = ({ isVisible }) => (

    <>
    
    <motion.div
        className='dragme'
        style={{width: 100, height: 100, backgroundColor: 'lightcyan', display: 'flex', flexWrap: 'wrap' , alignContent: 'center', justifyContent: 'center'}}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        whileDrag={{ scale: 1.2 }} 
        dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
        dragConstraints={{ left: -40, right: 150 }}>
            
        Arrastrame
            </motion.div>
            <br></br>

    <motion.button
        style={{width: 100, height: 100, backgroundColor: 'white'}}    
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Soy un botón
    </motion.button>
              <br></br>
    <motion.circle

     style={{width: 100, height: 100}}    
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
    />
    
    </>
    
    
  
  
)
