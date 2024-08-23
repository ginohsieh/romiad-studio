'use client';

import useOnScreen from '@/hooks/useOnScreen';
import { SlideFade, Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { useRef } from 'react';


export default function PartnerSection() {
  const partnersRef = useRef()
  const isOnScreen = useOnScreen(partnersRef, { once: true })
  const partners = [
    { src: "./imgs/aboutus/partners/ami.png" },
    { src: "./imgs/aboutus/partners/bic.png" },
    { src: "./imgs/aboutus/partners/hlcounty.png" },
    { src: "./imgs/aboutus/partners/piodata.png" },
    { src: "./imgs/aboutus/partners/tycity.png" },
    { src: "./imgs/aboutus/partners/imin.png" },
    { src: "./imgs/aboutus/partners/ponwaa.png" },
    { src: "./imgs/aboutus/partners/unagi_yondaime_kikukawa.png" },
    { src: "./imgs/aboutus/partners/bnpp.png" },
    { src: "./imgs/aboutus/partners/lolinya.png" },
    { src: "./imgs/aboutus/partners/sangean.png" },
    { src: "./imgs/aboutus/partners/wagon_image.png" },
    { src: "./imgs/aboutus/partners/cofit.png" },
    { src: "./imgs/aboutus/partners/msmingshine.png" },
    { src: "./imgs/aboutus/partners/ss.png" },
    { src: "./imgs/aboutus/partners/weblisher.png" },
    { src: "./imgs/aboutus/partners/heben.png" },
    { src: "./imgs/aboutus/partners/mxm.png" },
    { src: "./imgs/aboutus/partners/tspef.png" }
  ]

  return (
    <Flex alignItems="center" direction="column" py="8rem" rowGap="2rem">
      <Flex>
        <Heading as="h2" size="lg">Partners 合作夥伴</Heading>
      </Flex>
      <Flex columnGap="1rem" maxW="768px" flexWrap="wrap" justifyContent="center" ref={partnersRef}>
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
