'use client';
import { Box, useConst } from '@chakra-ui/react';
import config from '@/config/pages/motion.json'
import CarouselSection from '@/components/CarouselSection/CarouselSection';

export default function Motion() {
  const { title, subtitle } = config

  const items = useConst(() => [
    {
      bg: "./videos/city_marketing.mp4",
      title: "城市行銷",
      onClick: () => {
      },
    },
    {
      bg: "./videos/commercial.mp4",
      title: "商業廣告",
      onClick: () => {
      },
    },
    {
      bg: "./videos/corporate.mp4",
      title: "品牌形象",
      onClick: () => {
      },
    },
    {
      bg: "./videos/crowdfunding.mp4",
      title: "募資影像",
      onClick: () => {
      },
    },
    {
      bg: "./videos/event.mp4",
      title: "活動紀錄",
      onClick: () => {
      },
    },
    {
      bg: "./videos/interview.mp4",
      title: "訪談紀錄",
      onClick: () => {
      },
    },
  ])
  return (
    <Box>
      <CarouselSection title={title} subtitle={subtitle} items={items} />
    </Box>
  )
}
