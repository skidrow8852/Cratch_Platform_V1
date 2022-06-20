import React from 'react'
import {Box, Center, Text,Avatar,Button,Spinner, SkeletonText, Skeleton} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {getUser} from "../../../services/usersService";
import {getUserVideos} from '../../../services/videoService'

function Profile() {
     
    

    const [about, setAbout] = React.useState("Hello, welcome to my Cratch channel!")
    const [username,setUsername] =  React.useState(localStorage.getItem('user').slice(0,12))
    const [avatar, setAvatar] = React.useState("https://bafybeifgsujzqhmwznuytnynypwg2iaotji3d3whty5ymjbi6gghwcmgk4.ipfs.dweb.link/profile-avatar.png")
    const [followersCount, setFollowersCount] = React.useState(0)
    const [cover, setCover] = React.useState("https://bafybeie3mniojsxcxbvruv4hcfadymzl3c7dioj7jvffyr53rtelduys3a.ipfs.dweb.link/meta.jpeg")
    const [tab,setTab] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(true)
    const [showSkeleton,setShowSkeleton] = React.useState(true)
    const skeletons = [0,1,2,3]

    const [videos,setVideos] = React.useState([])
    
const getVideos = async(id) => {
  try {
    const data = await getUserVideos(id)
    if(data.data){
        setVideos(data.data)
    }
  }
catch (e){}
}

  const GetUser = async() => {
    try {
      const result = await getUser(localStorage.getItem('user'));
      if(result.data){
           setCover(result.data.ProfileCover)
           setUsername(result.data.username.slice(0,20))
           setAvatar(result.data.ProfileAvatar)
           setFollowersCount(result.data.followers.length)
           setAbout(result.data.about)
           setIsLoading(false)
           await getVideos(result.data._id)
           setShowSkeleton(false)
      }

    }catch {
           console.log("")
         }
        
         }
      
          ;
      

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
  GetUser()
},[])

    return (
      <Box width="100%" height="88%" bg="#111315" fontFamily="heading" >
            <Center w="100%" h="100%">
              <Box width="95%" height="100%" >
                      <Box width="100%">
                          <Text width="100%" as="h1" fontSize="1.7rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pt={3} pb={5}  fontWeight="bold">Profile</Text>
                      </Box>
                      {isLoading ? <Center w="100%" h="70vh"><Spinner 
                                    thickness='4px'
                                    color='#3EA6FF'
                                    size='xl'
                                    ariaLabel='loading'
                                    speed='0.65s'
                                    emptyColor='grey'
                                /></Center> :
                    <Box maxHeight="70vh" width="100%" overflowY="auto">
                        <Box height="20vh" width="100%" borderRadius="5px" bgImage={`url(${cover})`} bgSize="cover" bgPosition="center center">
                           
                            
                        </Box>
                        
                        <Box height="50vh">
                            <Box d="flex" pl={2} pt={2} >
                                <Box w="80%" d="flex">
                                    <Avatar src={avatar} w="4rem" h="4rem" />
                                    <Box pl={5} pt={2}>
                                        <Text as="h3" color="#D5BD31" fontSize="1.2rem" fontWeight="bold">{username}</Text>
                                        <Text as="h4" color="rgb(255,255,255,0.5)" fontSize="0.9rem">{followersCount} Followers</Text>
                                    </Box>
                                </Box>
                                <Box w="20%" pr={2}>
                                    <Link to="/content">
                                        <Button  fontSize="1.2rem" height="75%" pb={0.5} color="white" w="100%" mt={2} bg="radial-gradient(circle at top, #7154E6 , #FB5B78)" _hover={{bg : "radial-gradient(circle at top, #7154E6 , #FB5B78)"}} _active={{bg : 'radial-gradient(circle at top, #7154E6 , #FB5B78)'}}>Manage Videos</Button>
                                    </Link>
                                </Box>
                                
                                
                            </Box> 
                            <Box d="flex" >
                                <Text onClick={() => setTab(1)} cursor="pointer" color="rgb(255,255,255,0.85)" as="h2" fontSize="1.2rem" fontWeight="bold" pt={5} pb={2} w="6%" borderBottom={tab===1 ? "2px solid rgb(255,255,255,0.85)" : ""}>Videos</Text>
                                <Text onClick={() => setTab(2)} ml={5} cursor="pointer" color="rgb(255,255,255,0.85)" as="h2" fontSize="1.2rem" fontWeight="bold" pt={5} pb={2} w="6%" borderBottom={tab===2 ? "2px solid rgb(255,255,255,0.85)" : ""}>About</Text>
                            </Box>
                            {tab === 1  && <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" rowGap={28} columnGap={5} mt={5} mr={3}>
                            {!showSkeleton && <>
                            {videos?.map((video) => (
                              <Link to={`/video/${video?.videoId}`}>
                                  <Box borderRadius="10px" height="10.3rem" cursor="pointer">
                                  {
                                  /* Main Player box */
                                  
                                  }
                                <Box cursor="pointer" d="flex" height="10.3rem" bgPosition="center" bgSize="cover" justifyContent="right" bgImage={`url(${video.thumbnail})`} borderRadius="10px">
                                      
                                <Text borderRadius="2px" as="h3" w="auto" bg="rgb(0,0,0,0.3)" flex="0 1 auto" alignSelf="flex-end" mr={1}>{video.duration}</Text>
                                          
                                </Box>

                                      
                                              <Box d="flex" pt={2}>
                                                          

                                                              <Box pl={5}>
                                                                  
                                                              <Text as="h2" lineHeight="1.3rem" color="rgb(255,255,255,0.85)" fontWeight="bold" fontSize="1rem" noOfLines={2}>{video.title}</Text>
                                                              <Text as="h2" color="#595B5D" fontSize="0.8rem">{numFormatter(video.views)} views</Text>

                                                              
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
                        {(!showSkeleton && videos.length < 1) &&
                            <Text pt={2} fontSize="1.15rem">You didn't publish any content yet!</Text>
                          }
      
                            </Box>}
                            {tab === 2 && <Box mt={5} w="80%"><Text fontSize="1.1rem" as="h1" fontFamily="sans-serif">{about}</Text></Box>}

                        </Box>
                    </Box>
                  }
                </Box>
            </Center>
        </Box>
  )
}

export default Profile