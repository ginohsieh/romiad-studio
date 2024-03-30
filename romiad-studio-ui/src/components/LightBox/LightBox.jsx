'use client';

import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";


export default function LightBox({videos = [], onClose = () => {}}) {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0)
  const selectedVideo = videos?.[selectedVideoIndex] || {}

  return (
    <Flex
      zIndex="99999"
      position="absolute"
      bgColor="blackAlpha.900"
      color="white"
      top="0"
      left="0"
      h="100vh"
      w="100vw"
      px="2rem"
      py="2rem"
    >
      <IconButton position="absolute" top="2rem" right="2rem" variant="ghost" colorScheme="white" onClick={onClose} icon={(<IoIosClose size="4rem" color="white" />)} />
      <Flex
        w="100%"
        h="100%"
        bgColor="black"
        direction="column"
        px="2rem"
        py="2rem"
      >
        <Flex w="100%" flex="1" py="2rem">
        {/* <iframe width="100%" height="auto" src="https://www.youtube.com/embed/videoseries?si=nF0Pu0e1Y2AJtgUf&amp;list=PLOhJcywZEKY2GYsmdI63wW_xyChS15fGq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          <iframe width="100%" height="auto" src={selectedVideo.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Flex>
        <Flex h="120px" columnGap="2rem">
          {videos?.map(({ thumbnail, name }, index) => (
            <Flex
              cursor="pointer"
              justifyContent="center"
              flex="1"
              h="100%"
              key={`thumbnail-${index}`}
              onClick={() => setSelectedVideoIndex(index)}
            >
              <Image alt={name} src={thumbnail} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
