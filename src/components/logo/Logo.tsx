import TextTransition, { presets } from "react-text-transition";

import React from 'react';

import styles from './Logo.module.scss'
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";

const TEXTS = [
    "dor-",
    "letz",
];

interface LogoProps {
    isSmall : boolean
}

function Logo({isSmall} : LogoProps) {
    const { isDark } = useAppSelector(state => state.theme);

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            5000 // every 5 seconds
        );
        return () => clearTimeout(intervalId);
    }, [isSmall]);



    return (
        <div className={isDark ? styles.theme__dark : styles.theme__light}>
            <h1 className={isSmall ? styles.logo_sm : styles.logo_xl}
                onMouseEnter={() => { setIndex(index + 1) }}
            >
                    {`${TEXTS[index % TEXTS.length]}`.split("").map((n, i) => (
                        <TextTransition
                            key={i}
                            text={n}
                            delay={i * 300}
                            springConfig={presets.gentle}
                            inline={true}
                            noOverflow={false}
                        />
                    ))}
            </h1>
        </div>


    )


}

export default Logo;