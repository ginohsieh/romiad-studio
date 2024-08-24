'use client'

import { useState } from 'react';
import MultiCarousel from 'react-multi-carousel';

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

const em = 16;

const responsive = {
  '2xl': {
    breakpoint: { min: em * 96, max: 65536 },
    items: 3,
  },
  xl: {
    breakpoint: { max: em * 96, min: em * 80 },
    items: 3,
  },
  lg: {
    breakpoint: { max: em * 80, min: em * 62 },
    items: 2,
  },
  md: {
    breakpoint: { max: em * 62, min: em * 48 },
    items: 1
  },
  sm: {
    breakpoint: { max: em * 48, min: em * 30 },
    items: 1
  },
  base: {
    breakpoint: { max: em * 30, min: 0 },
    items: 1
  },
};

export default function Carousel({ children, ...restProps }) {
  return (
    <MultiCarousel
      swipeable
      draggable
      showDots={false}
      arrows={false}
      infinite
      responsive={responsive}
      {...restProps}
    >
      {children}
    </MultiCarousel>
  )
}

