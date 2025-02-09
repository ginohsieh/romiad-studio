import { useMemo } from 'react'

export default function useAboutImages() {
  const images = useMemo(() => [
    { src: "./imgs/aboutus/1.jpg" },
    { src: "./imgs/aboutus/2.jpg" },
    { src: "./imgs/aboutus/3.jpg" },
    { src: "./imgs/aboutus/4.jpg" },
    { src: "./imgs/aboutus/5.jpg" },
    { src: "./imgs/aboutus/6.jpg" },
    { src: "./imgs/aboutus/7.jpg" },
    { src: "./imgs/aboutus/8.jpg" },
    { src: "./imgs/aboutus/9.jpg" },
    { src: "./imgs/aboutus/10.jpg" },
  ], [])
  return images
}
