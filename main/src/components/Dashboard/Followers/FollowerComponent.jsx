import React from 'react'
import {Box,Center,Text,Button, Avatar,AvatarBadge} from '@chakra-ui/react';
import {AiFillCheckCircle} from "react-icons/ai"
import {Link} from "react-router-dom";
import {RiUserFollowLine} from 'react-icons/ri'
import {HiCheck} from 'react-icons/hi'
import {followUser,unFollowUser} from "../../../services/usersService";
import {useMoralis} from "react-moralis"

function FollowerComponent({avatar,username,followers,follow,userId,isVerified,isOnline}) {

  const {Moralis} = useMoralis()
    const user = Moralis.User.current().get("ethAddress");
    const [addFollow,setAddFollow] = React.useState(false)

    const Follow = async() => {
      try{
          setAddFollow(!addFollow)
          await followUser(userId.toLowerCase(),{value : user})
          
          
      }catch(error) {
          console.log(error)
      }
  }
  
  const unFollow = async() => {
      try{
          setAddFollow(!addFollow)
          await unFollowUser(userId.toLowerCase(),{value : user})
          
          
      }catch(error) {
          console.log(error)
      }
  }

  return (
    <> 
      <Box pt={2} pl={7} d="flex">
                <Center width="100%">
                  <Box width="40%" d="flex">
                      <Box  label="Studio" cursor="pointer"  width="2.3rem" height="2.3rem" borderRadius="50%" >
                                    

                                    <Link to={`/profile/${userId}`}>
                                      <Avatar name={`${username}`}  src={avatar} >
                                      {isOnline ? <AvatarBadge boxSize='1rem' bg='#55D64F' /> : <AvatarBadge boxSize='1rem' bg='grey' />} 
                                      </Avatar>
                                        </Link>                                
                                </Box>

                                <Box pl={5}>
                                    <Box d="flex">
                                    <Link to={`/profile/${userId}`}><Text as="h3" color="#FFD600" fontWeight="600" cursor="pointer">{username.slice(0,12)}</Text></Link>
                                      {isVerified && <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>}
                                    </Box>
                                  
                                  <Text as="h2" color="#595B5D" fontSize="0.8rem">{followers.length} {followers.length > 1 ? 'Followers' : 'Follower'}</Text>
                                </Box>
                  </Box>
                              
                              <Box width="60%" d="flex"  ml={10} pr={10 }>
                                  <Box width="50%">
                                          {(follow || addFollow) && <Button onClick={unFollow} leftIcon={<HiCheck />} _hover={{bg : "rgb(69, 82, 254,0.8)"}} _active={{bg : "rgb(69, 82, 254,0.8)"}} bg="rgb(69, 82, 254,0.5)" 
                                              pb={1}
                                              pl={3}
                                              borderRadius="5px" fontSize="0.9rem" height="2rem" width="7rem">
                                              Following
                                            </Button>
                                             }
                                          {(!follow && !addFollow)
                                            && <Button onClick={Follow} leftIcon={<RiUserFollowLine />} _hover={{bg : "rgb(69, 82, 254,0.8)"}} _active={{bg : "rgb(69, 82, 254,0.8)"}} bg="#4552FE" 
                                            pb={1}
                                            borderRadius="5px" height="2rem" width="7rem">
                                            Follow
                                          </Button> 
                                          }
                                  </Box>
                                   <Box width="50%">
                                       <Link to={`/messages/${userId}`}>
                                            <Button _hover={{
                                                bg: 'rgb(255,255,255,0.1)'
                                                }} _active={{bg: 'transparent'}} bg="transparent" border="1px solid white" 
                                                 
                                                pb={1}
                                                borderRadius="5px" height="2rem" width="7rem">
                                                Message
                                            </Button>
                                        </Link>
                                   </Box>
                                  
                              </Box>

                               
                </Center>
                
              </Box>
 
            



    </>
  )
}

export default FollowerComponent