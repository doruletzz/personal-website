import React, { useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

import './Illustration.scss';

import I1 from '../../assets/Illustration1.svg?component';
import I2 from '../../assets/Illustration2.svg?component';
import I3 from '../../assets/Illustration3.svg?component';
import I4 from '../../assets/Illustration4.svg?component';

import {Container} from 'react-bootstrap';


const Animation = () => {

    const SLOW = 44;

    const AVG = 33;

    const FAST = 22;

    return (
        <Container className="container_illustration">

         <div className='illustration-outer'>
           <motion.div
                layout
                className=' i4 illustration-inner'
                animate={{ 
                    y: SLOW
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
               
            >
                <I4/>
            </motion.div>

            <motion.div
                className=' i3 illustration-inner'
                animate={{ 
                    y: SLOW 
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
                
            >
                <I3 />
            </motion.div>
            
            <motion.div
                className=' i2 illustration-inner'
                animate={{ 
                    y: AVG 
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
                
            >
                <I2 />
            </motion.div>

            <motion.div 
                className='illustration-inner i1'
                animate={{ 
                    y: FAST
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
               
            >
                <I1 />
            </motion.div>
        </div>
            
        </Container>
    )
}

export default Animation;