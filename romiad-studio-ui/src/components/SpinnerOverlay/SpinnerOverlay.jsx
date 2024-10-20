import { Flex, Modal, ModalOverlay, Spinner } from '@chakra-ui/react';
import { useLockBodyScroll } from 'react-use';

export default function SpinnerOverlay({
  isOpen
}) {
  useLockBodyScroll(isOpen);
  return (
    <Modal isCentered={true} isOpen={isOpen}>
      <ModalOverlay zIndex="999999" />
      <Flex
        zIndex="999999"
        position="fixed"
        top="0%"
        left="0%"
        h="100vh"
        w="100vw"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner />
      </Flex>
    </Modal>
  )
}
