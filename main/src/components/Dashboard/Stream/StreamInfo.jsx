import React from 'react'
import {useColorMode, Box, Text, Center, FormControl,useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton, FormLabel, Textarea, Input, RadioGroup, Stack,Radio,
  InputGroup, InputLeftElement, Button ,InputRightElement,Select, Image} from "@chakra-ui/react"
import {SiMediamarkt} from 'react-icons/si'
import {BiLockOpen} from 'react-icons/bi'
import {CgWebsite} from 'react-icons/cg'
import {MdSend} from 'react-icons/md'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import img6 from '../../../assets/img6.jpg';
import ReactPlayer from 'react-player/lazy'

function StreamInfo() {

document.title = "Stream Details"
const {colorMode} = useColorMode();
const { isOpen, onOpen, onClose } = useDisclosure()
const [streamKey,setStreamKey] = React.useState("b52c96bea30646abf8170f333bbd42b9");
const [streamUrl, setStreamUrl] = React.useState("https://cratch.io/rtmp:6620")
const [backplayUrl,setBackPlayUrl] = React.useState("https://cratch.io/stream/b52c96bea30646abf8170f333bbd42b9");
const [copy, setCopy] = React.useState(0)

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


return (
    <>
    <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
      <Center width="100%" height="95%" pt={2}>
         <Box width="94%" height="100%" d="flex" gap={5}>
            <Box width="70%" height="100%" >
                <Box d="flex" width="100%" height="40%" >
                        <Box width="40%" bg="#242627" height="85%" borderRadius="5px 0px 0px 5px">
                        <ReactPlayer width="100%" height="100%" url='https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8' playing={true} controls={true} volume={0.1} />
                        </Box>
                        <Box width="60%" height="85%" bg="#242627" d="flex" borderRadius="0px 5px 5px 0px">
                            <Center width="100%" height="100%">
                                <Box width="90%" d="flex" height="80%">
                                    <Box width="80%">
                                        <Text as="h4" fontSize="0.85rem" fontFamily="sans-serif" color="rgb(255,255,255,0.50)" pt={1}>Title</Text>
                                        <Text as="h4" fontSize="1.1rem" color="rgb(255,255,255,0.90)">Let's win this battle</Text>

                                        <Text as="h4" fontSize="0.85rem" fontFamily="sans-serif" color="rgb(255,255,255,0.50)" pt={2}>Category</Text>
                                        <Text as="h4" fontSize="0.9rem" color="rgb(255,255,255,0.90)">Gaming</Text>
                                        <Box d="flex">
                                            <Box width="50%">
                                                <Text as="h4" fontSize="0.85rem" fontFamily="sans-serif" color="rgb(255,255,255,0.50)" pt={2}>Visibility</Text>
                                                <Text as="h4" fontSize="0.9rem" color="rgb(255,255,255,0.90)" d="flex"><Box pt={1} pr={1.5}><SiMediamarkt fill="white" /></Box> NFT Holders</Text>
                                            </Box>
                                            <Box width="50%">
                                               <Text as="h4" fontSize="0.85rem" fontFamily="sans-serif" color="rgb(255,255,255,0.50)" pt={2}>Likes</Text>
                                                <Text as="h4" fontSize="0.9rem" color="rgb(255,255,255,0.90)">7</Text> 
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
                                   <Text as="h3" color="rgb(255,255,255,0.50)" fontSize="1rem"  pt={4}>Stream URL</Text>           
                                    <FormControl pt={2}>
                                        <InputGroup >
                                            <InputLeftElement pt={2} pl={2} children={<BiLockOpen color="white" size="1.2rem" />}  />
                                            <Input id='title' placeholder='Stream URL' height="3rem" value={streamUrl} />
                                            <InputRightElement pt={2} pr={12} children={copy === 1  ? <Copyied textValue={backplayUrl}/>  :<Copy id={1} textValue={streamUrl}/>} />
                                        </InputGroup>
                                    </FormControl>

                                    <Text as="h3" color="rgb(255,255,255,0.50)" fontSize="1rem" pt={3}>Stream key</Text>           
                                    <FormControl pt={2}>
                                        <InputGroup >
                                            <InputLeftElement pt={2} pl={2} children={<BiLockOpen color="white" size="1.2rem" />}  />
                                            <Input id='title' placeholder='Key' height="3rem" value={streamKey} />
                                            <InputRightElement pt={2} pr={12} children={copy === 2 ? <Copyied textValue={backplayUrl}/>  :<Copy id={2} textValue={streamKey}/>} />
                                        </InputGroup>
                                    </FormControl>

                                    <Text as="h3" color="rgb(255,255,255,0.50)" fontSize="1rem" pt={3}>Playback URL</Text>           
                                    <FormControl pt={2}>
                                        <InputGroup >
                                            <InputLeftElement pt={2} pl={2} children={<CgWebsite color="white" size="1.2rem" />}  />
                                            <Input id='title' placeholder='Playback URL' height="3rem" value={backplayUrl} />
                                            <InputRightElement pt={2} pr={12} children={copy === 3 ? <Copyied textValue={backplayUrl}/>  : <Copy id={3} textValue={backplayUrl}/>} />
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
                    <Box height="77%" width="100%" border="1px solid #242627" overflowY="auto">

                    </Box>
                    <Box height="15%" width="100%" bg="#242627">
                        <Center width="100%">
                            <Box width="90%" >
                            <Box d="flex" pt={1.5}>
                                    <Box pt={1.5} label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%">
                                        <Image src={img6} alt="John" width="2.3rem" height="2.3rem" borderRadius="50%" />
                                    </Box>

                                    <Box pl={5}>
                                        <Box>
                                          <Text as="h3" fontSize="0.9rem" color="#FFD600" fontWeight="600" cursor="pointer">Skidrow</Text>
                                         
                                        </Box>
                                      <InputGroup pt={2}>
                                        <Input placeholder='Say something...' />
                                        <InputRightElement pt={3.5} children={<MdSend cursor="pointer" fill='rgb(255,255,255,0.6)' size="1.5rem" />} />
                                      </InputGroup>
                                        
                                     
                                    </Box>
                     </Box>
                            </Box>
                        </Center>
                    </Box>
            </Box>
        </Box>
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
                      
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={5} fontWeight="bold">Tags</Text>
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)">Tags can be useful if content in your video is commonly misspelled.</Text>
                      <FormControl pt={3}>
                        
                        <Input id='title' placeholder='Add tag' height="3rem" />
                      </FormControl>
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif"  fontWeight="bold" pt={5}>Category</Text>           
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)" pt={2}>Add your stream to a category so viewrs can find it more easily</Text>
                      <FormControl pt={3}>
                        
                        <Select size="lg"  color="white" bg="#242627">
                            <option value='Crypto' selected>&nbsp;Crypto</option>
                            <option value='Gaming'>&nbsp;Gaming</option>
                            <option value='Lifectyle'>&nbsp;Lifectyle</option>
                            <option value='Lifectyle'>&nbsp;Educational</option>
                            <option value='Lifectyle'>&nbsp;Sports</option>
                            <option value='Lifectyle'>&nbsp;Travel & Events</option>
                            <option value='Lifectyle'>&nbsp;Film & Animation</option>
                            <option value='Lifectyle'>&nbsp;People & Blogs</option>
                        </Select>
                        </FormControl>
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={5} fontWeight="bold">Visibility</Text>           
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)">Choose who can see your video</Text>
                        <Box borderRadius="5px" border="1px solid rgb(255,255,255,0.50)" height="8rem" mt={3} >
                          <RadioGroup defaultValue='1' pl={5} pb={16}>
                            <Stack>
                              <Radio value='2' pt={3}>Public<Text as="p" fontSize="0.85rem" color="rgb(255,255,255,0.50)" >Everyone can watch your video</Text></Radio>
                              
                              <Radio value='3'>NFT Holders<Text as="p" fontSize="0.85rem" color="rgb(255,255,255,0.50)" >Only your NFT holders can watch your video</Text></Radio>
                            </Stack>
                          </RadioGroup>
                        </Box>       
                      
                    </Box>

                    
                    
                </Box> 
                </Center>
                <Box width="100%" borderTop="1px solid rgb(96, 96, 96,0.6)" height="4rem" position="sticky" textAlign="end">
                  
                    <Button onClick={onClose} fontSize="1.15rem" bg="#3ea6ff" mr={5} pb={1} height="3rem" width="7rem" mt={3} _hover={{bg : 'rgb(62, 166, 255, 0.85)'}} 
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

export default StreamInfo