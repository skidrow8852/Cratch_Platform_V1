import React from 'react'
import {useColorMode, Box, Center, Text, Avatar,AvatarBadge, Input,Button} from "@chakra-ui/react"
import img5 from "../../../assets/img5.jpg"
import {AiOutlineSend} from "react-icons/ai"

function Messages() {

    const {colorMode} = useColorMode();

    const data = [
        {
            img: img5,
            username: "Vlad Arena",
            latestMessage: "Hello this is just a test message to see if the UI looks good.",
            timeSent : "3:05 AM",
            isOnline : true
        },
        
    ]

  return (
    <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
          <Center w="100%" h="100%">
            <Box width="95%" height="100%" >
                    <Box width="100%">
                        <Text width="100%" as="h1" fontSize="1.7rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pt={3} pb={5}  fontWeight="bold">Messages</Text>
                    </Box>
                    <Box d="flex" boxShadow="6px 6px rgb(255,255,255,0.3)" borderRadius="5px">
                        <Box width="40%" bg="rgb(89, 91, 93,0.55)" height="100%" borderRadius="5px 0px 0px 5px">
                            <Box overflowY="auto" height="70vh">
                                <Box width="100%" d="grid" gridAutoRows="4fr 4fr 4fr 4fr" gap={4} pt={5}>
                                    {data.map(({img,username,latestMessage,timeSent,isOnline}) => (
                                        <Box cursor="pointer" _hover={{bg: "rgb(31, 34, 35)"}}>
                                        <Center width="100%">
                                            <Box width="95%" d="flex" mt={3} mb={3}>
                                                <Avatar w="2.5rem" h="2.5rem" src={img} >
                                                    {isOnline ?<AvatarBadge boxSize='0.85rem' bg='#55D64F' /> : <AvatarBadge boxSize='0.85rem' bg='gray' />}
                                                </Avatar>
                                                <Box width="80%" ml={2}>
                                                     <Text as="h3">{username}</Text>
                                                     <Text as="p" color="rgb(255,255,255,0.5)" fontSize="0.85rem" noOfLines={1}>{latestMessage}</Text>
                                                </Box>
                                                <Box width="20%" pl={5} pt={2}>
                                                    <Text as="p" fontSize="0.9rem">{timeSent}</Text>
                                                </Box>
                                                
                                            </Box>
                                        </Center>
                                        
                                    </Box>
                                    ))}
                                    

                              

                                    
                                    
                                </Box> 
                            </Box>
                            
                        </Box>

                        <Box width="60%" bg="rgb(36, 38, 39,0.8)" height="100%" borderRadius="0px 5px 0px 0px">
                            <Box overflowY="auto" height="60vh" ml={5} mr={5}>
                                <Box width="100%" d="grid" gridTemplateRows="4fr 4fr 4fr 4fr" gap={5} pt={5}>
                                        <Box w="auto"  d="flex">
                                            <Avatar w="2rem" h="2rem" src={img5} ml={1} mt={1} />
                                            <Text bg="rgb(18, 19, 20,0.2)" pl={5} ml={2} pt={2} pb={2} pr={5} borderRadius="2px 10px 10px 10px">  
                                                sjhgdsjhgdsbjkdjshgdhsjgd
                                            </Text>
                                            <Center pl={5}>
                                                <Text color="rgb(255,255,255,0.5)" fontSize="0.8rem">2:03 PM</Text>
                                            </Center>
                                            
                                        </Box>
                                        <Box w="auto"  d="flex" justifyContent="right">
                                            <Center pr={3} textAlign="right">
                                                <Text color="rgb(255,255,255,0.5)" fontSize="0.8rem">2:03 PM</Text>
                                            </Center>
                                            <Text bg="#4552FE" pl={5} ml={2} pt={2} pb={2} pr={5} borderRadius="10px 2px 10px 10px">  
                                                Weill kjshdnkshdlkjhnlkj hkjn lkkjh lkj j
                                            </Text>
                                            
                                            <Avatar w="2rem" h="2rem" src={img5} ml={2} mt={1} />
                                        </Box>
                                       
                                </Box>
                            </Box>
                            <Box height="10vh" d="sticky" width="100%" borderRadius="0px 0px 5px 0px" borderTop="1px solid rgb(255,255,255,0.3)">
                                    <Center width="100%" height="100%">
                                        <Box w="95%" h="90%" d="flex">
                                            <Input height="100%" width="90%" placeholder="Send a message" border="none" _focus={{border : "none"}} />
                                            <Box pl={6} pt={1.5} >
                                               
                                                <Button _hover={{bg : "rgb(69, 82, 254,0.8)"}} _active={{bg : "rgb(69, 82, 254,0.8)"}} bg="#4552FE" pb={1} height="90%" cursor="pointer" textAlign="center" rightIcon={<AiOutlineSend />}>Send</Button>
                                            </Box>
                                        </Box>
                                    </Center>

                            </Box>
                        </Box>
                    </Box>
                    
            </Box>
            </Center>
    </Box>
  )
}

export default Messages