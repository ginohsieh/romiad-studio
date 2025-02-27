'use client';

import { Box, Center, Flex, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import Carousel from '../Carousel';
import VideoBgCarouselItem from './VideoBgCarouselItem';
import { useRef } from 'react';


export default function CarouselSection({ items = [], title, subtitle, reverse = false, useOverflowLayout = true, alwaysAutoPlay = true }) {
  const draggingRef = useRef(null);
  const rtl = useBreakpointValue({
    base: false,
    lg: reverse ? true : false
  })
  const autoPlay = useBreakpointValue({
    base: true,
    xl: alwaysAutoPlay,
  })
  const containerProps = {
    pt: {
      base: '6rem',
      lg: '0',
    },
    pb: {
      base: '2rem',
      lg: '0',
    },
    [reverse ? 'pr' : 'pl']: {
      base: '0',
      lg: '90px',
    },
    w: {
      base: '100vw',
      xl: useOverflowLayout ? '125vw' : '100vw',
    },
    h: '100vh',
    maxH: '100%',
    scrollX: 'hidden',
    justifyContent: {
      base: 'center',
      lg: 'flex-end',
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
    minW: '400px',
    flex: 0,
    alignItems: {
      base: 'center',
      lg: 'flex-start'
    },
    flexDirection: 'column',
    rowGap: {
      base: '0.5rem',
      lg: '1rem'
    },
    [reverse ? 'pl' : 'pr']: {
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

  const titleBlockSubtitleProps = {
    display: {
      base: 'none',
      lg: 'flex'
    }
  }

  const carouselContainerProps = {
    flex: '1',
    maxW: useOverflowLayout ? '1920px' : '1680px',
    overflow: 'hidden',
    pt: {
      base: 'auto',
      lg: '5rem'
    },
    pb: {
      base: 'auto',
      lg: '2rem'
    },
    h: {
      base: 'auto',
      lg: '100%'
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
          <Stack w="100%" gap="0.2rem" color="whiteAlpha.700" {...titleBlockSubtitleProps}>
            {subtitle.map((row, index) => <Text key={`subtitle-${index}`}>{row}</Text>)}
          </Stack>
        </Center>
        <Box {...carouselContainerProps}>
          <Carousel
            dot={true}
            infinite={true}
            autoPlay={autoPlay}
            rtl={rtl}
            className="h100"
            itemClass="h100"
            sliderClass="h100"
            ssr={true}
            afterChange={() => {
              draggingRef.current = false;
            }}
            beforeChange={() => {
              draggingRef.current = true;
            }}
          >
            {items.map(item => (
              <VideoBgCarouselItem
                key={`carousel-${title}`}
                {...item}
                onClick={(e) => {
                  if (!draggingRef?.current) {
                    item.onClick(e)
                  }
                }}
              />)
            )}
          </Carousel>
        </Box>
      </Flex>
    </Box>
  )
}
