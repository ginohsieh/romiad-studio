import { Box, Flex } from '@chakra-ui/react';
import CarouselItem from '../Carousel/CarouselItem';
import { useRef } from 'react';
import useOnScreen from '@/hooks/useOnScreen';

export default function VideoBgCarouselItem({ bg, title, ...props }) {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  return (<CarouselItem
    key={`motion-${title}`}
    h="100%"
    w="100%"
    px="3rem"
    py="2rem"
    cursor="pointer"
    {...props}
  >
    <Box
      ref={ref}
      as="video"
      preload
      data-autoPlay
      play={isVisible}
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
      <source data-src={bg} type="video/mp4" />
    </Box>
    <Flex
      h="100%"
      w="100%"
      alignItems="flex-end"
    >
      {title}
    </Flex>
  </CarouselItem>
  )
}
