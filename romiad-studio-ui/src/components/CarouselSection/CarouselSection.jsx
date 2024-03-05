'use client';

import { Box, Center, Flex, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import Carousel from '../Carousel';
import CarouselItem from '../Carousel/CarouselItem';


export default function CarouselSection({ items = [], title, subtitle, reverse = false, useOverflowLayout = true }) {
  const rtl = useBreakpointValue({
    base: false,
    lg: reverse ? true : false
  })
  const containerProps = {
    py: {
      base: '8rem',
      lg: '0',
    },
    [reverse ? 'pr': 'pl']: {
      base: '0',
      lg: '90px',
    },
    w: {
      base: '100vw',
      xl: useOverflowLayout ? '115vw' : '100vw',
    },
    maxW: useOverflowLayout ? '115vw' : '100vw',
    h: '100vh',
    maxH: '100vh',
    scrollX: 'hidden',
    justifyContent: {
      base: 'center',
      lg: 'center',
    },
    alignItems: {
      base: 'center',
    },
    direction: {
      base: 'column',
      lg: reverse ? 'row-reverse' : 'row',
    }
  }

  const titleBlockProps = {
    display: 'flex',
    w: '400px',
    alignItems: {
      base: 'center',
      lg: 'flex-start'
    },
    flexDirection: 'column',
    rowGap: {
      base: '0.5rem',
      lg: '1rem'
    },
    [reverse ? 'pl': 'pr']: {
      base: '0',
      lg: '3rem',
    },
    pb: {
      base: '1rem',
      lg: '0',
    },
    textAlign: {
      base: 'center',
      lg: 'left',
    },
  }

  const titleBlockHeadingProps = {
    as: "h2",
    size: "lg"
  }

  const carouselContainerProps = {
    flex: '1',
    overflow: 'hidden',
    h: {
      base: 'auto',
      lg: '80%'
    },
    maxH: '800px',
    w: {
      base: '100%',
      lg: 'auto'
    }
  }


  return (
    <Box overflow="hidden">
      <Flex {...containerProps}>
        <Center {...titleBlockProps}>
          <Heading {...titleBlockHeadingProps}>{title}</Heading>
          <Stack w="100%" gap="0.2rem" color="whiteAlpha.700">
            {subtitle.map((row, index) => <Text key={`subtitle-${index}`}>{row}</Text>)}
          </Stack>
        </Center>
        <Box {...carouselContainerProps}>
          <Carousel
            dot={true}
            infinite={true}
            autoPlay={true}
            rtl={rtl}
            className="h100"
            itemClass="h100"
            sliderClass="h100"
          >
            {items.map(item => (
              <CarouselItem
                key={`motion-${title}`}
                h="100%"
                w="100%"
                px="3rem"
                py="2rem"
              >
                <Box
                  as="video"
                  preload
                  data-autoPlay
                  muted
                  loop
                  position="absolute"
                  minH="100%"
                  minW="100%"
                  zIndex="-9999"
                  objectFit="cover"
                  top="0"
                  left="0"
                  px="1rem"
                  py="2rem"
                >
                  <source data-src={item.bg} type="video/mp4" />
                </Box>
                <Flex
                  h="100%"
                  w="100%"
                  alignItems="flex-end"
                >
                  {item.title}
                </Flex>
              </CarouselItem>)
            )}
          </Carousel>
        </Box>
      </Flex>
    </Box>
  )
}
