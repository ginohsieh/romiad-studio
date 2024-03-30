'use client';
import { Box, useConst } from '@chakra-ui/react';
import config from '@/config/pages/motion.json'
import CarouselSection from '@/components/CarouselSection/CarouselSection';
import LightBox from '@/components/LightBox';
import usePortal from 'react-useportal';
import useLightboxVideos from '@/hooks/lightbox/useLightboxVideos';
import { useState } from 'react';

export default function Motion() {
  const { title, subtitle } = config
  const { Portal, openPortal, closePortal, isOpen } = usePortal()
  const [lightboxType, setLightboxType] = useState('')
  const videos = useLightboxVideos(lightboxType)

  const items = useConst(() => [
    {
      bg: "./videos/city_marketing.mp4",
      title: "城市行銷",
      onClick: () => {
        setLightboxType('city_marketing')
        openPortal()
      },
    },
    {
      bg: "./videos/commercial.mp4",
      title: "商業廣告",
      onClick: () => {
        setLightboxType('commercial')
        openPortal()
      },
    },
    {
      bg: "./videos/corporate.mp4",
      title: "品牌形象",
      onClick: () => {
        setLightboxType('corporate')
        openPortal()
      },
    },
    {
      bg: "./videos/crowdfunding.mp4",
      title: "募資影像",
      onClick: () => {
        setLightboxType('crowdfunding')
        openPortal()
      },
    },
    {
      bg: "./videos/event.mp4",
      title: "活動紀錄",
      onClick: () => {
        setLightboxType('event')
        openPortal()
      },
    },
    {
      bg: "./videos/interview.mp4",
      title: "訪談紀錄",
      onClick: () => {
        setLightboxType('interview')
        openPortal()
      },
    },
  ])
  return (
    <Box>
      {isOpen &&
        <Portal>
          <LightBox videos={videos} onClose={closePortal} />
        </Portal>
      }
      <CarouselSection title={title} subtitle={subtitle} items={items} />
    </Box>
  )
}
