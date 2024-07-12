'use client';
import LightBox from './LightBox';
import { useEffect } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import Macy from "macy";


export default function WaterfallLightbox({items = [], onClose = () => {}}) {
  useEffect(() => {
    let macy = Macy({
      container: '.waterfall-container',
      trueOrder: false,
      waitForImages: false,
      margin: 24,
      columns: 3,
      breakAt: {
        1200: 2,
        900: 1,
      },
    })
    return () => {
      if (macy) {
        macy?.remove?.()
      }
    }
  }, [])
  return (
    <LightBox onClose={onClose}>
      <Flex w="100%" h="100%" overflowY="scroll" pt="4rem">
        <Flex className="waterfall-container" w="100%" h="100%">
          {items.map((item) => (
            <Box key={item.alt} macy-complete="1">
              <Image src={item.src} alt={item.alt}/>
            </Box>
          ))}
        </Flex>
      </Flex>
    </LightBox>
  )
}
