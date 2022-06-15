import React from 'react'
import {Center, Text, Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton} from '@chakra-ui/react'

function NotAllowedFiles({isOpen, isClose, type}) {

  return (
    <>
        <Modal  isOpen={isOpen} onClose={isClose} bg="#242627">
          <ModalOverlay />
          <ModalContent bg="#F7F7FC" textAlign="center">
            <ModalCloseButton />
            <ModalBody bg="#242627" borderRadius="5px" >
              
              <Center width="100%" pt={10} pb={5} bg="#242627">
                  
                  <Text as="h1" color="Red" fontSize="1.3rem" pb={5}>Only {type} files are allowed</Text>
               </Center> 
              
           </ModalBody>
          </ModalContent>
        </Modal>
    </>
  )
}

export default NotAllowedFiles