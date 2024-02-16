import { Box, Flex, Text } from '@chakra-ui/react';
import metadata from "@/config/metadata";

export default function Main() {
  const keywordLines = [
    metadata.keywords.slice(0, 3).join(' | '),
    metadata.keywords.slice(3, 6).join(' | '),
    metadata.keywords.slice(6).join(' | '),
  ]

  return (
    <Flex direction="column" h="100%" justifyContent="center" rowGap="1rem" w="100%">
      <Box as="video" preload data-autoPlay muted loop position="absolute" top="0" left="0" zIndex="-9999" h="100%" w="100%">
        <source data-src="./videos/bg.mp4" type="video/mp4" />
      </Box>
      <Text as="h1" align="center" textStyle="website-title">{metadata.title}</Text>
      <Flex direction="column" justifyContent="center" rowGap="0.25rem">
        {keywordLines.map((line, index) => (<Text align="center" key={`keyword-line-${index}`}>{line}</Text>))}
      </Flex>
    </Flex>
  )
}
