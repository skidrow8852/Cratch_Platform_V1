import React from 'react'
import {Box, Center,Text,Avatar,useColorMode, Tooltip} from "@chakra-ui/react";
import ReactPlayer from 'react-player/lazy';
import img7 from "../../../assets/img7.jpg"
import {AiOutlineStar} from 'react-icons/ai'

function Favorites() {

  const data = [
    {
      videoUrl : "https://www.youtube.com/watch?v=gU5casDWbwI",
      title : "🔴Important day for crypto! What you must know",
      img : img7,
      name : "SkidrowMask"
    },
    
  ]

  const {colorMode} = useColorMode();
  return (
    <>

    <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
          <Center>
            <Box width="95%" height="100%" >
                    <Box width="100%" borderBottom="1px solid rgb(255,255,255,0.15)">
                        <Text width="100%" as="h1" fontSize="1.7rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pt={3} pb={5}  fontWeight="bold">Favorites</Text>
                    </Box>
                    <Box overflowY="auto" height="70vh" pt={8}>
                      <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" gap={7} >
                        {data.map(({img, videoUrl,title,name}) => (
                          <Box>
                                                    
                            <Box>
                                  <ReactPlayer borderRadius="1px" width="100%" height="100%" url={videoUrl}  />
                                  <Text pt={2}>{title}</Text>
                                  <Box d="flex" pt={2}>
                                                            
                                      <Avatar src={img} h="2rem" w="2rem"/>
                                      <Center>
                                          <Text color="#FFD600" cursor="pointer" fontWeight="bold" pl={3}>{name}</Text>
                                          <Tooltip label="Delete"><Box pl={5} color="#FB5B78"><AiOutlineStar cursor="pointer" size="1.7rem" /></Box></Tooltip>
                                      </Center>
                                                            
                                  </Box>
                            </Box>
                                                
                        </Box>
                        ))}
                        
                      </Box>
                    </Box>
                    

              </Box>
            </Center>
      </Box>


    </>
  )
}

export default Favorites