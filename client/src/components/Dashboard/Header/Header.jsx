import React from 'react'
import {Box, Text, Avatar,Center, Input, Button, Stack, InputGroup, AvatarBadge,
        InputLeftElement, InputRightElement,Menu,MenuList,MenuItem,MenuButton} from '@chakra-ui/react'
import {FiSearch, FiSettings} from 'react-icons/fi';
import {AiOutlineDown,AiOutlineVideoCameraAdd,AiOutlineLogout} from "react-icons/ai"
import {IoIosNotificationsOutline} from "react-icons/io"
import {FaRegUser} from "react-icons/fa"
import {Link} from 'react-router-dom'
import {getUser, addUser} from "../../../services/usersService";
import {getUserNotifications,deleteUserNotifications,updateUserNotifications} from '../../../services/notificationsService'
import {RiUserFollowLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {MdOutlineAttachMoney} from 'react-icons/md'



function Header() {

  const user = localStorage.getItem('user')

  const [username,setUsername] = React.useState(user)
  const [avatar, setAvatar] = React.useState("https://bafybeifgsujzqhmwznuytnynypwg2iaotji3d3whty5ymjbi6gghwcmgk4.ipfs.dweb.link/profile-avatar.png")
  const [balance,setBalance] = React.useState(0)
  const [notifications,setNotifications] = React.useState([])
  const [notifClickBell, setNotifClickBell] = React.useState(false)
  

  const hadleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload()
  }

    const Search = () => {
        return(
          <Box >
            <Button height="2.5rem" width="5rem" bg="rgb(89, 91, 93,0.36)" color="rgb(255,255,255,0.63)" borderRadius="50px" fontSize="0.9rem">Search</Button>
          </Box>
        )
      }
    
      const AiCamera = () => {
        return(
          <Box borderRadius="50%" bg="rgb(145, 92, 228, 0.83)" height="2rem" width="2rem" mt={1}>
              <Center height="100%">
                <AiOutlineVideoCameraAdd  size="1.3rem"  />
              </Center>
          </Box>
        )
      }
    
const handleUser = async() => {
  const result = await getUser(user);
    if(result.data.status == 'not found') {
      
      try {
       const data =  await addUser({userId : user, username : user , isOnline : true})
        setUsername(username)
        setAvatar(avatar)
        setBalance(0)
      
      }catch (error) {
        console.log(error);
      }
    }
   else {
     setUsername(result.data.username)
     setAvatar(result.data.ProfileAvatar)
     setBalance(result.data.rewards)

   }

    ;
}

const handelNotifBell = async() => {
  try {
    const data = await updateUserNotifications(user)

  }catch {

  }
    
}

const handleNotifications = async() => {
  try {
    const data = await getUserNotifications(user)
    if(data.data) {
      var uniqueNotifications = data.data.reduce((filter, current) => {
        var dk = filter.find(item => item.from === current.from || (item.from === current.from&& item.type === current.type));
        if (!dk) {
          return filter.concat([current]);
        } else {
          return filter;
        }
      }, []);
      setNotifications(uniqueNotifications)
    }
  }catch(e) {
      console.log(e)
  }
}

const handleClearNotifications = async() => {
    setNotifications([])
    const data = await deleteUserNotifications(user)

}


React.useEffect(() => {
  handleNotifications()
},[])


React.useEffect(() => {
    handleUser();
},[])


  return (
    <>
    <Box width="100%" height="12%" d="flex" position="sticky" zIndex={100}>
                  <Stack width="35%" alignContent="center" textAlign="center" justifyContent="center" ml={8} >
                      <InputGroup >
                        <InputLeftElement pt={2} pl={4} children={<FiSearch color="#595B5D" size="1.5rem" />}  />
                        <Input _focus={{outline: "1px solid #595B5D "}} border="none" bg="#242627" pb={1} color="rgb(255,255,255,0.63)" type="text" pl={12} placeholder="Search"  borderRadius="50px" h="3.125rem"  />
                        <InputRightElement pt={2.5} pr={12} children={<Search/>} />
                      </InputGroup>
                </Stack>
                

                
                <Stack alignContent="center" textAlign="center" justifyContent="center" ml={24}>
                <Link to="/stream">
                    <Button pb={1} _hover={{
                    bg: "rgb(38, 29, 55,0.89)"
                  }} _active={{
                    bg: "rgb(38, 29, 55,0.89)"
                  }} bg="#261D37" h="3.125rem" leftIcon={<AiCamera />} color="rgb(255,255,255,0.85)" borderRadius="50px">
                  
                        Start Stream
                    </Button>
                  </Link>
                </Stack>
                
                <Stack alignContent="center" textAlign="center" justifyContent="center" ml={28} >
                  <Link to="/settings">
                    <FiSettings size="1.4rem" color='#595B5D' cursor="pointer" />
                  </Link>
                  
                </Stack>
                <Stack alignContent="center" textAlign="center" justifyContent="center" ml={8} overflowY="auto" maxHeight="25vh">
                    <Menu isLazy>
                      <MenuButton d="flex" onClick={() => {setNotifClickBell(true);handelNotifBell()}}>
                        <Avatar bg="transparent"  icon={<IoIosNotificationsOutline size='1.8rem' cursor="pointer" color='#595B5D' />}>
                          {(notifications.length > 0 && notifClickBell===false && notifications[0].isRead === false)  ?<AvatarBadge mb={5}  mr={1.5} textAlign="center" borderColor="transparent" color="white" w="1rem" h="1rem" bg="red" fontSize="0.75rem">{notifications.length}</AvatarBadge> : <></>}
                        </Avatar></MenuButton>
                      <MenuList bg="#37393A">
                        {/* MenuItems are not rendered unless Menu is open */}
                        {notifications.length > 0 ? <>
                          {notifications.map(({username , type,from}) => (
                            <>
                             {type == 'message' && <Link to="/messages"><MenuItem borderBottom="1px solid rgb(255,255,255,0.1)"><Box pr={2}><AiOutlineMessage /></Box>You received a new message from {username}</MenuItem></Link>}
                             {type == 'follow' && <Link to={`/profile/${from}`}><MenuItem borderBottom="1px solid rgb(255,255,255,0.1)"><Box pr={2}><RiUserFollowLine /></Box>{username} started following you</MenuItem></Link>}
                             {type == 'donate' && <Link to={`/profile/${from}`}><MenuItem borderBottom="1px solid rgb(255,255,255,0.1)"><Box pr={2}><MdOutlineAttachMoney /></Box>You received a new donation from {username}</MenuItem></Link>}
                            </>
                            
                          ))}
                          <MenuItem fontSize="1.1rem" color="#E4A101" onClick={handleClearNotifications}><Center w="100%">Clear notifications</Center></MenuItem>

                        </> 
                        : <MenuItem isDisabled={true} borderBottom="1px solid rgb(255,255,255,0.1)">You don't have any new notifications</MenuItem>}
                        
                        
          
                      </MenuList>
                    </Menu>
                
                </Stack>
                
                <Stack>
                    <Box pt={4} pl={6} d="flex">
                      <Menu isLazy >
                        <MenuButton >
                          <Center>
                      
                                  <Box ml={20} label="Studio" cursor="pointer" width="3rem" height="3rem" borderRadius="50%">
                                        {/* <Image src={img5} alt="John" width="3rem" height="3rem" borderRadius="50%" /> */}
                                        
                      
                            <Avatar name={`${username}`} src={avatar} />
                        
                      
                    
                                        
                                          
                                    
                                    </Box>

                                    <Box pl={5}>
                                      
                                      <Text as="h3" color="rgb(255,255,255,0.90)" fontWeight="600" cursor="pointer">{username?.slice(0,7)}</Text>
                                      <Text as="h2" color="#E4A101" fontSize="0.8rem">Online</Text>
                                    </Box>
                                    <Center  pl={12} pb={2} cursor="pointer">
                                      <AiOutlineDown size="1.2rem" />
                                    </Center>

                    </Center>
                    </MenuButton>
                          <MenuList ml={20} bg="#242627">
                              {/* MenuItems are not rendered unless Menu is open */}
                              <MenuItem  borderBottom="1px solid rgb(255,255,255,0.1)" fontSize="1.1rem">
                                
                                  <Center w="100%"><Box>
                                    <Text pl={2} pb={2} fontWeight="bold" color="#FFD600">{balance} $CRTC</Text> 
                                      <Button isDisabled={balance === 0} _hover={{bg : "rgb(62, 166, 255,0.89)"}} _active={{bg : "rgb(62, 166, 255,0.89)"}} bg="#3EA6FF" mb={2} color="#111315">Withdraw</Button></Box>
                                  </Center>
                                      
                                
                              </MenuItem>
                              <Link to="/profile">
                                 <MenuItem  borderBottom="1px solid rgb(255,255,255,0.1)" fontSize="1.1rem">
                                     <Box pr={3} color="rgb(255,255,255,0.5)"><FaRegUser /></Box>Profile
                                  </MenuItem>
                                </Link>
                                <Link to="/settings">
                                  <MenuItem  borderBottom="1px solid rgb(255,255,255,0.1)" fontSize="1.1rem"><Box pr={3} color="rgb(255,255,255,0.5)"><FiSettings /></Box>Settings</MenuItem>
                                </Link>
                              
                              <MenuItem onClick={hadleLogout} borderBottom="1px solid rgb(255,255,255,0.1)" fontSize="1.1rem"><Box pr={3} color="rgb(255,255,255,0.5)"><AiOutlineLogout /></Box>Logout</MenuItem>
                            </MenuList>
                    </Menu>
                    
                  </Box>
                </Stack>

                  

            </Box>


    </>
  )
}

export default Header