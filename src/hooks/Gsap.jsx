import { useLayoutEffect } from 'react'

const Gsap = ({ children, animationFuncion }) => {
  useLayoutEffect(() => {
    let ctx = null
    ctx = animationFuncion()
    return () => {
      if (ctx) {
        ctx.revert()
      }
    }
  }, [animationFuncion])

  return <div>{children}</div>
}

export default Gsap
