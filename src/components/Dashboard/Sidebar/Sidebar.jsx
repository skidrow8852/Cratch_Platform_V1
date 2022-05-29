import React from 'react'
import logo from '../../../assets/logo.png'
import {Box , Center, Image, useColorMode, Tooltip} from '@chakra-ui/react';
import {BsMicrosoft, BsChatText} from 'react-icons/bs';
import {AiFillVideoCamera,AiOutlineUsergroupDelete , AiOutlineStar} from 'react-icons/ai'
import {BiSun} from 'react-icons/bi'
import {FaRegUser,FaMoon} from 'react-icons/fa'
import {MdInsertChartOutlined,MdVideoLibrary} from 'react-icons/md'
import {Link} from 'react-router-dom'

function Sidebar() {
  const [active,setActive] = React.useState(0);
  const {colorMode, toggleColorMode} = useColorMode();    // for controlling theme color 'dark' | 'light'


  return (
    <>
    <Box width="10%" height="100vh" position="sticky">
      <Box >
                  <Center justifyContent="center" d="flex" flexDirection="column" alignContent="center" textAlign="center">
                      <Image src={logo} alt="logo" width="4.5rem" pt={5}/>
                      <Link to="/">
                        <Box mt={8} bg={active === 0 ? "#FB5B78" : "rgb(89, 91, 93,0.36)"} width="3.4rem" height="3.4rem" borderRadius="50%" cursor="pointer" onClick={() => setActive(0)}>
                          <Center height="100%"><BsMicrosoft size="1rem" fill='white' /></Center>
                          
                          </Box>
                        </Link>
                        
                        <Box mt={4} bg="#242627" width={["auto","3.2rem","3.4rem","3.4rem"]} height="10rem" borderRadius="60px" p={2.5}>
                          <Center height="100%" d="flex" flexDirection="column" justifyContent="space-between">
                          <Link to="/studio">
                            <Tooltip width="200px" height="40px" color="white" fontWeight="bold" fontSize="1.3rem" bg="radial-gradient(circle at top, #7154E6 , #FB5B78)" borderRadius="50px" label='Studio' textAlign="center" placement='right'>
                                <Box label="Studio" cursor="pointer"  bg={active===1 ? "#FB5B78" : "#323435"} onClick={() => setActive(1)}  _hover={{
                                  bg: '#FB5B78'
                                }} width="2.4rem" height="2.4rem" borderRadius="50%">
                                    <Center height="100%"><AiFillVideoCamera size="1.2rem" fill='white' /></Center>
                                
                                </Box>
                                
                            </Tooltip>
                            </Link>
                            <Link to="/followers">
                                <Tooltip width="200px" height="40px" color="white" fontWeight="bold" fontSize="1.3rem" bg="radial-gradient(circle at top, #7154E6 , #FB5B78)" borderRadius="50px" label='Followers' textAlign="center" placement='right'>
                            
                                  <Box cursor="pointer" color={active===2 ? "#FB5B78" :"#595B5D"} onClick={() => setActive(2)}  _hover={{
                                      color: '#FB5B78'
                                    }} >
                                      
                                        <AiOutlineUsergroupDelete size="1.8rem" />
                                      
                                    </Box>
                               </Tooltip>
                              </Link>
                              <Link to="/content">
                                <Tooltip width="200px" height="40px" color="white" fontWeight="bold" fontSize="1.3rem" bg="radial-gradient(circle at top, #7154E6 , #FB5B78)" borderRadius="50px" label='Content' textAlign="center" placement='right'>
                                      <Box cursor="pointer" color={active===3 ? "#FB5B78" :"#595B5D"} onClick={() => setActive(3)} _hover={{
                                        color: '#FB5B78'
                                      }} >
                                          <MdVideoLibrary size="1.5rem" />
                                      </Box>
                                 </Tooltip>
                              </Link>
                              <Link to="/favorites">
                                  <Tooltip width="200px" height="40px" color="white" fontWeight="bold" fontSize="1.3rem" bg="radial-gradient(circle at top, #7154E6 , #FB5B78)" borderRadius="50px" label='Favorites' textAlign="center" placement='right'>
                                      <Box cursor="pointer" color={active===4 ? "#FB5B78" :"#595B5D"} onClick={() => setActive(4)} _hover={{
                                        color: '#FB5B78'
                                      }} >
                                          <AiOutlineStar size="1.7rem" />
                                      </Box>
                                  </Tooltip>
                            </Link>
                            </Center>
                           

                        </Box>
                        <Box mt={1} width="3.4rem" height="7rem" borderRadius="60px" p={2}>
                            <Center height="100%" d="flex" flexDirection="column" justifyContent="space-between" cursor="pointer">
                            <Link to="/analytics">
                              <Tooltip width="200px" height="40px" color="white" fontWeight="bold" fontSize="1.3rem" bg="radial-gradient(circle at top, #7154E6 , #FB5B78)" borderRadius="50px" label='Analytics' textAlign="center" placement='right'>
                                    <Box cursor="pointer" color={active===5 ? "#FB5B78" :"#595B5D"} onClick={() => setActive(5)} _hover={{
                                        color: '#FB5B78'
                                      }} >
                                        <MdInsertChartOutlined size="1.7rem"/>
                                    </Box>
                              </Tooltip>
                            </Link>
                            <Link to="/messages">
                                <Tooltip width="200px" height="40px" color="white" fontWeight="bold" fontSize="1.3rem" bg="radial-gradient(circle at top, #7154E6 , #FB5B78)" borderRadius="50px" label='Messages' textAlign="center" placement='right'>
                                      
                                    <Box cursor="pointer" color={active===7 ? "#FB5B78" :"#595B5D"} onClick={() => setActive(7)} _hover={{
                                            color: '#FB5B78'
                                          }} >
                                              <BsChatText size="1.5rem" />
                                    </Box>
                                      
                                  </Tooltip>
                              </Link>
                              <Tooltip width="200px" height="40px" color="white" fontWeight="bold" fontSize="1.3rem" bg="radial-gradient(circle at top, #7154E6 , #FB5B78)" borderRadius="50px" label='Profile' textAlign="center" placement='right'>
                                  <Box cursor="pointer" color={active===8 ? "#FB5B78" :"#595B5D"} onClick={() => setActive(8)} _hover={{
                                    color: '#FB5B78'
                                  }} >
                                        <FaRegUser size="1.5rem" />
                                  </Box>
                              </Tooltip>
                            
                            </Center>
                        </Box>

                        <Center cursor="pointer" mt={120} onClick={() => toggleColorMode()} bg={colorMode === "dark" ? "#323435" : '#f4f2f2'} width="3.4rem" height="6rem" justifyContent="space-between" p={2} borderRadius="60px" d="flex" flexDirection="column"> 
                          { colorMode ==="dark" ? <>    
                              <BiSun size="1.8rem" fill="#595B5D"/>
                              <Box  bg="white" width="2.6rem" height="2.6rem" borderRadius="50%">
                                    <Center height="100%"><FaMoon size="1.2rem" fill='black' /></Center>
                                
                                </Box>
                            </>
                            :
                            <>
                            <Box  bg="#323435" width="2.6rem" height="2.6rem" borderRadius="50%">
                               <Center height="100%"><BiSun size="1.5rem" fill="white"  /> </Center> 
                            </Box>
                              
                                    <FaMoon size="1.5rem" fill='black' />
                                
                                
                            </>
                          }
                        </Center>
                      
                  </Center>
              </Box>
</Box>

    </>
  )
}

export default Sidebar