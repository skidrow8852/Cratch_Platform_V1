import React from 'react'
import {Box, Center, Text, useColorMode,Avatar,Button,Spinner} from "@chakra-ui/react"
import ReactPlayer from 'react-player/lazy'
import {Link} from "react-router-dom"
import {useMoralis} from "react-moralis"
import {getUser} from "../../../services/usersService";


function Profile() {
     const {Moralis} = useMoralis()
    const {colorMode} = useColorMode();

    const [about, setAbout] = React.useState("Hello, welcome to my Cratch channel!")
    const [username,setUsername] =  React.useState(Moralis.User.current().get("ethAddress").slice(0,12))
    const [avatar, setAvatar] = React.useState("https://bafybeifgsujzqhmwznuytnynypwg2iaotji3d3whty5ymjbi6gghwcmgk4.ipfs.dweb.link/profile-avatar.png")
    const [followersCount, setFollowersCount] = React.useState(0)
    const [cover, setCover] = React.useState("https://bafybeie3mniojsxcxbvruv4hcfadymzl3c7dioj7jvffyr53rtelduys3a.ipfs.dweb.link/meta.jpeg")
    const [tab,setTab] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(true)

    const videos = [
        {
          videoUrl : "https://www.youtube.com/watch?v=9QvRjjNzRMQ",
          title : "Let's win this battle together yooooooo!",
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

  const GetUser = async() => {
    try {
      const result = await getUser(Moralis.User.current().get("ethAddress"));
           setCover(result.data.ProfileCover)
           setUsername(result.data.username.slice(0,20))
           setAvatar(result.data.ProfileAvatar)
           setFollowersCount(result.data.followers.length)
           setAbout(result.data.about)
           setIsLoading(false)
    }catch {
           console.log("")
         }
        
         }
      
          ;
      


React.useEffect(() => {
  GetUser()
},[])

    return (
      <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
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
                            {tab === 1 && <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" gap={5} mt={5}>
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
                                                                
                                                            <Text as="h2" lineHeight="1.3rem" color="rgb(255,255,255,0.85)" fontWeight="bold" fontSize="1rem" noOfLines={2}>{title}</Text>
                                                            <Text as="h2" color="#595B5D" fontSize="0.8rem">{watchingOrViews} views</Text>

                                                            
                                                            </Box>
                                            </Box>
                                </Box>
                            ))}
      
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