import React from 'react'
import {Box, Center, useColorMode, Text, Link,Modal,Input,FormLabel, Textarea,  FormControl,RadioGroup,Stack,Radio,
  ModalOverlay,Select,
  ModalContent,
  ModalBody,
  ModalCloseButton,useDisclosure, Button} from '@chakra-ui/react'
import Dropzone from 'react-dropzone';
import {MdUpload} from 'react-icons/md'
import {FiRadio} from 'react-icons/fi'
import { Oval } from 'react-loader-spinner';
import NotAllowedFiles from './NotAllowedFiles';
import {BiImageAdd} from 'react-icons/bi'
import {Link as RouterLink} from 'react-router-dom'

function Studio() {

  const [tags, setTags] = React.useState([])
  const {colorMode} = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [fileUploaded, setFileUploaded] = React.useState(null)
  const [input, setInput] = React.useState(false)
  const [isVideo, setIsVideo] = React.useState(false)
  const [imageUpload, setImageUpload] = React.useState(null)
  const [isImage, setIsImage] = React.useState(false)
  const [active,setActive] = React.useState(0)

const handleChange = (tags) => {
  setTags({tags})
}

React.useEffect(() => {
  try {
    if(fileUploaded != null && fileUploaded.type.includes("video")) {

   setTimeout(() => {
        
              onOpen()
     }, 2000); 
  }
  }catch {}
  
},[fileUploaded])

  const handleDrop = acceptedFiles => {
    try {
      setFileUploaded(acceptedFiles[0]);
      if(acceptedFiles[0].type.includes("video")){
          return 0;
        }
      else { 
             
        setIsVideo(true)        
        setFileUploaded(null);
        return null;
    }
     
    
       
    }catch {}
      
     return acceptedFiles[0]; 
  }

  const handleDropImage = acceptedFiles => {
    try {
      setImageUpload(acceptedFiles[0]);
      if(acceptedFiles[0].type.includes("image")){
          return 0;
        }
      else {   
        setIsImage(true)     
        setIsVideo(true)       
        setImageUpload(null);
        return null;
    }
     
    
       
    }catch {}
      
     return acceptedFiles[0]; 
  }



  const closeModal = () => {
    setIsVideo(!isVideo)
    return isVideo
  }

  return (
    <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
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
                              onDrop={handleDrop}
                              accept="video/*"
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
                                    
                                      <Box bg="#1F1F1F" borderRadius="50%" width="9rem" height="9rem" onClick={()=> setInput(true)}>
                                        <Center width="100%" height="100%"><input  {...getInputProps()} />
                                          
                                          {input && (fileUploaded !== null)? <Oval
                                                          height="100"
                                                          width="100"
                                                          color='#3EA6FF'
                                                          ariaLabel='loading'
                                                          secondaryColor='grey'
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
                      <Text as="h4" fontSize="0.8rem" color="rgb(255,255,255,0.50)" >Only Files in mp4, mov, wmv, avi, webm formats can be uploaded.</Text>
                      <Center pt={5}>
                      <Box >
                          <Dropzone
                              onDrop={handleDrop}
                              accept="video/*"
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
                                    
                                      <Box bg="#3ea6ff" borderRadius="5px" width="8rem" height="2.5rem" onClick={()=> setInput(true)}>
                                        <Center width="100%" height="100%"><input  {...getInputProps()} /><Text fontSize="0.9rem" fontFamily="sans-serif" color="#111315" >SELECT FILE</Text></Center>
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
          
          <NotAllowedFiles isOpen={isVideo} isClose={closeModal} type={isImage ? "image" : "video"} />
          
          
        </Box>
         
         {
         /* Video Upload Modal */
         
         }

      <Modal size="4xl" closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} bg="#242627">
          <ModalOverlay />
          
            <ModalContent bg="#F7F7FC">
              
                <ModalCloseButton onClick={()=> {setInput(false); setFileUploaded(null)}} />

              <ModalBody bg="#242627" borderRadius="5px" >
                {fileUploaded!= null && <Text as="h2" fontSize="1.4rem" fontWeight="600" pt={1} pb={5}>{fileUploaded.name.split('.').slice(0, -1).join('.')}</Text>}
                <Center width="100%" borderTop="1px solid rgb(96, 96, 96,0.6)"  height="63vh">
                  <Box pl={4} width="100%" pt={5} pb={5} bg="#242627" d="flex" overflowY="auto" height="100%" >
                    <Box width="60%">
                      <Text as="h1" color="rgb(255,255,255,0.95)" fontWeight="bold" fontSize="1.6rem" pb={3}>Details</Text>
                      <FormControl isRequired>
                        <FormLabel htmlFor='title' fontSize="1.1rem"fontWeight="500" fontFamily="sans-serif" color="rgb(255,255,255,0.50)">Title</FormLabel>
                        <Input id='title' placeholder='Choose a title for your video' height="3rem" />
                      </FormControl>
                      <FormControl pt={4}>
                        <FormLabel htmlFor='description' fontSize="1.1rem" fontWeight="500" fontFamily="sans-serif"  color="rgb(255,255,255,0.50)">Description</FormLabel>
                        <Textarea
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
                          <Box width="25%" bg="#111315" onClick={() => setActive(1)} cursor="pointer" borderRadius="2px" border={active === 1 ? '1px solid white' : ""}></Box>
                          <Box width="25%" bg="#111315" onClick={() => setActive(2)} cursor="pointer" borderRadius="2px" border={active === 2 ? '1px solid white' : ""}></Box>
                          <Box width="25%" bg="#111315" onClick={() => setActive(3)} cursor="pointer" borderRadius="2px" border={active === 3 ? '1px solid white' : ""}></Box>
                      </Box>
                      
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={5} fontWeight="bold">Category</Text>
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)">Add your video to a category so viewers can find it more easily</Text>
                      <FormControl pt={3}>
                        
                          <Select size="lg" bg="#242627" color="white" >
                            <option value='Crypto' selected>&nbsp;Crypto</option>
                            <option value='Gaming'>&nbsp;Gaming</option>
                            <option value='Play 2 Earn'>&nbsp;Play 2 Earn</option>
                            <option value='Lifectyle'>&nbsp;Lifectyle</option>
                            <option value='Educational'>&nbsp;Educational</option>
                            <option value='Sports'>&nbsp;Sports</option>
                            <option value='Travel & Events'>&nbsp;Travel & Events</option>
                            <option value='Film & Animation'>&nbsp;Film & Animation</option>
                            <option value='People & Blogs'>&nbsp;People & Blogs</option>
                          </Select>
                      </FormControl>

                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={5} fontWeight="bold">Tags</Text>
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)">Tags can be useful if content in your video is commonly misspelled.</Text>
                      <FormControl pt={3}>
                        
                        <Input id='title' placeholder='Add tag' height="3rem" />
                      </FormControl>
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={5} fontWeight="bold">Visibility</Text>           
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)">Choose who can see your video</Text>
                        <Box borderRadius="5px" border="1px solid white" height="8rem" mt={3} >
                          <RadioGroup defaultValue='1' pl={5} pb={16}>
                            <Stack>
                              <Radio value='2' pt={3}>Public<Text as="p" fontSize="0.85rem" color="rgb(255,255,255,0.50)" >Everyone can watch your video</Text></Radio>
                              
                              <Radio value='3'>NFT Holders<Text as="p" fontSize="0.85rem" color="rgb(255,255,255,0.50)" >Only your NFT holders can watch your video</Text></Radio>
                            </Stack>
                          </RadioGroup>
                        </Box>       
                      
                    </Box>

                    <Box width="40%" pl={5} pr={5} pt={1}>
                      <Box width="100%" height="50%">
                              <Box width="100%" height="75%" bg="#111315" mt={20} borderRadius="5px 5px 0px 0px">

                              </Box>
                              <Box width="100%" height="25%" bg="rgb(0, 0, 0,0.1)" borderRadius="0px 0px 5px 5px">
                                <Box pl={5} height="100%" pt={1}>
                                  {fileUploaded!= null && <Text as="h2" fontSize="1rem" fontWeight="600" pt={1} pb={5}>{fileUploaded.name.split('.').slice(0, -1).join('.')}</Text>}
                                </Box>
                              
                              </Box>
                      </Box>
                    </Box>
                    
                    
                </Box> 
                </Center>
                <Box width="100%" borderTop="1px solid rgb(96, 96, 96,0.6)" height="4rem" position="sticky" textAlign="end">
                  
                    <Button fontSize="1.15rem" bg="#3ea6ff" mr={5} pb={1} height="3rem" width="7rem" mt={3} _hover={{bg : 'rgb(62, 166, 255, 0.85)'}} 
                          _active={{bg : 'rgb(62, 166, 255, 0.85)'}}>
                        Publish
                    </Button>
                  
                    
                  
                  
                </Box>
                
            </ModalBody>
          </ModalContent>
          
          
      </Modal>

    </Box>      
  )
}

export default Studio