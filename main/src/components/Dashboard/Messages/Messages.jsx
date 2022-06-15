import React from 'react'
import {useColorMode, Box, Center, Text, Avatar,AvatarBadge, Input,Button,Image, InputGroup, InputLeftElement,Spinner } from "@chakra-ui/react"
import {AiOutlineSend} from "react-icons/ai"
import {getUser,getUserProfile,getUsers} from '../../../services/usersService';
import {sendMessage,getAllMessages} from '../../../services/messagesService'
import {useMoralis} from "react-moralis"
import robot from '../../../assets/robot.gif'
import {format} from "timeago.js"
import Picker from "emoji-picker-react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { io } from "socket.io-client";
import ScrollableFeed from 'react-scrollable-feed'
import {FiSearch} from 'react-icons/fi'
import {addUserNotification} from '../../../services/notificationsService'
import { useParams } from 'react-router-dom';

const RobotComponent = ({username}) => {
    return (
        <Box d="flex" justifyContent="center" alignItems="center" color="white" flexDirection="column" > 
          <Image src={robot} height="20rem" />
          <Text as="h1" d="flex">
            Welcome, <Text color="#FB5B78" fontSize="1.1rem" fontWeight="bold" pl={1}>{username.slice(0,20)}!</Text>
          </Text>
          <Text as="h3">Please select a chat to Start messaging.</Text>
        </Box>
      );
}


function Messages() {

    document.title = `Messages`
    const {id} = useParams()
    const {Moralis} = useMoralis()
    const user = Moralis.User.current().get("ethAddress");
    const {colorMode} = useColorMode();
    const [message, setMessage] = React.useState("");
    const [friends, setFriends] = React.useState([])
    const [backupFriends, setBackupFriends] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true) 
    const [chatSelected,setChatSelected] = React.useState([])
    const [selectedUserId, setSelectedUserId] = React.useState("")
    const [isChatActive,setIsChatActive] = React.useState(false)
    const [usernameAvatar,setUsernameAvatar] = React.useState("")
    const [arrivalMessage, setArrivalMessage] = React.useState(null);
    const [allusers,setAllUsers] = React.useState([])
    const [search,setSearch] = React.useState("");
    const socket = React.useRef();
    const [selectedUserAvatar,setSelectedUserAvatar] = React.useState("")
    const [userName, setUserName] = React.useState(user)
    const [displayChatUsername,setDisplayChatUsername] = React.useState("")
    const [displayChatAvatar,setDisplayChatAvatar] = React.useState("")

      const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);
      const handleEmojiPickerhideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
      };

    const handleEmojiClick = (event, emojiObject) => {
        let msg = message;
        msg += emojiObject.emoji;
        setMessage(msg);
      };


const filterFriends = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    
        if(search === "" || search === " " || e.target.value === "" || e.target.value === " " ) {
            setFriends(backupFriends)
            return ;
        }
       
        const usersfound = allusers.filter(d => d.username.toLowerCase().includes(search.toLowerCase()))
            setFriends(usersfound) 
    
    }


    const keyDownHandler = event => {
        
  
        if (event.key === 'Enter') {
          event.preventDefault();
  
          // 👇️ your logic here
          sendmessage();
        }
      };

const sendmessage = async() => {
    try {
        if(selectedUserId.length > 1 && message.length > 1) {

            const msgs = [...chatSelected];
            msgs.push({ fromSelf: true, message: message });   
            await sendMessage({
                from : user,
                to : selectedUserId,
                message : message
        })
       
            socket.current.emit("send-msg", {
                to: selectedUserId,
                from: user,
                message,
              });
              setMessage("")
              fetchUserChat()
              setChatSelected(msgs);
              
              await addUserNotification({from : user, to : selectedUserId, type : 'message',username : userName})
            
        
        
        
        }
        
    
    }catch(e){
        console.log(e)
    }
    
}

const formatTimeStampAMPM = (date) => {
    let hours = new Date(date).getHours();
    let minutes = new Date(date).getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

const fetchUserChat = async() => {
    try {
       const data = await getUser(user);
       const value = await getUsers();
       const values =  value.data.sort( () => Math.random() * 3).slice(0,5)
       const allusers = value.data.filter(e => e.userId !== user)
       const mergedArray = [...data.data.followers, ...data.data.following];
       var newArray = [...new Set(mergedArray)]

        setUserName(data.data.username)
        setUsernameAvatar(data.data.ProfileAvatar)
        values.map(({userId}) => {newArray.push(userId)})
        allusers.map(async ({userId})=> {
            var info = await getUserProfile(userId)
            var b = info.data
            var dats = await getAllMessages({from : user, to : userId})
                
                if(dats.data.length > 0) {
                    newArray.push(userId.toString()) 
                    var c =Object.assign(b, {message : dats.data[dats.data.length-1].message, sentAt: dats.data[dats.data.length-1].createdAt})
                    setFriends(friends => [...friends,c])
                    setAllUsers(friends => [...friends,c])
                    setBackupFriends(friends => [...friends,c])
                    
                    
                }
                else {
                    var d =Object.assign(b, {message : "Hi there! let's chat",sentAt : '👋'})
                    setAllUsers(friends => [...friends,d])
                    
                }
            
        }) 
        
        if(newArray.length > 1) {
            setIsLoading(true)
          var newdata = [...new Set(newArray)]
          newdata.map(async (ids)=> {
        
            var info = await getUserProfile(ids)
            var b = info.data
            
            var dats = await getAllMessages({from : user, to : ids})
                
                if(dats.data.length > 0) {
                    var c =Object.assign(b, {message : dats.data[dats.data.length-1].message, sentAt: dats.data[dats.data.length-1].createdAt})
                    
                    setFriends(friends => [...friends,c])
                    
                    setBackupFriends(friends => [...friends,c])
                    
                }
                else {
                    var d =Object.assign(b, {message : "Hi there! let's chat",sentAt : '👋'})
                    setFriends(friends => [...friends,d])
                     
                    setBackupFriends(friends => [...friends,d])
                    
                }
            
        }) 
        }

        if(id) {
            setSelectedUserId(id);
            setIsChatActive(true);
            setDisplayChatUsername(allusers.find(x => x.userId == id).username)
            setDisplayChatAvatar(allusers.find(x => x.userId == id).ProfileAvatar)
            window.history.replaceState(null, "Messages", "/messages")
        }
    }catch(e) {
        console.log(e)
    }
  setIsLoading(false)   
  
}

const getMessages = async() => {
    if(selectedUserId.length > 0){
        try {
            const data = await getAllMessages({from : user, to : selectedUserId})
            setChatSelected(data.data)
            
        }
        catch (e){
            
        }
    }
    
}

const handleInputChange = (e) => {
    setMessage(e.target.value)
}


React.useEffect(() => {
    if (selectedUserId) {
      socket.current = io(`${process.env.REACT_APP_SERVER_HOST}`);
      socket.current.emit("add-user", user);
      if(id && backupFriends.length > 1 || !id ) {
        setDisplayChatUsername(backupFriends?.find(x => x.userId == selectedUserId).username)
        setDisplayChatAvatar(backupFriends?.find(x => x.userId == selectedUserId).ProfileAvatar)
      }
      
    }

  }, [selectedUserId]);


React.useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (message) => {
        setArrivalMessage({ fromSelf: false, message: message });
      });
    }
  }, [selectedUserId]);

React.useEffect(() => {
    arrivalMessage && setChatSelected((chatSelected) => [...chatSelected, arrivalMessage]);
    
    
  }, [arrivalMessage]);

React.useEffect(() => {
    fetchUserChat();
    
},[])

React.useEffect(()=> {
    getMessages()
},[selectedUserId])
  return (
    <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
          <Center w="100%" h="100%">
            <Box width="95%" height="100%" >
                    <Box width="40%" d="flex" pt={3} pb={5} >
                        <Text w="40%" as="h1" fontSize="1.7rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif"   fontWeight="bold">Messages</Text>
                        <InputGroup w="60%" >
                        <InputLeftElement children={<FiSearch size="1rem" color="rgb(255,255,255,0.5)" />} />
                            <Input onChange={filterFriends} value={search} w="100%" placeholder="Search for friend" />
                            
                        </InputGroup>
                        
                    </Box>

                    {isLoading ? <Center w="100%" h="70vh"><Spinner 
                                    thickness='4px'
                                    color='#3EA6FF'
                                    size='xl'
                                    ariaLabel='loading'
                                    speed='0.65s'
                                    emptyColor='grey'
                                /></Center> :
                    <Box d="flex" boxShadow="6px 6px rgb(255,255,255,0.3)" borderRadius="5px">
                        <Box width="40%" bg="rgb(89, 91, 93,0.55)" height="100%" borderRadius="5px 0px 0px 5px">
                            <Box overflowY="auto" height="70vh">
                                
                                    <Box width="100%" d="grid" gridAutoRows="4fr 4fr 4fr 4fr" gap={4} pt={5}>

                                        { Array.from(friends?.reduce((m, t) => m.set(t.userId, t), new Map()).values()).map(({userId,ProfileAvatar,username,isOnline,message,sentAt}) => (
                                            <Box key={userId} bg={(isChatActive == true && selectedUserId == userId) ? 'rgb(31, 34, 35)' : ''} cursor="pointer" _hover={{bg: "rgb(31, 34, 35)"}} onClick={()=> {setIsChatActive(true);setSelectedUserId(userId);setSelectedUserAvatar(ProfileAvatar);setDisplayChatAvatar("");setDisplayChatUsername("")}}>
                                            <Center width="100%">
                                                <Box width="95%" d="flex" mt={3} mb={3}>
                                                    <Avatar w="2.5rem" h="2.5rem" src={ProfileAvatar} >
                                                        {isOnline ?<AvatarBadge boxSize='0.85rem' bg='#55D64F' /> : <AvatarBadge boxSize='0.85rem' bg='gray' />}
                                                    </Avatar>
                                                    <Box width="80%" ml={2}>
                                                        <Text as="h3">{username?.slice(0,20)}</Text>
                                                        <Text as="p" color="rgb(255,255,255,0.5)" fontSize="0.85rem" noOfLines={1}>{message.length > 0 ? message : "Hey there! let's chat"}</Text>
                                                    </Box>
                                                    <Box width="20%" pl={5} pt={2}>
                                                        <Text fontSize={sentAt =='👋' ? '1.2rem' : '0.9rem' } as="p">{sentAt == '👋' ? sentAt : formatTimeStampAMPM(sentAt)}</Text>
                                                    </Box>
                                                    
                                                </Box>
                                            </Center>
                                            
                                        </Box>
                                        ))}

                                    </Box> 
                                
                            </Box>
                            
                        </Box>

                        <Box width="60%" bg="rgb(36, 38, 39,0.8)" height="100%" borderRadius="0px 5px 0px 0px" >

                            

                            <Box overflowY="auto" w="96%" height="60vh" ml={5} mr={5} socket={socket}>
                                {!isChatActive && <RobotComponent username={userName} />}
                                
                                
                                {isChatActive && 
                                <ScrollableFeed>
                                    <Box width="100%" d="grid" gridTemplateRows="4fr 4fr 4fr 4fr" gap={5} pt={5} pb={5}>
                                    {chatSelected.length < 1  && <Box d="flex"><Avatar w="2.2rem" h="2.2rem" src={displayChatAvatar} ml={2} mt={1} /> <Box pl={3}><Text  fontSize="1.1rem" >{displayChatUsername}</Text><Text color="rgb(255,255,255,0.5)" fontSize="0.85rem">Hi there! let's chat</Text></Box></Box>}
                                    
                                    {chatSelected?.map((message) => (
                                        <>
                                        
                                        {message.fromSelf ?
                                        <Box w="auto"  d="flex" justifyContent="right" pr={5}>
                                            <Center pr={3} textAlign="right">
                                                <Text color="rgb(255,255,255,0.5)" fontSize="0.8rem">{format(message.createdAt)}</Text>
                                            </Center>
                                            <Text bg="#4552FE" pl={5} ml={2} pt={2} pb={2} pr={5} borderRadius="10px 2px 10px 10px">  
                                                {message.message}
                                            </Text>
                                            
                                            <Avatar w="2rem" h="2rem" src={usernameAvatar} ml={2} mt={1} />
                                        </Box> : 
                                        <Box w="auto"  d="flex" >
                                            <Avatar w="2rem" h="2rem" src={selectedUserAvatar} ml={1} mt={1} />
                                            <Text bg="rgb(18, 19, 20,0.2)" pl={5} ml={2} pt={2} pb={2} pr={5} borderRadius="2px 10px 10px 10px">  
                                                {message.message}
                                            </Text>
                                            <Center pl={5}>
                                                <Text color="rgb(255,255,255,0.5)" fontSize="0.8rem">{format(message.createdAt)}</Text>
                                            </Center>
                                            
                                         </Box> 
                                        
                                        }
                                        </>
                                        
                                    ))}
                                        
                                        
                                       
                                </Box>
                            </ScrollableFeed>}
                                
                            </Box>
                            <Box height="10vh" d="sticky" width="100%" borderRadius="0px 0px 5px 0px" borderTop="1px solid rgb(255,255,255,0.3)">
                                    <Center width="100%" height="100%">
                                        <Box w="95%" h="90%" d="flex">
                                            <Box pr={5} pt={6} cursor="pointer" onClick={handleEmojiPickerhideShow} >
                                                <BsEmojiSmileFill  />
                                                {showEmojiPicker && <Picker pickerStyle={{ position: 'absolute', top : '38vh', left : '45vw' }} onEmojiClick={handleEmojiClick} />}
                                            </Box>
                                                <Input onKeyDown={keyDownHandler} p={0} isDisabled={!isChatActive} value={message} onChange={handleInputChange} height="100%" width="90%" placeholder="Send a message" border="none" _focus={{border : "none"}} />
                                            
                                            
                                            <Box pl={6} pt={1.5} d="flex">
                                            
                                           
                                                <Button isDisabled={!isChatActive} onClick={sendmessage} _hover={{bg : "rgb(69, 82, 254,0.8)"}} _active={{bg : "rgb(69, 82, 254,0.8)"}} bg="#4552FE" pb={1} height="90%" cursor="pointer" textAlign="center" rightIcon={<AiOutlineSend />}>Send</Button>
                                            </Box>
                                        </Box>
                                    </Center>

                            </Box>
                        </Box>
                    </Box>
                }
                    
            </Box>
            </Center>
    </Box>
  )
}

export default Messages