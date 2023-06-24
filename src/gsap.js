import { gsap } from 'gsap'

export const TAKE_A_COURSE_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    gsap.fromTo(
      `.angle`,
      { opacity: 0, x: `5rem`, y: `-5rem` },
      { duration: 0.5, opacity: 1, x: 0, y: 0 }
    )
    gsap.fromTo(`.img`, { scale: 0 }, { duration: 1, scale: 0.9 })
    gsap.fromTo(
      `.box`,
      { opacity: 0, x: `-5rem`, y: `5rem` },
      { duration: 0.5, opacity: 1, x: 0, y: 0 }
    )
  }, contextRef)
}

export const STEPPER_IMG_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    gsap.fromTo(`.img1`, { y: `-25rem` }, { duration: 1, y: 0 })
    gsap.fromTo(`.img2`, { y: `25rem` }, { duration: 1, y: 0 })
  }, contextRef)
}

export const COURSE_BANNER_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    gsap.fromTo(
      `.courseBanner`,
      { y: `10rem` },
      { duration: 1, opacity: 1, y: 0 }
    )
  }, contextRef)
}
