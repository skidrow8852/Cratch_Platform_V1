import React from 'react'
import {Box, Text, Button, SkeletonCircle, SkeletonText, Skeleton, Avatar} from "@chakra-ui/react"
import {AiFillCheckCircle} from "react-icons/ai"
import {BiVideoPlus} from "react-icons/bi"
import {getLives} from '../../../services/liveService'
import { Link } from 'react-router-dom'



function Streams() {

  document.title = "Dicover Live Streams"
  const [showSkeleton,setShowSkeleton] = React.useState(true)
  const [allLives, setAllLives] = React.useState([])
  const skeletons = [0,1,2,3,4,5,6,7,8,9,10,11]
  const defaultThumbnail = "https://i.stack.imgur.com/XZDsP.jpg"


  const getStreams = async() => {
    try{
      const live = await getLives()
      if(live.data){
        setAllLives(live.data)
        setShowSkeleton(false)
      }
    }
    catch{}
  }



  React.useEffect(() => {
    getStreams()
  },[])

  return (
    <> 
    <Box h="88%" maxHeight="88%" overflowY="auto"> 
      <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" rowGap={28} columnGap={5} mr={3}>
        {!showSkeleton && <>
        {allLives.map((live) => (
        <Link to={`/live/${live?.streamUrl}`}>
            <Box borderRadius="20px" height="10.3rem" >
            {
            /* Main Player box */
            
            }
        <Box cursor="pointer" className='stream' height="10.3rem">
                <Box position="absolute" zIndex={20} pl={250} pt={2} textAlign="center" >
                  <Text pt={0.4} fontSize="0.8rem" borderRadius="50px" height="1.5rem" fontWeight="500" width="2.5rem" bg="#FB5B78" >Live</Text>
                </Box>
              
              
                <Box bgImage={`url(${live?.thumbnail ? live?.thumbnail: defaultThumbnail})`} bgSize="cover" 
                  bgPosition="center" className="stream__thumbnail" 
                  height="100%" width="100%" style={{borderRadius : '10px'}}/>
        </Box>

                
                      <Box d="flex" mt={3}>
                                      <Box mt={1} label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%">
                                          <Avatar src={live?.creator?.ProfileAvatar} alt={live?.creator?.username} width="2.3rem" height="2.3rem"  />

                                      </Box>

                                      <Box pl={5}>
                                          <Box d="flex">
                                            <Text as="h3" fontSize="0.9rem" color="#FFD600" fontWeight="600" cursor="pointer">{live?.creator?.username?.slice(0,20)}</Text>
                                            {live?.creator?.isVerified && <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>}
                                          {live?.tags?.includes("axie") ?  <Button ml="2rem" _hover={{
                                                bg: 'rgb(123, 91, 251)'
                                              }} _active={{bg: 'rgb(123, 91, 251)'}} bg="rgb(123, 91, 251,0.92)" 
                                                leftIcon={<BiVideoPlus size="1.2rem" fill='white'/>}  
                                                borderRadius="50" height="1.5rem" width="4.5rem" fontSize="0.9rem">
                                                Axie
                                        </Button>
                                        :  <Button ml="2rem" _hover={{
                                          bg: '#81BF7F'
                                        }} _active={{bg: '#81BF7F'}} bg="#81BF7F" 
                                          leftIcon={<BiVideoPlus size="1.2rem" fill='white'/>}  
                                          borderRadius="50" height="1.5rem" width="4.5rem" fontSize="0.9rem">
                                          SPS
                                  </Button>
                                      }
                                          </Box>
                                        <Text noOfLines={2} lineHeight="1.25rem" as="h2" pt={1} color="rgb(255,255,255,0.85)"  fontSize="1rem">{live?.title}</Text>
                                        <Text as="h2" color="#595B5D" fontSize="0.8rem">{live?.views} Views</Text>

                                      
                                      </Box>
                      </Box>
            </Box>
          </Link>
      ))}
        </>}

        {showSkeleton && <>
                        {skeletons.map(() => (
                                    <Box   height="10.3rem" >
                                    {
                                    /* Main Player box */
                                    
                                    }
                                    <Box cursor="pointer"  height="10.3rem" >
                                    <Skeleton borderRadius="10px" height="100%" w="100%" startColor='#FB5B78' />
                                        
                                    </Box>
                          
                                        
                                              <Box d="flex" mt={3}>
                                                              <Box mt={1} label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%">
                                                                <SkeletonCircle startColor='#FB5B78' size='10' />
                          
                                                              </Box>
                          
                                                              <Box pl={5}>
                                                              <Box >
                                                              <SkeletonText w="10rem" startColor='#FB5B78' noOfLines={3} spacing='3' />
                                                              </Box>
                                                                    
                          
                                                               
                                                              </Box>
                                               </Box>
                                    </Box>
                        ))}
                            
                     </>
                        }
        
      </Box>
      
      
    </Box>
                              
              
          </>
  )
}

export default Streams