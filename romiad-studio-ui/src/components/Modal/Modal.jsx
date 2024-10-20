import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { useLockBodyScroll } from 'react-use';

export default function StandardModal({
  isOpen,
  onClose,
  title,
  children,
  ...restProps
}) {

  useLockBodyScroll(isOpen);
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} {...restProps}>
      <ModalOverlay />
      <ModalContent color="black">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blackAlpha' onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
