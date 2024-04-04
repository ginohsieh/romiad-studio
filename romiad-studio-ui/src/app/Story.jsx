'use client';

import config from '@/config/pages/story.json'
import CarouselSection from '@/components/CarouselSection';
import usePortal from 'react-useportal';
import { useState } from 'react';
import useLightboxVideos from '@/hooks/lightbox/useLightboxVideos';
import LightBox from '@/components/LightBox';
import { Box, useConst } from '@chakra-ui/react';

export default function Story() {
  const { title, subtitle } = config;


  const { Portal, openPortal, closePortal, isOpen } = usePortal()
  const [lightboxType, setLightboxType] = useState('')
  const videos = useLightboxVideos(lightboxType)

  const items = useConst(() => [
    {
      bg: "./videos/story_creative.mp4",
      title: "創意",
      onClick: () => {
        setLightboxType('story_creative')
        openPortal()
      },
    },
    {
      bg: "./videos/story_concept.mp4",
      title: "概念",
      onClick: () => {
        setLightboxType('story_concept')
        openPortal()
      },
    },
    {
      bg: "./videos/story_unique.mp4",
      title: "獨有",
      onClick: () => {
        setLightboxType('story_unique')
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
      <CarouselSection
        title={title}
        subtitle={subtitle}
        items={items}
        reverse
        useOverflowLayout={false}
        alwaysAutoPlay={false}
      />
    </Box>
  )
}
