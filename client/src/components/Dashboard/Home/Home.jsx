import React from 'react'
import {Box, Text,Image , Avatar,Center, Button, Divider,Link,Skeleton, SkeletonCircle, SkeletonText, useToast} from '@chakra-ui/react'
import {FaMedal, FaFilter} from 'react-icons/fa';
import Carousel from 'nuka-carousel';
import bg from '../../../assets/bg.png'
import {BiVideoPlus} from 'react-icons/bi'
import {AiFillCheckCircle} from "react-icons/ai"
import axie from '../../../assets/axie.png'
import pubg from '../../../assets/pubg.png'
import sandbox from '../../../assets/sandbox.webp'
import metacratch from '../../../assets/metacratch.webp'
import './style.css'
import {Link as RouterLink} from "react-router-dom"
import {getLives} from '../../../services/liveService'
import {getVideos} from '../../../services/videoService'
import {getUsers} from '../../../services/usersService'
import FollowerComponent from '../Followers/FollowerComponent'

function Home() {

  const [activeLink, setActiveLink] = React.useState(1)
  const [route, setRoute] = React.useState("/lives")
  const defaultThumbnail = "https://i.stack.imgur.com/XZDsP.jpg"
  document.title = `Home`
  const [showSkeleton,setShowSkeleton] = React.useState(true)
  const skeletons = [0,1,2,3]
  const [allLives, setAllLives] = React.useState([])
  const [videos,setVideos] = React.useState([])
  const [online, setOnline] = React.useState([])
  const [verified, setVerified] = React.useState([])
  const toast = useToast()

  const user = localStorage.getItem('user')


const getStreams = async() => {
  try{
    const live = await getLives()
    const video = await getVideos()
    const users  =await getUsers()
    users.data.filter(e => e.userId !== user).map((users) => {
      var isFollowing = false;
      if(users.followers.includes(user)){
          isFollowing = true;
      }
      
      var userdata = {
          userId: users.userId,
          followers : users.followers,
          isOnline : users.isOnline,
          ProfileAvatar : users.ProfileAvatar,
          username : users.username,
          isVerified : users.isVerified,
          follow : isFollowing
      }
      if(userdata.isVerified) {
        setVerified(verified => [...verified, userdata])
      }
      if(userdata.isOnline) {
        setOnline(verified => [...verified, userdata])
      }
  
  })
        setAllLives(live?.data.slice(0,4))
        setVideos(video?.data.slice(0,4))

  }catch{}
  
  setShowSkeleton(false)
}


React.useState(() => {
  getStreams()
},[])

  class PagingDots extends React.Component {
    getIndexes(count, inc) {
      const arr = [];
      for (let i = 0; i < count; i += inc) {
        arr.push(i);
      }
      return arr;
    }
  
    getListStyles() {
      return {
        position: 'absolute',
        margin: (-25,0,25,0),
        padding: 0,
        display: 'flex'
      };
    }
  
    getListItemStyles() {
      return {
        listStyleType: 'none',
        display: 'inline-block',
      };
    }
  
    getButtonStyles(active) {
      return {
        border: 0,
        position: 'relative',
        color: 'white',
        cursor: 'pointer',
        outline: 0,
        padding: 2,
        fontSize: 28,
        opacity: active ? 1 : 0.5,
      };
    }
  
    render() {
      const indexes = this.getIndexes(
        this.props.slideCount,
        this.props.slidesToScroll,
      );
      return (
        <ul style={this.getListStyles()}>
          {indexes.map(index => {
            return (
              <li style={this.getListItemStyles()} key={index}>
                <button
                  style={this.getButtonStyles(this.props.currentSlide === index)}
                  onClick={this.props.goToSlide.bind(null, index)}
                >
                  {this.props.currentSlide === index ? <Box width="2rem" borderRadius="50px" height="0.35rem" color="white" bg="white"></Box> : <Box width="0.4rem" height="0.4rem" borderRadius="50%" bg="#595B5D"></Box>}
                  
                  
                </button>
              </li>
            );
          })}
        </ul>
      );
    }
  }


  return (
    <>
        

            {
              /* Carousel and Top Streamers blocks */
              
              }

        <Box d="flex" width="100%" height="34%" borderRadius="20px" columnGap={16} >
          <Box width="60%">
            <Carousel enableKeyboardControls={true} renderBottomCenterControls={props => <PagingDots {...props} />} autoplay={true} autoplayInterval={8000} wrapAround={true} renderCenterLeftControls={() => (null)} renderCenterRightControls={() => (null)}>
                
                  <Box width="100%" height="100%" bg="rgb(123, 91, 251,0.91)" borderRadius='20px'>
                    <Box d="flex">
                      <Box width="50%">
                        <Box bg="rgb(1, 1, 1,0.27)" height="93%" mt={2} borderRadius="20px" ml={5}>
                            <Box pl={5} pt={4}>
                              <Text as="h4" fontSize="0.8rem" color="rgb(255, 255, 255,0.66)">#TRENDING</Text>
                              <Text as="h1" fontSize="1.6rem" fontWeight="bold" lineHeight="2rem" color="white" width="90%">Watch P2E Tournaments
                                  Anywhere Anytime
                              </Text>
                              <Text pt={2.5} as="p" fontFamily="Archivo-Light" fontSize="1rem" color="rgb(255, 255, 255,0.66)" width="80%">
                              Watch your favorite streamers & players only on Cratch
                              </Text>
                            <RouterLink to="/lives"><Button fontWeight="bold" _active={{bg : 'rgb(255,255,255,0.95)'}} _hover={{bg : 'rgb(255,255,255,0.95)'}} mt={4} bg="rgb(255,255,255,0.85)" color="#595B5D" borderRadius="50px">Watch Now</Button></RouterLink>

                            </Box>
                        </Box>
                      </Box>
                      <Box width="48%" height="auto" >
                        <Image src={bg} ml={10} width="88%" />
                      </Box>
                    </Box>
                  
                  </Box>

                  <Box width="100%" height="100%" bg="linear-gradient(0deg, #243B4B 0%, #ffffdb 100%)" borderRadius='20px'>
                    <Box d="flex">
                      <Box width="50%">
                        <Box bg="rgb(1, 1, 1,0.27)" height="93%" mt={2} borderRadius="20px" ml={5}>
                            <Box pl={5} pt={4}>
                              <Text as="h4" fontSize="0.8rem" color="rgb(255, 255, 255,0.66)">#TRENDING</Text>
                              <Text as="h1" fontSize="1.6rem" fontWeight="bold" lineHeight="2rem" color="white" width="90%">Watch PUBG Global Championship
                              </Text>
                              <Text pt={2.5} as="p" fontFamily="Archivo-Light" fontSize="1rem" color="rgb(255, 255, 255,0.66)" width="75%">
                              Enjoy watching one of the biggest PUBG event this year. 
                              </Text>
                            <Button onClick={() => {  toast({
                              title: `Coming soon`,
                              position: "top",
                              isClosable: true,
                            })}} fontWeight="bold" _active={{bg : 'rgb(255,255,255,0.95)'}} _hover={{bg : 'rgb(255,255,255,0.95)'}} mt={4} bg="rgb(255,255,255,0.85)" color="#595B5D" borderRadius="50px">Watch Now</Button>

                            </Box>
                        </Box>
                      </Box>
                      <Box width="48%" height="auto" >
                        <Image src={pubg} ml={5} width="98%" />
                      </Box>
                    </Box>
                  
                  </Box>

                  <Box width="100%" height="100%" bg="radial-gradient(circle at top, #00D0AA , #81BF7F)" borderRadius='20px'>
                    <Box d="flex">
                      <Box width="50%">
                        <Box bg="rgb(1, 1, 1,0.27)" height="93%" mt={2} borderRadius="20px" ml={5}>
                            <Box pl={5} pt={4}>
                              <Text as="h4" fontSize="0.8rem" color="rgb(255, 255, 255,0.66)">#TRENDING</Text>
                              <Text as="h1" fontSize="1.6rem" fontWeight="bold" lineHeight="2rem" color="white" width="90%">Watch Axie Infinity: Battle of the Guilds
                              </Text>
                              <Text pt={2.5} as="p" fontFamily="Archivo-Light" fontSize="1rem" color="rgb(255, 255, 255,0.66)" width="75%">
                              Watch Axie Infinity tournaments only on Cratch, and win valuable prizes
                              </Text>
                            <Button onClick={() => {  toast({
                            title: `Coming soon`,
                            position: "top",
                            isClosable: true,
                          })}} fontWeight="bold" _active={{bg : 'rgb(255,255,255,0.95)'}} _hover={{bg : 'rgb(255,255,255,0.95)'}} mt={4} bg="rgb(255,255,255,0.85)" color="#595B5D" borderRadius="50px">Watch Now</Button>

                            </Box>
                        </Box>
                      </Box>
                      <Box width="48%" height="auto" >
                        <Image src={axie} ml={10} width="79%" />
                      </Box>
                    </Box>
                  
                  </Box>
                  
                  <Box width="100%" height="100%" bg="linear-gradient(0deg, #233C89 0%, #7A2261 100%)" borderRadius='20px'>
                    <Box d="flex">
                      <Box width="50%">
                        <Box bg="rgb(1, 1, 1,0.27)" height="93%" mt={2} borderRadius="20px" ml={5}>
                            <Box pl={5} pt={4}>
                              <Text as="h4" fontSize="0.8rem" color="rgb(255, 255, 255,0.66)">#TRENDING</Text>
                              <Text as="h1" fontSize="1.6rem" fontWeight="bold" lineHeight="2rem" color="white" width="90%">Watch The Sandbox Alpha Season 3
                                  
                              </Text>
                              <Text pt={2.5} as="p" fontFamily="Archivo-Light" fontSize="1rem" color="rgb(255, 255, 255,0.66)" width="80%">
                              Watch events live on MetaCratch, and Join the community on the Metaverse
                              </Text>
                            <Link href="https://meta.cratch.io" isExternal><Button fontWeight="bold" _active={{bg : 'rgb(255,255,255,0.95)'}} _hover={{bg : 'rgb(255,255,255,0.95)'}} mt={4} bg="rgb(255,255,255,0.85)" color="#595B5D" borderRadius="50px">Watch Now</Button></Link>

                            </Box>
                        </Box>
                      </Box>
                      <Box width="48%" height="auto" >
                        <Image pb={3.5} src={sandbox} ml={10} width="100%" />
                      </Box>
                    </Box>
                  
                  </Box>
            </Carousel>
          </Box>
        
            
            <Box width="35%" height="100%" bg="rgb(36, 38, 39,0.63)" borderRadius="20px">
              <Text as="h1" fontSize="1.6rem" fontWeight="bold" pt={1} pl={6}>
                Top Streamers
              </Text>
              <Box pt={2} pl={6} d="flex">
                <Center>
                  <FaMedal size="1.5rem" fill='#FFD600' />
                              <Box ml={6} label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%">
                                    

                                    <Avatar name='YoungBd' src={verified[0]?.ProfileAvatar} w="2.3rem" h="2.3rem" />
                                      
                                      
                                
                                </Box>

                                <Box pl={5}>
                                    <Box d="flex">
                                      {showSkeleton ? 
                                      <Skeleton w="4rem" />
                                      :<Text as="h3" color="#FFD600" fontWeight="600" cursor="pointer">{verified[0]?.username?.slice(0,7)}
                                      
                                      </Text>
                                      }
                                      <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>
                                    </Box>
                                  
                                  <Text as="h2" color="#595B5D" fontSize="0.8rem">{verified[0]?.followers?.length} Followers</Text>
                                </Box>

                                <Button _hover={{
                                  bg: 'rgb(123, 91, 251)'
                                }} _active={{bg: 'rgb(123, 91, 251)'}} bg="rgb(123, 91, 251,0.92)" 
                                  leftIcon={<BiVideoPlus size="1.4rem" fill='white'/>} ml="4.6rem" 
                                  borderRadius="50" height="2rem" width="7rem">
                                  Axie
                                  </Button>
                </Center>
                
              </Box>
              <Center pt={3} opacity="0.3"><Divider orientation='horizontal' width="90%" /></Center>
              <Box pt={3} pl={6} d="flex">
                <Center>
                  <Text as="h1" fontSize="1.3rem" fontWeight="bold" color="#595B5D">02</Text>
                              <Box ml={6} label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%">
                                    {/* <Image src={img5} alt="John" width="2.3rem" height="2.3rem" borderRadius="50%" /> */}
                                    <Avatar name='NatalyKey' w="2.3rem" h="2.3rem" src={verified[1]?.ProfileAvatar} />
                                      
                                
                                </Box>

                                <Box pl={5}>
                                <Box d="flex">
                                {showSkeleton ? 
                                      <Skeleton w="4rem" />
                                      :<Text as="h3" color="#FFD600" fontWeight="600" cursor="pointer">{verified[1]?.username?.slice(0,7)}
                                      
                                      </Text>
                                      }
                                      <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>
                                    </Box>
                                  <Text as="h2" color="#595B5D" fontSize="0.8rem">{verified[0]?.followers?.length} Followers</Text>
                                </Box>

                                <Button _hover={{
                                  bg: 'rgb(140, 209, 138,0.9)'
                                }} _active={{bg: 'rgb(140, 209, 138,0.9)'}} bg="#8CD18A" 
                                  leftIcon={<BiVideoPlus size="1.4rem" fill='white'/>} ml="4.8rem" 
                                  borderRadius="50" height="2rem" width="7rem">
                                  Mobox
                                  </Button>
                </Center>
                
              </Box>
              <Center pt={3} opacity="0.3"><Divider orientation='horizontal' width="90%" /></Center>
              <Box pt={3} pl={6} d="flex">
                <Center>
                <Text as="h1" fontSize="1.3rem" fontWeight="bold" color="#595B5D">03</Text>
                              <Box ml={6} label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%">
                                    {/* <Image src={img7} alt="John" width="2.3rem" height="2.3rem" borderRadius="50%" /> */}
                                    <Avatar name='DavinciJ15' src={verified[2]?.ProfileAvatar} w="2.3rem" h="2.3rem" />
                                      
                                
                                </Box>

                                <Box pl={5}>
                                <Box d="flex">
                                {showSkeleton ? 
                                      <Skeleton w="4rem" />
                                      :<Text as="h3" color="#FFD600" fontWeight="600" cursor="pointer">{verified[2]?.username?.slice(0,7)}
                                      
                                      </Text>
                                      }
                                      <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>
                                    </Box>
                                  <Text as="h2" color="#595B5D" fontSize="0.8rem">{verified[2]?.followers?.length} Followers</Text>
                                </Box>

                                <Button _hover={{
                                  bg: 'rgb(223, 215, 42,0.9)'
                                }} _active={{bg: 'rgb(223, 215, 42,0.9)'}} bg="rgb(223, 215, 42,0.8)" 
                                  leftIcon={<BiVideoPlus size="1.4rem" fill='white'/>} ml="4.7rem" 
                                  borderRadius="50" height="2rem" width="7rem">
                                  Alien W
                                  </Button>
                </Center>
                
              </Box>
              <Center pt={3} opacity="0.3"><Divider orientation='horizontal' width="90%" /></Center>
              
            </Box>
        

        </Box>
              {
              /* Trending block */
              
              }
        <Box height="54%">
          <Text as="h3" color="rgb(255,255,255,0.69)" fontFamily="sans-serif" fontSize="0.9rem" textTransform="uppercase" pt={5}>trending</Text>
          <Box width="100%" d="flex" flexDirection="row" >
            <Text width="80%" as="h3" color="rgb(255,255,255,0.95)" fontSize="1.3rem" fontWeight="bold" textTransform="capitalize">#play with axie</Text>
            <Text textAlign="right" width="20%" as="h3" pr={2} cursor="pointer" color="#FB5B78" fontSize="1rem" textTransform="capitalize"><RouterLink to={route}>View All</RouterLink></Text>
          </Box>
          <Box  pt={2.5} d="flex" flexDirection="row">
            <Box d="flex" width="80%">
                <Text lineHeight="2rem" cursor="pointer" as="h4" borderBottom={activeLink === 1 ? "1px solid #FB5B78" : ""} color={activeLink === 1 ? "#FB5B78" : "rgba(255,255,255,0.63)"}  fontSize="1rem" onClick={()=> {setActiveLink(1); setRoute("/lives")}}>Top Streams</Text>
                <Text lineHeight="2rem"  cursor="pointer" ml={5} as="h4" borderBottom={activeLink === 2 ? "1px solid #FB5B78" : ""} color={activeLink === 2 ? "#FB5B78" : "rgba(255,255,255,0.63)"}  fontSize="1rem" onClick={()=> {setActiveLink(2); setRoute("/videos")}}>Top Videos</Text>
                <Text lineHeight="2rem" cursor="pointer" ml={5} as="h4" borderBottom={activeLink === 3 ? "1px solid #FB5B78" : ""} color={activeLink === 3 ? "#FB5B78" : "rgba(255,255,255,0.63)"}  fontSize="1rem" onClick={()=> {setActiveLink(3); setRoute("/online_users")}}>Currently Online</Text>
                <Text lineHeight="2rem" cursor="pointer" ml={5} as="h4" borderBottom={activeLink === 4 ? "1px solid #FB5B78" : ""} color={activeLink === 4 ? "#FB5B78" : "rgba(255,255,255,0.63)"}  fontSize="1rem" onClick={()=> {setActiveLink(4); setRoute("/verified_users")}}>Verified</Text>
                <Link href="https://meta.cratch.io" isExternal> <Image ml={4} width="9rem" src={metacratch} alt="metacratch" cursor="pointer" /></Link>
            </Box>
            <Box width="20%" textAlign="right">
              <Button borderRadius="50px" leftIcon={<FaFilter size="0.8rem" />} height="2.2rem">Filter</Button>
            </Box>
          </Box>
          
          <Box pt={4} d="flex" gap={6}>

          <> 
      {(!showSkeleton && activeLink === 1) &&
        <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" columnGap={5} w="100%">
        {allLives?.map((live) => (
        <RouterLink to={`/live/${live?.streamUrl}`}>
          <Box borderRadius="20px" height="10.3rem" >
          {
          /* Main Player box */
          
          }
      <Box cursor="pointer" className='stream'  height="9rem" >
              {(activeLink===1)  ? <Box position="absolute" zIndex={20} pl={250} pt={2} textAlign="center" >
                <Text pt={0.4} fontSize="0.8rem" borderRadius="50px" height="1.5rem" fontWeight="500" width="2.5rem" bg="#FB5B78" >Live</Text>
              </Box> : ""}
            
                
                <Box bgImage={`url(${live?.thumbnail ? live?.thumbnail: defaultThumbnail})`} bgSize="cover" 
                bgPosition="center" className="stream__thumbnail" 
                height="100%" width="100%" style={{borderRadius : '10px'}}/>
      </Box>

              
                    <Box d="flex" mt={3}>
                                    <Box mt={1} label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%">
                                        <Avatar src={live?.creator?.ProfileAvatar} alt="John" width="2.3rem" height="2.3rem" borderRadius="50%" />

                                    </Box>

                                    <Box pl={5}>
                                        <Box d="flex">
                                          <Text as="h3" fontSize="0.9rem" color="#FFD600" fontWeight="600" cursor="pointer">{live?.creator?.username.slice(0,8)}</Text>
                                          {live?.creator?.isVerified && <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>}
                                          {activeLink===1 && <Button ml="2rem" _hover={{
                                              bg: 'rgb(123, 91, 251)'
                                            }} _active={{bg: 'rgb(123, 91, 251)'}} bg="rgb(123, 91, 251,0.92)" 
                                              leftIcon={<BiVideoPlus size="1.2rem" fill='white'/>}  
                                              borderRadius="50" height="1.5rem" width="4.5rem" fontSize="0.9rem">
                                              Axie
                                      </Button>}
                                        </Box>
                                      <Text noOfLines={2} lineHeight="1.25rem" as="h2" pt={1} color="rgb(255,255,255,0.85)"  fontSize="1rem">{live?.title}</Text>
                                      <Text as="h2" color="#595B5D" fontSize="0.8rem">{live?.currentlyWatching} Watching</Text>

                                     
                                    </Box>
                     </Box>
          </Box>
          </RouterLink>
      ))}
      </Box>}


      {(!showSkeleton && activeLink === 2)&&
        <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" columnGap={5} w="100%">
        {videos?.map((video) => (
         <RouterLink to={`/video/${video?.videoId}`}>
            <Box borderRadius="20px" height="10.3rem" >
          {
          /* Main Player box */
          
          }
      <Box cursor="pointer" className='stream'  height="9rem" >
            
                
                <Box bgImage={`url(${video?.thumbnail ? video?.thumbnail: defaultThumbnail})`} bgSize="cover" 
                bgPosition="center" className="stream__thumbnail" 
                height="100%" width="100%" style={{borderRadius : '10px'}}/>
      </Box>

              
                    <Box d="flex" mt={3}>
                                    <Box mt={1} label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%">
                                        <Avatar src={video?.creator?.ProfileAvatar} alt="John" width="2.3rem" height="2.3rem" borderRadius="50%" />

                                    </Box>

                                    <Box pl={5}>
                                        <Box d="flex">
                                          <Text as="h3" fontSize="0.9rem" color="#FFD600" fontWeight="600" cursor="pointer">{video?.creator?.username.slice(0,8)}</Text>
                                          {video?.creator?.isVerified && <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>}
                                          
                                        </Box>
                                      <Text noOfLines={2} lineHeight="1.25rem" as="h2" pt={1} color="rgb(255,255,255,0.85)"  fontSize="1rem">{video?.title}</Text>
                                      <Text as="h2" color="#595B5D" fontSize="0.8rem">{video?.views} Views</Text>

                                     
                                    </Box>
                     </Box>
            </Box>
          </RouterLink>
      ))}
      </Box>}

      {(showSkeleton && (activeLink == 1 || activeLink == 2)) && 
        <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" columnGap={5} w="100%">
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
                            
                 </Box>    
                        }
          
      
      
                              
              
          </>

                
                  {activeLink === 3 && <Box d="grid" gridTemplateColumns="1fr 1fr" gap={6} w="100%">
                    {online?.slice(0,6).map(({userId,username,ProfileAvatar,followers,isOnline,isVerified,follow}) => (
                      <>
                      {isOnline && <Box width="100%">
                        
                         <FollowerComponent isVerified={isVerified} isOnline={isOnline} userId={userId} username={username} avatar={ProfileAvatar} followers={followers} follow={follow}  />
                        
                       
                        

                                    
                      </Box>}
                      </>
                
                    
                    ))}</Box>
                    
                    }

                {activeLink === 4 && <Box d="grid" gridTemplateColumns="1fr 1fr" gap={6} w="100%">
                    {verified?.slice(0,6).map(({userId,username,ProfileAvatar,followers,isOnline,isVerified,follow}) => (
                      <>
                      {isVerified && <Box width="100%">
                        
                         <FollowerComponent isVerified={isVerified} isOnline={isOnline} userId={userId} username={username} avatar={ProfileAvatar} followers={followers} follow={follow}  />
                        
                       
                        

                                    
                      </Box>}
                      </>
                
                    
                    ))}</Box>
                    
                    }
                
             
          </Box>
          
          
        </Box>
    


    </>
  )
}

export default Home