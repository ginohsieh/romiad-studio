'use client';

import useAboutImages from '@/hooks/useAboutImages';
import useNumberInfiniteRotate from '@/hooks/useNumberInfiniteRotate';
import useOnScreen from '@/hooks/useOnScreen';
import { Box, Flex, Heading, Image, SlideFade, Text } from '@chakra-ui/react';
import { useRef } from 'react';

export default function AboutSection() {
  const aboutRef = useRef()
  const images = useAboutImages()
  const number = useNumberInfiniteRotate({ start: 0, end: images.length - 1, interval: 5000 })
  const isOnScreen = useOnScreen(aboutRef, { once: true })
  const aboutUsProps = {
    direction: {
      base: 'column',
      xl: 'row',
    },
    rowGap: '1rem',
    justifyContent: 'center',
  }
  const aboutUsTitleProps = {
    as: 'h2',
    size: {
      base: '2xl',
      xl: 'xl',
      '2xl': '2xl',
    },
    textAlign: {
      base: 'center',
      xl: 'left',
    },
  }
  const imagesBlockProps = {
    flex: {
      base: '3',
      xl: '2',
    }
  }
  const imagesProps = {
    maxW: {
      base: '80vw',
      xl: '35vw',
    },
    maxH: {
      base: '40vh',
      xl: '50vh',
    },
  }


  return (
    <Flex
      ref={aboutRef}
      width="100%"
      maxWidth="1680px"
      minH="90vh"
      columnGap="8rem"
      {...aboutUsProps}
    >
      <Flex flex="1" direction="column" justifyContent="center" rowGap="2rem" px="1rem">
        <Heading {...aboutUsTitleProps}>About us 關於盧米</Heading>
        <Flex direction="column" justifyContent="center" rowGap="1rem">
          <SlideFade in={isOnScreen} transition={{ enter: { delay: 0, duration: 0.5 } }} offsetX="-64px"><Text>「影像的品質，我們嚴謹挑剔；影像的價值，我們律已專一。」</Text></SlideFade>
          <SlideFade in={isOnScreen} transition={{ enter: { delay: 0.7, duration: 0.5 } }} offsetX="-64px"><Text>盧米，是原住民詞語Romiad的中文轉譯，有「日子；天」的意思，但沿用到「盧米工作室」一名稱上，則衍伸出「挑戰、創新」的涵義。</Text></SlideFade>
          <SlideFade in={isOnScreen} transition={{ enter: { delay: 1.4, duration: 0.5 } }} offsetX="-64px"><Text>透過挑戰視聽感官的影像創作，融合在地與世界潮流影像的特色，在影像領域中創予獨殊之風格，從而建立一套，能以不同角度觀看、敘述影像的方式，使大眾能體會並培養出看待影像更多元的觀點。</Text></SlideFade>
        </Flex>
      </Flex>
      <Flex justifyContent="center" alignItems="center" {...imagesBlockProps}>
        {images.map(({ src }, index, arr) => {
          const offset = (number > index) ? (index - number + arr.length) : (index - number)
          const props = {}
          switch (offset) {
            case 0:
              props.display = "block"
              props.zIndex = -1
              props.transform = "rotate(2deg)"
              props.transition = "all 0.5s"
              props.opacity = 1
              break
            case 1:
              props.display = "block"
              props.zIndex = -2
              props.transform = "rotate(15deg)"
              props.transition = "all 0.5s"
              props.filter = "blur(2px) brightness(0.7)"
              break
            case 2:
              props.display = "block"
              props.zIndex = -3
              props.transform = "rotate(-20deg)"
              props.filter = "blur(4px) brightness(0.4)"
              props.transition = "all 0.5s"
              props.transitionDelay = "0.3s"
              break
            case 3:
              props.display = "block"
              props.zIndex = -4
              props.transform = "translateY(-50%)"
              props.filter = "brightness(0)"
            default:
              props.visibility = "hidden"
              break
          }
          return (
            <Box
              position="absolute"
              key={src}
              {...props}
            >
              <Image
                {...imagesProps}
                w="100%"
                objectFit="contain"
                src={src}
                alt="about_us"
              />
            </Box>
          )
        })}
      </Flex>
    </Flex>
  )
}
