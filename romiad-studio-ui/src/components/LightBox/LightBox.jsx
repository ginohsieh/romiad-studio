'use client';

import { Flex, IconButton } from '@chakra-ui/react';
import { IoIosClose } from "react-icons/io";


export default function LightBox({ onClose = () => {}, children }) {
  return (
    <Flex
      zIndex="99999"
      position="absolute"
      bgColor="blackAlpha.900"
      color="white"
      top="0"
      left="0"
      h="100vh"
      w="100vw"
      px="2rem"
      py="2rem"
    >
      <IconButton zIndex="9999" position="absolute" top="2rem" right="2rem" variant="ghost" colorScheme="white" onClick={onClose} icon={(<IoIosClose size="4rem" color="white" />)} />
      {children}
    </Flex>
  )
}
