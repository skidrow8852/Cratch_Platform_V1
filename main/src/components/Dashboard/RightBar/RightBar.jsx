import React from 'react'
import {Box, Center, Image , useColorMode ,Text, Avatar, AvatarBadge,Modal,ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,useDisclosure, Button, Tooltip } from '@chakra-ui/react'
import {BsFillPersonFill} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import axie from '../../../assets/axie-infinity.png';
import alienworlds from '../../../assets/alienworlds.png';
import splinterlands from '../../../assets/splinterlands.png';
import {getUsers} from '../../../services/usersService'
import {AiFillCheckCircle} from "react-icons/ai"
import {useMoralis} from "react-moralis"
import {Link} from "react-router-dom"


function RightBar() {
  const {Moralis} = useMoralis()
  const user = Moralis.User.current().get("ethAddress");
  const {colorMode} = useColorMode(); 
  const [users, setUsers] = React.useState(() => {
    let value
    try  {value = JSON.parse(window.localStorage.getItem('myHomepageFriends' ))|| []}
    catch (e) {}
    return value
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [allusers, setAllUsers] = React.useState([])

const GetFavorites = async() => {
    const value = await getUsers()
      setAllUsers(value.data.filter(e => e.userId !== user))
      if(window.localStorage.getItem('myHomepageFriends') === null || users.length < 1) {
       var values =  value.data.sort( () => Math.random() * 3).slice(0,4)
       setUsers(values)
       
          window.localStorage.setItem('myHomepageFriends', JSON.stringify(values))
      }
    
}


const AddFavorites = (userId) => {
    var followusers =  users
    const user = followusers.slice(0,3)
    var all = allusers
    var newu = all.filter((e) => e.userId == userId)  
    user.unshift(newu[0])
    setUsers(user)
    if(users.length > 4) {
      var vals = users.slice(0,4)
      setAllUsers(allusers.filter(ar => !vals.find(rm => (rm.userId === ar.userId) )))
    }
    
    window.localStorage.setItem('myHomepageFriends', JSON.stringify(user))
}
  React.useEffect(() => {
    GetFavorites()
  },[])


  return (
           <Box position="sticky" width="8%" bg={colorMode === "dark" ? "#111315" : "white"} height="100vh">

            <Center justifyContent="center" d="flex" flexDirection="column" alignContent="center" textAlign="center">
                          <Box label="Studio" cursor="pointer" bg="rgb(39, 42, 45,0.61)" mt={5} width="2.4rem" height="2.4rem" borderRadius="50%">
                                <Center height="100%"><BsFillPersonFill size="1.5rem" fill='white' /></Center>
                            
                            </Box>
                            <Box mt={6} width={["auto","3.2rem","3.4rem","3.4rem"]} height="16rem" borderRadius="60px" p={2.5}>
                                  <Center height="100%" d="flex" flexDirection="column" justifyContent="space-between">
                                        {users.map(({ProfileAvatar,isOnline,userId,username}) => (
                                          <Box label="Studio" cursor="pointer" bg="blue" width="2.2rem" height="2.2rem" borderRadius="50%">
                                                              <Link to={`/profile/${userId}`}>
                                                                  <Tooltip fontSize="1rem" pt={1} pb={1} pr={3} pl={3} label={`${username?.slice(0,12)}`}  placement="left" borderRadius="50px">
                                                                    <Avatar name={`${username}`} width="2.2rem" height="2.2rem" src={ProfileAvatar} >
                                                                      {isOnline ? <AvatarBadge boxSize='1rem' bg='#55D64F' /> : <AvatarBadge boxSize='1rem' bg='grey' />} 
                                                                    </Avatar>
                                                                  </Tooltip>
                                                               </Link>
                                                          
                                                          </Box>
                                        ))}
                             
                                
                                <Box label="Studio" cursor="pointer" bg="rgb(36, 38, 39,0.63)" width="2.2rem" height="2.2rem" borderRadius="50%">
                                    <Center height="100%"><AiOutlinePlus size="1.5rem" fill='white' onClick={onOpen}/></Center>
                                
                                </Box>
                                  </Center>
                            </Box>

                            <Box mt={10} width={["auto","4rem","4.5rem","4.5rem"]} height="10rem" borderRadius="60px" p={2.5}>
                                  <Center height="100%" d="flex" flexDirection="column" justifyContent="space-between">

                                <Image src={axie} alt="axie" width="2.8rem"  cursor="pointer" />
                                <Image src={splinterlands} alt="splinterlands" width="2rem" cursor="pointer" />
                                <Image src={alienworlds} alt="alienworlds" width="1.8rem" cursor="pointer" />
                                
                                  </Center>
                            </Box>
            </Center>

            <Modal size="lg" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent borderRadius="5px" maxHeight="75vh" overflowY="auto">
                  
                  <ModalCloseButton />
                  <ModalBody pt={6} pb={6}>
                    <Box d="grid" gridTemplateColumn="4fr 4fr" gap={5} rowGap={2}  height="100%">
                      {allusers?.filter(ar => !users.find(rm => (rm.userId === ar.userId) )).map(({username,ProfileAvatar,followers,isOnline,isVerified,userId}) => (
                        <Box pt={2} d="flex">
                        <Center width="100%">
                          <Box w="80%" d="flex">
                          <Box width="50%" d="flex">
                              <Box  label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%" >
                                            
                                        <Link to={`/profile/${userId}`}>
                                            <Avatar name='YoungBd' w="2.3rem" h="2.3rem" src={ProfileAvatar} >
                                            {isOnline ? <AvatarBadge boxSize='1rem' bg='#55D64F' /> : <AvatarBadge boxSize='1rem' bg='grey' />}
                                            </Avatar>
                                        </Link>      
                                        
                                        </Box>

                                        <Box pl={5}>
                                            <Box d="flex">
                                              <Text as="h3" color="#FFD600" fontWeight="600" cursor="pointer"><Link to={`/profile/${userId}`}>{username.slice(0,12)}</Link></Text>
                                              {isVerified && <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>}
                                            </Box>
                                          
                                          <Text as="h2" color="#595B5D" fontSize="0.8rem">{followers.length} {followers.length > 2 ? 'Followers' : 'Follower'}</Text>
                                        </Box>
                          </Box>
                                      
                                      <Box width="50%" d="flex" pl={5} pt={1}>
                                        
                                          <Box d="flex" width="100%" justifyContent="right">
                                              
                                                    <Button  onClick={() => AddFavorites(userId)} _hover={{
                                                        bg: 'rgb(255,255,255,0.1)'
                                                        }} _active={{bg: 'transparent'}} bg="transparent" border="1px solid white" 
                                                        
                                                        pb={1}
                                                        borderRadius="5px" height="2rem" width="7rem">
                                                        + Add
                                                    </Button>
                                                
                                          </Box>
                                          
                                      </Box>
                          </Box>
                          

                                      
                        </Center>
                  
                      </Box>
                      ))}

                      
                    

                  
                   </Box>
                  </ModalBody>
                    
                  
                </ModalContent>
              </Modal>
            </Box>
  )
}

export default RightBar