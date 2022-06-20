import React from 'react'
import { Box, Text, Center,Tabs, TabList, TabPanels, Tab, TabPanel, Input, InputGroup, InputLeftElement,Spinner} from "@chakra-ui/react"
import {FiSearch} from 'react-icons/fi'
import FollowerComponent from './FollowerComponent'
import {getUsers,getUser} from '../../../services/usersService'

 
function Followers() {
    const user = localStorage.getItem('user')
    
    const [search,setSearch] = React.useState("");
    const [filteredData, setFileteredData] = React.useState([]);
    const [alluserData, setAllUserData] = React.useState([])
    const [onlineFollowers, setOnlineFollowers] = React.useState(0)
    const [allFollowers, setAllFollowers] = React.useState(0)
    const [allFollowersData,setAllFollowersData] = React.useState([])
    const [isLoading,setIsLoading] = React.useState(true)
    
    
    document.title = `Followers`



React.useEffect(() => {
    getFollowersData();
},[])




const getFollowersData = async() => {

    const data = await getUsers()
    const userInfo = await getUser(user)
    data.data.filter(e => e.userId !== user).map((users) => {
        var isFollowing = false;
        if(users.followers.includes(user)){
            isFollowing = true;
        }
        
        var userdata = {
            userId: users.userId,
            followers : users.followers,
            isOnline : users.isOnline,
            ProfileAvatar : users.ProfileAvatar,
            username : users.username,
            isVerified : users.isVerified,
            follow : isFollowing
        }
    
        setAllUserData(alluserData => [...alluserData,  userdata])
        setFileteredData(filteredData => [...filteredData,  userdata])
    })

    if(localStorage.getItem("userfollowers") !== null) {
        
    }
    data.data.map((myFollowers) => {
            if(userInfo.data.followers.includes(myFollowers.userId)) {
                setAllFollowers(allFollowers =>  allFollowers + 1)
                var isFollowing = false
                    if(myFollowers.followers.includes(user)) {
                        isFollowing = true
                    }
                    if(myFollowers.isOnline == true){
                        setOnlineFollowers(onlineFollowers => onlineFollowers + 1)
                    }
                var data = {
                    userId: myFollowers.userId,
                    followers : myFollowers.followers,
                    isOnline : myFollowers.isOnline,
                    ProfileAvatar : myFollowers.ProfileAvatar,
                    username : myFollowers.username,
                    isVerified : myFollowers.isVerified,
                    follow : isFollowing
                }
                
                setAllFollowersData(allFollowersData => [...allFollowersData,  data])
            }
           
    }) 
        
    setIsLoading(false)
}

const filter = (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    if(search === "" || search === " " || e.target.value === "" || e.target.value === " " ) {
        setFileteredData(alluserData)
        return ;
    }
   
    const usersfound = filteredData.filter(d => d.username.toLowerCase().includes(search.toLowerCase()))
        setFileteredData(usersfound) 

}

  return (
    <Box width="100%" height="88%" bg="#111315" fontFamily="heading" >
      <Center w="100%" h="100%">
         <Box width="94%" height="100%" >
             <Box d="flex" borderBottom="1px solid rgb(96, 96, 96,0.6)" width="100%">
                 <Box width="80%">
                     <Text width="100%" as="h1" fontSize="1.7rem" color="rgb(255,255,255,0.90)" fontFamily="sans-serif" pt={3} pb={5}  fontWeight="bold">Followers</Text>
                 </Box>
                
                    <InputGroup ml={28} pt={3} textAlign="right">
                        <InputLeftElement pt={8} pl={2} ml={24} children={<FiSearch size="1.5rem" color="rgb(255,255,255,0.5)" />} />
                        <Input onChange={filter} value={search} ml={24} pl={12} width="80%"  height="3rem" placeholder="Search" />
                    </InputGroup>
                    
             </Box>
                
                {isLoading ? <Center w="100%" h="70vh"><Spinner 
                                    thickness='4px'
                                    color='#3EA6FF'
                                    size='xl'
                                    ariaLabel='loading'
                                    speed='0.65s'
                                    emptyColor='grey'
                                /></Center> :<Box d="flex" pt={2}>
                    <Box width="100%" >
                                
                    <Tabs isFitted >
                        <TabList width="100%">
                            <Tab width="33%" fontWeight="600" >All followers  <Text ml={16} fontWeight="bold">{allFollowers}</Text></Tab>
                            <Tab width="33%" fontWeight="600">Followers online <Text ml={16} fontWeight="bold">{onlineFollowers}</Text></Tab>
                            <Tab width="33%" fontWeight="600">Connect</Tab>
                        </TabList>

                        <TabPanels  height="100%">
                            <TabPanel overflowY="auto" height="70vh">
                                {allFollowersData.length === 0 ? <Text pt={3} fontSize="1.2rem" color="rgb(255,255,255,0.5)">You don't have any followers yet.</Text>
                                :
                                <Box d="grid" gridTemplateColumns="1fr 1fr" gap={6}>
                                    {allFollowersData.map(({username,ProfileAvatar,isVerified,followers,userId,follow,isOnline}) => (
                                       <FollowerComponent username={username} avatar={ProfileAvatar} isVerified={isVerified} 
                                                          followers={followers} userId={userId} follow={follow} isOnline={isOnline} /> 
                                    ))}
                                    
                                    
                                </Box>
                                }
                                

                                 
                            </TabPanel>
                            <TabPanel overflowY="auto" height="70vh">
                                {onlineFollowers === 0 ? <Text pt={3} fontSize="1.2rem" color="rgb(255,255,255,0.5)">None of your followers is online.</Text>
                                :
                                    <Box d="grid" gridTemplateColumns="1fr 1fr" gap={6}>
                                            {allFollowersData.map(({username,ProfileAvatar,isVerified,followers,userId,follow,isOnline}) => (
                                                <>
                                             {isOnline && <FollowerComponent username={username} avatar={ProfileAvatar} isVerified={isVerified} 
                                                                followers={followers} userId={userId} isOnline={isOnline} follow={follow} /> }
                                                </>
                                            ))}
                                            
                                        
                                    </Box>
                                }
                                
                            </TabPanel>
                            <TabPanel overflowY="auto" height="70vh">
                                <Box d="grid" gridTemplateColumns="1fr 1fr" gap={6}>
                                    {filteredData.map(({username,ProfileAvatar,isVerified,followers,userId,follow,isOnline}) => (
                                       <FollowerComponent username={username} avatar={ProfileAvatar} isVerified={isVerified} 
                                                          followers={followers} userId={userId} isOnline={isOnline} follow={follow} /> 
                                    ))}
                                    
                                    
                                </Box>
                            </TabPanel>

                        </TabPanels>
                    </Tabs>         
                                
                    </Box>

                </Box>}
        </Box>
      </Center>
       
    </Box>
  )
}

export default Followers