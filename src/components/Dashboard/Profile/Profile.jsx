import React from 'react'
import {Box, Center, Text, useColorMode,Avatar,Button} from "@chakra-ui/react"
import meta from '../../../assets/meta.jpeg'
import img5 from '../../../assets/img5.jpg'
import ReactPlayer from 'react-player/lazy'
import {Link} from "react-router-dom"

function Profile() {
    const {colorMode} = useColorMode();

    const videos = [
        {
          videoUrl : "https://www.youtube.com/watch?v=9QvRjjNzRMQ",
          title : "Let's win this battle together",
          watchingOrViews : '882,766',
    
        },
        {
          videoUrl : "https://www.youtube.com/watch?v=UfLvR5kpVvY",
          title : 'WE’RE BACK!! AXIE  ARENA',
          watchingOrViews : '125,110',
    
        },
        {
          videoUrl : "https://www.youtube.com/watch?v=SxXwY_Ococg",
          title : 'Just Chatting with you Heroes',
          watchingOrViews : '331,842',
    
        },
        {
          videoUrl : "https://www.youtube.com/watch?v=_690qnuONUQ",
          title : 'Live with the champions',
          watchingOrViews : '70,857',
    
        },
    
      ]

    return (
      <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
            <Center>
              <Box width="95%" height="100%" >
                      <Box width="100%">
                          <Text width="100%" as="h1" fontSize="1.7rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pt={3} pb={5}  fontWeight="bold">Profile</Text>
                      </Box>
                    <Box maxHeight="70vh" width="100%" overflowY="auto">
                        <Box height="20vh" width="100%" borderRadius="5px" bgImage={`url(${meta})`} bgSize="cover">
                           
                            
                        </Box>
                        
                        <Box height="50vh">
                            <Box d="flex" pl={2} pt={2} >
                                <Box w="80%" d="flex">
                                    <Avatar src={img5} w="4rem" h="4rem" />
                                    <Box pl={5} pt={2}>
                                        <Text as="h3" color="#D5BD31" fontSize="1.2rem" fontWeight="bold">Skidrow</Text>
                                        <Text as="h4" color="rgb(255,255,255,0.5)" fontSize="0.9rem">320 Followers</Text>
                                    </Box>
                                </Box>
                                <Box w="20%" pr={2}>
                                    <Link to="/content">
                                        <Button  fontSize="1.1rem" height="75%" color="black" w="100%" mt={2} bg="#3EA6FF" _hover={{bg : "rgb(62, 166, 255,0.8)"}} _active={{bg : 'rgb(62, 166, 255,0.8)'}}>Manage Videos</Button>
                                    </Link>
                                </Box>
                                
                                
                            </Box>
                            <Text cursor="pointer" color="rgb(255,255,255,0.85)" as="h2" fontSize="1.2rem" fontWeight="bold" pt={5} pb={2} w="6%" borderBottom="2px solid rgb(255,255,255,0.85)">Videos</Text>
                            <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" gap={5} mt={5}>
                            {videos.map(({ title, watchingOrViews, videoUrl}) => (
        
                                <Box borderRadius="20px" height="10.3rem" >
                                {
                                /* Main Player box */
                                
                                }
                            <Box cursor="pointer" >
                                    
                                    
                                        <ReactPlayer  url={videoUrl} height="100%" width="100%" />
                            </Box>

                                    
                                            <Box d="flex" pt={2}>
                                                        

                                                            <Box pl={5}>
                                                                
                                                            <Text as="h2" pt={1} color="rgb(255,255,255,0.85)" fontWeight="bold" fontSize="1rem">{title}</Text>
                                                            <Text as="h2" color="#595B5D" fontSize="0.8rem">{watchingOrViews} views</Text>

                                                            
                                                            </Box>
                                            </Box>
                                </Box>
                            ))}
      
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Center>
        </Box>
  )
}

export default Profile