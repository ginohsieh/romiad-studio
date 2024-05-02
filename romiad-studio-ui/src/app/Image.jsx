'use client';
import { Box, Button, Flex, Heading, Text, useBreakpointValue, useConst } from '@chakra-ui/react';
import config from '@/config/pages/image.json'
import { VideoLightBox } from '@/components/LightBox';
import usePortal from 'react-useportal';
import useLightboxVideos from '@/hooks/lightbox/useLightboxVideos';
import { useState } from 'react';
import Carousel from '@/components/Carousel';
import CarouselItem from '@/components/Carousel/CarouselItem';

const responsive = {
  base: {
    breakpoint: { max: 65536, min: 0 },
    items: 3,
  },
}

export default function Image() {
  const displayInCarousel = useBreakpointValue({
    base: true,
    xl: false,
  })
  const { title, subtitle } = config
  const { Portal, openPortal, closePortal, isOpen } = usePortal()
  const [lightboxType, setLightboxType] = useState('')
  const videos = useLightboxVideos(lightboxType)

  const items = useConst(() => [
    {
      bg: "./imgs/product/cover.jpg",
      title: "產品攝影",
      onClick: () => {
        setLightboxType('product')
        openPortal()
      },
    },
    {
      bg: "./imgs/luxury/cover.jpg",
      title: "精品攝影",
      onClick: () => {
        setLightboxType('luxury')
        openPortal()
      },
    },
    {
      bg: "./imgs/event/cover.jpg",
      title: "活動紀錄",
      onClick: () => {
        setLightboxType('event')
        openPortal()
      },
    },
    {
      bg: "./imgs/portrait/cover.jpg",
      title: "人像攝影",
      onClick: () => {
        setLightboxType('portrait')
        openPortal()
      },
    },
    {
      bg: "./imgs/food/cover.jpg",
      title: "食品攝影",
      onClick: () => {
        setLightboxType('food')
        openPortal()
      },
    },
    {
      bg: "./imgs/streetsnap/cover.jpg",
      title: "街頭拍攝",
      onClick: () => {
        setLightboxType('street')
        openPortal()
      },
    },
    {
      bg: "./imgs/landscape/cover.jpg",
      title: "風景攝影",
      onClick: () => {
        setLightboxType('landscape')
        openPortal()
      },
    },
  ])

  return (
    <Flex alignItems="center" direction="column" h="100vh" maxH="100%" pt="4rem">
      {isOpen &&
        <Portal>
          <VideoLightBox videos={videos} onClose={closePortal} />
        </Portal>
      }
      <Flex justifyContent="space-between" alignItems="center" w="100%" maxW="1024px" h="20vh" maxH="24rem" px="2rem">
        <Heading as="h2">{title}</Heading>
        <Flex direction="column" gap="0.2rem" color="whiteAlpha.700">
          {subtitle.map(row => <Text key={row} textAlign="end">{row}</Text>)}
        </Flex>
      </Flex>
      {displayInCarousel && (
        <Flex flex={1} width="100%">
          <Carousel
            partialVisible={true}
            dot={true}
            infinite={true}
            autoPlay={true}
            className="h100"
            itemClass="h100"
            sliderClass="h100"
            containerClass="w100"
            ssr={true}
            responsive={responsive}
            arrows={true}
          >
            {
              items.map((item, index) => (
                <CarouselItem h="100%" w="100%" key={`image-${index}`}>
                  <Flex
                    h="100%"
                    w="100%"
                    key={title} bgImage={item.bg}
                    bgSize="cover"
                    bgPosition="center"
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    rowGap="0.75rem"
                    cursor="pointer"
                  >
                    <Flex
                      h="100%"
                      w="100%"
                      fontSize="1rem"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text>{item.title}</Text>
                    </Flex>
                  </Flex>
                </CarouselItem>
              ))
            }
          </Carousel>
        </Flex>
      )}
      {!displayInCarousel && (
        <Flex flex={1} direction="row" w="100%" py="1rem">
          {items.map((item) => (
            <Flex
              flex={1}
              key={title} bgImage={item.bg}
              bgSize="cover"
              bgPosition="center"
              h="100%"
              justifyContent="center"
              alignItems="center"
              direction="column"
              rowGap="0.75rem"
              cursor="pointer"
            >
              <Flex
                h="100%"
                w="100%"
                fontSize="1rem"
                opacity={0}
                _hover={{
                  opacity: 1,
                  bgColor: "blackAlpha.800"
                }}
                transition="opacity 0.2s"
                justifyContent="center"
                alignItems="center"

              >
                <Text>{item.title}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  )
}
