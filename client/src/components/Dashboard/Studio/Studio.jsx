import React from 'react'
import {Box, Center, Text, Link,Modal,Input,FormLabel, Textarea,  FormControl,RadioGroup,Stack,Radio,
  ModalOverlay,Select,
  ModalContent,
  ModalBody,
  ModalCloseButton,useDisclosure, Button,Spinner,useToast } from '@chakra-ui/react'
import Dropzone from 'react-dropzone';
import {MdUpload} from 'react-icons/md'
import {FiRadio} from 'react-icons/fi'
import {BiImageAdd} from 'react-icons/bi'
import {Link as RouterLink} from 'react-router-dom'
import {uploadVideoFile,getVideoDuration,uploadVideo} from '../../../services/videoService'
import {getUser} from '../../../services/usersService'
import {customAlphabet} from 'nanoid' 
import {storeIMGProfile} from '../../../services/apiCalls'
import {generateVideoThumbnails} from "@rajesh896/video-thumbnails-generator";
import { useNavigate } from "react-router-dom";
import "./style.css"

function Studio() {

  document.title = `Studio`
  const user = localStorage.getItem('user')
  const toast = useToast()
  const history = useNavigate()
  const nanoid=customAlphabet('qwertyuiopasdfghjklzxcvbnm0123456789',24)
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [fileUploaded, setFileUploaded] = React.useState(null)
  const [input, setInput] = React.useState(false)
  const [imageUpload, setImageUpload] = React.useState(null)
  const [active,setActive] = React.useState(0)
  const [userData,setUserData] = React.useState(null)
  const [videoTitle,setVideoTitle] = React.useState("")
  const [videoId,setVideoId] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [thumbnail, setThumbnail] = React.useState([])
  const [thumbnailUrl, setThumbnailUrl] = React.useState("")
  const [tags, setTags] = React.useState([])
  const [videoDuration,setVideoDuration] = React.useState("0")
  const [category,setCategory] = React.useState("")
  const [filePath, setFilePath] = React.useState("")
  const [visibility, setVisibility] = React.useState('1')
  const [isVideoLoading, setIsVideoLoading] = React.useState(true)
  const [isSubmit,setIsSubmit] = React.useState(false)


React.useEffect(() => {
  try {
    if(fileUploaded != null && (fileUploaded.type == 'video/mp4' || fileUploaded.type == 'video/quicktime') ) {
      
            setTimeout(() => {
              onDrop(fileUploaded)
             
              onOpen()
     }, 2000); 
    
  }else if(fileUploaded != null && !(fileUploaded.type == 'video/mp4' || fileUploaded.type == 'video/quicktime') ) {

        toast({
          title: `Only video files are allowed`,
          position: "top",
          isClosable: true,
          status: 'error', 
        })
          setFileUploaded(null)
}   
  }catch {}
  
},[fileUploaded])


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

  const handleVideoDrop = acceptedFiles => {
    try {
      setFileUploaded(acceptedFiles[0]);
      
    }
       
    catch {}
      
     return acceptedFiles[0]; 
  }

  const handleDropImage = acceptedFiles => {
    try {
      setImageUpload(acceptedFiles[0]);
    }
     
    
       
    catch {}

    return acceptedFiles[0]; 
  }

const handleVideoTitle = (e) => {
  setVideoTitle(e.target.value)
}
const handleDescription = (e) => {
  setDescription(e.target.value)
}



const getuser = async() => {
  if(user) {
    try {
      const data = await getUser(user)
      if(data )
          setUserData(data.data)
    }
    catch(e) {
        console.log(e)
    }
  }
  
}

React.useEffect(() => {

},[])

const onDrop = async(file) => {
  let formData = new FormData()

  formData.append("file", file)
  const response = await uploadVideoFile(formData)
  if(response.data.success) {
      const value = nanoid()
      setVideoId(value)
      await getuser()
      setFilePath(`uploads/${response.data.fileName}`)
      setVideoTitle(fileUploaded.name.split('.')[0])


    /// Generate Thumbnails

    await generateVideoThumbnails(fileUploaded, 3).then((thumbnailArray) => {
      try {
        setThumbnail(thumbnailArray)
        setThumbnailUrl(thumbnailArray[0])
      }catch{}
      
      
    }).catch((err) => {
        console.error(err)
    })


    // Get video duration
    const filePath = String(response.data.filePath)
    const data = await getVideoDuration({filePath : filePath})

      const totalSeconds = Math.floor(data.data.duration);

      const secondsToMinutes = seconds => Math.floor(totalSeconds / 60) + ':' + ('0' + Math.floor(totalSeconds % 60)).slice(-2);
      
      setVideoDuration(secondsToMinutes)
      setIsVideoLoading(false)

  }else {
    toast({
      title: `Failed to upload video, please try again later`,
      position: "top",
      isClosable: true,
      status: 'error', 
    })
  }
}

const clearStates = () =>{
  setFileUploaded(null)
  setImageUpload(null)
  setVideoTitle("")
  setDescription("")
  setThumbnail([])
  setThumbnailUrl("")
  setTags([])
  setVideoDuration("0")
  setCategory("")
  setVisibility("1")
  setInput(false)
}

const SubmitVideo = async() => {
  if(videoTitle.length < 3 ){
    toast({
      title: `Title is required`,
      position: "top",
      isClosable: true,
    })
  }
  else {
    setIsSubmit(true)
    try {
      const data = await uploadVideo({
        videoId : videoId,
        creator : userData._id,
        videoPath : `${process.env.REACT_APP_SERVER_HOST}/${filePath}`,
        title : videoTitle,
        description : description,
        thumbnail : thumbnailUrl,
        duration : videoDuration,
        tags : tags,
        category : category,
        visibility : Number(visibility),
        })

        if(data.status == 200) {
          toast({
            title: `Video published successfully`,
            position: "top",
            isClosable: true,
            status: 'success', 
          })
          
          onClose()

          history(`/video/${videoId.toLocaleLowerCase()}`)

          

        }

        
    }catch(error) {
       toast({
            title: `An error occurred please try again later`,
            position: "top",
            isClosable: true,
            status: 'error', 
          })

          onClose()
          
    }
    
  }
  
}

  return (
    <Box width="100%" height="88%" bg="#111315" fontFamily="heading" >
        <Box width="100%" height="100%" >
          <Center height="88%">
            <Box width="50%">
            <Center><Text as="h1" fontSize="1.6rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pt={5} pb={5} fontWeight="bold">Upload video</Text></Center>
            
            <Center width="100%" height="100%">
              <Box width="80%" height="70%" bg="rgb(89, 91, 93,0.36)" _hover={{bg: 'rgb(89, 91, 93,0.55)'}} borderRadius="10px">
                <Center width="100%" height="100%" display="inline-block" justifyContent="center" textAlign="center" alignItems="center">
                <Center pt={12}>
                      <Box  width="9rem" height="9rem">
                          <Dropzone
                              onDrop={handleVideoDrop}
                            
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
                                    
                                      <Box bg="#1F1F1F" borderRadius="50%" width="9rem" height="9rem" onClick={()=> setInput(true)}>
                                        <Center width="100%" height="100%"><input  {...getInputProps()} name="file"/>
                                          
                                          {input && (fileUploaded !== null)? 
                                                        <Spinner 
                                                          thickness='4px'
                                                          color='#3EA6FF'
                                                          size='xl'
                                                          speed='0.65s'
                                                          emptyColor='grey'
                                                      /> : <MdUpload size="4.5rem" fill='#909090'/>}
                                          
                                        </Center>
                                      </Box>
                                    </Center>
                                  </Box>
                                );
                              }}
                            </Dropzone>
                      </Box>
                      </Center>
                      
                      <Text as="h4" fontSize="1rem" color="white" pt={5}>Drag and drop video file to upload</Text>
                      <Text as="h4" fontSize="0.8rem" color="rgb(255,255,255,0.50)" >Only videos in .mp4 & .mov formats can be uploaded.</Text>
                      <Center pt={5}>
                      <Box >
                          <Dropzone
                              onDrop={handleVideoDrop}
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
                                    
                                      <Box bg="#3ea6ff" borderRadius="5px" width="8rem" height="2.5rem" onClick={()=> setInput(true)}>
                                        <Center width="100%" height="100%"><input name="file" {...getInputProps()} /><Text fontSize="0.9rem" fontFamily="sans-serif" color="#111315" >SELECT FILE</Text></Center>
                                      </Box>
                                    </Center>
                                  </Box>
                                );
                              }}
                            </Dropzone>
                      </Box>
                      </Center>
                      <Center width="100%">
                        <Center width="80%">
                      <Text pt={10} pb={6} as="h4" fontSize="0.8rem" color="rgb(255,255,255,0.50)">By submitting your videos to Cratch, you acknowledge that you agree to Cratch's <Link href="https://cratch.io/terms" color="#3ea6ff" isExternal>Terms & Conditions.</Link></Text>
                      </Center>
                      </Center>
                      
                      
                </Center>           
            </Box>
            </Center>
            
          </Box>
          <Box width="50%" >
            <Center><Text as="h1" fontSize="1.6rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pb={5} pt={5} fontWeight="bold" >Go live</Text></Center>
            
            <Center width="100%" >
            
              <Box width="80%" height="70%" bg="rgb(89, 91, 93,0.36)" _hover={{bg: 'rgb(89, 91, 93,0.55)'}} borderRadius="10px" cursor="pointer">
                <RouterLink to="/stream"><Center width="100%" height="100%" display="inline-block" justifyContent="center" textAlign="center" alignItems="center">
                
                  <Center>
                      
                          
                                  <Box pt="100px">

                                    <Center width="100%" height="100%">
                                    
                                      <Box bg="rgb(0,0,0,0.45)" borderRadius="50%" width="9rem" height="9rem" >
                                        <Center width="100%" height="100%" _hover={{color: "#ff4949"}} color="#909090" ><FiRadio size="4.5rem"  /></Center>
                                      </Box>
                                    </Center>
                                  </Box>
                                
                      
                      </Center>
                      
                      <Text as="h4" fontSize="1.2rem" color="white" pt={5} >Go live on both Cratch & MetaCratch</Text>
                      <Text as="h4" fontSize="0.8rem" color="rgb(255,255,255,0.50)" pb="105px">Start streaming now and build your audience.</Text>
                      
                      
                      
                      
                      
                  </Center>
                </RouterLink>           
            </Box>
            </Center>
            
          </Box>
          </Center>
          
          
          
        </Box>
         
         {
         /* Video Upload Modal */
         
         }

      <Modal size="4xl" closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} bg="#242627">
          <ModalOverlay />
          
            <ModalContent bg="#F7F7FC">
              
                <ModalCloseButton onClick={()=> {clearStates()}} />

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
                            placeholder='Tell viewers about your video'
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
                        
                          <Select defaultValue='Crypto' size="lg" bg="#242627" color="white" >
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
                        
                        {/* <Input id='tags' value={tags} onChange={handleTags} placeholder='Add tag' height="3rem" /> */}
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
                                                {isVideoLoading && (fileUploaded !== null)? 
                                                <Center w="100%" h="100%"> 
                                                          <Spinner 
                                                          thickness='4px'
                                                          color='#3EA6FF'
                                                          size='xl'
                                                          speed='0.65s'
                                                          emptyColor='grey'
                                                      /></Center>
                                                        : <></>}
                                  <Text borderRadius="2px" as="h3" w="auto" bg="rgb(0,0,0,0.3)" flex="0 1 auto" alignSelf="flex-end" mr={2}>{videoDuration}</Text>
                              </Box>
                              <Box width="100%" height="26%" bg="rgb(0, 0, 0,0.1)" borderRadius="0px 0px 5px 5px">
                                <Box pl={5} height="100%" pt={1} >
                                  {fileUploaded!= null && <Text noOfLines={2} as="h2" fontSize="0.9rem" fontWeight="600"  pb={6}>{fileUploaded.name.split('.')[0]}</Text>}
                                </Box>
                              
                              </Box>
                      </Box>
                    </Box>
                    
                    
                </Box> 
                </Center>
                <Box width="100%" borderTop="1px solid rgb(96, 96, 96,0.6)" height="4rem" position="sticky" textAlign="end">
                  {isSubmit ? 
                    <Button isLoading loadingText='Publish' fontSize="1rem" bg="#3ea6ff" mr={5} pb={1} height="3rem" width="7rem" mt={3} _hover={{bg : 'rgb(62, 166, 255, 0.85)'}} 
                      _active={{bg : 'rgb(62, 166, 255, 0.85)'}}>
                      
                    </Button>  
              :  <Button onClick={SubmitVideo} fontSize="1.15rem" bg="#3ea6ff" mr={5} pb={1} height="3rem" width="7rem" mt={3} _hover={{bg : 'rgb(62, 166, 255, 0.85)'}} 
                          _active={{bg : 'rgb(62, 166, 255, 0.85)'}}>
                        Publish
                    </Button>  
              }
                    
                  
                    
                  
                  
                </Box>
                
            </ModalBody>
          </ModalContent>
          
          
      </Modal>

    </Box>      
  )
}

export default Studio