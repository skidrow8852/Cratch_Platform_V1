import React from 'react'
import { Box, Text, Center, FormControl, FormLabel, Textarea, Input, RadioGroup, Stack,Radio, Button, Select, useToast} from "@chakra-ui/react"
import './style.css'
import {createStream} from '../../../services/apiCalls' 
import {startNewLive} from '../../../services/liveService'
import {getUser} from '../../../services/usersService'
import {useNavigate} from 'react-router-dom'

function CreateStream() {
  document.title = "Start new live stream"

  const toast = useToast()
  const navigate = useNavigate()
  const user = localStorage.getItem('user')
  const [videoTitle,setVideoTitle] = React.useState("")
  const [userData, setUserData] = React.useState([])
  const [description, setDescription] = React.useState("")
  const [tags, setTags] = React.useState([])
  const [category,setCategory] = React.useState("")
  const [isLoading,setIsLoading] = React.useState(false)

  const [visibility, setVisibility] = React.useState('1')

  const onStart = async() => {
    setIsLoading(true)
    const startStream = await createStream(videoTitle)
    const { id: streamId, playbackId, streamKey } = startStream.data;
    if(streamKey) {
      await startNewLive({
        creator : userData._id,
        title : videoTitle,
        description : description,
        category : category,
        tags : tags,
        visibility : Number(visibility),
        streamUrl : streamId,
        streamKey : streamKey,
        playbackUrl : `https://cdn.livepeer.com/hls/${playbackId}/index.m3u8`,

      })

      }else {
        toast({
          title: `An error occurred, please try again later`,
          position: "top",
          status : 'error',
          isClosable: true,
        })

      }
    
    navigate(`/stream/${streamId}`)
}



const getUserData = async() => {
  try{const data =  await getUser(user)
  if(data.data) {
    setUserData(data.data)
  }}catch {}
}

React.useEffect(() => {
  getUserData()
},[])

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

  const handleVideoTitle = (e) => {
    setVideoTitle(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

return (
    <>
    <Box width="100%" height="88%" bg="#111315" fontFamily="heading" >
      <Center w="100%" h="100%">
         <Box width="94%" height="100%" >
          <Text as="h1" fontSize="1.7rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pt={3} pb={5} borderBottom="1px solid rgb(96, 96, 96,0.6)" fontWeight="bold">Create stream</Text>
          <Box d="flex" pt={8}>
          <Box width="50%" pl={5} >
                      <Text as="h1" color="rgb(255,255,255,0.95)" fontWeight="bold" fontSize="1.4rem"  pb={3}>Details</Text>
                      <FormControl isRequired>
                        <FormLabel htmlFor='title' fontSize="1.1rem"fontWeight="500" fontFamily="sans-serif" color="rgb(255,255,255,0.50)">Title</FormLabel>
                        <Input value={videoTitle} onChange={handleVideoTitle} id='title' placeholder='Choose a title for your steam' height="3rem" />
                      </FormControl>
                      <FormControl pt={4}>
                        <FormLabel htmlFor='description' fontSize="1.1rem" fontWeight="500" fontFamily="sans-serif"  color="rgb(255,255,255,0.50)">Description</FormLabel>
                        <Textarea
                            onChange={handleDescription}
                            value={description}
                            fontSize="1rem"
                            placeholder='Tell viewers about your stream'
                            size='md'
                            height="8rem"
                          />
                      </FormControl>
                      
                      
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={4} fontWeight="bold">Tags</Text>
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)" pt={2}>Tags can be useful if content in your stream is commonly misspelled.</Text>
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
                     
                        
                      
          </Box>
          <Box width="50%" pl={16}>

                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif"  fontWeight="bold" pt={3}>Category</Text>           
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)" pt={2}>Add your stream to a category so viewers can find it more easily</Text>
                      <FormControl pt={3}>
                        
                      <Select defaultValue='Crypto' size="lg" bg="#111315" color="white" >
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
                      
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={6} fontWeight="bold">Visibility</Text>           
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)"  pt={2}>Choose who can see your stream</Text>
                      <Box borderRadius="5px" border="1px solid rgb(255,255,255,0.50)" height="8rem" mt={3} >
                      <RadioGroup onChange={setVisibility} value={visibility} pl={5} pb={16} >
                            <Stack>
                              <Radio value='1' pt={3}>Public<Text as="p" fontSize="0.85rem" color="rgb(255,255,255,0.50)" >Everyone can watch your video</Text></Radio>
                              
                              <Radio  value='0'>NFT Holders<Text value={0} as="p" fontSize="0.85rem" color="rgb(255,255,255,0.50)" >Only your NFT holders can watch your video</Text></Radio>
                            </Stack>
                          </RadioGroup>
                        </Box>    
                      
                        <Center>
                          {isLoading ? 
                            <Button isLoading loadingText='Starting' fontSize="1.4rem" bg="#3ea6ff" pb={1} height="3rem" width="100%" mt={12} _hover={{bg : 'rgb(62, 166, 255, 0.85)'}} 
                              _active={{bg : 'rgb(62, 166, 255, 0.85)'}}>
                                Start
                            </Button>
                            :

                            <Button onClick={onStart} fontSize="1.4rem" bg="#3ea6ff" pb={1} height="3rem" width="100%" mt={12} _hover={{bg : 'rgb(62, 166, 255, 0.85)'}} 
                            _active={{bg : 'rgb(62, 166, 255, 0.85)'}}>
                              Start
                          </Button>
                          }
                          
                        </Center>

                    
                      
          </Box>
          </Box>
          

        </Box>
      </Center>
       
    </Box>

    </>
  )
}

export default CreateStream