'use client';
import { Box, Flex, useConst } from '@chakra-ui/react';
import config from '@/config/pages/motion.json'
import CarouselSection from '@/components/CarouselSection/CarouselSection';
import { VideoLightBox } from '@/components/LightBox';
import usePortal from 'react-useportal';
import useLightboxVideos from '@/hooks/lightbox/useLightboxVideos';
import { useEffect, useState } from 'react';

export default function Motion() {
  const { title, subtitle } = config
  const { Portal, openPortal, closePortal, isOpen } = usePortal()
  const [lightboxType, setLightboxType] = useState('')
  const videos = useLightboxVideos(lightboxType)

  const items = useConst(() => [
    {
      bg: "./videos/city_marketing.mp4",
      title: "城市行銷",
      enTitle: "City Marketing",
      onClick: () => {
        setLightboxType('city_marketing')
        openPortal()
      },
    },
    {
      bg: "./videos/commercial.mp4",
      title: "商業廣告",
      enTitle: "Commercial",
      onClick: () => {
        setLightboxType('commercial')
        openPortal()
      },
    },
    {
      bg: "./videos/corporate.mp4",
      title: "品牌形象",
      enTitle: "Corporate",
      onClick: () => {
        setLightboxType('corporate')
        openPortal()
      },
    },
    {
      bg: "./videos/crowdfunding.mp4",
      title: "募資影像",
      enTitle: "Crowdfunding",
      onClick: () => {
        setLightboxType('crowdfunding')
        openPortal()
      },
    },
    {
      bg: "./videos/event.mp4",
      title: "活動紀錄",
      enTitle: "Events",
      onClick: () => {
        setLightboxType('event')
        openPortal()
      },
    },
    {
      bg: "./videos/interview.mp4",
      title: "訪談紀錄",
      enTitle: "Interview",
      onClick: () => {
        setLightboxType('interview')
        openPortal()
      },
    },
  ])
  return (
    <Flex h="100%">
      {isOpen &&
        <Portal>
          <VideoLightBox videos={videos} onClose={closePortal} />
        </Portal>
      }
      <CarouselSection title={title} subtitle={subtitle} items={items} />
    </Flex>
  )
}
