import { Flex } from '@chakra-ui/react';

export default function Form(props) {
  return (
    <Flex
      as="form"
      w="100%"
      maxW="1280px"
      justifyContent="center"
      alignItems="center"
      direction="column"
      rowGap="1rem"
      px="2rem"
      {...props}
    />
  )
}
