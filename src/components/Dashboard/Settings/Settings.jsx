import React from 'react'
import {Box, Center,Text,useColorMode,Button,Avatar,Textarea,Input} from "@chakra-ui/react"
import meta from '../../../assets/meta.jpeg';
import {BiEdit} from 'react-icons/bi'
import {FiEdit} from 'react-icons/fi'
import img5 from "../../../assets/img5.jpg"
import Dropzone from 'react-dropzone';


function Settings() {
    const {colorMode} = useColorMode();
    const [texAreaedit, setTexAreaEdit] = React.useState(false)
    const [usernameEdit, setUsernameEdit] = React.useState(false)
    const [value , setValue] = React.useState("What the hell you want me to say?")
    const [username,setUsername] = React.useState("Skidrow")

    const handleDropImage = acceptedFiles => {
      try {
        if(acceptedFiles[0].type.includes("image")){
            return acceptedFiles[0];
          }
        else {   

          return null;
      }
       
      
         
      }catch {}
        
       return acceptedFiles[0]; 
    }
  

    const handleChange = (e) => {
      setValue(e.target.value)
    }
    const handleInputChange = (e) => {
      setUsername(e.target.value)
    }

  return (
    <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
            <Center>
              <Box width="95%" height="100%" >
                      <Box width="100%">
                          <Text width="100%" as="h1" fontSize="1.7rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pt={3} pb={5}  fontWeight="bold">Settings</Text>
                      </Box>
                      <Text pb={3} fontSize="1.2rem" fontWeight="bold">Profile cover</Text>
                      <Box height="20vh" width="100%" bgImage={`url(${meta})`} bgSize="cover" bgPosition="center center" borderRadius="4px">
                        <Box d="flex" justifyContent="right" textAlign="right" _hover={{color : "#D2BB31"}}>

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
                                      
                                          <input  {...getInputProps()} />
                                         
                                          <BiEdit cursor="pointer" size="2.2rem" />
                                    
                                      
                                    </Center>
                                  </Box>
                                );
                              }}
                            </Dropzone>
                            
                        </Box>
                      </Box>

                      <Box w="100%" d="flex" pt={5}>
                          <Box w="50%" h="45vh">
                            <Box w="100%" d="flex">
                              <Box w="50%" h="5vh">
                                  <Text pb={3} fontSize="1.2rem" fontWeight="bold">Profile avatar</Text>
                                  
                              </Box>
                              <Box w="50%">
                                  
                              </Box>
                            </Box>
                            
                            <Box d="flex" h="20vh">
                                <Box w="50%"  >
                                    
                                        <Box w="65%" h="90%" bg="rgb(55, 57, 58,0.5)" borderRadius="5px" d="flex">
                                          <Box position="absolute" pl={1} pt={1} >
                                              <Box cursor="pointer"  _hover={{color : "#D2BB31"}}>
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
                                                              
                                                                  <input  {...getInputProps()} />
                                                                
                                                                  <FiEdit cursor="pointer" size="1.6rem" />
                                                            
                                                              
                                                            </Center>
                                                          </Box>
                                                        );
                                                      }}
                                                    </Dropzone>
                                                
                                                </Box> 
                                            </Box>
                                            <Center w="100%" h="100%">
                                              <Box w="60%" h="90%" borderRadius="50%" mt={2} mb={2}>
                                                  <Avatar w="100%" h="100%" src={img5} />
                                              </Box>
                                            </Center>
                                        </Box>
                                    
                                </Box>
                                <Box w="50%" >
                                    <Text pt={1} pb={2} fontSize="1.2rem" fontWeight="bold">Username</Text>
                                    <Box d="flex">
                                      <Box w="50%" boxShadow="0px 4px 21px rgb(218, 194, 50,0.11)" borderRadius="5px" border="1px solid rgb(255,255,255,0.3)" >
                                        {usernameEdit ? <Input fontSize="1.1rem" value={username} onChange={handleInputChange} /> : <Text color="#DAC232" fontSize="1.1rem" pl={2.5} pt={1.5} fontWeight="bold" fontFamily="sans-serif">{username}</Text>}
                                      </Box>
                                        
                                       <Box w="50%" pl={4}><Button w="50%" onClick={() => setUsernameEdit(!usernameEdit)}>{usernameEdit ? "Save" : "Edit"}</Button></Box> 
                                    </Box>
                                    
                                </Box>
                            </Box>
                            <Box w="100%" h="20vh" >
                                <Box w="100%" d="flex">
                                  <Box w="80%">
                                    <Text fontSize="1.2rem" fontWeight="bold" pt={2}>About</Text>
                                  </Box>
                                  <Center w="20%" justifyContent="right"><Button  onClick={() => setTexAreaEdit(!texAreaedit)}>{texAreaedit ? "Save" : "Edit"}</Button></Center>

                                </Box>
                                
                                <Textarea                             
                                    isReadOnly={!texAreaedit}
                                    value={value}
                                    onChange={handleChange}
                                    mt={1.5}
                                    placeholder='Write something about you or about your content'
                                    size='sm'
                                    resize="none"
                                  />
                            </Box>
                          </Box>

                          <Box w="50%"  h="45vh">
                              <Center w="100%" h="100%">
                                  <Box w="70%" h="80%" bg="#232527" borderRadius="10px">
                                    <Box h="10%"><Text fontSize="1.2rem" fontWeight="bold" pt={3} pl={5}>Balance</Text></Box>
                                      <Center w="100%" h="90%">
                                        <Box >
                                            <Box w="100%"><Text color="#FFD600" fontWeight="bold" fontSize="1.8rem">750 $CRTC</Text></Box>
                                            <Box w="100%"><Button fontSize="1.1rem" pb={0.5} w="100%" mt={5} _hover={{bg : "rgb(62, 166, 255,0.89)"}} _active={{bg : "rgb(62, 166, 255,0.89)"}} bg="#3EA6FF" mb={2} color="#111315">Withdraw</Button>
                                            </Box>
                                        </Box>
                                      </Center>
                                  </Box>
                              </Center>
                          </Box>
                      </Box>


              </Box>
            </Center>
    </Box>
  )
}

export default Settings