import React from 'react'
import {Box, Text,Image , Avatar,Center, Button, Divider,AvatarBadge,Link} from '@chakra-ui/react'
import {FaMedal, FaFilter} from 'react-icons/fa';
import Carousel from 'nuka-carousel';
import img5 from '../../../assets/img5.jpg';
import img6 from '../../../assets/img6.jpg';
import img7 from '../../../assets/img7.jpg';
import img2 from '../../../assets/img2.jpg'
import bg from '../../../assets/bg.png'
import {BiVideoPlus} from 'react-icons/bi'
import {AiFillCheckCircle} from "react-icons/ai"
import ReactPlayer from 'react-player/lazy'
import axie from '../../../assets/axie.png'
import pubg from '../../../assets/pubg.png'
import sandbox from '../../../assets/sandbox.webp'
import metacratch from '../../../assets/metacratch.webp'
import './style.css'
import {Link as RouterLink} from "react-router-dom"

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

function Home() {
  const [activeLink, setActiveLink] = React.useState(1)
  const [route, setRoute] = React.useState("/lives")
  document.title = `Home`
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
      userName : 'KwalaBro',
      isVerified : true,
      isLive: true,
      title : 'Live with the champions',
      watchingOrViews : '70,857',

    },

  ]



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

  const Player = () => {
    return(
      <> {}
      <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" columnGap={5}>
        {videos.map(({userImage, userName, isVerified, title, watchingOrViews, videoUrl, isLive}) => (
        
        <Box borderRadius="20px" height="10.3rem" >
          {
          /* Main Player box */
          
          }
      <Box cursor="pointer" className='stream'>
              {(isLive && activeLink===1)  ? <Box position="absolute" zIndex={20} pl={250} pt={2} textAlign="center" >
                <Text pt={0.4} fontSize="0.8rem" borderRadius="50px" height="1.5rem" fontWeight="500" width="2.5rem" bg="#FB5B78" >Live</Text>
              </Box> : ""}
            
            
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
                                          {activeLink===1 && <Button ml="2rem" _hover={{
                                              bg: 'rgb(123, 91, 251)'
                                            }} _active={{bg: 'rgb(123, 91, 251)'}} bg="rgb(123, 91, 251,0.92)" 
                                              leftIcon={<BiVideoPlus size="1.2rem" fill='white'/>}  
                                              borderRadius="50" height="1.5rem" width="4.5rem" fontSize="0.9rem">
                                              Axie
                                      </Button>}
                                        </Box>
                                      <Text noOfLines={2} lineHeight="1.25rem" as="h2" pt={1} color="rgb(255,255,255,0.85)"  fontSize="1rem">{title}</Text>
                                      <Text as="h2" color="#595B5D" fontSize="0.8rem">{watchingOrViews} {activeLink === 1 ? "Watching" : "Views" }</Text>

                                     
                                    </Box>
                     </Box>
          </Box>
      ))}
      </Box>
      
      
                              
              
          </>
    )
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
                            <Button fontWeight="bold" _active={{bg : 'rgb(255,255,255,0.95)'}} _hover={{bg : 'rgb(255,255,255,0.95)'}} mt={4} bg="rgb(255,255,255,0.85)" color="#595B5D" borderRadius="50px">Watch Now</Button>

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
                            <Button fontWeight="bold" _active={{bg : 'rgb(255,255,255,0.95)'}} _hover={{bg : 'rgb(255,255,255,0.95)'}} mt={4} bg="rgb(255,255,255,0.85)" color="#595B5D" borderRadius="50px">Watch Now</Button>

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
                            <Button fontWeight="bold" _active={{bg : 'rgb(255,255,255,0.95)'}} _hover={{bg : 'rgb(255,255,255,0.95)'}} mt={4} bg="rgb(255,255,255,0.85)" color="#595B5D" borderRadius="50px">Watch Now</Button>

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
                            <Button fontWeight="bold" _active={{bg : 'rgb(255,255,255,0.95)'}} _hover={{bg : 'rgb(255,255,255,0.95)'}} mt={4} bg="rgb(255,255,255,0.85)" color="#595B5D" borderRadius="50px">Watch Now</Button>

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
                                    {/* <Image src={img6} alt="John" width="2.3rem" height="2.3rem" borderRadius="50%" /> */}

                                    <Avatar name='YoungBd' size="2.3rem" src={img6} />
                                      
                                      
                                
                                </Box>

                                <Box pl={5}>
                                    <Box d="flex">
                                      <Text as="h3" color="#FFD600" fontWeight="600" cursor="pointer">YoungBd</Text>
                                      <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>
                                    </Box>
                                  
                                  <Text as="h2" color="#595B5D" fontSize="0.8rem">1M Followers</Text>
                                </Box>

                                <Button _hover={{
                                  bg: 'rgb(123, 91, 251)'
                                }} _active={{bg: 'rgb(123, 91, 251)'}} bg="rgb(123, 91, 251,0.92)" 
                                  leftIcon={<BiVideoPlus size="1.4rem" fill='white'/>} ml="4.8rem" 
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
                                    <Avatar name='NatalyKey' size="2.3rem" src={img2} />
                                      
                                
                                </Box>

                                <Box pl={5}>
                                <Box d="flex">
                                      <Text as="h3" color="#FFD600" fontWeight="600" cursor="pointer">NatalyKey</Text>
                                      <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>
                                    </Box>
                                  <Text as="h2" color="#595B5D" fontSize="0.8rem">882K Followers</Text>
                                </Box>

                                <Button _hover={{
                                  bg: 'rgb(140, 209, 138,0.9)'
                                }} _active={{bg: 'rgb(140, 209, 138,0.9)'}} bg="#8CD18A" 
                                  leftIcon={<BiVideoPlus size="1.4rem" fill='white'/>} ml="4.2rem" 
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
                                    <Avatar name='DavinciJ15' size="2.3rem" src={img7} />
                                      
                                
                                </Box>

                                <Box pl={5}>
                                <Box d="flex">
                                      <Text as="h3" color="#FFD600" fontWeight="600" cursor="pointer">DavinciJ15</Text>
                                      <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>
                                    </Box>
                                  <Text as="h2" color="#595B5D" fontSize="0.8rem">510K Followers</Text>
                                </Box>

                                <Button _hover={{
                                  bg: 'rgb(223, 215, 42,0.9)'
                                }} _active={{bg: 'rgb(223, 215, 42,0.9)'}} bg="rgb(223, 215, 42,0.8)" 
                                  leftIcon={<BiVideoPlus size="1.4rem" fill='white'/>} ml="4.2rem" 
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

              {(activeLink === 1 || activeLink === 2) &&<Player  />}

                
                  {activeLink === 3 && <Box pt={4} d="grid" w="100%" gridTemplateColumns="4fr 4fr 4fr 4fr" rowGap={6} columnGap={4}>
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
                    
                    }

                {activeLink === 4 && <Box pt={4} d="grid" w="100%" gridTemplateColumns="4fr 4fr 4fr 4fr" rowGap={6} columnGap={4}>
                    {Followersdata.map(({username,img,followers,isOnline,isVerified}) => (
                      <>
                      {isVerified && 
                        <Box d="flex">
                        <Center width="100%">
                        <Box w="100%" d="flex">
                        <Box width="50%" d="flex">
                            <Box  label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%" >
                                          {/* <Image src={img6} alt="John" width="2.3rem" height="2.3rem" borderRadius="50%" /> */}

                                          <Avatar name='YoungBd' size="2.3rem" src={img} >
                                            {isOnline ? <AvatarBadge boxSize='1rem' bg='#55D64F' /> : <AvatarBadge boxSize='1rem' bg='grey' />} 
                                          </Avatar>
                                            
                                      
                                      </Box>

                                      <Box pl={5}>
                                          <Box d="flex">
                                            <Text as="h3" color="#FFD600" fontWeight="600" cursor="pointer">{username}</Text>
                                              <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>
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
                        

                                    
                      </Center>
                      
                
                        </Box>
                      }
                      </>
                      
                    ))}
                    </Box>
                    }
                
             
          </Box>
          
          
        </Box>
    


    </>
  )
}

export default Home