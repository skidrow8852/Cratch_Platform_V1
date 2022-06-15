import React from 'react'
import {Box, Center, Text, useColorMode,Avatar,Button,AvatarBadge, Spinner, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverBody, PopoverFooter, Input} from "@chakra-ui/react"
import ReactPlayer from 'react-player/lazy'
import {Link} from "react-router-dom"
import {useMoralis} from "react-moralis"
import {getUserProfile,followUser,unFollowUser} from "../../../services/usersService";
import {useParams} from "react-router-dom"
import {RiArrowLeftCircleLine,RiUserFollowLine} from 'react-icons/ri'
import {BsFillSuitHeartFill} from "react-icons/bs"
import {BiMessageAltDetail} from "react-icons/bi"
import {HiCheck} from "react-icons/hi"
import astronaut from "../../../assets/astronaut.jpg"
import universe from "../../../assets/universe.png"
import Picker from "emoji-picker-react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { AiOutlineSend } from 'react-icons/ai'
import {sendMessage} from '../../../services/messagesService'
import {addUserNotification} from '../../../services/notificationsService'

const Profiles = () => {

const {Moralis} = useMoralis()
    const user = Moralis.User.current().get("ethAddress");
    const {colorMode} = useColorMode();
    const initialFocusRef = React.useRef()
    const {id} = useParams()
    const [about, setAbout] = React.useState("Hello, welcome to my Cratch channel!")
    const [username,setUsername] =  React.useState(id)
    const [avatar, setAvatar] = React.useState("https://bafybeifgsujzqhmwznuytnynypwg2iaotji3d3whty5ymjbi6gghwcmgk4.ipfs.dweb.link/profile-avatar.png")
    const [followersCount, setFollowersCount] = React.useState(0)
    const [cover, setCover] = React.useState("https://bafybeie3mniojsxcxbvruv4hcfadymzl3c7dioj7jvffyr53rtelduys3a.ipfs.dweb.link/meta.jpeg")
    const [tab,setTab] = React.useState(1);
    const [error, setError] = React.useState(false)
    const [follow,setFollow] = React.useState(false)
    const [isOnline,setIsOnline] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)
    const [message, setMessage] = React.useState("");
    const [loggedinUsername, setLoggedinUsername] = React.useState(user)
    const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);
    document.title = `Profile | ${username}`
    const videos = [
        {
          videoUrl : "https://www.youtube.com/watch?v=9QvRjjNzRMQ",
          title : "Let's win this battle together!",
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

//// handle follow functionality


  const GetUser = async() => {
    try {
      const result = await getUserProfile(id);
      const loggedusename = await getUserProfile(user)
           if(result.data.status === 'not found') {
            setError(true)
           }
           else {
                setCover(result.data.ProfileCover)
                setUsername(result.data.username.slice(0,20))
                setAvatar(result.data.ProfileAvatar)
                setFollowersCount(result.data.followers.length)
                setAbout(result.data.about)
                setIsOnline(result.data.isOnline)
                
                setIsLoading(false)
                setLoggedinUsername(loggedusename.data.username)
                if(result.data.followers.includes(user)) {
                    setFollow(true)
                }
                else {
                    setFollow(false)
                }
           }
    }catch {
           console.log("")
         }
        
         }
      
          ;

          const sendmessage = async() => {
            try {
                if(message.length > 1) {
        

                    await sendMessage({
                        from : user,
                        to : id,
                        message : message
                })
               
                      setMessage("")
                      
                      await addUserNotification({from : user, to : id, type : 'message',username : loggedinUsername})
                    
                
                
                
                }
                
            
            }catch(e){
                console.log(e)
            }
            
        }

const keyDownHandler = event => {
       
      
            if (event.key === 'Enter') {
                event.preventDefault();     
              // 👇️ your logic here
              sendmessage();
            }
          };
    

const handleEmojiPickerhideShow = () => {
            setShowEmojiPicker(!showEmojiPicker);
          };

const handleInputChange = (e) => {
            setMessage(e.target.value)
        }

const Follow = async() => {
    try{
        await followUser(id.toLowerCase(),{value : user})
        
    }catch(error) {
        console.log(error)
    }
}

const handleEmojiClick = (event, emojiObject) => {
    let msg = message;
    msg += emojiObject.emoji;
    setMessage(msg);
  };


const unFollow = async() => {
    try{
        await unFollowUser(id.toLowerCase(),{value : user})
        
    }catch(error) {
        console.log(error)
    }
}


React.useEffect(() => {
  GetUser()
},[id,follow])

if(error) {
        return (
            <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
                <Center w="100%" h="100%">
                <Box width="95%" height="100%" >

                        <Center mt={2} w="100%" h="90%" bgImage={`url('${universe}')`} bgRepeat="no-repeat" bgSize="cover" bgPosition="center" borderRadius="10px">
                            <Box textAlign="center" w="100%" h="100%" bgImage={`url('${astronaut}')`} bgRepeat="no-repeat" bgSize="contain" bgPosition="center">
                                <Text fontSize="3rem" fontWeight="bold" pt={5}>ERROR</Text>
                                <Text fontSize="17rem" fontWeight="bold">4&nbsp;&nbsp;4</Text>
                                <Link to="/"><Button fontSize="1.1rem" borderRadius="50px" p={6} leftIcon={<RiArrowLeftCircleLine size="1.2rem"/>}>Back to home</Button></Link>
                            </Box>
                            
                        </Center>

                    </Box>
                </Center>
            </Box>
        )
}

else {
    return (
      <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
            <Center w="100%" h="100%">
              <Box width="95%" height="100%" >
                      <Box width="100%">
                          <Text width="100%" as="h1" fontSize="1.7rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pt={3} pb={5}  fontWeight="bold">Profile</Text>
                      </Box>
                      {isLoading ? <Center w="100%" h="75vh"><Spinner 
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
                                <Box w="60%" d="flex">
                                    <Avatar src={avatar} w="4rem" h="4rem" >
                                    {isOnline ? <AvatarBadge boxSize='1.1rem' bg='#55D64F' /> : <AvatarBadge boxSize='1.1rem' bg='grey' />} 
                                    </Avatar>
                                    <Box pl={5} pt={2}>
                                        <Text as="h3" color="#D5BD31" fontSize="1.2rem" fontWeight="bold">{username}</Text>
                                        <Text as="h4" color="rgb(255,255,255,0.5)" fontSize="0.9rem">{followersCount} Followers</Text>
                                    </Box>
                                </Box>
                                <Box d="flex" columnGap={6} w="40%" pr={3}>
                                     <Box w="33%">
                                     <Popover
                                        initialFocusRef={initialFocusRef}
                                        placement='bottom'
                                        closeOnBlur={false}
                                    >
                                    
                                        <PopoverTrigger><Button onClick={()=>{}} pb={0.5} leftIcon={<BiMessageAltDetail />} height="70%" w="100%" border="1px solid white" _hover={{bg : "transparent"}} _active={{bg : "transparent"}} bg="transparent">Message</Button></PopoverTrigger>
                                    <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                                        <PopoverHeader pt={4} fontWeight='bold' border='0' d="flex">
                                    
                                            Chat with <Text color="#D5BD31" pl={2}>{username}</Text>
                                        </PopoverHeader>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverBody>
                                            <Box w="95%" d="flex" pb={2}>
                                                <Box pr={4} pt={3} cursor="pointer" onClick={handleEmojiPickerhideShow} >
                                                    <BsEmojiSmileFill  />
                                                    {showEmojiPicker && <Picker pickerStyle={{ position: 'absolute', marginTop: '20px' ,width: '18rem' , height: '10rem'}} onEmojiClick={handleEmojiClick} />}
                                                </Box>
                                                    <Input onKeyDown={keyDownHandler} p={0} value={message} onChange={handleInputChange}  width="90%" placeholder="Send a message" border="none" _focus={{border : "none"}} />
                                                
                                                
                                                <Box  d="flex">
                                                
                                            
                                                    <Button height="auto" onClick={sendmessage} _hover={{bg : "rgb(69, 82, 254,0.8)"}} _active={{bg : "rgb(69, 82, 254,0.8)"}} bg="#4552FE"   cursor="pointer" textAlign="center" ><AiOutlineSend /></Button>
                                                </Box>
                                            </Box>
                                        </PopoverBody>
                                        
                                    </PopoverContent>
                                    </Popover>
                                     
                                    </Box>
                                    <Box w="33%">
                                        <Button pb={0.5} leftIcon={<BsFillSuitHeartFill />} height="70%" w="100%" border="1px solid rgb(255,255,255,0.6)">Support</Button>
                                    </Box>
                                    <Box w="33%">
                                        {follow ? <Button textAlign="center" pl={2.5} onClick={() => {unFollow();setFollow(!follow)}} pb={0.5} leftIcon={<HiCheck size="1.3rem" />} height="70%" w="100%" _hover={{bg : "rgb(69, 82, 254,0.8)"}} _active={{bg : "rgb(69, 82, 254,0.8)"}} bg="rgb(69, 82, 254,0.5)">Following</Button> : <Button onClick={() => {Follow();setFollow(!follow)}} pb={0.5} leftIcon={<RiUserFollowLine />} height="70%" w="100%" _hover={{bg : "rgb(69, 82, 254,0.8)"}} _active={{bg : "rgb(69, 82, 254,0.8)"}} bg="#4552FE">Follow</Button>}
                                    </Box>
                                   
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
    
}

export default Profiles