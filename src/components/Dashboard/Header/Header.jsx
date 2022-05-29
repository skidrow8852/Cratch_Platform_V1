import React from 'react'
import {Box, Text, Avatar,Center, Input, Button, Stack, InputGroup, InputLeftElement, InputRightElement} from '@chakra-ui/react'
import img5 from '../../../assets/img5.jpg';
import {FiSearch, FiSettings} from 'react-icons/fi';
import {AiOutlineDown,AiOutlineVideoCameraAdd} from "react-icons/ai"
import {IoIosNotificationsOutline} from "react-icons/io"
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
                  <FiSettings size="1.4rem" color='#595B5D' cursor="pointer" />
                  
                </Stack>
                <Stack alignContent="center" textAlign="center" justifyContent="center" ml={8} >
                <IoIosNotificationsOutline size='1.8rem' cursor="pointer" color='#595B5D' />
                </Stack>
                
                <Stack>
                    <Box pt={4} pl={6} d="flex">
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
                    
                  </Box>
                </Stack>

                  

            </Box>


    </>
  )
}

export default Header