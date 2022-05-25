import TextTransition, { presets } from "react-text-transition";
import { useIsPresent } from 'framer-motion'
import React, {useState, useEffect} from 'react';

import styles from './Logo.module.scss'
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";

const TEXTS = [
    "letz",
    "dor-",
];

interface LogoProps {
    isSmall : boolean
}

function Logo({isSmall} : LogoProps) {
    const { isDark } = useAppSelector(state => state.theme);

    const [index, setIndex] = useState(0);

    const [isInitial, setIsInitial] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() =>
            {setIndex(index => ( index + 1 % TEXTS.length)); setIsInitial(false)},
            10000 // every 10 seconds

        );
         
        return () => clearTimeout(intervalId);
    }, [index]);


    return (
        
        <div className={isDark ? styles.theme__dark : styles.theme__light}>
            <h1 className={isSmall ? styles.logo_sm : styles.logo_xl}
                onMouseEnter={() => { setIndex(index + 1); setIsInitial(false) }}
            >
                { `${TEXTS[index % TEXTS.length]}`.split("").map((n, i) => (
                        <TextTransition
                            key={i}
                            text={n}
                            delay={isInitial ? 0 : i * 300}
                            springConfig={presets.gentle}
                            inline={true}
                            noOverflow={false}
                        />
                    )) 
                }
            </h1>
        </div>


    )


}

export default Logo;