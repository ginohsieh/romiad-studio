import Carousel from '@/components/Carousel';
import CarouselItem from '@/components/Carousel/CarouselItem';
import { Flex, Text, Heading, Stack, Box, Center } from '@chakra-ui/react';

export default function Motion() {
  return (
    <Flex pl="90px" w="100vw" maxW="100vw" h="100vh" justifyContent="space-between">
      <Center w="400px">
        <Stack spacing="1rem" w="400px" pr="40px">
          <Heading as="h1">動態影像</Heading>
          <Text>
            Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.
          </Text>
        </Stack>
      </Center>
      <Box flex="1" overflow="hidden" h="100%">
        <Carousel
          height="100%"
          width="100%"
          dot={true}
          infinite={true}
          autoplay={false}
        >
          <CarouselItem h="100vh">test</CarouselItem>
          <CarouselItem h="100vh">test2</CarouselItem>
          <CarouselItem h="100vh">test3</CarouselItem>
        </Carousel>
      </Box>
    </Flex>
  )
}
