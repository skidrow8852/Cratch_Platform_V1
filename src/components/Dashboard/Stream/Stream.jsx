import React from 'react'
import {Box, Text, Center, useColorMode, Avatar, Button, Input} from "@chakra-ui/react"
import img6 from "../../../assets/img6.jpg"
import {AiFillCheckCircle} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {BsFillPersonFill,BsFillSuitHeartFill,BsFillHeartFill,BsFillEyeFill} from 'react-icons/bs'
import {RiUserFollowLine,RiMessage3Line} from 'react-icons/ri'
import ReactPlayer from 'react-player/lazy'


function Stream() {
    const {colorMode} = useColorMode()
    const [click,setClick] = React.useState(false)

  return (
    <>
    <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
      <Center w="100%" h="100%">
         <Box width="98%" height="100%" d='flex'>
            <Box width="70%" height="100%" >
              <Center width="100%" h="10%" >
                <Box d="flex" w="95%" h="100%">
                    <Box w="33%" h="100%" >
                        <Box pt={2}  d="flex">
                          
                            
                                        <Box pt={1} label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%">
                                              {/* <Image src={img6} alt="John" width="2.3rem" height="2.3rem" borderRadius="50%" /> */}

                                              <Avatar name='YoungBd' size="2.3rem" src={img6} />
                                                
                                                
                                          
                                          </Box>

                                          <Box pl={3}>
                                              <Box d="flex">
                                                <Text as="h3"  fontWeight="600" cursor="pointer">YoungBd</Text>
                                                <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>
                                              </Box>
                                            
                                            <Text as="h2" color="rgb(255,255,255,0.5)" fontSize="0.8rem">1M Followers</Text>
                                          </Box>

                                         
                          
                          
                        </Box>
                    </Box>
                    <Box w="33%" h="100%">
                      <Center w="100%" h="100%" columnGap={4}>
                        <Box  d="flex" width="4rem" height="1.5rem" bg="#FB5B78" borderRadius="7px">
                          <Center w="100%" h="100%">
                            <Box d="flex">
                              <Box pt={0.5}><HiFire /></Box>
                                
                              <Text  fontSize="0.8rem"  fontWeight="600" >Live</Text>
                            </Box>
                            
                          </Center>
                          
                        </Box>
                        <Box d="flex">
                            <BsFillPersonFill size="1.3rem" fill="#47494A"/>
                            <Text as="p" fontWeight="bold" fontSize="0.86rem" color="rgb(255,255,255,0.89)">12 360</Text>
                        </Box>
                      </Center>
                      
                    </Box>
                    <Box w="33%" h="100%"  >
                      <Center h="100%" w="100%" columnGap={2}>
                        <Box w="50%">
                          <Button leftIcon={<RiUserFollowLine />} w="100%" _hover={{bg : "rgb(69, 82, 254,0.8)"}} _active={{bg : "rgb(69, 82, 254,0.8)"}} bg="#4552FE">Follow</Button>
                        </Box>
                        <Box w="50%">
                            <Button leftIcon={<BsFillSuitHeartFill />} w="100%" border="1px solid rgb(255,255,255,0.6)">Support</Button>
                        </Box>
                      </Center>
                      

                    </Box>
                </Box>
              </Center>
              <Box w="100%" h="75%" borderRadius="3px">
                <ReactPlayer width="100%" height="100%" url='https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8' playing={true} controls={true} volume={1} />
              </Box>
              <Center w="100%" h="15%" >
                <Box w="67%" h="100%">
                  <Center w="100%" h="100%" >
                     <Box w="92%" h="100%" pt={3.5}>
                      <Text noOfLines={2} color="rgb(255,255,255,0.9)" lineHeight="2rem" fontFamily="sans-serif" fontSize="1.5rem" as="h2">Let's Fucking Win this damn battle jsjdhjsd jhs jdh sjh djhsgd jkhsgdkjshgdkshjgd hjg jsdy jsdjh i ghjkhsbdk jhg</Text>
                    </Box>
                  </Center>
                   
                </Box>
                  <Box w="33%" h="100%">
                          <Center w="100%" h="100%" columnGap={10} justifyContent="right" pr={8}>
                              <Box >
                                  <Box cursor="pointer" onClick={() => setClick(!click)} color={click ? "#FB5B78" : ""}>
                                    <BsFillHeartFill size="1.3rem" />
                                  </Box>
                                  <Text pt={1} as="p"  fontSize="1rem" color="rgb(255,255,255,0.89)">12k</Text>
                              </Box>
                              <Box >
                                  <RiMessage3Line size="1.4rem" />
                                  <Text pt={1} as="p"  fontSize="1rem" color="rgb(255,255,255,0.89)">360</Text>
                              </Box>
                              <Box >
                                  <BsFillEyeFill size="1.4rem"/>
                                  <Text pt={1} as="p"  fontSize="1rem" color="rgb(255,255,255,0.89)">10k</Text>
                              </Box>
                          </Center>
                          
                        </Box>
                </Center>
            </Box>
            <Box w="30%" height="100%">
              <Box h="10%" pt={2} pl={5}>
                  <Text as="h3" fontSize="1.2rem" fontWeight="bold">Live chat room</Text>
              </Box>
              <Box h="75%" overflowY="auto" maxHeight="75%" pl={5}>
                  <Box>
                              <Box w="auto"  d="flex">
                                              <Avatar w="2.2rem" h="2.2rem" src={img6} ml={1} mt={1} />
                                              <Box>
                                                <Box d="flex" pl={3}>
                                                  <Text as="h4" >Skidrow Batata</Text>
                                                  <Text pl={5} pt={1} color="rgb(255,255,255,0.5)" fontSize="0.8rem">2:03 PM</Text>
                                                </Box>
                                                
                                                <Text w="auto" bg="#212024" mt={1} pl={5} ml={2} pt={2} pb={2} pr={5} borderRadius="2px 10px 10px 10px">  
                                                This got even more crazy hahah!
                                                </Text>
                                              </Box>
                                             
                                              
                                          </Box>
                                          
                  </Box>
                                      
              </Box>
              <Center h="12%" w="100%" position="sticky">
                <Box w="98%" h="100%"  bg="#101014" ml={5} borderRadius="5px" d="flex">
                                    <Input height="100%" width="75%" placeholder="Send a message" border="none" _focus={{border : "none"}} />
                                            <Box  w="25%" mr={4 }>
                                               <Center w="100%" h="100%">
                                                  <Button w="100%" _hover={{bg : "rgb(69, 82, 254,0.8)"}} _active={{bg : "rgb(69, 82, 254,0.8)"}} bg="#4552FE" pb={1} height="60%" cursor="pointer" textAlign="center" >Send</Button>
                                               </Center>
                                                
                                            </Box>
                </Box>
              </Center>
              

            </Box>
         </Box>
      </Center>
    </Box>
    </>

  )
}

export default Stream