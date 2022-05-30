import React from 'react'
import {Box, Text, Avatar,Center, Input, Button, Stack, InputGroup, AvatarBadge,
        InputLeftElement, InputRightElement,Menu,MenuList,MenuItem,MenuButton} from '@chakra-ui/react'
import img5 from '../../../assets/img5.jpg';
import {FiSearch, FiSettings} from 'react-icons/fi';
import {AiOutlineDown,AiOutlineVideoCameraAdd,AiOutlineLogout} from "react-icons/ai"
import {IoIosNotificationsOutline} from "react-icons/io"
import {FaRegUser} from "react-icons/fa"
import {Link} from 'react-router-dom'



function Header() {

    const Search = () => {
        return(
          <Box >
            <Button height="2.5rem" width="5rem" bg="rgb(89, 91, 93,0.36)" color="rgb(255,255,255,0.63)" borderRadius="50px" fontSize="0.9rem">Search</Button>
          </Box>
        )
      }
    
      const AiCamera = () => {
        return(
          <Box borderRadius="50%" bg="rgb(145, 92, 228, 0.83)" height="2rem" width="2rem" mt={1}>
              <Center height="100%">
                <AiOutlineVideoCameraAdd  size="1.3rem"  />
              </Center>
          </Box>
        )
      }
    


  return (
    <>
    <Box width="100%" height="12%" d="flex">
                  <Stack width="35%" alignContent="center" textAlign="center" justifyContent="center" ml={8} >
                      <InputGroup >
                        <InputLeftElement pt={2} pl={4} children={<FiSearch color="#595B5D" size="1.5rem" />}  />
                        <Input _focus={{outline: "1px solid #595B5D "}} border="none" bg="#242627" pb={1} color="rgb(255,255,255,0.63)" type="text" pl={12} placeholder="Search"  borderRadius="50px" h="3.125rem"  />
                        <InputRightElement pt={2.5} pr={12} children={<Search/>} />
                      </InputGroup>
                </Stack>
                

                
                <Stack alignContent="center" textAlign="center" justifyContent="center" ml={24}>
                <Link to="/stream">
                    <Button pb={1} _hover={{
                    bg: "rgb(38, 29, 55,0.89)"
                  }} _active={{
                    bg: "rgb(38, 29, 55,0.89)"
                  }} bg="#261D37" h="3.125rem" leftIcon={<AiCamera />} color="rgb(255,255,255,0.85)" borderRadius="50px">
                  
                        Start Stream
                    </Button>
                  </Link>
                </Stack>
                
                <Stack alignContent="center" textAlign="center" justifyContent="center" ml={28} >
                  <Link to="/settings">
                    <FiSettings size="1.4rem" color='#595B5D' cursor="pointer" />
                  </Link>
                  
                </Stack>
                <Stack alignContent="center" textAlign="center" justifyContent="center" ml={8} >
                    <Menu isLazy>
                      <MenuButton d="flex">
                        <Avatar bg="transparent" icon={<IoIosNotificationsOutline size='1.8rem' cursor="pointer" color='#595B5D' />}>
                          <AvatarBadge mb={5} pb={0.5} mr={1.5} textAlign="center" borderColor="transparent" color="white" w="1rem" h="1rem" bg="red" fontSize="0.75rem">3</AvatarBadge>
                        </Avatar></MenuButton>
                      <MenuList>
                        {/* MenuItems are not rendered unless Menu is open */}
                        <MenuItem  borderBottom="1px solid rgb(255,255,255,0.1)">You have a new message from SkidrowMusk</MenuItem>
                        <MenuItem borderBottom="1px solid rgb(255,255,255,0.1)">You received 230 $CRTC from DavinciJ15</MenuItem>
                        <MenuItem borderBottom="1px solid rgb(255,255,255,0.1)">Andrei554 followed you</MenuItem>
                      </MenuList>
                    </Menu>
                
                </Stack>
                
                <Stack>
                    <Box pt={4} pl={6} d="flex">
                      <Menu isLazy >
                        <MenuButton >
                          <Center>
                      
                                  <Box ml={20} label="Studio" cursor="pointer" width="3rem" height="3rem" borderRadius="50%">
                                        {/* <Image src={img5} alt="John" width="3rem" height="3rem" borderRadius="50%" /> */}
                                        
                      
                            <Avatar name='Skidrow' src={img5} />
                        
                      
                    
                                        
                                          
                                    
                                    </Box>

                                    <Box pl={5}>
                                      
                                      <Text as="h3" color="rgb(255,255,255,0.90)" fontWeight="600" cursor="pointer">Skidrow</Text>
                                      <Text as="h2" color="#E4A101" fontSize="0.8rem">Online</Text>
                                    </Box>
                                    <Center  pl={12} pb={2} cursor="pointer">
                                      <AiOutlineDown size="1.2rem" />
                                    </Center>

                    </Center>
                    </MenuButton>
                          <MenuList ml={20} bg="#242627" >
                              {/* MenuItems are not rendered unless Menu is open */}
                              <MenuItem  borderBottom="1px solid rgb(255,255,255,0.1)" fontSize="1.1rem">
                                
                                  <Center w="100%"><Box>
                                    <Text pl={2} pb={2} fontWeight="bold" color="#FFD600">750 $CRTC</Text> 
                                      <Button _hover={{bg : "rgb(62, 166, 255,0.89)"}} _active={{bg : "rgb(62, 166, 255,0.89)"}} bg="#3EA6FF" mb={2} color="#111315">Withdraw</Button></Box>
                                  </Center>
                                      
                                
                              </MenuItem>
                              <Link to="/profile">
                                 <MenuItem  borderBottom="1px solid rgb(255,255,255,0.1)" fontSize="1.1rem">
                                     <Box pr={3} color="rgb(255,255,255,0.5)"><FaRegUser /></Box>Profile
                                  </MenuItem>
                                </Link>
                                <Link to="/settings">
                                  <MenuItem  borderBottom="1px solid rgb(255,255,255,0.1)" fontSize="1.1rem"><Box pr={3} color="rgb(255,255,255,0.5)"><FiSettings /></Box>Settings</MenuItem>
                                </Link>
                              
                              <MenuItem borderBottom="1px solid rgb(255,255,255,0.1)" fontSize="1.1rem"><Box pr={3} color="rgb(255,255,255,0.5)"><AiOutlineLogout /></Box>Logout</MenuItem>
                            </MenuList>
                    </Menu>
                    
                  </Box>
                </Stack>

                  

            </Box>


    </>
  )
}

export default Header