import React from 'react';

import {
  Flex,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
} from '@chakra-ui/react';

function Modal({ children, isOpen, onClose, header }) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent py={8} minH='75vh' borderRadius='sm' color='text' bg='secondaryBackground'>
          <ModalHeader textAlign='center' color='text'>
            {header}
          </ModalHeader>
          <ModalCloseButton color='text' />
          <Flex align='center' justify='center'>
            {children}
          </Flex>
        </ModalContent>
      </ModalOverlay>
    </ChakraModal>
  );
}

export default Modal;