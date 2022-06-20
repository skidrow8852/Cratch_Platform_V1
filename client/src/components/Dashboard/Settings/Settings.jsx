import React from 'react'
import {Box, Center,Text,Button,Avatar,Textarea,Input,Spinner} from "@chakra-ui/react"
import {BiEdit} from 'react-icons/bi'
import {FiEdit} from 'react-icons/fi'
import Dropzone from 'react-dropzone';
import {getUser, editUser} from "../../../services/usersService";
import {storeIMGProfile} from '../../../services/apiCalls'

function Setting() {
  document.title = `Profile Settings`

    const user = localStorage.getItem('user')
    
    const [textAreaedit, setTextAreaEdit] = React.useState(false)
    const [usernameEdit, setUsernameEdit] = React.useState(false)
    const [about, setAbout] = React.useState("Hello, welcome to my Cratch channel!")
    const [avatar, setAvatar] = React.useState("https://bafybeifgsujzqhmwznuytnynypwg2iaotji3d3whty5ymjbi6gghwcmgk4.ipfs.dweb.link/profile-avatar.png")
    const [cover, setCover] =React.useState("https://bafybeie3mniojsxcxbvruv4hcfadymzl3c7dioj7jvffyr53rtelduys3a.ipfs.dweb.link/meta.jpeg")
    const [username,setUsername] = React.useState(localStorage.getItem('user').slice(0,12))
    const [balance,setBalance] = React.useState(0)
    const [isLoading, setIsLoading] = React.useState(true)


    const handleDropAvatarImage =async  acceptedFiles => {     
      const img = await storeIMGProfile(acceptedFiles[0])
      if(img !== undefined)
          setAvatar(img);
      await editUser(user, {ProfileAvatar : img}) 
    }

    const handleDropCoverImage =async  acceptedFiles => {     
      const img = await storeIMGProfile(acceptedFiles[0])
      if(img !== undefined)
          setCover(img);
      await editUser(user, {ProfileCover : img})
    }


  


    const GetUser = async() => {
      try {
        const result = await getUser(user);
             setCover(result.data.ProfileCover)
             setUsername(result.data.username.slice(0,12))
             setAvatar(result.data.ProfileAvatar)
             setAbout(result.data.about)
             setBalance(result.data.rewards)
             setIsLoading(false)
      }catch {
             console.log("")
           }
          
    }


    const userEdit = async() => {
      try {
      const data =  await editUser(user,{username : username});
            if(data.data.username.length > 1) {
              setUsername(username)
            }
      }catch {
             console.log("")
           }
          
    }

    const aboutEdit = async() => {
      try {
       const data = await editUser(user,{about : about});
       if(data.data.about.length > 1) {
          setUsername(about)
      }
      }catch {
             console.log("")
           }
          
    }
        
  
  
  React.useEffect(() => {
    GetUser()
  },[])

    const handleChange = (e) => {
      setAbout(e.target.value)
    }
    const handleInputChange = (e) => {
      setUsername(e.target.value)
    }

  return (
    <Box width="100%" height="88%" bg="#111315" fontFamily="heading" >
            <Center>
              <Box width="95%" height="100%" >
                      <Box width="100%">
                          <Text width="100%" as="h1" fontSize="1.7rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pt={3} pb={5}  fontWeight="bold">Settings</Text>
                      </Box>
                      <Text pb={3} fontSize="1.2rem" fontWeight="bold">Profile cover</Text>
                      <Box height="20vh" width="100%" bgImage={`url(${cover})`} bgSize="cover" bgPosition="center center" borderRadius="4px">
                        <Box d="flex" justifyContent="right" textAlign="right" _hover={{color : "#D2BB31"}}>

                        <Dropzone
                              onDrop={handleDropCoverImage} 
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
                      {isLoading ? <Center w="100%" h="45vh"><Spinner 
                                    thickness='4px'
                                    color='#3EA6FF'
                                    size='xl'
                                    ariaLabel='loading'
                                    speed='0.65s'
                                    emptyColor='grey'
                                /></Center> :
                    <Box w="100%" height="45vh" d="flex" columnGap={5}>
                                <Box w="26%" pt={5} >
                                    <Box w="100%" h="100%">
                                        <Box w="100%" d="flex">
                                        <Box >
                                            <Text pb={3} fontSize="1.2rem" fontWeight="bold">Profile avatar</Text>
                                            
                                        </Box>
                                        
                                        </Box>
                                        
                                        <Box  h="100%">
                                            <Box h="100%" w="100%">
                                                <Box w="100%" height="50%" >
                                                    
                                                        <Box w="75%" h="100%" bg="rgb(55, 57, 58,0.5)" borderRadius="5px" d="flex">
                                                        <Box position="absolute" pl={1} pt={1} >
                                                            <Box cursor="pointer"  _hover={{color : "#D2BB31"}}>
                                                                <Dropzone
                                                                    onDrop={handleDropAvatarImage}
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
                                                                <Avatar w="100%" h="100%" src={avatar} />
                                                            </Box>
                                                            </Center>
                                                        </Box>
                                                    
                                                </Box>
                                                <Box h="50%" w="100%" >
                                                    <Box w="100%" >
                                                        <Text pt={5} pb={2} fontSize="1.2rem" fontWeight="bold">Username</Text>
                                                        <Box d="flex">
                                                        <Box w="50%" boxShadow="0px 4px 21px rgb(218, 194, 50,0.11)" borderRadius="5px" border="1px solid rgb(255,255,255,0.3)" >
                                                            {usernameEdit ? <Input fontSize="1.1rem" value={username} onChange={handleInputChange} /> : <Text color="#DAC232" fontSize="1.1rem" pl={2.5} pt={1.5} fontWeight="bold" fontFamily="sans-serif">{username}</Text>}
                                                        </Box>
                                                            
                                                        <Box w="50%" pl={4}>{usernameEdit ? <Button onClick={() => {userEdit();setUsernameEdit(!usernameEdit)}} w="50%">Save</Button> : <Button onClick={() => setUsernameEdit(!usernameEdit)} w="50%">Edit</Button>}</Box> 
                                                        </Box>
                                                        
                                                    </Box>
                                                </Box>
                                            </Box>
                                            
                                            
                                        </Box>
                                        
                                    </Box>
                                </Box>
                                <Box w="40%" h="100%" pt={5}>
                                    <Box w="90%" d="flex">
                                        <Box w="80%">
                                            <Text fontSize="1.2rem" fontWeight="bold">About</Text>
                                        </Box>
                                        <Center w="20%" justifyContent="right">
                                            {textAreaedit == false && 
                                              
                                            <Button onClick={() => setTextAreaEdit(!textAreaedit)} >Edit</Button>} 
                                            </Center>

                                    </Box>
                                      <Box w="90%">
                                        <Textarea                             
                                            isReadOnly={!textAreaedit}
                                            value={about}
                                            onChange={handleChange}
                                            mt={1.5}
                                            placeholder='Write something about you or your content'
                                            size='sm'
                                            resize="none"
                                            rows={textAreaedit ? 9 : 10}
                                        />
                                        {textAreaedit == true && <Center pt={2} w="100%" justifyContent="right"><Button w="30%" onClick={() => {aboutEdit();setTextAreaEdit(!textAreaedit)}} >Save</Button></Center>  }
                                      </Box>
                                        
                                </Box>
                                <Box w="34%"  h="100%" pt={5}>
                                  <Text fontSize="1.2rem" fontWeight="bold" pb={4} >Balance</Text>
                                   
                                    
                                        <Box w="90%" h="76%" bg="#232527" borderRadius="5px">
                                           
                                            <Center w="100%" h="90%">
                                                <Box >
                                                    <Box w="100%"><Text color="#FFD600" fontWeight="bold" fontSize="1.8rem">{balance} $CRTC</Text></Box>
                                                    <Box w="100%"><Button isDisabled={balance === 0} fontSize="1.1rem" pb={0.5} w="100%" mt={5} _hover={{bg : "rgb(62, 166, 255,0.89)"}} _active={{bg : "rgb(62, 166, 255,0.89)"}} bg="#3EA6FF" mb={2} color="#111315">Withdraw</Button>
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

export default Setting