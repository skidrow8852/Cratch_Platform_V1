import React from 'react'
import {Box, Text, Image} from "@chakra-ui/react"
import img5 from '../../../assets/img5.jpg';
import img6 from '../../../assets/img6.jpg';
import img7 from '../../../assets/img7.jpg';
import img2 from '../../../assets/img2.jpg'
import {AiFillCheckCircle} from "react-icons/ai"
import ReactPlayer from 'react-player/lazy';

function Videos() {

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
      <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" rowGap={28} columnGap={5} mr={3}>
        {videos.map(({userImage, userName, isVerified, title, watchingOrViews, videoUrl}) => (
        
        <Box  borderRadius="20px" height="10.3rem" >
          {
          /* Main Player box */
          
          }
      <Box cursor="pointer" className='stream'>

            
            
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
                                          
                                        </Box>
                                      <Text noOfLines={2} lineHeight="1.25rem" as="h2" pt={1} color="rgb(255,255,255,0.85)"  fontSize="1rem">{title}</Text>
                                      <Text as="h2" color="#595B5D" fontSize="0.8rem">{watchingOrViews} Views</Text>

                                     
                                    </Box>
                     </Box>
          </Box>
      ))}
      </Box>
      
      
                              
              
          </Box>
    
    </>
  )
}

export default Videos