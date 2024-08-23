'use client';

import useOnScreen from '@/hooks/useOnScreen';
import { Flex, Heading, Image, SlideFade, Text, useBreakpointValue } from '@chakra-ui/react';
import { useRef } from 'react';


export default function AwardSection() {
  const awardRef = useRef()
  const isOnScreen = useOnScreen(awardRef, { once: true })
  const awards = [
    { title: (<>第三屆「美麗基隆」影片創作比賽<br/>Beautiful Keelung<br/>│​首獎＆二獎</>) },
    { title: (<>2022 屏東創意廣告節<br/>Pingtung Ad Festival<br/>│​最佳視覺設計獎</>) },
    { title: (<>第四屆「美麗基隆」影片創作比賽<br/>Beautiful Keelung<br/>│優選</>) },
    { title: (<>旱溪媽祖遶境十八庄200週年 - 微電影拍攝比賽<br/>│​佳作</>) },
    { title: (<>in臺南‧無影藏 - 第三屆臺南市文化資產影像競賽<br/>│入圍</>) },
  ]

  const displayInCarousel = useBreakpointValue({
    base: true,
    xl: false,
  })

  return (
    <Flex alignItems="center" direction="column" py="8rem" rowGap="2rem">
      <Flex>
        <Heading as="h2" size="lg">Awards 得獎紀錄</Heading>
      </Flex>
      <Flex columnGap="1rem" ref={awardRef}>
        {awards.map(({ title }, index) => (
          <Flex width="240px" key={title} justifyContent="center">
            <SlideFade in={isOnScreen} delay={{ enter: index * 0.2 }} offsetY="60px">
              <Flex direction="column" py="48px" rowGap="2rem" alignItems="center">
                <Image src="./imgs/aboutus/awards/awards-01.png" alt="prize" w="56px"/>
                <Text textAlign="center">{title}</Text>
              </Flex>
            </SlideFade>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
