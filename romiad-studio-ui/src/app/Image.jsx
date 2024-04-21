'use client';
import { Box, Button, Flex, Heading, Text, useConst } from '@chakra-ui/react';
import config from '@/config/pages/image.json'
import { VideoLightBox } from '@/components/LightBox';
import usePortal from 'react-useportal';
import useLightboxVideos from '@/hooks/lightbox/useLightboxVideos';
import { useEffect, useState } from 'react';

export default function Image() {
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
      bg: "./imgs/food/cover.mp4",
      title: "食品攝影",
      onClick: () => {
        setLightboxType('food')
        openPortal()
      },
    },
    {
      bg: "./imgs/street/cover.jpg",
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
    <Flex alignItems="center" direction="column" h="100vh" maxH="100%" pt="8rem">
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
            {/* <Box
              borderColor="white"
              borderWidth="1px"
              borderRadius="2rem"
              fontSize="0.6rem"
              px="0.75rem"
              py="0.25rem"
              onClick={item.onClick}
              _hover={{ bg: "whiteAlpha.300" }}
              transition="background-color 0.2s"
            >
              VIEW MORE
            </Box> */}
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
