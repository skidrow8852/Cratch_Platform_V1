import React from 'react'
import { Box, Text, Center, FormControl,useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton, FormLabel, Textarea, Input, RadioGroup, Stack,Radio,
  InputGroup, InputLeftElement, Button ,InputRightElement,Select, Avatar, Spinner, useToast} from "@chakra-ui/react"
import {SiMediamarkt} from 'react-icons/si'
import {BiLockOpen} from 'react-icons/bi'
import {CgWebsite} from 'react-icons/cg'
import {MdSend} from 'react-icons/md'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import VideoComponent from './Player'
import astronaut from "../../../assets/astronaut.jpg"
import universe from "../../../assets/universe.png"
import {getUser} from '../../../services/usersService'
import {getLive,EdiLiveStream} from '../../../services/liveService'
import {Link, useParams} from 'react-router-dom'
import { AiFillEye } from 'react-icons/ai'
import { RiArrowLeftCircleLine } from 'react-icons/ri'
import {getChatMessages,AddMessage} from '../../../services/liveService'
import { io } from "socket.io-client";
import ScrollableFeed from 'react-scrollable-feed'
import { format } from 'timeago.js'

function StreamInfo() {

const { isOpen, onOpen, onClose } = useDisclosure()
const {id} = useParams()
const socket = React.useRef();
const user = localStorage.getItem('user')
const [streamData, setStreamData] = React.useState([])
const [userData,setUserData] = React.useState([])
const [isLoading, setIsLoading] = React.useState(true)
const [isAllowed , setIsAllowed] = React.useState(false)
const [copy, setCopy] = React.useState(0)
const [error, setError] = React.useState(false)
const [videoTitle,setVideoTitle] = React.useState("")
const [videoId,setVideoId] = React.useState("")
const [description, setDescription] = React.useState("")
const [tags, setTags] = React.useState([])
const [category,setCategory] = React.useState("")
const [visibility, setVisibility] = React.useState('1')
const [message,setMessage] = React.useState("")
const [arrivalMessage, setArrivalMessage] = React.useState({});
const [chatSelected , setChatSelected] = React.useState([])
const [selectedUserId, setSelectedUserId] = React.useState("")
const toast = useToast()
document.title = `Stream Details | ${streamData?.title}`

const EditStream = async() => {
  if(videoTitle.length < 3 ){
    toast({
      title: `Title is required`,
      position: "top",
      isClosable: true,
    })
  }
  else {
    try {
      const data = await EdiLiveStream(videoId,{
        title : videoTitle,
        description : description,
        tags : tags,
        category : category,
        visibility : Number(visibility),
        })

        if(data.status === 200) {
          toast({
            title: `Stream updated successfully`,
            position: "top",
            isClosable: true,
            status: 'success', 
          })

        }

        
    }catch(error) {
      toast({
        title: `An error occurred please try again later`,
        position: "top",
        isClosable: true,
        status: 'error', 
      })
          
    }
    onClose()
  }
  
}


const sendmessage = async() => {
  try {
      if(selectedUserId.length > 1 && message.length > 1) {

          const msgs = [...chatSelected];
          msgs.push({ creator : userData,
            liveId : streamData._id,
            content : message });   
          await AddMessage({
              creator : userData?._id,
              liveId : streamData._id,
              content : message
      })
      
     
          socket.current.emit("send-msg-chat", {
            creator : userData,
            liveId : streamData._id,
            content : message
              });
            setMessage("")
            setChatSelected(msgs);
      
      }
      
  
  }catch(e){
      console.log(e)
  }
  
}

const keyDownHandler = event => {
        
  
  if (event.key === 'Enter') {
    event.preventDefault();

    sendmessage();
  }
};

const handleInputChange = (e) => {
  setMessage(e.target.value)
}

React.useEffect(() => {
  if (selectedUserId) {
    socket.current = io(`${process.env.REACT_APP_SERVER_HOST}`);
    socket.current.emit("add-user-chat", userData.userId);
  }

}, [selectedUserId]);


React.useEffect(() => {
  if (socket.current) {
    socket.current.on("msg-recieve-chat", (message) => {
      setArrivalMessage(message);
      
    });
  }
}, [selectedUserId]);

React.useEffect(() => {
  
  arrivalMessage && setChatSelected((chatSelected) => [...chatSelected, arrivalMessage]);
  
}, [arrivalMessage]);



const getAlldata = async() =>{
  try {
  const data = await getUser(user)
  const liveData = await getLive(id)

  if(liveData.data.status !== 'not found') {
    
    if(liveData?.data?.creator?._id === data?.data?._id) {
      setIsAllowed(true)
      setUserData(data.data)
      setStreamData(liveData.data)
      setVideoTitle(liveData.data.title)
      setVideoId(liveData.data._id)
      setDescription(liveData.data.description)
      setTags(liveData.data.tags)
      setCategory(liveData.data.category)
      setVisibility(liveData.data.visibility === 1 ? '1' : '0')
      setSelectedUserId(liveData?.data?._id)
      const datas = await getChatMessages(liveData?.data._id)
        setChatSelected(datas?.data)

    }
  }else {
    setError(true)
  }



  setIsLoading(false)
}catch(e) {
  setError(true)
}
}



const handleVideoTitle = (e) => {
  setVideoTitle(e.target.value)
}
const handleDescription = (e) => {
  setDescription(e.target.value)
}


function handleKeyDown(e){
  // If user did not press enter key, return
  if(e.key !== 'Enter') return
  // Get the value of the input
  const value = e.target.value
  // If the value is empty, return
  if(!value.trim()) return
  // Add the value to the tags array
  setTags([...tags, value])
  // Clear the input
  e.target.value = ''
}

function removeTag(index){
  setTags(tags.filter((el, i) => i !== index))
}

React.useEffect(() => {
  getAlldata()
},[])


const Copy = ({textValue,id}) => {
    return(
        <CopyToClipboard text={textValue} onCopy={() => setCopy(id)}>
            <Box>
                <Button height="2.8rem" width="6rem" border="1px solid rgb(255,255,255,0.4)" color="rgb(255,255,255,0.93)" borderRadius="5px" fontSize="0.9rem">Copy</Button>
                
            </Box>
        </CopyToClipboard>
      
    )
  }


  const Copyied = ({textValue}) => {
    return(
        <CopyToClipboard text={textValue} onCopy={() => setCopy(0)}>
            <Box>
                <Button height="2.8rem" width="6rem" border="1px solid rgb(255,255,255,0.4)" color="rgb(255,255,255,0.93)" borderRadius="5px" fontSize="0.9rem">✔ Copied</Button>
                
            </Box>
        </CopyToClipboard>
      
    )
  }




  if(error || !isAllowed) {
    return (
        <Box width="100%" height="88%" bg="#111315" fontFamily="heading" >
            <Center w="100%" h="100%">
            <Box width="95%" height="100%" >
            {isLoading ? <Center w="100%" h="100%"><Spinner 
                                    thickness='4px'
                                    color='#3EA6FF'
                                    size='xl'
                                    ariaLabel='loading'
                                    speed='0.65s'
                                    emptyColor='grey'
                                /></Center>
         :
                    <Center mt={2} w="100%" h="90%" bgImage={`url('${universe}')`} bgRepeat="no-repeat" bgSize="cover" bgPosition="center" borderRadius="10px">
                        <Box textAlign="center" w="100%" h="100%" bgImage={`url('${astronaut}')`} bgRepeat="no-repeat" bgSize="contain" bgPosition="center">
                            <Text fontSize="3rem" fontWeight="bold" pt={5}>{error ? 'ERROR' : 'NOT ALLOWED'}</Text>
                            <Text fontSize="17rem" fontWeight="bold">4&nbsp;&nbsp;{error ? '4' : '5'}</Text>
                            <Link to="/"><Button fontSize="1.1rem" borderRadius="50px" p={6} leftIcon={<RiArrowLeftCircleLine size="1.2rem"/>}>Back to home</Button></Link>
                        </Box>
                        
                    </Center>
      }

                </Box>
            </Center>
        </Box>
    )
}

else {

return (
    <>
    <Box width="100%" height="88%" bg="#111315" fontFamily="heading" >
      <Center width="100%" height="95%" pt={2}>
         {isLoading ? <Center w="100%" h="100%"><Spinner 
                                    thickness='4px'
                                    color='#3EA6FF'
                                    size='xl'
                                    ariaLabel='loading'
                                    speed='0.65s'
                                    emptyColor='grey'
                                /></Center>
         :
         <Box width="94%" height="100%" d="flex" gap={5}>
            <Box width="70%" height="100%" >
                <Box d="flex" width="100%" height="40%" >
                        <Box width="40%" bg="#242627" height="85%" borderRadius="5px 0px 0px 5px">
                        <VideoComponent videoUrl={streamData?.playbackUrl}/>
                        </Box>
                        <Box width="60%" height="85%" bg="#242627" d="flex" borderRadius="0px 5px 5px 0px">
                            <Center width="100%" height="100%">
                                <Box width="90%" d="flex" height="80%">
                                    <Box width="80%">
                                        <Text as="h4" fontSize="0.85rem" fontFamily="sans-serif" color="rgb(255,255,255,0.50)" pt={1}>Title</Text>
                                        <Text as="h4" fontSize="1.1rem" color="rgb(255,255,255,0.90)">{streamData?.title}</Text>

                                        <Text as="h4" fontSize="0.85rem" fontFamily="sans-serif" color="rgb(255,255,255,0.50)" pt={2}>Category</Text>
                                        <Text as="h4" fontSize="0.9rem" color="rgb(255,255,255,0.90)">{streamData?.category}</Text>
                                        <Box d="flex">
                                            <Box width="50%">
                                                <Text as="h4" fontSize="0.85rem" fontFamily="sans-serif" color="rgb(255,255,255,0.50)" pt={2}>Visibility</Text>
                                                {streamData?.visibility === 1 ? <Text as="h4" fontSize="0.9rem" color="rgb(255,255,255,0.90)" d="flex"><Box pt={1} pr={1.5}><AiFillEye fill="green" size="1.2rem" /></Box>Public</Text> : <Text as="h4" fontSize="0.9rem" color="rgb(255,255,255,0.90)" d="flex"><Box pt={1} pr={1.5}><SiMediamarkt fill="white" /></Box> NFT Holders</Text>}
                                            </Box>
                                            <Box width="50%">
                                               <Text as="h4" fontSize="0.85rem" fontFamily="sans-serif" color="rgb(255,255,255,0.50)" pt={2}>Likes</Text>
                                                <Text as="h4" fontSize="0.9rem" color="rgb(255,255,255,0.90)">{streamData?.likes}</Text> 
                                            </Box>
                                            
                                        </Box>
                                        
                                    </Box>
                                    <Box width="20%" >
                                            <Button width="100%" border="1px solid rgb(255,255,255,0.50)" onClick={onOpen} mt={3}>Edit</Button>
                                    </Box>
                                </Box>
                            </Center>
                           
                        </Box>

                </Box>
                <Box width="100%" height="60%" bg="#242627" borderRadius="5px">
                    <Box width="100%" height="12%" bg="#1a1b1c" >
                        <Box borderBottom="2px solid white" width="15%" pt={1.5} ml={5} cursor="pointer">
                           <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="0.9rem" fontFamily="sans-serif" fontWeight="bold">Stream Settings</Text> 
                        </Box>
                        
                    </Box>
                    <Center width="100%">
                         <Box width="92%">
                             <Box width="85%">
                                   <Text as="h3" color="rgb(255,255,255,0.50)" fontSize="1rem"  pt={4}>Server URL</Text>           
                                    <FormControl pt={2}>
                                        <InputGroup >
                                            <InputLeftElement pt={2} pl={2} children={<BiLockOpen color="white" size="1.2rem" />}  />
                                            <Input id='title' placeholder='Stream URL' height="3rem" value='rtmp://rtmp.livepeer.com/live/' />
                                            <InputRightElement pt={2} pr={12} children={copy === 1  ? <Copyied textValue='rtmp://rtmp.livepeer.com/live/'/>  :<Copy id={1} textValue='rtmp://rtmp.livepeer.com/live/'/>} />
                                        </InputGroup>
                                    </FormControl>

                                    <Text as="h3" color="rgb(255,255,255,0.50)" fontSize="1rem" pt={3}>Stream key</Text>           
                                    <FormControl pt={2}>
                                        <InputGroup >
                                            <InputLeftElement pt={2} pl={2} children={<BiLockOpen color="white" size="1.2rem" />}  />
                                            <Input id='title' placeholder='Key' height="3rem" value={streamData?.streamKey} />
                                            <InputRightElement pt={2} pr={12} children={copy === 2 ? <Copyied textValue={streamData?.streamKey}/>  :<Copy id={2} textValue={streamData?.streamKey}/>} />
                                        </InputGroup>
                                    </FormControl>

                                    <Text as="h3" color="rgb(255,255,255,0.50)" fontSize="1rem" pt={3}>Live URL</Text>           
                                    <FormControl pt={2}>
                                        <InputGroup >
                                            <InputLeftElement pt={2} pl={2} children={<CgWebsite color="white" size="1.2rem" />}  />
                                            <Input id='title' placeholder='Playback URL' height="3rem" value={`https://account.cratch.io/live/${streamData?.streamUrl}`} />
                                            <InputRightElement pt={2} pr={12} children={copy === 3 ? <Copyied textValue={`https://account.cratch.io/live/${streamData?.streamUrl}`}/>  : <Copy id={3} textValue={`https://account.cratch.io/live/${streamData?.streamUrl}`}/>} />
                                        </InputGroup>
                                    </FormControl>
                             </Box>
                          
                    </Box>
                    </Center>
                   
                   

                </Box>
                
            </Box>
            <Box width="30%" height="100%"  borderRadius="5px" >
                    <Box height="8%" width="100%" position="sticky" bg="#242627">
                        <Center width="100%" height="100%" pb={1.5}><Text>Stream Chat</Text></Center>                    
                    </Box>
                    <Box height="77%" width="100%" border="1px solid #242627" overflowY="auto" socket={socket}>
                      <ScrollableFeed>
                          <Box width="100%" d="grid" gridTemplateRows="4fr 4fr 4fr 4fr" gap={5} pt={5} pb={5}>
                            {chatSelected?.map((message) => (
                                <Box w="auto"  d="flex">
                                    <Avatar w="2.2rem" h="2.2rem" src={message?.creator?.ProfileAvatar} ml={1} mt={1} />
                                    <Box>
                                      <Box d="flex" pl={3}>
                                        <Text as="h4" >{message?.creator?.username?.slice(0,12)}</Text>
                                        <Text pl={5} pt={1} color="rgb(255,255,255,0.5)" fontSize="0.8rem">{format(message?.createdAt)}</Text>
                                      </Box>
                                      
                                      <Text w="auto" bg="#212024" mt={1} pl={5} ml={2} pt={2} pb={2} pr={5} borderRadius="2px 10px 10px 10px">  
                                          {message?.content}
                                      </Text>
                                    </Box>
                              
                                
                                </Box>
                            ))}
                                
                          </Box>
                    </ScrollableFeed>
                    </Box>
                    <Box height="15%" width="100%" bg="#242627">
                        <Center width="100%">
                            <Box width="90%" >
                            <Box d="flex" pt={1.5}>
                                    <Box pt={1.5} label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%">
                                        <Avatar src={userData?.ProfileAvatar} alt={userData?.username} width="2.3rem" height="2.3rem"  />
                                    </Box>

                                    <Box pl={5}>
                                        <Box>
                                          <Text as="h3" fontSize="0.9rem" color="#FFD600" fontWeight="600" cursor="pointer">{userData?.username}</Text>
                                         
                                        </Box>
                                      <InputGroup pt={2}>
                                        <Input onKeyDown={keyDownHandler}  value={message} onChange={handleInputChange} placeholder='Say something...' />
                                        <InputRightElement pt={3.5} children={<MdSend onClick={sendmessage} cursor="pointer" fill='rgb(255,255,255,0.6)' size="1.5rem" />} />
                                      </InputGroup>
                                        
                                     
                                    </Box>
                     </Box>
                            </Box>
                        </Center>
                    </Box>
            </Box>
        </Box>}
      </Center>
       
      <Modal size="2xl" closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} bg="#242627">
          <ModalOverlay />
          
            <ModalContent bg="#F7F7FC">
              
                <ModalCloseButton mr={8} />

              <ModalBody bg="#242627" borderRadius="5px" >
            
              <Center width="100%"  height="69vh" mt={5}>
                  <Box pl={4} width="100%" pb={5} bg="#242627" d="flex"  height="100%" overflowY="auto">
                    <Box width="93%">
                      <Text as="h1" color="rgb(255,255,255,0.95)" fontWeight="bold" fontSize="1.6rem" pb={4}>Details</Text>
                      <FormControl isRequired>
                        <FormLabel htmlFor='title' fontSize="1.1rem"fontWeight="500" fontFamily="sans-serif" color="rgb(255,255,255,0.50)">Title</FormLabel>
                        <Input required value={videoTitle} onChange={handleVideoTitle} id='title' placeholder='Choose a title for your steam' height="3rem" />
                      </FormControl>
                      <FormControl pt={4}>
                        <FormLabel htmlFor='description' fontSize="1.1rem" fontWeight="500" fontFamily="sans-serif"  color="rgb(255,255,255,0.50)">Description</FormLabel>
                        <Textarea
                            onChange={handleDescription}
                            value={description}
                            fontSize="1rem"
                            placeholder='Tell viewrs about your stream'
                            size='md'
                            height="8rem"
                          />
                      </FormControl>
                      
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={5} fontWeight="bold">Tags</Text>
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)">Tags can be useful if content in your stream is commonly misspelled.</Text>
                      <FormControl pt={3}>
                        
                        <div className="tags-input-container">
                              { tags.map((tag, index) => (
                                  <div className="tag-item" key={index}>
                                      <span className="text">{tag}</span>
                                      <span className="close" onClick={() => removeTag(index)}>&times;</span>
                                  </div>
                              )) }
                              <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Add tag" />
                          </div>
                      </FormControl>
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif"  fontWeight="bold" pt={5}>Category</Text>           
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)" pt={2}>Add your stream to a category so viewrs can find it more easily</Text>
                      <FormControl pt={3}>
                        
                      <Select size="lg" bg="#242627" color="white" >
                            <option onClick={() => setCategory('Crypto')} value='Crypto'>&nbsp;Crypto</option>
                            <option onClick={() => setCategory('Gaming')} value='Gaming'>&nbsp;Gaming</option>
                            <option onClick={() => setCategory('Play 2 Earn')} value='Play 2 Earn'>&nbsp;Play 2 Earn</option>
                            <option onClick={() => setCategory('Lifectyle')} value='Lifectyle'>&nbsp;Lifectyle</option>
                            <option onClick={() => setCategory('Educational')} value='Educational'>&nbsp;Educational</option>
                            <option onClick={() => setCategory('Sports')} value='Sports'>&nbsp;Sports</option>
                            <option onClick={() => setCategory('Travel & Events')} value='Travel & Events'>&nbsp;Travel & Events</option>
                            <option onClick={() => setCategory('Film & Animation')} value='Film & Animation'>&nbsp;Film & Animation</option>
                            <option onClick={() => setCategory('People & Blogs')} value='People & Blogs'>&nbsp;People & Blogs</option>
                          </Select>
                        </FormControl>
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={5} fontWeight="bold">Visibility</Text>           
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)">Choose who can see your video</Text>
                        <Box borderRadius="5px" border="1px solid rgb(255,255,255,0.50)" height="8rem" mt={3} >
                          <RadioGroup defaultValue='1' pl={5} pb={16}>
                            <Stack>
                              <Radio value='1' pt={3}>Public<Text as="p" fontSize="0.85rem" color="rgb(255,255,255,0.50)" >Everyone can watch your video</Text></Radio>
                              
                              <Radio  value='0'>NFT Holders<Text value={0} as="p" fontSize="0.85rem" color="rgb(255,255,255,0.50)" >Only your NFT holders can watch your video</Text></Radio>
                            </Stack>
                          </RadioGroup>
                        </Box>       
                      
                    </Box>

                    
                    
                </Box> 
                </Center>
                <Box width="100%" borderTop="1px solid rgb(96, 96, 96,0.6)" height="4rem" position="sticky" textAlign="end">
                  
                    <Button onClick={() => {onClose();EditStream()}} fontSize="1.15rem" bg="#3ea6ff" mr={5} pb={1} height="3rem" width="7rem" mt={3} _hover={{bg : 'rgb(62, 166, 255, 0.85)'}} 
                          _active={{bg : 'rgb(62, 166, 255, 0.85)'}}>
                        Save
                    </Button>
                  
                    
                  
                  
                </Box>
                
            </ModalBody>
          </ModalContent>
          
          
      </Modal>
    </Box>

    </>
  )
}

}

export default StreamInfo