import React from 'react'
import {Box, Text,Skeleton, Avatar, SkeletonCircle, SkeletonText} from "@chakra-ui/react"
import {AiFillCheckCircle} from "react-icons/ai"
import {getVideos} from '../../../services/videoService'
import { Link } from 'react-router-dom'

function Videos() {

  document.title = "Dicover Videos"

  const [videos,setVideos] = React.useState([])
  const [showSkeleton,setShowSkeleton] = React.useState(true)
  const skeletons = [0,1,2,3,4,5,6,7,8,9,10,11]

  const getAllVideos = async() =>{
    try {
      const data = await getVideos()
        if(data.data){
          var sorted = data.data.sort((a, b) => a.views - b.views);
          setVideos(sorted)
          setShowSkeleton(false)
        }
    }catch{}
      
  }
  function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M';
    }else if(num < 900){
        return num; 
    }
}


  React.useEffect(() => {
    getAllVideos()
  },[])


  return (
    <>
    <Box h="88%" maxHeight="88%" overflowY="auto" pt={8}> 
      <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" rowGap={32} columnGap={5} mr={3}>
      {!showSkeleton && <> {videos?.map((video) => (
          <Link to={`/video/${video?.videoId}`}>
            <Box  borderRadius="10px" height="10.3rem" cursor="pointer">
          {
          /* Main Player box */
          
          }
                              <Box cursor="pointer" d="flex" height="10.3rem" bgPosition="center" bgSize="cover" justifyContent="right" bgImage={`url(${video.thumbnail})`} borderRadius="10px">
                                      
                                      <Text borderRadius="2px" as="h3" w="auto" bg="rgb(0,0,0,0.3)" flex="0 1 auto" alignSelf="flex-end" mr={1}>{video.duration}</Text>
                                                
                                </Box>

              
                    <Box d="flex" mt={3}>
                                    <Box mt={1} label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%">
                                        <Avatar src={video.creator.ProfileAvatar} alt={video?.creator?.username.slice(0,20)} width="2.3rem" height="2.3rem" borderRadius="50%" />

                                    </Box>

                                    <Box pl={5}>
                                        <Box d="flex">
                                          <Text as="h3" fontSize="0.9rem" color="#FFD600" fontWeight="600" cursor="pointer">{video?.creator?.username.slice(0,20)}</Text>
                                          {video.creator.isVerified && <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>}
                                          
                                        </Box>
                                      <Text noOfLines={2} lineHeight="1.25rem" as="h2" pt={1} color="rgb(255,255,255,0.85)"  fontSize="1rem">{video.title}</Text>
                                      <Text as="h2" color="#595B5D" fontSize="0.8rem">{numFormatter(video.views)} Views</Text>

                                     
                                    </Box>
                     </Box>
            </Box>
          </Link>
        ))}
        </>
        }

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

export default Videos