import React from 'react'
import {useColorMode, Box, Text, Center,Tabs, TabList, TabPanels, Tab, TabPanel, Input, InputGroup, InputLeftElement} from "@chakra-ui/react"
import {FiSearch} from 'react-icons/fi'
import FollowerComponent from './FollowerComponent'
import img5 from '../../../assets/img5.jpg';
import img6 from '../../../assets/img6.jpg';
import img7 from '../../../assets/img7.jpg';
import img2 from '../../../assets/img2.jpg'


    const data = [
        {
            username: "YoungBd",
            img : img2,
            isVerified : true,
            followers: "120K",
            follow : false,
            isOnline: true,
            userId : 11230
        },
        {
            username: "Skidrow",
            img : img5,
            isVerified : true,
            followers: "700K",
            follow : false,
            isOnline: true,
            userId : 130
        },
        {
            username: "DavinciJ15",
            img : img6,
            isVerified : false,
            followers: "1M",
            follow : false,
            isOnline: false,
            userId : 230
        },
        {
            username: "AhselySs",
            img : img7,
            isVerified : true,
            followers: "180K",
            follow : false,
            isOnline: false,
            userId : 70
        },
        {
            username: "JohnDoe",
            img : img2,
            isVerified : false,
            followers: "720K",
            follow : true,
            isOnline: true,
            userId : 7230
        },
        {
            username: "JomaTech",
            img : img6,
            isVerified : true,
            followers: "2M",
            follow : false,
            isOnline: true,
            userId : 196
        }
    ]
function Followers() {
    const {colorMode} = useColorMode();
    const [search,setSearch] = React.useState("");
    const [filteredData, setFileteredData] = React.useState(data);


var OnlineFollowers = 0;
const CountFollowers = data.map(({isOnline}) => {
    
    if(isOnline){
        OnlineFollowers++;
    }
});


const filter = (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    if(search === "" || search === " " || e.target.value === "" || e.target.value === " " ) {
        
        return ;
    }
   
    const usersfound = filteredData.filter(d => d.username.toLowerCase().includes(search.toLowerCase()))
        setFileteredData(usersfound) 

}

  return (
    <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
      <Center>
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
                
                <Box d="flex" pt={2}>
                    <Box width="100%" >
                                
                    <Tabs isFitted >
                        <TabList width="100%">
                            <Tab width="33%" fontWeight="600" >All followers  <Text ml={16} fontWeight="bold">{data.length}</Text></Tab>
                            <Tab width="33%" fontWeight="600">Followers online <Text ml={16} fontWeight="bold">{OnlineFollowers}</Text></Tab>
                            <Tab width="33%" fontWeight="600">Connect</Tab>
                        </TabList>

                        <TabPanels  height="100%">
                            <TabPanel overflowY="auto" height="70vh">
                                {filteredData.length === 0 ? <Text pt={3} fontSize="1.2rem" color="rgb(255,255,255,0.5)">You don't have any followers yet.</Text>
                                :
                                <Box d="grid" gridTemplateColumns="1fr 1fr" gap={6}>
                                    {filteredData.map(({username,img,isVerified,followers,userId,follow}) => (
                                       <FollowerComponent username={username} img={img} isVerified={isVerified} 
                                                          followers={followers} userId={userId} follow={follow} /> 
                                    ))}
                                    
                                    
                                </Box>
                                }
                                
                            </TabPanel>
                            <TabPanel overflowY="auto" height="70vh">
                                {OnlineFollowers === 0 ? <Text pt={3} fontSize="1.2rem" color="rgb(255,255,255,0.5)">None of your followers is online.</Text>
                                :
                                    <Box d="grid" gridTemplateColumns="1fr 1fr" gap={6}>
                                            {filteredData.map(({username,img,isVerified,followers,userId,follow,isOnline}) => (
                                                <>
                                            {isOnline && <FollowerComponent username={username} img={img} isVerified={isVerified} 
                                                                followers={followers} userId={userId} follow={follow} /> }
                                                </>
                                            ))}
                                            
                                        
                                    </Box>
                                }
                                
                            </TabPanel>
                            <TabPanel overflowY="auto" height="70vh">
                                <Box d="grid" gridTemplateColumns="1fr 1fr" gap={6}>
                                    {data.map(({username,img,isVerified,followers,userId,follow}) => (
                                       <FollowerComponent username={username} img={img} isVerified={isVerified} 
                                                          followers={followers} userId={userId} follow={follow} /> 
                                    ))}
                                    
                                    
                                </Box>
                            </TabPanel>

                        </TabPanels>
                    </Tabs>         
                                
                    </Box>

                </Box>
        </Box>
      </Center>
       
    </Box>
  )
}

export default Followers