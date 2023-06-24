import { useLayoutEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const IntersectionObserver = ({ children, animationFuncion }) => {
  const [ref, inView] = useInView()
  useLayoutEffect(() => {
    let ctx = null
    if (inView) {
      ctx = animationFuncion()
    }
    return () => {
      if (ctx) {
        ctx.revert()
      }
    }
  }, [animationFuncion, inView])

  return <div ref={ref}>{children}</div>
}

export default IntersectionObserver
