import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const UseAnimate = ({
  delay = 0,
  duration = 1,
  visible = { opacity: 1, y: 0 },
  hidden = { opacity: 0, y: 30 },
  children,
}) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const boxVariant = {
    visible,
    hidden,
  }

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  })

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial='hidden'
      animate={control}
      transition={{
        duration: duration,
        delay: delay,
        delayChildren: 0, // this will set a delay before the children start animating
        staggerChildren: 0.3, // this will set the time inbetween children animation
      }}
    >
      {children}
    </motion.div>
  )
}

export default UseAnimate
