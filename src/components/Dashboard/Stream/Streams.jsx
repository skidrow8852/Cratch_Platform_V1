import React from 'react'
import {Box, Text, Image, Button} from "@chakra-ui/react"
import img5 from '../../../assets/img5.jpg';
import img6 from '../../../assets/img6.jpg';
import img7 from '../../../assets/img7.jpg';
import img2 from '../../../assets/img2.jpg'
import {AiFillCheckCircle} from "react-icons/ai"
import {BiVideoPlus} from "react-icons/bi"

import ReactPlayer from 'react-player/lazy';

function Streams() {

    const videos = [
     
        {
            videoUrl : "https://www.youtube.com/watch?v=9QvRjjNzRMQ",
            userImage : img6,
            userName : 'YoungBd',
            isVerified : true,
            isLive: true,
            title : "Let's win this battle together",
            watchingOrViews : '882,766',
      
          },
          {
            videoUrl : "https://www.youtube.com/watch?v=UfLvR5kpVvY",
            userImage : img5,
            userName : 'AndreiKin',
            isVerified : true,
            isLive: true,
            title : 'WE’RE BACK!! AXIE  ARENA',
            watchingOrViews : '125,110',
      
          },
          {
            videoUrl : "https://www.youtube.com/watch?v=SxXwY_Ococg",
            userImage : img2,
            userName : 'LeoMercy',
            isVerified : true,
            isLive: true,
            title : 'Just Chatting with you Heroes, talking about life and the Universe )',
            watchingOrViews : '331,842',
      
          },
          {
            videoUrl : "https://www.youtube.com/watch?v=_690qnuONUQ",
            userImage : img7,
            userName : 'KwalaBrokk',
            isVerified : true,
            isLive: true,
            title : 'Live with the champions',
            watchingOrViews : '70,857',
      
          },
          {
            videoUrl : "https://www.youtube.com/watch?v=9QvRjjNzRMQ",
            userImage : img6,
            userName : 'YoungBd',
            isVerified : true,
            isLive: true,
            title : "Let's win this battle together",
            watchingOrViews : '882,766',
      
          },
          {
            videoUrl : "https://www.youtube.com/watch?v=UfLvR5kpVvY",
            userImage : img5,
            userName : 'AndreiKin',
            isVerified : true,
            isLive: true,
            title : 'WE’RE BACK!! AXIE  ARENA',
            watchingOrViews : '125,110',
      
          },
          {
            videoUrl : "https://www.youtube.com/watch?v=SxXwY_Ococg",
            userImage : img2,
            userName : 'LeoMercy',
            isVerified : true,
            isLive: true,
            title : 'Just Chatting with you Heroes, talking about life and the Universe )',
            watchingOrViews : '331,842',
      
          },
          {
            videoUrl : "https://www.youtube.com/watch?v=_690qnuONUQ",
            userImage : img7,
            userName : 'KwalaBrokk',
            isVerified : true,
            isLive: true,
            title : 'Live with the champions',
            watchingOrViews : '70,857',
      
          },
          


    
      ]


  return (
    <> 
    <Box h="88%" maxHeight="88%" overflowY="auto"> 
      <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" rowGap={28} columnGap={5} >
        {videos.map(({userImage, userName, isVerified, title, watchingOrViews, videoUrl, isLive}) => (
        
        <Box borderRadius="20px" height="10.3rem" >
          {
          /* Main Player box */
          
          }
      <Box cursor="pointer" className='stream'>
              <Box position="absolute" zIndex={20} pl={250} pt={2} textAlign="center" >
                <Text pt={0.4} fontSize="0.8rem" borderRadius="50px" height="1.5rem" fontWeight="500" width="2.5rem" bg="#FB5B78" >Live</Text>
              </Box>
            
            
                <ReactPlayer className="stream__thumbnail" url={videoUrl} height="100%" width="100%" style={{borderRadius : '20px'}}/>
      </Box>

              
                    <Box d="flex" mt={3}>
                                    <Box mt={1} label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%">
                                        <Image src={userImage} alt="John" width="2.3rem" height="2.3rem" borderRadius="50%" />

                                    </Box>

                                    <Box pl={5}>
                                        <Box d="flex">
                                          <Text as="h3" fontSize="0.9rem" color="#FFD600" fontWeight="600" cursor="pointer">{userName}</Text>
                                          {isVerified && <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>}
                                          <Button ml="2rem" _hover={{
                                              bg: 'rgb(123, 91, 251)'
                                            }} _active={{bg: 'rgb(123, 91, 251)'}} bg="rgb(123, 91, 251,0.92)" 
                                              leftIcon={<BiVideoPlus size="1.2rem" fill='white'/>}  
                                              borderRadius="50" height="1.5rem" width="4.5rem" fontSize="0.9rem">
                                              Axie
                                      </Button>
                                        </Box>
                                      <Text noOfLines={2} lineHeight="1.25rem" as="h2" pt={1} color="rgb(255,255,255,0.85)"  fontSize="1rem">{title}</Text>
                                      <Text as="h2" color="#595B5D" fontSize="0.8rem">{watchingOrViews} Watching</Text>

                                     
                                    </Box>
                     </Box>
          </Box>
      ))}
      </Box>
      
      
    </Box>
                              
              
          </>
  )
}

export default Streams