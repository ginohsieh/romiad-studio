import { Box, Fade, Flex, Text } from '@chakra-ui/react';
import metadata from "@/config/metadata";
import GlitchText from '@/components/GlitchText';

export default function Main() {
  const keywordLines = [
    metadata.keywords.slice(0, 3).join(' | '),
    metadata.keywords.slice(3, 6).join(' | '),
    metadata.keywords.slice(6).join(' | '),
  ]

  return (
    <Flex w="auto" direction="column" h="100vh" maxH="100%" justifyContent="center" overflow="hidden">
      <Box
        as="video"
        preload
        data-autoPlay
        muted
        loop
        position="absolute"
        minH="100%"
        minW="100%"
        zIndex="-9999"
        objectFit="cover"
        top="0"
        left="0"
      >
        <source data-src="./videos/bg.mp4" type="video/mp4" />
      </Box>
      <Flex w="100%" h="100%" justifyContent="center" direction="column" rowGap="1rem" bgColor="blackAlpha.300">
        <Fade in transition={{ enter: { delay: 0.5, duration: 1 } }}>
          <GlitchText
            as="h1"
            align="center"
            textStyle="website-title"
          >
            {metadata.title}
          </GlitchText>
        </Fade>
        <Fade in transition={{ enter: { delay: 0.5, duration: 1 } }}>
          <Flex direction="column" justifyContent="center" rowGap="0.25rem">
            {keywordLines.map((line, index) => (<GlitchText align="center" key={`keyword-line-${index}`}>{line}</GlitchText>))}
          </Flex>
        </Fade>
      </Flex>
    </Flex>
  )
}
