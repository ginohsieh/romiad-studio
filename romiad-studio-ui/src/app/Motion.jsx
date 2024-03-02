'use client';
import { useConst } from '@chakra-ui/react';
import config from '@/config/pages/motion.json'
import CarouselSection from '@/components/CarouselSection/CarouselSection';

export default function Motion() {
  const { title, subtitle } = config
  const items = useConst(() => [
    {
      bg: "./imgs/test.jpg",
      title: "城市行銷",
      onClick: () => {
        console.log('open')
        modalDisclosure.onOpen()
      },
    },
    { bg: "./imgs/test-2.jpg", title: "商業廣告" },
    { bg: "./imgs/test-3.jpeg", title: "品牌形象" },
    { bg: "./imgs/test.jpg", title: "募資影像" },
    { bg: "./imgs/test.jpg", title: "活動紀錄" },
    { bg: "./imgs/test.jpg", title: "訪談紀錄" },
  ])
  return (
    <CarouselSection title={title} subtitle={subtitle} items={items} />
  )
}
