import React from 'react'
import {Box, Center, Image , useColorMode , Avatar, AvatarBadge} from '@chakra-ui/react'
import {BsFillPersonFill} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import axie from '../../../assets/axie-infinity.png';
import alienworlds from '../../../assets/alienworlds.png';
import splinterlands from '../../../assets/splinterlands.png';
import img1 from '../../../assets/img1.PNG';
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg';
import img4 from '../../../assets/img4.jpg'

function RightBar() {
  const {colorMode} = useColorMode(); 
  return (
           <Box width="8%" bg={colorMode === "dark" ? "#111315" : "white"} height="100vh">

            <Center justifyContent="center" d="flex" flexDirection="column" alignContent="center" textAlign="center">
                          <Box label="Studio" cursor="pointer" bg="rgb(39, 42, 45,0.61)" mt={5} width="2.4rem" height="2.4rem" borderRadius="50%">
                                <Center height="100%"><BsFillPersonFill size="1.5rem" fill='white' /></Center>
                            
                            </Box>
                            <Box mt={6} width={["auto","3.2rem","3.4rem","3.4rem"]} height="16rem" borderRadius="60px" p={2.5}>
                                  <Center height="100%" d="flex" flexDirection="column" justifyContent="space-between">

                                  <Box label="Studio" cursor="pointer" bg="blue" width="2.2rem" height="2.2rem" borderRadius="50%">
                                    {/* <Image src={img1} alt="John" width="2.2rem" height="2.2rem" borderRadius="50%" position="absolute" />
                                      <Box position="absolute" pl={5} pt={7}>
                                        <BsCircleFill size="0.6rem" fill='#55D64F' />
                                      </Box> */}
                                      <Avatar name='YoungBd' size="2.2rem" src={img1} >
                                        <AvatarBadge boxSize='1rem' bg='#55D64F' />
                                      </Avatar>
                                
                                </Box>
                                <Box label="Studio" cursor="pointer" bg="blue" width="2.2rem" height="2.2rem" borderRadius="50%">
                                    {/* <Image src={img2} alt="Kate" width="2.2rem" height="2.2rem" borderRadius="50%" position="absolute" />
                                    <Box position="absolute" pl={5} pt={7}>
                                        <BsCircleFill size="0.6rem" fill='#55D64F' />
                                      </Box> */}

                                      <Avatar name='Kate' size="2.2rem" src={img2} >
                                        <AvatarBadge boxSize='1rem' bg='#55D64F' />
                                      </Avatar>
                                </Box>
                                <Box label="Studio" cursor="pointer" bg="blue" width="2.2rem" height="2.2rem" borderRadius="50%">
                                  {/* <Image src={img3} alt="alex" width="2.2rem" height="2.2rem" borderRadius="50%" position="absolute" />
                                  <Box position="absolute" pl={5} pt={7}>
                                        <BsCircleFill size="0.6rem" fill='#55D64F' />
                                      </Box> */}

                                      <Avatar name='Alex' size="2.2rem" src={img3} >
                                        <AvatarBadge boxSize='1rem' bg='#55D64F' />
                                      </Avatar>
                                </Box>
                                <Box label="Studio" cursor="pointer" bg="blue" width="2.2rem" height="2.2rem" borderRadius="50%">
                                  {/* <Image src={img4} alt="alina" width="2.2rem" height="2.2rem" borderRadius="50%" position="absolute" />
                                  <Box position="absolute" pl={5} pt={7}>
                                        <BsCircleFill size="0.6rem" fill='#55D64F' />
                                      </Box> */}
                                      <Avatar name='Alina' size="2.2rem" src={img4} >
                                        <AvatarBadge boxSize='1rem' bg='#55D64F' />
                                      </Avatar>
                                </Box>
                                
                                <Box label="Studio" cursor="pointer" bg="rgb(36, 38, 39,0.63)" width="2.2rem" height="2.2rem" borderRadius="50%">
                                    <Center height="100%"><AiOutlinePlus size="1.5rem" fill='white' /></Center>
                                
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


            </Box>
  )
}

export default RightBar