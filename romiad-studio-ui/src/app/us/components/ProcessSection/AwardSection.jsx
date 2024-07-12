'use client';

import { Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';


export default function AwardSection() {
  const awards = [
    { title: (<>2020美麗基隆影片創作比賽<br/>Beautiful Keelung<br/>│​首獎＆二獎</>) },
    { title: (<>2022屏東創意廣告節<br/>Pingtung Ad Festival<br/>│​最佳視覺設計獎</>) },
    { title: (<>2021美麗基隆影片創作比賽<br/>Beautiful Keelung<br/>│優選</>) },
    { title: (<>旱溪媽祖遶境十八庄200週年 - 微電影拍攝比賽<br/>│​佳作</>) },
    { title: (<>in臺南‧無影藏 - 2021臺南市文化資產影像競賽<br/>│入圍</>) },
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
      <Flex columnGap="1rem">
        {awards.map(({ title }) => (
          <Flex key={title} direction="column" py="48px" rowGap="2rem" width="200px" alignItems="center">
            <Image src="./imgs/aboutus/awards/awards-01.png" alt="prize" w="56px"/>
            <Text textAlign="center">{title}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
