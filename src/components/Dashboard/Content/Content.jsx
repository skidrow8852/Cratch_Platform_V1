import React from 'react'
import {Box, Center,useColorMode, Text, TableContainer, Table, 
    TableCaption, Thead, Tr, Th,Tbody,Td, Tabs,TabList,Tab,TabPanels
    ,TabPanel, Tooltip, Button, Avatar,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,NumberInputStepper,
    ModalCloseButton, FormLabel, NumberDecrementStepper,NumberInput,
    NumberInputField,NumberIncrementStepper,
    Select, FormControl} from "@chakra-ui/react"
import ReactPlayer from 'react-player/lazy'
import {AiFillEye} from 'react-icons/ai'
import {SiMediamarkt} from 'react-icons/si'
import {BiEdit} from 'react-icons/bi'
import {MdAdd} from 'react-icons/md'
import img5 from '../../../assets/img5.jpg'

function Content() {

    const data = [
        {
            videoUrl : "https://www.youtube.com/watch?v=wNd2cQrSQvs",
            title : "Terra Luna and what happened?",
            description : "We will talk about the collapse of Terra",
            visibility : "public",
            date : "31 Feb, 2021",
            views : 13,
            comments : 220,
            likes : 112
        },
        {
            videoUrl : "https://www.youtube.com/watch?v=040fTKgF9BI",
            title : "Supernova Hackathon | Workshop #6: NFTs on the Internet Computer",
            description : "Bob Bodily, Co-Founder & CTO at Toniq Labs talks about NFTs on the Internet Computer. ",
            visibility : "public",
            date : "25 Mai, 2021",
            views : 83,
            comments : 220,
            likes : 7
        },
        {
            videoUrl : "https://www.youtube.com/watch?v=Wjj21p3tvcg",
            title : "Things I wish I knew before studying Computer Science 👩🏻‍💻",
            description : "Hey friends, I just finished my last exam of my degree, so I thought why not make a video on 5 things I wish I knew before studying Computer Science! ",
            visibility : "NFT holders",
            date : "12 Nov, 2021",
            views : '2007',
            comments : 220,
            likes : 149
        },
        {
            videoUrl : "https://www.youtube.com/watch?v=IkI5WJyEcCc",
            title : "George Hotz | Programming GPU Driver",
            description : "Just having some fun with Nvidia Gpu programming",
            visibility : "public",
            date : "23 Mai, 2022",
            views : '72,000',
            comments : 220,
            likes : '11,000'
        },
        {
            videoUrl : "https://www.youtube.com/watch?v=jHnqnm61b18",
            title : "Best Movie Soundtracks 2022",
            description : "",
            visibility : "public",
            date : "31 Jan, 2021",
            views : '106,000',
            comments : 220,
            likes : 112
        },
        {
            videoUrl : "https://www.youtube.com/watch?v=wNd2cQrSQvs",
            title : "Terra Luna and what happened?",
            description : "We will talk about the collapse of Terra",
            visibility : "public",
            date : "31 Feb, 2021",
            views : 13,
            comments : 220,
            likes : 112
        },
    ]

    const { isOpen, onOpen, onClose } = useDisclosure()
    const {colorMode} = useColorMode()
    const [selectedVideo, setSelectedVideo] = React.useState(data[0].videoUrl)

    function getElByPropVal(myArray, val){
        for (var i = 0, length = myArray.length; i < length; i++) {
            if (myArray[i].title == val){
                return myArray[i];
            }
        }
    }
    const OptionChange = (e) => {
        var result = getElByPropVal(data,e.target.value);
        setSelectedVideo(result.videoUrl)
    }

  return (
    <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
      <Center>
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

            <Tabs size='md' variant='enclosed'>
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
                                <TableCaption>{data.length < 1 ? "You don't have any video." : ""}</TableCaption>
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
                                    {data.map(({videoUrl,title,description,visibility,views,date,likes,comments}) => (
                                        <Tr>
                                    <Td>
                                        <Box d="flex" width="18rem" height="4.5rem" >
                                            <Box width="40%" height="100%">
                                                <ReactPlayer borderRadius="1px" width="100%" height="100%" url={videoUrl}  />
                                            </Box>
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
                                                {visibility === "public" ? <AiFillEye fill="green" size="1.5rem" /> : <SiMediamarkt  fill="#4299E1" size="1.2rem " />}
                                            </Box>
                                            <Text pl={2}>{visibility}</Text>
                                        </Box>
                                        
                                        
                                    </Td>
                                    <Td>
                                        <Box >
                                            <Text as="p" >{date}</Text>
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
                                        <BiEdit cursor="pointer" size="1.6rem" color="rgb(255,255,255,0.45)" />
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
                                    <TableCaption>{data.length < 1 ? "You don't have any live stream." : ""}</TableCaption>
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
                                        {data.map(({videoUrl,title,description,visibility,views,date,likes}) => (
                                            <Tr>
                                        <Td>
                                            <Box d="flex" width="18rem" height="4.5rem" >
                                                <Box width="40%" height="100%">
                                                    <ReactPlayer borderRadius="1px" width="100%" height="100%" url={videoUrl}  />
                                                </Box>
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
                                                    {visibility === "public" ? <AiFillEye fill="green" size="1.5rem" /> : <SiMediamarkt  fill="#4299E1" size="1.2rem " />}
                                                </Box>
                                                <Text pl={2}>{visibility}</Text>
                                            </Box>
                                            
                                            
                                        </Td>
                                        <Td>
                                            <Box >
                                                <Text as="p" >{date}</Text>
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
                        <Tabs size='md' variant='enclosed'>
                            <TabList>
                                <Tab _selected={{ color: '#FB5B78' , bg : 'rgb(36, 38, 39,0.5)'}}>Created</Tab>
                                <Tab _selected={{ color: '#FB5B78' , bg : 'rgb(36, 38, 39,0.5)'}}>Holding</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel overflowY="auto" height="60vh">
                                    {data.length < 1 ? "You did not create an NFT collection yet." : 
                                    
                                    <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" gap={7} >
                                        {data.map(({title,videoUrl}) => (
                                            <Box>
                                                
                                                <Box>
                                                    <ReactPlayer borderRadius="1px" width="100%" height="100%" url={videoUrl}  />
                                                    <Text pt={2}>{title}</Text>
                                                    <Text color="rgb(255,255,255,0.5)" fontSize="0.8rem">134 Minted</Text>
                                                </Box>
                                            
                                            </Box>
                                        ))}

                                    </Box> 
                                    }
                                    
                                </TabPanel>
                                <TabPanel overflowY="auto" height="60vh">
                                    {data.length < 1 ? "You don't own any NFT yet." : 
                                    
                                    <Box d="grid" gridTemplateColumns="4fr 4fr 4fr 4fr" gap={7} >
                                        {data.map(({title,videoUrl}) => (
                                            <Box>
                                                
                                                <Box>
                                                    <ReactPlayer borderRadius="1px" width="100%" height="100%" url={videoUrl}  />
                                                    <Text pt={2}>{title}</Text>
                                                    <Box d="flex" pt={2}>
                                                        
                                                        <Avatar src={img5} h="2rem" w="2rem"/>
                                                        <Center>
                                                            <Text color="#FFD600" cursor="pointer" fontWeight="bold" pl={3}>Skidrow</Text>
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
                            {data.map(({title}) => (
                                <option value={title} selected>{title}</option>
                            ))}
                        </Select>


                      </FormControl>
                      
                      
                    
                      <Box width="100%" d="flex" pt={5}>
                        <Box width="40%">
                            <ReactPlayer borderRadius="1px" width="100%" height="100%" url={selectedVideo}  />
                        </Box>
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
    </Box>
  )
}

export default Content