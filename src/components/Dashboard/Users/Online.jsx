import React from 'react'
import {Box, Text, Avatar,Center, Button, AvatarBadge} from '@chakra-ui/react'
import {AiFillCheckCircle} from "react-icons/ai"
import img5 from '../../../assets/img5.jpg';
import img6 from '../../../assets/img6.jpg';
import img7 from '../../../assets/img7.jpg';
import img2 from '../../../assets/img2.jpg'

const Followersdata = [
    {
        username: "YoungBd",
        img : img2,
        isVerified : true,
        followers: "120K",
        follow : false,
        isOnline: true,
        userId : 11230
    },
    
    {
        username: "Skidrow",
        img : img5,
        isVerified : true,
        followers: "700K",
        follow : false,
        isOnline: true,
        userId : 130
    },
    {
        username: "DavinciJ15",
        img : img6,
        isVerified : false,
        followers: "1M",
        follow : false,
        isOnline: true,
        userId : 230
    },
    {
        username: "AhselySs",
        img : img7,
        isVerified : true,
        followers: "180K",
        follow : false,
        isOnline: true,
        userId : 70
    },
    {
        username: "JohnDoe",
        img : img2,
        isVerified : false,
        followers: "720K",
        follow : true,
        isOnline: true,
        userId : 7230
    },
    {
        username: "JomaTech",
        img : img2,
        isVerified : true,
        followers: "2M",
        follow : false,
        isOnline: true,
        userId : 196
    },
    {
      username: "YoungBd",
      img : img2,
      isVerified : true,
      followers: "120K",
      follow : false,
      isOnline: true,
      userId : 11230
  },
  
  {
      username: "Skidrow",
      img : img7,
      isVerified : true,
      followers: "700K",
      follow : false,
      isOnline: true,
      userId : 130
  },
  {
      username: "DavinciJ15",
      img : img6,
      isVerified : false,
      followers: "1M",
      follow : false,
      isOnline: true,
      userId : 230
  },
  {
      username: "AhselySs",
      img : img7,
      isVerified : true,
      followers: "180K",
      follow : false,
      isOnline: true,
      userId : 70
  },
  {
      username: "JohnDoe",
      img : img2,
      isVerified : false,
      followers: "720K",
      follow : true,
      isOnline: true,
      userId : 7230
  },
  {
      username: "JomaTech",
      img : img2,
      isVerified : true,
      followers: "2M",
      follow : false,
      isOnline: true,
      userId : 196
  },
  {
    username: "YoungBd",
    img : img2,
    isVerified : true,
    followers: "120K",
    follow : false,
    isOnline: true,
    userId : 11230
},

{
    username: "Skidrow",
    img : img5,
    isVerified : true,
    followers: "700K",
    follow : false,
    isOnline: true,
    userId : 130
},
{
    username: "DavinciJ15",
    img : img6,
    isVerified : false,
    followers: "1M",
    follow : false,
    isOnline: true,
    userId : 230
},
{
    username: "AhselySs",
    img : img7,
    isVerified : true,
    followers: "180K",
    follow : false,
    isOnline: true,
    userId : 70
},
{
    username: "JohnDoe",
    img : img2,
    isVerified : false,
    followers: "720K",
    follow : true,
    isOnline: true,
    userId : 7230
},
{
    username: "JomaTech",
    img : img2,
    isVerified : true,
    followers: "2M",
    follow : false,
    isOnline: true,
    userId : 196
},
{
  username: "YoungBd",
  img : img2,
  isVerified : true,
  followers: "120K",
  follow : false,
  isOnline: true,
  userId : 11230
},

{
  username: "Skidrow",
  img : img7,
  isVerified : true,
  followers: "700K",
  follow : false,
  isOnline: true,
  userId : 130
},
{
  username: "DavinciJ15",
  img : img6,
  isVerified : false,
  followers: "1M",
  follow : false,
  isOnline: true,
  userId : 230
},
{
  username: "AhselySs",
  img : img7,
  isVerified : true,
  followers: "180K",
  follow : false,
  isOnline: true,
  userId : 70
},
{
  username: "JohnDoe",
  img : img2,
  isVerified : false,
  followers: "720K",
  follow : true,
  isOnline: true,
  userId : 7230
},
{
  username: "JomaTech",
  img : img2,
  isVerified : true,
  followers: "2M",
  follow : false,
  isOnline: true,
  userId : 196
},
    {
        username: "YoungBd",
        img : img2,
        isVerified : true,
        followers: "120K",
        follow : false,
        isOnline: true,
        userId : 11230
    },
    
    {
        username: "Skidrow",
        img : img5,
        isVerified : true,
        followers: "700K",
        follow : false,
        isOnline: true,
        userId : 130
    },
    {
        username: "DavinciJ15",
        img : img6,
        isVerified : false,
        followers: "1M",
        follow : false,
        isOnline: true,
        userId : 230
    },
    {
        username: "AhselySs",
        img : img7,
        isVerified : true,
        followers: "180K",
        follow : false,
        isOnline: true,
        userId : 70
    },
    {
        username: "JohnDoe",
        img : img2,
        isVerified : false,
        followers: "720K",
        follow : true,
        isOnline: true,
        userId : 7230
    },
    {
        username: "JomaTech",
        img : img2,
        isVerified : true,
        followers: "2M",
        follow : false,
        isOnline: true,
        userId : 196
    },
    {
      username: "YoungBd",
      img : img2,
      isVerified : true,
      followers: "120K",
      follow : false,
      isOnline: true,
      userId : 11230
  },
  
  {
      username: "Skidrow",
      img : img7,
      isVerified : true,
      followers: "700K",
      follow : false,
      isOnline: true,
      userId : 130
  },
  {
      username: "DavinciJ15",
      img : img6,
      isVerified : false,
      followers: "1M",
      follow : false,
      isOnline: true,
      userId : 230
  },
  {
      username: "AhselySs",
      img : img7,
      isVerified : true,
      followers: "180K",
      follow : false,
      isOnline: true,
      userId : 70
  },
  {
      username: "JohnDoe",
      img : img2,
      isVerified : false,
      followers: "720K",
      follow : true,
      isOnline: true,
      userId : 7230
  },
  {
      username: "JomaTech",
      img : img2,
      isVerified : true,
      followers: "2M",
      follow : false,
      isOnline: true,
      userId : 196
  },
      {
        username: "YoungBd",
        img : img2,
        isVerified : true,
        followers: "120K",
        follow : false,
        isOnline: true,
        userId : 11230
    },
    
    {
        username: "Skidrow",
        img : img5,
        isVerified : true,
        followers: "700K",
        follow : false,
        isOnline: true,
        userId : 130
    },
    {
        username: "DavinciJ15",
        img : img6,
        isVerified : false,
        followers: "1M",
        follow : false,
        isOnline: true,
        userId : 230
    },
    {
        username: "AhselySs",
        img : img7,
        isVerified : true,
        followers: "180K",
        follow : false,
        isOnline: true,
        userId : 70
    },
    {
        username: "JohnDoe",
        img : img2,
        isVerified : false,
        followers: "720K",
        follow : true,
        isOnline: true,
        userId : 7230
    },
    {
        username: "JomaTech",
        img : img2,
        isVerified : true,
        followers: "2M",
        follow : false,
        isOnline: true,
        userId : 196
    },
    {
      username: "YoungBd",
      img : img2,
      isVerified : true,
      followers: "120K",
      follow : false,
      isOnline: true,
      userId : 11230
  },
  
  {
      username: "Skidrow",
      img : img7,
      isVerified : true,
      followers: "700K",
      follow : false,
      isOnline: true,
      userId : 130
  },
  {
      username: "DavinciJ15",
      img : img6,
      isVerified : false,
      followers: "1M",
      follow : false,
      isOnline: true,
      userId : 230
  },
  {
      username: "AhselySs",
      img : img7,
      isVerified : true,
      followers: "180K",
      follow : false,
      isOnline: true,
      userId : 70
  },
  {
      username: "JohnDoe",
      img : img2,
      isVerified : false,
      followers: "720K",
      follow : true,
      isOnline: true,
      userId : 7230
  },
  {
      username: "JomaTech",
      img : img2,
      isVerified : true,
      followers: "2M",
      follow : false,
      isOnline: true,
      userId : 196
  },
      {
        username: "YoungBd",
        img : img2,
        isVerified : true,
        followers: "120K",
        follow : false,
        isOnline: true,
        userId : 11230
    },
    
    {
        username: "Skidrow",
        img : img5,
        isVerified : true,
        followers: "700K",
        follow : false,
        isOnline: true,
        userId : 130
    },
    {
        username: "DavinciJ15",
        img : img6,
        isVerified : false,
        followers: "1M",
        follow : false,
        isOnline: true,
        userId : 230
    },
    {
        username: "AhselySs",
        img : img7,
        isVerified : true,
        followers: "180K",
        follow : false,
        isOnline: true,
        userId : 70
    },
    {
        username: "JohnDoe",
        img : img2,
        isVerified : false,
        followers: "720K",
        follow : true,
        isOnline: true,
        userId : 7230
    },
    {
        username: "JomaTech",
        img : img2,
        isVerified : true,
        followers: "2M",
        follow : false,
        isOnline: true,
        userId : 196
    },
    {
      username: "YoungBd",
      img : img2,
      isVerified : true,
      followers: "120K",
      follow : false,
      isOnline: true,
      userId : 11230
  },
  
  {
      username: "Skidrow",
      img : img7,
      isVerified : true,
      followers: "700K",
      follow : false,
      isOnline: true,
      userId : 130
  },
  {
      username: "DavinciJ15",
      img : img6,
      isVerified : false,
      followers: "1M",
      follow : false,
      isOnline: true,
      userId : 230
  },
  {
      username: "AhselySs",
      img : img7,
      isVerified : true,
      followers: "180K",
      follow : false,
      isOnline: true,
      userId : 70
  },
  {
      username: "JohnDoe",
      img : img2,
      isVerified : false,
      followers: "720K",
      follow : true,
      isOnline: true,
      userId : 7230
  },
  {
      username: "JomaTech",
      img : img2,
      isVerified : true,
      followers: "2M",
      follow : false,
      isOnline: true,
      userId : 196
  },
      {
        username: "YoungBd",
        img : img2,
        isVerified : true,
        followers: "120K",
        follow : false,
        isOnline: true,
        userId : 11230
    },
    
    {
        username: "Skidrow",
        img : img5,
        isVerified : true,
        followers: "700K",
        follow : false,
        isOnline: true,
        userId : 130
    },
    {
        username: "DavinciJ15",
        img : img6,
        isVerified : false,
        followers: "1M",
        follow : false,
        isOnline: true,
        userId : 230
    },
    {
        username: "AhselySs",
        img : img7,
        isVerified : true,
        followers: "180K",
        follow : false,
        isOnline: true,
        userId : 70
    },
    {
        username: "JohnDoe",
        img : img2,
        isVerified : false,
        followers: "720K",
        follow : true,
        isOnline: true,
        userId : 7230
    },
    {
        username: "JomaTech",
        img : img2,
        isVerified : true,
        followers: "2M",
        follow : false,
        isOnline: true,
        userId : 196
    },
    {
      username: "YoungBd",
      img : img2,
      isVerified : true,
      followers: "120K",
      follow : false,
      isOnline: true,
      userId : 11230
  },
  
  {
      username: "Skidrow",
      img : img7,
      isVerified : true,
      followers: "700K",
      follow : false,
      isOnline: true,
      userId : 130
  },
  {
      username: "DavinciJ15",
      img : img6,
      isVerified : false,
      followers: "1M",
      follow : false,
      isOnline: true,
      userId : 230
  },
  {
      username: "AhselySs",
      img : img7,
      isVerified : true,
      followers: "180K",
      follow : false,
      isOnline: true,
      userId : 70
  },
  {
      username: "JohnDoe",
      img : img2,
      isVerified : false,
      followers: "720K",
      follow : true,
      isOnline: true,
      userId : 7230
  },
  {
      username: "JomaTech",
      img : img2,
      isVerified : true,
      followers: "2M",
      follow : false,
      isOnline: true,
      userId : 196
  },
      {
        username: "YoungBd",
        img : img2,
        isVerified : true,
        followers: "120K",
        follow : false,
        isOnline: true,
        userId : 11230
    },
    
    {
        username: "Skidrow",
        img : img5,
        isVerified : true,
        followers: "700K",
        follow : false,
        isOnline: true,
        userId : 130
    },
    {
        username: "DavinciJ15",
        img : img6,
        isVerified : false,
        followers: "1M",
        follow : false,
        isOnline: true,
        userId : 230
    },
    {
        username: "AhselySs",
        img : img7,
        isVerified : true,
        followers: "180K",
        follow : false,
        isOnline: true,
        userId : 70
    },
    {
        username: "JohnDoe",
        img : img2,
        isVerified : false,
        followers: "720K",
        follow : true,
        isOnline: true,
        userId : 7230
    },
    {
        username: "JomaTech",
        img : img2,
        isVerified : true,
        followers: "2M",
        follow : false,
        isOnline: true,
        userId : 196
    },
    {
      username: "YoungBd",
      img : img2,
      isVerified : true,
      followers: "120K",
      follow : false,
      isOnline: true,
      userId : 11230
  },
  
  {
      username: "Skidrow",
      img : img7,
      isVerified : true,
      followers: "700K",
      follow : false,
      isOnline: true,
      userId : 130
  },
  {
      username: "DavinciJ15",
      img : img6,
      isVerified : false,
      followers: "1M",
      follow : false,
      isOnline: true,
      userId : 230
  },
  {
      username: "AhselySs",
      img : img7,
      isVerified : true,
      followers: "180K",
      follow : false,
      isOnline: true,
      userId : 70
  },
  {
      username: "JohnDoe",
      img : img2,
      isVerified : false,
      followers: "720K",
      follow : true,
      isOnline: true,
      userId : 7230
  },
  {
      username: "JomaTech",
      img : img2,
      isVerified : true,
      followers: "2M",
      follow : false,
      isOnline: true,
      userId : 196
  },
  
  ]
  

function Online() {
  return (
    <>
    <Box h="88%" maxHeight="88%" overflowY="auto"> 

        <Box pt={4} d="grid" w="100%" gridTemplateColumns="4fr 4fr 4fr 4fr" rowGap={6} columnGap={4}>
                    {Followersdata.map(({username,img,followers,isOnline,isVerified}) => (
                      <Box d="flex">
                        {isOnline && <Center width="100%">
                        <Box w="100%" d="flex">
                        <Box width="50%" d="flex">
                            <Box  label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%" >
                                          {/* <Image src={img6} alt="John" width="2.3rem" height="2.3rem" borderRadius="50%" /> */}

                                          <Avatar name='YoungBd' size="2.3rem" src={img} >
                                            <AvatarBadge boxSize='1rem' bg='#55D64F' /> 
                                          </Avatar>
                                            
                                      
                                      </Box>

                                      <Box pl={5}>
                                          <Box d="flex">
                                            <Text as="h3" color="#FFD600" fontWeight="600" cursor="pointer">{username}</Text>
                                            {isVerified && <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>}
                                          </Box>
                                        
                                        <Text as="h2" color="#595B5D" fontSize="0.8rem">{followers} Followers</Text>
                                      </Box>
                        </Box>
                                    
                                    <Box width="50%" d="flex" pl={5} pt={1}>
                                      
                                        <Box width="100%">
                                            
                                                  <Button _hover={{
                                                      bg: 'rgb(255,255,255,0.1)'
                                                      }} _active={{bg: 'transparent'}} bg="transparent" border="1px solid white" 
                                                      
                                                      pb={1}
                                                      borderRadius="5px" height="2rem" width="7rem">
                                                      Follow
                                                  </Button>
                                              
                                        </Box>
                                        
                                    </Box>
                        </Box>
                        

                                    
                      </Center>}
                      
                
                    </Box>
                    ))}</Box>
                    
                    

    </Box>

    </>
  )
}

export default Online