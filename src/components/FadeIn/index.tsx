'use client'
import { ReactNode, createContext, useContext } from 'react'
import { motion, useReducedMotion, HTMLMotionProps } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: '0px 0px -200px' }

type FadeInProps = {
  children: ReactNode
  faster?: boolean
} & HTMLMotionProps<'div'>

export function FadeIn({ children, ...rest }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()
  const isInStaggerGroup = useContext(FadeInStaggerContext)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function FadeInStagger({
  children,
  faster = false,
  ...rest
}: FadeInProps) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...rest}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  )
}
