import React from 'react'
import {Box, Center, Image ,Text,Modal,ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton, Button, useToast,Input} from '@chakra-ui/react'

import icp from '../../../assets/icp.png'
import donate from '../../../assets/donate.png'
import nft from '../../../assets/nft.webp'
import logo from '../../../assets/logo.png'
import { AiOutlineCheckCircle } from 'react-icons/ai'

function Donate({receiver,isOpen,onClose,onOpen}) {
    const toast = useToast()
    const [success,setSuccess] = React.useState(false)
    const [tab,setTab] = React.useState(0)
    const [amount, setAmount] = React.useState(0)
    const [amount1, setAmount1] = React.useState(0)
    const [isLoading,setIsloading] = React.useState(0)

    const handleICP = (e) => {
        setAmount(e.target.value)
        setAmount1(0)
    }

    const handleCRTC = (e) => {
        setAmount1(e.target.value)
        setAmount(0)
    }


    const TokenDonation = async() => {
        
        if(amount>0) {

            setIsloading(1)
            const params = {
              to: receiver,
              amount: amount * 100000000, /// == 2
              memo: '123451231231',
            };
            try {
            const result = await window.ic.plug.requestTransfer(params);
            if(result) {
                toast({
                    title: `Transaction completed successfully`,
                    position: "top",
                    status : 'success',
                    isClosable: true,
                  })
                  setSuccess(true)
                  setIsloading(0)
            }
            else {
                toast({
                    title: `Transaction failed`,
                    position: "top",
                    status : 'error',
                    isClosable: true,
                  })

                  setSuccess(false)
            }}catch {
                toast({
                    title: `Transaction failed`,
                    position: "top",
                    status : 'error',
                    isClosable: true,
                  })
                  setIsloading(0)
            }
          
        }


        if(amount1>0) {
            setIsloading(2)
            
            const params = {
              to: receiver,
              amount: amount1 * (10 *9), /// == 2
              memo: '123451231231',
            };
            const result = await window.ic.plug.requestTransfer(params);
            if(result) {
                toast({
                    title: `Transaction completed successfully`,
                    position: "top",
                    status : 'success',
                    isClosable: true,
                  })
                  setSuccess(true)
            }
            else {
                toast({
                    title: `Transaction failed`,
                    position: "top",
                    status : 'error',
                    isClosable: true,
                  })

                  setSuccess(false)
            }
          
        }
        

    }

  return (
    <>
    <Modal size="lg" isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
                <ModalOverlay />
                <ModalContent borderRadius="5px" height="auto">
                  
                  <ModalCloseButton onClick={() => {setIsloading(0);setAmount(0);setAmount1(0)}} />
                  <ModalBody pt={6} pb={6}>
                    <Box  height="100%" w="100%">
                    <Text as="h1" fontSize="1.2rem" fontWeight="bold">Your support can make a difference</Text>
                       
                        <Center w="100%" h="100%" pt={5}>
                                <Box w="90%" h="100%">
                                   {tab === 0 && <Box h="100%" w="100%" >
                                        <Image w="100%" h="100%" src={donate} />
                                    </Box>}
                                    {tab === 1 && <Box w="100%" h="100%" textAlign="center">
                                            <Text as="h3" h="10%">Support by NFTs will be available soon</Text>
                                            <Box w="100%" h="90%">
                                                <Center w="100%" h="100%">
                                                    <Image src={nft} h="100%" w="70%" />
                                                </Center>
                                                
                                            </Box>
                                        </Box>}

                                        {tab === 2 && <Box w="100%" h="100%" textAlign="center">
                                            <Text as="h3" h="10%" d="flex" textAlign="center">Only <Text color="#DD5990" fontWeight="bold" pl={1} pr={1}>ICP </Text>& <Text color="#DBC332" fontWeight="bold" pl={1} pr={1}>CRTC</Text> tokens are supported</Text>
                                           {success ? <Box w="100%" h="90%" pt={5}>
                                                                <Center w="100%" h="100%">
                                                                    <Box w="100%" h="100%">
                                                                    <Center w="100%"><AiOutlineCheckCircle fill="#3ADB15" size="6rem" /></Center>

                                                                    <Text fontSize="1.3rem" color="#3ADB15" fontWeight="bold" pt={5}>Success</Text>
                                                                    </Box>
                                                                
                                                                </Center>
                                                                
                                                        </Box> 
                                           
                                           :  <Box w="100%" h="90%" pt={5}>
                                                <Center w="100%" h="100%">
                                                    <Box w="100%" h="100%" >
                                                        <Box w="100%" h="50%" d="flex">
                                                            <Image src={icp} h="3rem" w="3rem" mr={5}/>
                                                            <Input onChange={handleICP} value={amount} placeholder="Amount" />
                                                            {isLoading == 1  ? <Button isLoading loadingText=''  ml={2} w="10rem" pb={0.5}>Send</Button>:<Button onClick={TokenDonation} ml={2} w="10rem" pb={0.5}>Send</Button>}
                                                        </Box>
                                                        <Box w="100%" h="50%" d="flex" pt={8} >
                                                            <Image src={logo} h="2.8rem" w="2.8rem" mr={5}/>
                                                            <Input onChange={handleCRTC} value={amount1} placeholder="Amount" />
                                                            {isLoading == 2  ? <Button isLoading loadingText=''  ml={2} w="10rem" pb={0.5}>Send</Button> : <Button onClick={TokenDonation} ml={2} w="10rem" pb={0.5}>Send</Button>}
                                                        </Box>
                                                    </Box>
                                                </Center>
                                                
                                            </Box>}
                                        </Box>}
                                    <Box h="20%" w="100%" d="flex" mt={5} columnGap={5}>
                                        <Button onClick={() => setTab(1)} fontWeight="bold" w="50%" fontSize="1.1rem" bg="transparent" border="1px solid white">NFT</Button>
                                        <Button onClick={() => {setTab(2);setSuccess(false)}} w="50%" _hover={{bg : 'rgb(219, 195, 50,0.8)'}} fontSize="1.1rem" bg="#DBC332" color="black" fontWeight="bold">Token</Button>
                                    </Box>
                                </Box>

                        </Center>
                    
                  
                   </Box>
                  </ModalBody>
                    
                  
                </ModalContent>
              </Modal>
    </>
  )
}

export default Donate