import React from "react"
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion"


const SmoothScroll = ({ children } : any) => {
  // scroll container

  const { scrollY } = useViewportScroll() // measures how many pixels user has scrolled vertically
  const transform = useTransform(scrollY, [0, 20], [0, -180])
  const physics = { damping: 15, mass: 0.27 } // easing of smooth scroll
  const spring = useSpring(transform, physics) // apply easing to the negative scroll value

  return (
    <>
      <motion.div
        style={{y : spring}}
      >
        {children}
      </motion.div>
      <div  />
    </>
  )
}

export default SmoothScroll
