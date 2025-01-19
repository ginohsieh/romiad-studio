'use client';

import useOnScreen from '@/hooks/useOnScreen';
import { Flex, Heading, Image, Slide, SlideFade, Text } from '@chakra-ui/react';
import { useRef } from 'react';

export default function ProcessSection() {
  const processRef = useRef()
  const isOnScreen = useOnScreen(processRef, { once: true })

  const process = [
    { title: '預約諮詢', iconSrc: './imgs/aboutus/process/book_W.png' },
    { title: '需求確認', iconSrc: './imgs/aboutus/process/requirement_W.png' },
    { title: '報價簽約', iconSrc: './imgs/aboutus/process/contract_W.png' },
    { title: '腳本企劃', iconSrc: './imgs/aboutus/process/script_W.png' },
    { title: '剪輯拍攝', iconSrc: './imgs/aboutus/process/filming_W.png' },
    { title: '交付成品', iconSrc: './imgs/aboutus/process/production_W.png' },
  ]

  return (
    <Flex alignItems="center" direction="column" py="8rem" rowGap="2rem">
      <Flex>
        <Heading as="h2" size="2xl">Our Process 製作流程</Heading>
      </Flex>
      <Flex columnGap="6rem" justifyContent="center" flexWrap="wrap" ref={processRef}>
        {
          process.map(({ title, iconSrc }, index) => (
            <SlideFade key={title} in={isOnScreen} delay={{ enter: index * 0.2 }} offsetY="60px">
              <Flex direction="column" py="48px" rowGap="1.5rem" alignItems="center" justifyContent="space-between">
                <Image src={iconSrc} alt={title} w="60px" />
                <Text textAlign="center">{title}</Text>
              </Flex>
            </SlideFade>
          ))
        }
      </Flex>
    </Flex>
  )
}
