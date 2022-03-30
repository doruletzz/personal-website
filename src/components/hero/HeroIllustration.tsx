import React from 'react'

import Illustration from '../../assets/hero-illustration.svg?component';


const HeroIllustration = ({width}) => {
    console.log(Illustration)

  return (
    <div>
        <Illustration >
            <use xlinkHref="#figma" fill='red'>Hello</use> 
        </Illustration>
    </div>
  )
}

export default HeroIllustration