import React from 'react'
import {Box,Center, Spinner} from '@chakra-ui/react'
import { getUsers } from '../../../services/usersService';
import FollowerComponent from '../Followers/FollowerComponent';


function Verified() {

    document.title = "Verified Users"
    const user = localStorage.getItem('user')
    const [verified, setVerified] = React.useState([])
    const [isLoading,setIsLoading] = React.useState(true)


    const getVerifiedUsers = async() => {
        try{

          const users  =await getUsers()
          users.data.filter(e => e.userId !== user).map((users) => {
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
            if(userdata.isVerified) {
              setVerified(verified => [...verified, userdata])
            }
        })
      
        }catch{}
        
        setIsLoading(false)
      }
      
      
      React.useState(() => {
        getVerifiedUsers()
      },[])

  return (
    <>
    <Box h="88%" maxHeight="88%" overflowY="auto"> 

           {isLoading ? <Center w="100%" h="70vh"><Spinner 
                                    thickness='4px'
                                    color='#3EA6FF'
                                    size='xl'
                                    ariaLabel='loading'
                                    speed='0.65s'
                                    emptyColor='grey'
                                /></Center> 
                                
                                :
                        <Box w="100%">
                                <Box pt={4} d="grid" w="100%" gridTemplateColumns="1fr 1fr" rowGap={6} columnGap={4} mr={3}>
                  {verified?.map(({userId,username,ProfileAvatar,followers,isOnline,isVerified,follow}) => (
                      <>
                      {isVerified && <Box width="100%">
                        
                         <FollowerComponent isVerified={isVerified} isOnline={isOnline} userId={userId} username={username} avatar={ProfileAvatar} followers={followers} follow={follow}  />
                        
                       
                        

                                    
                      </Box>}
                      </>
                
                    
                    ))}
                    </Box>
                    </Box>
                }
                    
                    

    </Box>

    </>
  )
}

export default Verified