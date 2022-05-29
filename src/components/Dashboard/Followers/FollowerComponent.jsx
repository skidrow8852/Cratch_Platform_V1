import React from 'react'
import {Box,Center,Text,Button, Avatar} from '@chakra-ui/react';
import {AiFillCheckCircle} from "react-icons/ai"
import {Link} from "react-router-dom";

function FollowerComponent({username,img,isVerified,followers, userId,follow}) {
  return (
    <>  
    <Box pt={2} pl={7} d="flex">
                <Center width="100%">
                  <Box width="40%" d="flex">
                      <Box  label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%" >
                                    {/* <Image src={img6} alt="John" width="2.3rem" height="2.3rem" borderRadius="50%" /> */}

                                    <Avatar name='YoungBd' size="2.3rem" src={img} />
                                      
                                      
                                
                                </Box>

                                <Box pl={5}>
                                    <Box d="flex">
                                      <Text as="h3" color="#FFD600" fontWeight="600" cursor="pointer">{username}</Text>
                                      {isVerified && <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>}
                                    </Box>
                                  
                                  <Text as="h2" color="#595B5D" fontSize="0.8rem">{followers} Followers</Text>
                                </Box>
                  </Box>
                              
                              <Box width="60%" d="flex"  ml={10} pr={10 }>
                                  <Box width="50%">
                                     <Button _hover={{
                                            bg: '#63B3ED'
                                            }} _active={{bg: '#63B3ED'}} bg={follow ? "rgb(66, 153, 225,0.45)" : "blue.400"} 
                                            
                                            pb={1}
                                            borderRadius="5px" height="2rem" width="7rem">
                                            {follow ? `Following`  : `Follow`}
                                            </Button> 
                                  </Box>
                                   <Box width="50%">
                                       <Link to={`/message/user:${userId}`}>
                                            <Button _hover={{
                                                bg: 'rgb(255,255,255,0.1)'
                                                }} _active={{bg: 'transparent'}} bg="transparent" border="1px solid white" 
                                                 
                                                pb={1}
                                                borderRadius="5px" height="2rem" width="7rem">
                                                Message
                                            </Button>
                                        </Link>
                                   </Box>
                                  
                              </Box>

                               
                </Center>
                
              </Box>



    </>
  )
}

export default FollowerComponent