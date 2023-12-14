'use client'
import { SwiperOptions } from 'swiper/types'
import { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  Autoplay,
  Pagination,
  Navigation,
  Parallax,
  FreeMode,
  A11y,
} from 'swiper/modules'

import './swipper.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/free-mode'
import 'swiper/css/a11y'
import { cn } from '@/lib/utils'

interface SwiperProps extends SwiperOptions {
  children: ReactNode[]
  className?: string
  smooth?: boolean
  sliderClass?: string
}

export function Slider({
  children,
  className,
  smooth,
  slideClass,
  ...rest
}: SwiperProps) {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, Parallax, FreeMode, A11y]}
        className={cn(className)}
        wrapperClass={cn('py-4', smooth ? '!ease-linear ' : '')}
        {...rest}
      >
        {children.map((child, index) => (
          <SwiperSlide className={cn(slideClass)} key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
