import Carousel from '@/components/Carousel';
import CarouselItem from '@/components/Carousel/CarouselItem';
import { Flex, Text, Heading, Stack, Box, Center } from '@chakra-ui/react';
import config from '@/config/pages/story.json'

export default function Story() {
  const { title, subtitle } = config

  const containerProps = {
    py: {
      base: '8rem',
      lg: '0',
    },
    pr: {
      base: '0',
      lg: '90px',
    },
    w: '100vw',
    maxW: '100vw',
    h: '100vh',
    maxH: '100vh',
    justifyContent: {
      base: 'center',
      lg: 'center',
    },
    alignItems: {
      base: 'center',
    },
    direction: {
      base: 'column',
      lg: 'row-reverse',
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
      base: '1rem',
    },
    pl: {
      base: '0',
      lg: '40px',
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
      lg: '60%'
    },
    maxH: '800px',
    w: {
      base: '100%',
      lg: 'auto'
    }
  }


  const items = [
    { bg: "./imgs/test.jpg", title: "創意" },
    { bg: "./imgs/test-2.jpg", title: "概念" },
    { bg: "./imgs/test-3.jpeg", title: "獨有" },
  ]

  return (
    <Flex {...containerProps}>
      <Center {...titleBlockProps}>
        <Heading {...titleBlockHeadingProps}>{config.title}</Heading>
        <Stack w="100%" gap="0.2rem" color="whiteAlpha.700">
          {subtitle.map((row, index) => <Text key={`subtitle-${index}`}>{row}</Text>)}
        </Stack>
      </Center>
      <Box {...carouselContainerProps}>
        <Carousel
          dot={true}
          infinite={true}
          autoplay={false}
          className="h100"
          itemClass="h100"
          sliderClass="h100"
        >
          {items.map(item => (
            <CarouselItem
              key={`motion-${title}`}
              h="100%"
              w="100%"
              px="1rem"
              py="2rem"
            >
              <Flex
                h="100%"
                w="100%"
                alignItems="flex-end"
                bgImage={`url(${item.bg})`}
                bgSize="cover"
                p="2rem"
              >
                {item.title}
              </Flex>
            </CarouselItem>)
          )}
        </Carousel>
      </Box>
    </Flex>
  )
}
