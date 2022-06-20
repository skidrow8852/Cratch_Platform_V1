import React from 'react'
import {Box, Center, Text, TableContainer, Table, 
    TableCaption, Thead, Tr, Th,Tbody,Td, Tabs,TabList,Tab,TabPanels
    ,TabPanel, Tooltip, Button, Avatar,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,NumberInputStepper,
    ModalCloseButton, FormLabel, NumberDecrementStepper,NumberInput,
    NumberInputField,NumberIncrementStepper,
    Select, FormControl, Spinner, Input, Textarea, RadioGroup, Stack, Radio, useToast} from "@chakra-ui/react"
import {AiFillEye} from 'react-icons/ai'
import {SiMediamarkt} from 'react-icons/si'
import {BiEdit, BiImageAdd} from 'react-icons/bi'
import {MdAdd} from 'react-icons/md'
import {getUser} from "../../../services/usersService";
import {editVideo, getUserVideos,getVideos} from '../../../services/videoService'
import {getUserLives} from '../../../services/liveService'
import {storeIMGProfile} from '../../../services/apiCalls'
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import './style.css'

function Content() {

    document.title = `Channel Content`


    const user = localStorage.getItem('user')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [isEditOpen, setIsEditOpen] = React.useState(false)

    const [lives,setLives] = React.useState([])

    const [selectedVideo, setSelectedVideo] = React.useState([])

    const [videos,setVideos] = React.useState([])

    const [isLoading, setIsLoading] = React.useState(true) 

    const [nftsCreated,setNftsCreated] = React.useState([])

    const [nftsOwned,setNftsOwned] = React.useState([])

    const [imageUpload, setImageUpload] = React.useState(null)
    const [active,setActive] = React.useState(0)
    const [videoTitle,setVideoTitle] = React.useState("")
    const [videoId,setVideoId] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [thumbnail, setThumbnail] = React.useState([])
    const [thumbnailUrl, setThumbnailUrl] = React.useState("")
    const [tags, setTags] = React.useState([])
    const [videoDuration,setVideoDuration] = React.useState("0")
    const [category,setCategory] = React.useState("")
    const [visibility, setVisibility] = React.useState('1')
    const toast = useToast()
   

    const GetUser = async() => {
        try {
          
          const result = await getUser(user);
          if(result.data){
               const userData = await getuserVideos(result.data._id)
               await getLives(result.data._id)

               
               const nfts = await getVideos()
               
               if(nfts.data) {
                nfts?.data?.map((video) => {
                    if(video.nftOwners.includes(user)) {
                        setNftsOwned(nftsOwned => [...nftsOwned,video])
                    }
                })
               }

               if(userData.length > 1) {
                userData?.map((video) => {
                    
                    if(video.isNFT && video.creator == result.data._id) {
                    
                        setNftsCreated(nftsCreated => [...nftsCreated,video])   
                    }
                })
           }
          }

          setIsLoading(false)
    
        }catch {
               console.log("")
             }
            
             }
          
const getLives = async(id) => {
    try{
        const data = await getUserLives(id)
        if(data.data) {
            setLives(data.data)
            
        }
        

    }catch(e){

    }
}

const clearStates = () =>{
    setImageUpload(null)
    setVideoTitle("")
    setDescription("")
    setThumbnail([])
    setThumbnailUrl("")
    setTags([])
    setVideoDuration("0")
    setCategory("")
    setVisibility("1")
  }

const dateformater = (date) => {
        const publishDate = new Date(date)
        const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
            year:  'numeric',
            month: 'long',
            day:   'numeric',
        });

         const publishedDate = longEnUSFormatter.format(publishDate)
         return publishedDate;
}

    const getuserVideos = async(id) => {
        try {
          const data = await getUserVideos(id)
          if(data.data){
              setVideos(data.data)
              return data.data
          }
        }
      catch (e){}
      }

    function getElByPropVal(myArray, val){
        for (var i = 0, length = myArray.length; i < length; i++) {
            if (myArray[i].title == val){
                return myArray[i];
            }
        }
    }
    const OptionChange = (e) => {
        var result = getElByPropVal(videos,e.target.value);
        setSelectedVideo(result)
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
      
      const handleDropThumbnail = async() => {     
        const img =await storeIMGProfile(imageUpload)
                if(img !== undefined)
                    var newThumbnail = thumbnail
                      newThumbnail.unshift(img)
                    setThumbnailUrl(img);
                    setThumbnail(newThumbnail) 
                    setActive(1)
      }

      const onEdit = (duration,title,thumbnail,tags,description,visibility,category) => {
        setVideoDuration(duration)
        setVideoTitle(title)
        setThumbnailUrl(thumbnail)
        setTags(tags)
        setDescription(description)
        setVisibility(visibility == 1 ? '1' : '0')
        setCategory(category)
    }

      const handleDropImage = acceptedFiles => {
        try {
          setImageUpload(acceptedFiles[0]);
        }
         
        

           
        catch {}
    
        return acceptedFiles[0]; 
      }
      const SubmitVideo = async(id) => {
        if(videoTitle.length < 3 ){
          toast({
            title: `Title is required`,
            position: "top",
            isClosable: true,
          })
        }
        else {
          try {
            const data = await editVideo(id,{
              title : videoTitle,
              description : description,
              thumbnail : thumbnailUrl,
              tags : tags,
              category : category,
              visibility : Number(visibility),
              })
      
              if(data.status == 200) {
                toast({
                  title: `Video details updated successfully`,
                  position: "top",
                  isClosable: true,
                  status: 'success', 
                })
      
              }
      
              setIsEditOpen(false)
              
          }catch(error) {
             toast({
                  title: `An error occurred please try again later`,
                  position: "top",
                  isClosable: true,
                  status: 'error', 
                })
                
          }
          
        }
        
      }

      React.useEffect(() => {
        try {
          if(imageUpload != null && (imageUpload.type == 'image/png' || imageUpload.type == 'image/jpg' 
            || imageUpload.type == 'image/jpeg' || imageUpload.type == 'image/webp') ) {
              handleDropThumbnail()
                
              
          
        }else if(imageUpload != null && !(imageUpload.type == 'image/png' || imageUpload.type == 'image/jpg' 
                  || imageUpload.type == 'image/jpeg' || imageUpload.type == 'image/webp') ) {
      
              toast({
                title: `Only image files are allowed`,
                position: "top",
                isClosable: true,
                status: 'error', 
              })
              setImageUpload(null)
      }   
        }catch {}
        
      },[imageUpload])

React.useEffect(() => {
    GetUser()

},[])

  return (
    <Box width="100%" height="88%" bg="#111315" fontFamily="heading" >
      <Center w="100%" h="100%">
         <Box width="95%" height="100%" >
                <Box d="flex" width="100%">
                    <Box width="80%">
                        <Text width="100%" as="h1" fontSize="1.7rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pt={3} pb={5}  fontWeight="bold">Channel content</Text>
                    </Box>
                    
                     <Box width="20%" pt={5}>
                        <Tooltip label="Create NFT Collection">
                            <Button onClick={onOpen} _hover={{
                                bg : "rgb(251, 91, 120,0.8)"
                            }} _active={{bg : "rgb(251, 91, 120,0.7)"}} bg="#FB5B78" width="100%" height="3rem" leftIcon={<MdAdd fill="white" size="1.5rem"/>} fontSize="1.1rem" fontWeight="bold"> NFT Collection</Button>
                        </Tooltip>
                     </Box>
                    
                 </Box>


            <Box>
            {isLoading ? <Center w="100%" h="50vh"><Spinner 
                                    thickness='4px'
                                    color='#3EA6FF'
                                    size='xl'
                                    ariaLabel='loading'
                                    speed='0.65s'
                                    emptyColor='grey'
                                /></Center> :
            <Tabs isLazy size='md' variant='enclosed'>
                <TabList >
                    <Tab fontWeight="600">Videos</Tab>
                    <Tab fontWeight="600">Live</Tab>
                    <Tab fontWeight="600">NFTs</Tab>
                </TabList>
                <TabPanels >
                    <TabPanel width="100%">
                        <Box overflowY="auto" maxHeight="65vh" width="100%">
                        <TableContainer>
                            <Table variant='simple' >
                                <TableCaption fontSize="1.3rem">{videos?.length < 1 ? <Text fontSize="1.3rem" pt={5}>You didn't share any videos yet</Text> : ""}</TableCaption>
                                <Thead>
                                <Tr >
                                    <Th >Video</Th>
                                    <Th>Visibility</Th>
                                    <Th>Date</Th>
                                    <Th >Views</Th>
                                    <Th >Comments</Th>
                                    <Th >Likes</Th>
                                    <Th>Edit</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                    {videos?.map(({_id,videoId,title,description,visibility,views,category,createdAt,likes,comments,tags,thumbnail,duration}) => (
                                        <Tr>
                                    <Td>
                                        <Box d="flex" width="18rem" height="4.5rem" >
                                            <Link to={`/video/${videoId}`}>
                                            
                                            <Box width="8rem" height="4.5rem" cursor="pointer" justifyContent="right" d="flex" borderRadius="5px"  bgImage={`url(${thumbnail})`} bgSize="cover" bgPosition="center">
                                            <Text borderRadius="2px" as="h3" w="auto" bg="rgb(0,0,0,0.3)" flex="0 1 auto" alignSelf="flex-end" mr={1}>{duration}</Text>
                                            </Box>
                                            </Link>
                                                    <Box width="60%" pl={4}>
                                                        <Center width="100%" height="100%">
                                                            <Box>
                                                                <Tooltip label={title}>
                                                                    <Text cursor="pointer">
                                                                        {title.length > 20 ? title.slice(0,20) + "..." : title}
                                                                        </Text>
                                                                </Tooltip>
                                                                
                                                                    <Text pt={1} as="p" fontSize="0.8rem" color="rgb(255,255,255,0.5)">
                                                                        {description.length > 20 ? description.slice(0,25) + "..." : description}
                                                                    </Text>
                                                                
                                                                
                                                                
                                                            </Box>  
                                                    </Center>
                                                    </Box>
                                                
                                                
                                        </Box>
                                    </Td>
                                    <Td>
                                        <Box d="flex">
                                            <Box>
                                                {visibility === 1 ? <AiFillEye fill="green" size="1.5rem" /> : <SiMediamarkt  fill="#4299E1" size="1.2rem " />}
                                            </Box>
                                            <Text pl={2}>{visibility === 1 ? "Public" : "NFT holders"}</Text>
                                        </Box>
                                        
                                        
                                    </Td>
                                    <Td>
                                        <Box >
                                            <Text as="p" >{dateformater(createdAt)}</Text>
                                            <Text as="p" color="rgb(255,255,255,0.5)" fontSize="0.85rem" pt={1}>Published</Text>
                                        </Box>
                                    </Td>

                                    <Td textAlign="center">
                                        {views}
                                    </Td>
                                    <Td textAlign="center">
                                        {comments}
                                    </Td>

                                    <Td textAlign="center">
                                        {likes}
                                    </Td>
                                    <Td >
                                        <BiEdit onClick={() => {setIsEditOpen(true);onEdit(duration,title,thumbnail,tags,description,visibility,category);setVideoId(_id)}} cursor="pointer" size="1.6rem" color="rgb(255,255,255,0.45)" />
                                    </Td>
                                </Tr>
                                    ))}
                               
                                </Tbody>
                                
                            </Table>
                            </TableContainer>

                        </Box>
                            
                    </TabPanel>
                    <TabPanel>
                        <Box overflowY="auto" maxHeight="65vh" width="100%">
                        <TableContainer>
                                <Table variant='simple'>
                                    <TableCaption fontSize="1.3rem">{lives.length < 1 ? <Text fontSize="1.3rem" pt={5}>You didn't create any live stream yet</Text> : ""}</TableCaption>
                                    <Thead>
                                    <Tr >
                                        <Th>Video</Th>
                                        <Th>Visibility</Th>
                                        <Th>Date</Th>
                                        <Th >Views</Th>
                                        <Th >Likes</Th>
                                    </Tr>
                                    </Thead>
                                    <Tbody>
                                        {lives?.map(({thumbnail,title,videoId,description,views,createdAt,visibility,likes,duration}) => (
                                            <Tr>
                                        <Td>
                                            <Box d="flex" width="18rem" height="4.5rem" >
                                                <Link to={`/video/${videoId}`}>
                                                
                                                    <Box width="8rem" height="4.5rem" cursor="pointer" justifyContent="right" d="flex" borderRadius="5px"  bgImage={`url(${thumbnail})`} bgSize="cover" bgPosition="center">
                                                    <Text borderRadius="2px" as="h3" w="auto" bg="rgb(0,0,0,0.3)" flex="0 1 auto" alignSelf="flex-end" mr={1}>{duration}</Text>
                                                    </Box>
                                                </Link>
                                                        <Box width="60%" pl={4}>
                                                            <Center width="100%" height="100%">
                                                                <Box>
                                                                    <Tooltip label={title}>
                                                                        <Text cursor="pointer">
                                                                            {title.length > 20 ? title.slice(0,20) + "..." : title}
                                                                            </Text>
                                                                    </Tooltip>
                                                                    
                                                                        <Text pt={1} as="p" fontSize="0.8rem" color="rgb(255,255,255,0.5)">
                                                                            {description.length > 20 ? description.slice(0,25) + "..." : description}
                                                                        </Text>
                                                                    
                                                                    
                                                                    
                                                                </Box>  
                                                        </Center>
                                                        </Box>
                                                    
                                                    
                                            </Box>
                                        </Td>
                                        <Td>
                                            <Box d="flex">
                                                <Box>
                                                    {visibility === 1 ? <AiFillEye fill="green" size="1.5rem" /> : <SiMediamarkt  fill="#4299E1" size="1.2rem " />}
                                                </Box>
                                                <Text pl={2}>{visibility === 1 ? "Public" : 'NFT holders'}</Text>
                                            </Box>
                                            
                                            
                                        </Td>
                                        <Td>
                                            <Box >
                                                <Text as="p" >{dateformater(createdAt)}</Text>
                                                <Text as="p" color="rgb(255,255,255,0.5)" fontSize="0.85rem" pt={1}>Published</Text>
                                            </Box>
                                        </Td>

                                        <Td >
                                            {views}
                                        </Td>

                                        <Td >
                                            {likes}
                                        </Td>

                                    </Tr>
                                        ))}
                                
                                    </Tbody>
                                    
                                    </Table>
                                </TableContainer>
                                </Box>
                    </TabPanel>
                    <TabPanel>
                        <Tabs isLazy size='md' variant='enclosed'>
                            <TabList>
                                <Tab _selected={{ color: '#FB5B78' , bg : 'rgb(36, 38, 39,0.5)'}}>Created</Tab>
                                <Tab _selected={{ color: '#FB5B78' , bg : 'rgb(36, 38, 39,0.5)'}}>Holding</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel overflowY="auto" height="60vh">
                                    {nftsCreated?.length < 1 ? <Text fontSize="1.3rem" pt={5}>You didn't create an NFT collection yet.</Text> : 
                                    
                                    <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" columnGap={7} rowGap={16} mr={3}>
                                        {nftsCreated?.map(({title,thumbnail,videoId,nftTotalMint,duration}) => (
                                            <Box >
                                                
                                                <Box>
                                                <Link to={`/video/${videoId}`}>
                                            
                                                    <Box h="10.3rem" cursor="pointer" justifyContent="right" d="flex" borderRadius="5px"  bgImage={`url(${thumbnail})`} bgSize="cover" bgPosition="center">
                                                    <Text borderRadius="2px" as="h3" w="auto" bg="rgb(0,0,0,0.3)" flex="0 1 auto" alignSelf="flex-end" mr={1}>{duration}</Text>
                                                    </Box>
                                                </Link>
                                                    <Text pt={2} noOfLines={2}><Link to={`/video/${videoId}`}>{title}</Link></Text>
                                                    <Text color="rgb(255,255,255,0.5)" fontSize="0.8rem">{nftTotalMint} Minted</Text>
                                                </Box>
                                            
                                            </Box>
                                        ))}

                                    </Box> 
                                    }
                                    
                                </TabPanel>
                                <TabPanel overflowY="auto" height="60vh">
                                    {nftsOwned?.length < 1 ? <Text fontSize="1.3rem" pt={5}>You don't own any NFTs</Text> : 
                                    
                                    <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" columnGap={7} rowGap={16} mr={3}>
                                        {nftsOwned?.map((video) => (
                                            <Box >
                                                
                                                <Box>
                                                    <Link to={`/video/${video?.videoId}`}>
                                            
                                                        <Box h="10.3rem" cursor="pointer" justifyContent="right" d="flex" borderRadius="5px"  bgImage={`url(${video?.thumbnail})`} bgSize="cover" bgPosition="center">
                                                        <Text borderRadius="2px" as="h3" w="auto" bg="rgb(0,0,0,0.3)" flex="0 1 auto" alignSelf="flex-end" mr={1}>{video.duration}</Text>
                                                        </Box>
                                                    </Link>
                                                    <Text pt={2} noOfLines={2}><Link to={`/video/${video?.videoId}`}>{video?.title}</Link></Text>
                                                    <Box d="flex" pt={2}>
                                                        
                                                    <Link to={`/profile/${video?.creator?.userId}`}> <Avatar src={video?.creator?.ProfileAvatar} h="2rem" w="2rem"/></Link>
                                                        <Center>
                                                            <Text color="#FFD600" cursor="pointer" fontWeight="bold" pl={3}><Link to={`/profile/${video?.creator?.userId}`}>{video?.creator?.username}</Link></Text>
                                                        </Center>
                                                        
                                                    </Box>
                                                </Box>
                                            
                                            </Box>
                                        ))}

                                    </Box> 
                                    }
                                    
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            }

  
            </Box>
         </Box>
       </Center>

       <Modal size="2xl" closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} bg="#242627">
          <ModalOverlay />
          
            <ModalContent bg="#F7F7FC">
              
                <ModalCloseButton mr={8} />

              <ModalBody bg="#242627" borderRadius="5px" >
            
                <Center width="100%"   mt={5}>
                  <Box pl={4} width="100%" pb={5} bg="#242627" d="flex" >
                    <Box width="93%">
                      <Text as="h1" color="rgb(255,255,255,0.95)" fontWeight="bold" fontSize="1.6rem" pb={4}>Create NFT</Text>
                      <FormControl isRequired>
                        <FormLabel htmlFor='title' fontSize="1.1rem"fontWeight="500" fontFamily="sans-serif" color="rgb(255,255,255,0.50)">Select Title</FormLabel>
                        <Select size="lg"  color="white" bg="#242627" onChange={OptionChange}>
                            {videos.map(({title}) => (
                                <option value={title} selected>{title}</option>
                            ))}
                        </Select>


                      </FormControl>
                      
                      
                    
                      <Box width="100%" d="flex" pt={5}>
                      <Link to={`/video/${selectedVideo?.videoId}`}>
                            <Box d="flex" justifyContent="right" borderRadius="10px" w="15rem" h="10rem" bgImage={`url(${selectedVideo?.thumbnail})`} bgSize="cover" bgPosition="center">
                            <Text borderRadius="2px" as="h3" w="auto" bg="rgb(0,0,0,0.3)" flex="0 1 auto" alignSelf="flex-end" mr={1}>{selectedVideo?.duration}</Text>
                            </Box>
                        </Link>
                        <Box width="60%" pl={10}>
                            <Center height="100%">
                                <FormControl>
                                    <FormLabel htmlFor='title' fontSize="1.1rem"fontWeight="500" fontFamily="sans-serif" color="rgb(255,255,255,0.50)">Select Quantity</FormLabel>
                                    <NumberInput defaultValue={15} min={10} >
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </FormControl>
                                
                            </Center>
                            
                        </Box>
                      </Box>

                      
                    </Box>

                    
                    
                </Box> 
                </Center>
                <Box width="100%" borderTop="1px solid rgb(96, 96, 96,0.6)" height="4rem" position="sticky" textAlign="end">
                  
                    <Button onClick={onClose} fontSize="1.15rem" bg="#3ea6ff" mr={5} pb={1} height="3rem" width="7rem" mt={3} _hover={{bg : 'rgb(62, 166, 255, 0.85)'}} 
                          _active={{bg : 'rgb(62, 166, 255, 0.85)'}}>
                        Create
                    </Button>
                  
                    
                  
                  
                </Box>
                
            </ModalBody>
          </ModalContent>
          
          
      </Modal>


      <Modal size="4xl" closeOnOverlayClick={false} isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} bg="#242627">
          <ModalOverlay />
          
            <ModalContent bg="#F7F7FC">
              
                <ModalCloseButton onClick={()=> {clearStates();setIsEditOpen(false)}} />

              <ModalBody bg="#242627" borderRadius="5px" >
                {videoTitle!= null && <Text as="h2" fontSize="1.4rem" fontWeight="600" pt={1} pb={5}>{videoTitle}</Text>}
                <Center width="100%" borderTop="1px solid rgb(96, 96, 96,0.6)"  height="63vh">
                  <Box pl={4} width="100%" pt={5} pb={5} bg="#242627" d="flex" overflowY="auto" height="100%" >
                    <Box width="60%">
                      <Text as="h1" color="rgb(255,255,255,0.95)" fontWeight="bold" fontSize="1.6rem" pb={3}>Details</Text>
                      <FormControl isRequired>
                        <FormLabel htmlFor='title' fontSize="1.1rem"fontWeight="500" fontFamily="sans-serif" color="rgb(255,255,255,0.50)">Title</FormLabel>
                        <Input required value={videoTitle} onChange={handleVideoTitle} id='title' placeholder='Choose a title for your video' height="3rem" />
                      </FormControl>
                      <FormControl pt={4}>
                        <FormLabel  htmlFor='description' fontSize="1.1rem" fontWeight="500" fontFamily="sans-serif"  color="rgb(255,255,255,0.50)">Description</FormLabel>
                        <Textarea
                            onChange={handleDescription}
                            value={description}
                            fontSize="1rem"
                            placeholder='Tell viewrs about your video'
                            size='md'
                            height="8rem"
                          />
                      </FormControl>
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={5} fontWeight="bold">Thumbnail</Text>
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)">Select or upload a picture that shows what's in your video.</Text>
                      <Box pt={3} width="100%" d="flex" height="5.5rem" gap={1.5}>
                          <Box width="25%" border="1px dashed rgb(96, 96, 96)" cursor="pointer" borderRadius="2px">

                          <Dropzone
                              onDrop={handleDropImage}
                              accept="image/*"
                              minSize={1024}
                              maxSize={3072000}
                            >
                              {({
                                getRootProps,
                                getInputProps,
                                isDragActive,
                                isDragAccept,
                                isDragReject
                              }) => {
                                const additionalClass = isDragAccept
                                  ? "accept"
                                  : isDragReject
                                  ? "reject"
                                  : "";

                                return (
                                  <Box 
                                    {...getRootProps({
                                      className: `dropzone ${additionalClass}`
                                    })}
                                    cursor="pointer"
                                  >
                                    <Center width="100%" height="100%">
                                      <Box width="100%" height="100%" justifyContent="center" alignItems="center" textAlign="center">
                                        
                                          <input  {...getInputProps()} />
                                          <Center pt={3}>
                                            <BiImageAdd size="2rem" color="grey" />
                                          </Center>
                                          
                                          <Text as="h5" color="rgb(255,255,255,0.50)" fontSize="0.65rem">Upload thumbnail</Text>
                                      </Box>
                                    
                                    
                                      
                                    </Center>
                                  </Box>
                                );
                              }}
                            </Dropzone>

                          </Box>
                          <Box width="25%" bg="#111315" onClick={() => {setActive(1);setThumbnailUrl(thumbnail[0])}} cursor="pointer" borderRadius="2px" border={active === 1 ? '1px solid white' : ""} bgImage={`url(${thumbnail[0]})`} bgPosition="center" bgSize="cover"></Box>
                          <Box width="25%" bg="#111315" onClick={() => {setActive(2);setThumbnailUrl(thumbnail[1])}} cursor="pointer" borderRadius="2px" border={active === 2 ? '1px solid white' : ""} bgImage={`url(${thumbnail[1]})`} bgPosition="center" bgSize="cover"></Box>
                          <Box width="25%" bg="#111315" onClick={() => {setActive(3);setThumbnailUrl(thumbnail[2])}} cursor="pointer" borderRadius="2px" border={active === 3 ? '1px solid white' : ""} bgImage={`url(${thumbnail[2]})`} bgPosition="center" bgSize="cover"></Box>
                      </Box>
                      
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={5} fontWeight="bold">Category</Text>
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)">Add your video to a category so viewers can find it more easily</Text>
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

                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={5} fontWeight="bold">Tags</Text>
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)">Tags can be useful if content in your video is commonly misspelled.</Text>
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
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={5} fontWeight="bold">Visibility</Text>           
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)">Choose who can see your video</Text>
                        <Box borderRadius="5px" border="1px solid white" height="8rem" mt={3} >
                          <RadioGroup onChange={setVisibility} value={visibility} pl={5} pb={16} >
                            <Stack>
                              <Radio value='1' pt={3}>Public<Text as="p" fontSize="0.85rem" color="rgb(255,255,255,0.50)" >Everyone can watch your video</Text></Radio>
                              
                              <Radio  value='0'>NFT Holders<Text value={0} as="p" fontSize="0.85rem" color="rgb(255,255,255,0.50)" >Only your NFT holders can watch your video</Text></Radio>
                            </Stack>
                          </RadioGroup>
                        </Box>       
                      
                    </Box>

                    <Box width="40%" pl={5} pr={5} pt={1}>
                      <Box width="100%" height="50%">
                              <Box width="100%" bg={thumbnailUrl.length < 1 ? "black" : ""} d="flex"justifyContent="right" height="74%" bgImage={`url(${thumbnailUrl})`} bgPosition="center" bgSize="cover" mt={20} borderRadius="5px 5px 0px 0px">
                                              
                                  <Text borderRadius="2px" as="h3" w="auto" bg="rgb(0,0,0,0.3)" flex="0 1 auto" alignSelf="flex-end" mr={2}>{videoDuration}</Text>
                              </Box>
                              <Box width="100%" height="26%" bg="rgb(0, 0, 0,0.1)" borderRadius="0px 0px 5px 5px">
                                <Box pl={5} height="100%" pt={1} >
                                  <Text noOfLines={2} as="h2" fontSize="0.9rem" fontWeight="600"  pb={6}>{videoTitle}</Text>
                                </Box>
                              
                              </Box>
                      </Box>
                    </Box>
                    
                    
                </Box> 
                </Center>
                <Box width="100%" borderTop="1px solid rgb(96, 96, 96,0.6)" height="4rem" position="sticky" textAlign="end">
                  
                    <Button onClick={() => SubmitVideo(videoId)} fontSize="1.15rem" bg="#3ea6ff" mr={5} pb={1} height="3rem" width="7rem" mt={3} _hover={{bg : 'rgb(62, 166, 255, 0.85)'}} 
                          _active={{bg : 'rgb(62, 166, 255, 0.85)'}}>
                        Save
                    </Button>
                  
                    
                  
                  
                </Box>
                
            </ModalBody>
          </ModalContent>
          
          
      </Modal>
    </Box>
  )
}

export default Content