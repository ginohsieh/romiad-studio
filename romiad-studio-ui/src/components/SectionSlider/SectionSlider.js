'use client';

import ReactFullpage from "@fullpage/react-fullpage";

export default function SectionSlider({ children, ...restProps }) {
  return (
    (<ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>)
  )
}

