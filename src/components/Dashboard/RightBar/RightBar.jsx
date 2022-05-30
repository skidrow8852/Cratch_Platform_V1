import React from 'react'
import {Box, Center, Image , useColorMode ,Text, Avatar, AvatarBadge,Modal,ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,useDisclosure, Button} from '@chakra-ui/react'
import {BsFillPersonFill} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import axie from '../../../assets/axie-infinity.png';
import alienworlds from '../../../assets/alienworlds.png';
import splinterlands from '../../../assets/splinterlands.png';
import img1 from '../../../assets/img1.PNG';
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg';
import img4 from '../../../assets/img4.jpg';
import {AiFillCheckCircle} from "react-icons/ai"

const Followersdata = [
  {
      username: "YoungBd",
      img : img2,
      isVerified : true,
      followers: "120K",
      follow : false,
      isOnline: true,
      userId : 11230
  },
  
  {
      username: "Skidrow",
      img : img3,
      isVerified : true,
      followers: "700K",
      follow : false,
      isOnline: true,
      userId : 130
  },
  {
      username: "DavinciJ15",
      img : img1,
      isVerified : false,
      followers: "1M",
      follow : false,
      isOnline: false,
      userId : 230
  },
  {
      username: "AhselySs",
      img : img4,
      isVerified : true,
      followers: "180K",
      follow : false,
      isOnline: false,
      userId : 70
  },
  {
      username: "JohnDoe",
      img : img2,
      isVerified : false,
      followers: "720K",
      follow : true,
      isOnline: true,
      userId : 7230
  },
  {
      username: "JomaTech",
      img : img1,
      isVerified : true,
      followers: "2M",
      follow : false,
      isOnline: true,
      userId : 196
  }
]

const data = [
  {
    img : img1,
    isOnline : true
  },
  {
    img : img2,
    isOnline : true
  },
  {
    img : img3,
    isOnline : true
  },
  {
    img : img4,
    isOnline : true
  },
]

function RightBar() {
  const {colorMode} = useColorMode(); 
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
           <Box width="8%" bg={colorMode === "dark" ? "#111315" : "white"} height="100vh">

            <Center justifyContent="center" d="flex" flexDirection="column" alignContent="center" textAlign="center">
                          <Box label="Studio" cursor="pointer" bg="rgb(39, 42, 45,0.61)" mt={5} width="2.4rem" height="2.4rem" borderRadius="50%">
                                <Center height="100%"><BsFillPersonFill size="1.5rem" fill='white' /></Center>
                            
                            </Box>
                            <Box mt={6} width={["auto","3.2rem","3.4rem","3.4rem"]} height="16rem" borderRadius="60px" p={2.5}>
                                  <Center height="100%" d="flex" flexDirection="column" justifyContent="space-between">
                                        {data.map(({img,isOnline}) => (
                                          <Box label="Studio" cursor="pointer" bg="blue" width="2.2rem" height="2.2rem" borderRadius="50%">
                                                              {/* <Image src={img1} alt="John" width="2.2rem" height="2.2rem" borderRadius="50%" position="absolute" />
                                                                <Box position="absolute" pl={5} pt={7}>
                                                                  <BsCircleFill size="0.6rem" fill='#55D64F' />
                                                                </Box> */}
                                                                <Avatar name='YoungBd' size="2.2rem" src={img} >
                                                                  {isOnline ? <AvatarBadge boxSize='1rem' bg='#55D64F' /> : <AvatarBadge boxSize='1rem' bg='grey' />} 
                                                                </Avatar>
                                                          
                                                          </Box>
                                        ))}
                             
                                
                                <Box label="Studio" cursor="pointer" bg="rgb(36, 38, 39,0.63)" width="2.2rem" height="2.2rem" borderRadius="50%">
                                    <Center height="100%"><AiOutlinePlus size="1.5rem" fill='white' onClick={onOpen}/></Center>
                                
                                </Box>
                                  </Center>
                            </Box>

                            <Box mt={10} width={["auto","4rem","4.5rem","4.5rem"]} height="10rem" borderRadius="60px" p={2.5}>
                                  <Center height="100%" d="flex" flexDirection="column" justifyContent="space-between">

                                <Image src={axie} alt="axie" width="2.8rem"  cursor="pointer" />
                                <Image src={splinterlands} alt="splinterlands" width="2rem" cursor="pointer" />
                                <Image src={alienworlds} alt="alienworlds" width="1.8rem" cursor="pointer" />
                                
                                  </Center>
                            </Box>
            </Center>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent borderRadius="5px" maxHeight="75vh" overflowY="auto">
                  
                  <ModalCloseButton />
                  <ModalBody pt={6} pb={6}>
                    <Box d="grid" gridTemplateColumn="4fr 4fr" gap={5} rowGap={2}  height="100%">
                      {Followersdata.map(({username,img,followers,isOnline,isVerified}) => (
                        <Box pt={2} d="flex">
                        <Center width="100%">
                          <Box w="80%" d="flex">
                          <Box width="50%" d="flex">
                              <Box  label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%" >
                                            {/* <Image src={img6} alt="John" width="2.3rem" height="2.3rem" borderRadius="50%" /> */}

                                            <Avatar name='YoungBd' size="2.3rem" src={img} >
                                            {isOnline ? <AvatarBadge boxSize='1rem' bg='#55D64F' /> : <AvatarBadge boxSize='1rem' bg='grey' />}
                                            </Avatar>
                                              
                                        
                                        </Box>

                                        <Box pl={5}>
                                            <Box d="flex">
                                              <Text as="h3" color="#FFD600" fontWeight="600" cursor="pointer">{username}</Text>
                                              {isVerified && <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>}
                                            </Box>
                                          
                                          <Text as="h2" color="#595B5D" fontSize="0.8rem">{followers} Followers</Text>
                                        </Box>
                          </Box>
                                      
                                      <Box width="50%" d="flex" pl={5} pt={1}>
                                        
                                          <Box width="100%">
                                              
                                                    <Button _hover={{
                                                        bg: 'rgb(255,255,255,0.1)'
                                                        }} _active={{bg: 'transparent'}} bg="transparent" border="1px solid white" 
                                                        
                                                        pb={1}
                                                        borderRadius="5px" height="2rem" width="7rem">
                                                        + Add
                                                    </Button>
                                                
                                          </Box>
                                          
                                      </Box>
                          </Box>
                          

                                      
                        </Center>
                  
                      </Box>
                      ))}

                      
                    

                  
                   </Box>
                  </ModalBody>
                    
                  
                </ModalContent>
              </Modal>
            </Box>
  )
}

export default RightBar