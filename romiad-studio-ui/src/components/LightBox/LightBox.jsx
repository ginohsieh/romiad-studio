'use client';

import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import Carousel from '../Carousel';
import CarouselItem from '../Carousel/CarouselItem';


const em = 16;

const responsive = {
  '2xl': {
    breakpoint: { min: em * 96, max: 65536 },
    items: 8,
  },
  xl: {
    breakpoint: { max: em * 96, min: em * 80 },
    items: 6,
  },
  lg: {
    breakpoint: { max: em * 80, min: em * 62 },
    items: 4,
  },
  md: {
    breakpoint: { max: em * 62, min: em * 48 },
    items: 2,
  },
  sm: {
    breakpoint: { max: em * 48, min: em * 30 },
    items: 1,
  },
  base: {
    breakpoint: { max: em * 30, min: 0 },
    items: 1,
  },
};


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
          <iframe width="100%" height="auto" src={selectedVideo.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Flex>
        <Flex minH="120px" h="15vh">
          <Carousel
            swipeable
            draggable
            arrows={true}
            infinite
            autoplay={false}
            dot={false}
            autoPlay={false}
            responsive={responsive}
            containerClass="w100"
            className="h100"
            itemClass="h100"
            sliderClass="h100"
            centerMode={true}
          >
            {videos?.map(({ thumbnail, name }, index) => (
              <CarouselItem
                as="div"
                cursor="pointer"
                justifyContent="center"
                h="100%"
                key={`thumbnail-${index}`}
                onClick={() => setSelectedVideoIndex(index)}
                px="1rem"
                opacity={index === selectedVideoIndex ? 1 : 0.5}
                _hover={{
                  opacity: 1
                }}
              >
                <Image alt={name} src={thumbnail} objectFit="contain" />
              </CarouselItem>
            ))}
          </Carousel>
        </Flex>
      </Flex>
    </Flex>
  )
}
