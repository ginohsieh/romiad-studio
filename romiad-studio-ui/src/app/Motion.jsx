'use client';
import { useConst } from '@chakra-ui/react';
import config from '@/config/pages/motion.json'
import CarouselSection from '@/components/CarouselSection/CarouselSection';

export default function Motion() {
  const { title, subtitle } = config
  const items = useConst(() => [
    {
      bg: "./videos/city_marketing.mp4",
      title: "城市行銷",
      onClick: () => {
        console.log('open')
        modalDisclosure.onOpen()
      },
    },
    { bg: "./videos/commercial.mp4", title: "商業廣告" },
    { bg: "./videos/corporate.mp4", title: "品牌形象" },
    { bg: "./videos/crowd_funding.mp4", title: "募資影像" },
    { bg: "./videos/event.mp4", title: "活動紀錄" },
    { bg: "./videos/interview.mp4", title: "訪談紀錄" },
  ])
  return (
    <CarouselSection title={title} subtitle={subtitle} items={items} />
  )
}
