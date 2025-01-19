'use client';

import useOnScreen from '@/hooks/useOnScreen';
import { SlideFade, Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { useRef } from 'react';


export default function PartnerSection() {
  const partnersRef = useRef()
  const isOnScreen = useOnScreen(partnersRef, { once: true })
  const partners = [
    { src: "./imgs/aboutus/partners/01.png" },
    { src: "./imgs/aboutus/partners/02.png" },
    { src: "./imgs/aboutus/partners/03.png" },
    { src: "./imgs/aboutus/partners/04.png" },
    { src: "./imgs/aboutus/partners/05.png" },
    { src: "./imgs/aboutus/partners/06.png" },
    { src: "./imgs/aboutus/partners/07.png" },
    { src: "./imgs/aboutus/partners/08.png" },
    { src: "./imgs/aboutus/partners/09.png" },
    { src: "./imgs/aboutus/partners/10.png" },
    { src: "./imgs/aboutus/partners/11.png" },
    { src: "./imgs/aboutus/partners/12.png" },
    { src: "./imgs/aboutus/partners/13.png" },
    { src: "./imgs/aboutus/partners/14.png" },
    { src: "./imgs/aboutus/partners/15.png" },
    { src: "./imgs/aboutus/partners/16.png" },
    { src: "./imgs/aboutus/partners/17.png" },
    { src: "./imgs/aboutus/partners/18.png" },
    { src: "./imgs/aboutus/partners/19.png" },
    { src: "./imgs/aboutus/partners/20.png" },

  ]

  return (
    <Flex alignItems="center" direction="column" py="8rem" rowGap="2rem">
      <Flex>
        <Heading as="h2" size="2xl">Partners 合作夥伴</Heading>
      </Flex>
      <Flex columnGap="4rem" rowGap="2rem" maxW="768px" flexWrap="wrap" justifyContent="center" ref={partnersRef}>
        {partners.map(({ src }, index) => (
          <Flex key={src} width="128px">
            <SlideFade in={isOnScreen} delay={{ enter: index * 0.15 }} offsetX="-128px">
              <Image src={src} alt="partner" w="100%" />
            </SlideFade>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
