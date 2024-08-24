'use client';

import config from '@/config/pages/story.json'
import CarouselSection from '@/components/CarouselSection';
import usePortal from 'react-useportal';
import { useState } from 'react';
import useLightboxVideos from '@/hooks/lightbox/useLightboxVideos';
import { VideoLightBox } from '@/components/LightBox';
import { Box, Flex, useBreakpointValue, useConst } from '@chakra-ui/react';
import useLightboxPlaylists from '@/hooks/lightbox/useLightboxPlaylists';
import PlaylistBox from '@/components/LightBox/PlaylistLightBox';

export default function Story() {
  const { title, subtitle } = config;
  const lightboxForm = useBreakpointValue({
    base: 'playlist',
    lg: 'video'
  });

  const { Portal, openPortal, closePortal, isOpen } = usePortal()
  const [lightboxType, setLightboxType] = useState('')
  const videos = useLightboxVideos(lightboxType)
  const playlist = useLightboxPlaylists(lightboxType)

  const items = useConst(() => [
    {
      bg: "./videos/story_creative.mp4",
      title: "創意",
      enTitle: "Creative",
      onClick: (e) => {
        console.log(e)
        setLightboxType('story_creative')
        openPortal()
      },
    },
    {
      bg: "./videos/story_concept.mp4",
      title: "概念",
      enTitle: "Concept",
      onClick: () => {
        console.log(e)
        setLightboxType('story_concept')
        openPortal()
      },
    },
    {
      bg: "./videos/story_unique.mp4",
      title: "獨有",
      enTitle: "Unique",
      onClick: () => {
        console.log(e)
        setLightboxType('story_unique')
        openPortal()
      },
    },
  ])

  return (
    <Flex h="100%">
      {isOpen &&
        <Portal>
          {lightboxForm === 'playlist' && <PlaylistBox playlistSrc={playlist} onClose={closePortal} />}
          {lightboxForm === 'video' && <VideoLightBox videos={videos} onClose={closePortal} />}
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
    </Flex>
  )
}
