import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const genericAnimation = (className) => {
  gsap.fromTo(
    className,
    {
      opacity: 0,
      y: `5rem`,
    },
    {
      duration: 1,
      opacity: 1,
      stagger: 0.5,
      y: 0,
      scrollTrigger: {
        trigger: className,
        // start: `top 50%`,
      },
    }
  )
}

export const HERO_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    genericAnimation(`.hero`)
  }, contextRef)
}
export const SECTION_TWO_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    genericAnimation(`.sectionTwo`)
  }, contextRef)
}

export const SECTION_THREE_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    genericAnimation(`.sectionThree`)
  }, contextRef)
}
export const SECTION_FOUR_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    genericAnimation(`.sectionFour`)
  }, contextRef)
}
export const GALLERY_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    genericAnimation(`.galleryIndex`)
  }, contextRef)
}
export const FACILITY_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    genericAnimation(`.facility`)
  }, contextRef)
}
export const SCALE_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    gsap.fromTo(
      `.scale`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.5,
        opacity: 1,
        stagger: 0.2,
        scale: 1,
        scrollTrigger: {
          trigger: `.scale`,
          // start: `top 50%`,
        },
      }
    )
  }, contextRef)
}
export const TEAM_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    gsap.fromTo(
      `.team`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.5,
        opacity: 1,
        stagger: 0.2,
        scale: 1,
        scrollTrigger: {
          trigger: `.team`,
          // start: `top 50%`,
        },
      }
    )
  }, contextRef)
}

export const GALLERY_TEXT_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    gsap.fromTo(
      `.slideText`,
      { opacity: 0, x: `-10rem` },
      {
        duration: 1,
        x: window.innerWidth <= 767 ? 0 : `-8rem`,
        opacity: 1,
        scrollTrigger: {
          trigger: `.slideText`,
          start: `top center`,
        },
      }
    )
  }, contextRef)
}

// ======================================================================================

export const TAKE_A_COURSE_ANIMATION = (contextRef) => {
  const scrollTrigger = {
    // markers: true,
    trigger: `.img`,
    start: `top 80%`,
    // toggleActions: `play pause none none`,
  }

  return gsap.context(() => {
    gsap.fromTo(
      `.angle`,
      { opacity: 0, x: `5rem`, y: `-5rem` },
      { scrollTrigger, duration: 0.5, opacity: 1, x: 0, y: 0 }
    )
    gsap.fromTo(
      `.img`,
      { scale: 0 },
      {
        scrollTrigger,
        duration: 1,
        scale: 0.9,
      }
    )
    gsap.fromTo(
      `.box`,
      { opacity: 0, x: `-5rem`, y: `5rem` },
      { scrollTrigger, duration: 0.5, opacity: 1, x: 0, y: 0 }
    )
  }, contextRef)
}

export const STEPPER_IMG_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    gsap.fromTo(
      `.img1`,
      { y: `-25rem` },
      {
        scrollTrigger: {
          trigger: `.img1`,
          start: `bottom center`,
        },
        duration: 1,
        y: 0,
      }
    )
    gsap.fromTo(
      `.img2`,
      { y: `25rem` },
      {
        scrollTrigger: {
          trigger: `.img2`,
        },
        duration: 1,
        y: 0,
      }
    )
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
export const REACT_IMG_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    gsap.to(`.react-img`, {
      duration: 5,
      rotate: `360deg`,
    })
  }, contextRef)
}
export const TESTIMONIAL_BANNER_ANIMATION = (contextRef) => {
  return gsap.context(() => {
    gsap.fromTo(
      `.testimonialBanner`,
      {
        transform:
          'perspective(1200px) translateX(0px) translateY(-59.781px) scale(0.950365) rotate(0deg) rotateX(9.92701deg) rotateY(0deg) translateZ(0px)',
      },
      {
        scrollTrigger: {
          trigger: `.testimonialBanner`,
          start: `top 90%`,
          end: `bottom 55%`,
          scrub: true,
        },
        duration: 2,
        transform: 'perspective(1200px)',
      }
    )
  }, contextRef)
}
