import React from 'react'
import {useColorMode, Box, Text, Center, FormControl, FormLabel, Textarea, Input, RadioGroup, Stack,Radio, Button, Select} from "@chakra-ui/react"
import {Link} from 'react-router-dom'

function CreateStream() {

const {colorMode} = useColorMode();

return (
    <>
    <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
      <Center w="100%" h="100%">
         <Box width="94%" height="100%" >
          <Text as="h1" fontSize="1.7rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pt={3} pb={5} borderBottom="1px solid rgb(96, 96, 96,0.6)" fontWeight="bold">Create stream</Text>
          <Box d="flex" pt={8}>
          <Box width="50%" pl={5} >
                      <Text as="h1" color="rgb(255,255,255,0.95)" fontWeight="bold" fontSize="1.4rem"  pb={3}>Details</Text>
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
                      
                      
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={6} fontWeight="bold">Tags</Text>
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)" pt={2}>Tags can be useful if content in your video is commonly misspelled.</Text>
                      <FormControl pt={3}>
                        
                        <Input id='title' placeholder='Add tag' height="3rem" />
                      </FormControl>
                     
                        
                      
          </Box>
          <Box width="50%" pl={16}>

                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif"  fontWeight="bold" pt={3}>Category</Text>           
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)" pt={2}>Add your stream to a category so viewers can find it more easily</Text>
                      <FormControl pt={3}>
                        
                      <Select size="lg" bg="#111315" color="white" >
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
                      
                      <Text as="h3" color="rgb(255,255,255,0.95)" fontSize="1.1rem" fontFamily="sans-serif" pt={6} fontWeight="bold">Visibility</Text>           
                      <Text as="p" fontSize="0.9rem" color="rgb(255,255,255,0.50)"  pt={2}>Choose who can see your video</Text>
                      <Box borderRadius="5px" border="1px solid rgb(255,255,255,0.50)" height="8rem" mt={3} >
                          <RadioGroup defaultValue='1' pl={5}>
                            <Stack>
                              <Radio value='2' pt={3}>Public<Text as="p" fontSize="0.85rem" color="rgb(255,255,255,0.50)" >Everyone can watch your video</Text></Radio>
                              
                              <Radio value='3'>NFT Holders<Text as="p" fontSize="0.85rem" color="rgb(255,255,255,0.50)" >Only your NFT holders can watch your video</Text></Radio>
                            </Stack>
                          </RadioGroup>
                        </Box>    
                      <Link to="/stream/12">
                        <Center>
                          
                            <Button fontSize="1.4rem" bg="#3ea6ff" pb={1} height="3rem" width="100%" mt={12} _hover={{bg : 'rgb(62, 166, 255, 0.85)'}} 
                              _active={{bg : 'rgb(62, 166, 255, 0.85)'}}>
                                Start
                            </Button>
                          
                        </Center>

                    </Link>
                      
          </Box>
          </Box>
          

        </Box>
      </Center>
       
    </Box>

    </>
  )
}

export default CreateStream