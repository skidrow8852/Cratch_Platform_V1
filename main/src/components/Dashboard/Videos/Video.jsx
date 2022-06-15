import React from 'react'
import {Box,Center,useColorMode,Text,Button,Divider, Avatar,Input} from "@chakra-ui/react"
import ReactPlayer from 'react-player/lazy'
import {RiUserFollowLine} from "react-icons/ri"
import {BsFillSuitHeartFill} from "react-icons/bs"
import {AiOutlineLike,AiFillLike,AiFillDislike,AiOutlineDislike,AiFillCheckCircle} from 'react-icons/ai'
import img6 from "../../../assets/img6.jpg"

function Video() {
    document.title = `IBIZA SUMMER PARTY ♫ RETRO 90s HIT ELECTRO HOUSE MUSIC №3 #vdjsmile`  /// change it later to be dynamic
    const {colorMode} = useColorMode()
    const [videolike,setVideoLike] = React.useState(false)
    const [videodislike,setVideoDislike] = React.useState(false)
    const [commentlike,setCommentLike] = React.useState(false)
    const [commentdislike,setCommentDislike] = React.useState(false)
    const [comment,setComment] = React.useState("")
    const array = [
        1,2,3,4,5,6,7,8,9,10
    ]

    const handleComment = (e) => {
        setComment(e.target.value)
    }

  return (
    <>
    <Box width="100%" height="88%" bg={colorMode === "dark" ? "#111315" : "white"} fontFamily="heading" >
        <Center w="100%" h="100%">
            <Box width="100%" height="100%" d='flex' overflowY="auto" maxHeight="100%">
                <Box w="68%" h="100%"  >
                    <Center w="100%" h="100%">
                        <Box w="95%" h="100%">
                            <Box h="80%" >
                                <ReactPlayer width="100%" height="100%" url='https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8' playing={false} controls={true} volume={1} />
                            </Box>
                            <Box h="10%" pt={6} >
                                <Text fontSize="1.12rem" as="h2" fontFamily="Roboto,sans-serif,sans" noOfLines={1} lineHeight="1.35rem">IBIZA SUMMER PARTY ♫ RETRO 90s HIT ELECTRO HOUSE MUSIC №3 #vdjsmile</Text>
                                <Box d="flex" pb={4}>
                                    <Box w="80%" pt={3} >
                                        <Text  as="p" color="rgb(255,255,255,0.5)">14,744,823 views . Nov 6, 2019</Text>
                                    </Box>
                                    <Box w="20%" >
                                        <Center h="100%" w="100%" columnGap={5}>
                                            <Box  d="flex">
                                                <Box pt={0.5} cursor="pointer" onClick={() => setVideoLike(!videolike)} color={videolike ? "#FB5B78" : ""}>
                                                    {videolike ? <AiFillLike size="1.3rem" /> : <AiOutlineLike size="1.3rem" />}
                                                </Box>
                                                <Text pl={1.5} as="p"  fontSize="1rem" color="rgb(255,255,255,0.89)">12k</Text>
                                            </Box>
                                            <Box  d="flex">
                                                <Box pt={0.5} cursor="pointer" onClick={() => setVideoDislike(!videodislike)} color={videodislike ? "#FB5B78" : ""}>
                                                    {videodislike ? <AiFillDislike size="1.3rem" /> : <AiOutlineDislike size="1.3rem" />}
                                                </Box>
                                                <Text pl={1.5} as="p"  fontSize="1rem" color="rgb(255,255,255,0.89)">120</Text>
                                            </Box>
                                            
                                        </Center>
                                    </Box>
                                
                                </Box>
                                <Divider fill="rgb(255,255,255,0.1)"  />
                            </Box>
                            
                        </Box>
                        
                    </Center>
                    <Center w="100%">
                        <Box w="95%">
                        
                                <Box d="flex" pb={7}>
                                    <Box w="60%">
                                        <Box  d="flex">
                                        
                                            
                                            <Box label="Studio" cursor="pointer"  width="2.4rem" height="2.4rem" borderRadius="50%">
                                                    {/* <Image src={img6} alt="John" width="2.3rem" height="2.3rem" borderRadius="50%" /> */}

                                                    <Avatar name='YoungBd' size="2.4rem" src={img6} />
                                                    
                                                    
                                                
                                                </Box>

                                                <Box pl={3}>
                                                    <Box d="flex">
                                                    <Text as="h3"  fontWeight="600" cursor="pointer">YoungBd</Text>
                                                    <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>
                                                    </Box>
                                                
                                                <Text as="h2" color="rgb(255,255,255,0.5)" fontSize="0.8rem">1M Followers</Text>
                                                </Box>

                           
            
            
                                        </Box>
                                    </Box>
                                    <Box w="40%">
                                        <Center h="100%" w="100%" columnGap={5} justifyContent="right">
                                           
                                            <Box w="33%">
                                            <Button leftIcon={<RiUserFollowLine />} w="100%" _hover={{bg : "rgb(69, 82, 254,0.8)"}} _active={{bg : "rgb(69, 82, 254,0.8)"}} bg="#4552FE">Follow</Button>
                                            </Box>
                                            <Box w="33%">
                                                <Button leftIcon={<BsFillSuitHeartFill />} w="100%" border="1px solid rgb(255,255,255,0.6)">Support</Button>
                                            </Box>
                                        </Center>
                                    </Box>
                                
                                </Box>
                                <Box pb={7}>
                                    <Text noOfLines={10} w="80%" pl={10} as="p">#Tamiga #2Bad #OfficialVideoExtended#Push🔔
                                                FREE DOWNLOAD FOR DJ / CLUBS 
                                                https://soundcloud.com/tamiga-2bad/ta...
                                                ＳＵＢＳＣＲＩＢＥ | ＬＩＫＥ | ＣＯＭＭＥＮＴ | ＳＨＡＲＥ( Push🔔 )
                                    </Text>
                                
                                </Box>
                                <Divider fill="rgb(255,255,255,0.1)"  />

                                <Box pt={5}>
                                    <Text pb={5}> 2,547 Comments </Text>
                                    <Box d="flex" pb={5}>
                                        <Avatar name='YoungBd' width="2.1rem" height="2.1rem" src={img6} />
                                        <Input onChange={handleComment} value={comment} _focus={{borderLeft : "none",borderRight : "none" , borderTop:"none",borderBottom: "2px solid rgb(255,255,255,0.8) "}} borderLeft="none" borderTop="none" borderRight="none" placeholder="Add a comment..." ml={5} />
                                    </Box>
                                    {comment.length <1 ? <></> :<Center w="100%" justifyContent="right"><Button fontSize="1.1rem" bg="#47494A">Comment</Button></Center>}
                                    <Box mt={8}>
                                            <Box  d="flex">
                                                
                                                    
                                                <Box label="Studio" cursor="pointer"  width="2.1rem" height="2.1rem" borderRadius="50%">
                                                        {/* <Image src={img6} alt="John" width="2.3rem" height="2.3rem" borderRadius="50%" /> */}

                                                        <Avatar name='YoungBd' width="2.1rem" height="2.1rem" src={img6} />
                                                        
                                                        
                                                    
                                                    </Box>

                                                    <Box pl={3} pb={10}>
                                                        <Box d="flex">
                                                        <Text as="h3"  fontWeight="600" cursor="pointer">YoungBd</Text>
                                                        <Box pl={2} pt={1}><Text as="h2" color="rgb(255,255,255,0.5)" fontSize="0.75rem">1 year ago</Text></Box>
                                                        </Box>
                                                    
                                                    <Text w="100%" pt={1} as="h2" color="rgb(255,255,255,0.9)" fontSize="1rem">Sunt minunate toate videoclipurile, iar muzica de relaxare, o încântare a sufletului. Cei care au compus-o sunt mulți la număr, realizând că oamenii au nevoie de așa ceva. Mulțumim! 🥇🎼💐👏 </Text>
                                                            <Box d="flex" pt={1}> 
                                                                <Box  d="flex">
                                                                    <Box pt={0.5} cursor="pointer" onClick={() => setCommentLike(!commentlike)} color={commentlike ? "#FB5B78" : ""}>
                                                                        {commentlike ? <AiFillLike size="1rem" /> : <AiOutlineLike size="1rem" />}
                                                                    </Box>
                                                                    <Text pl={1.5} as="p"  fontSize="0.85rem" color="rgb(255,255,255,0.89)">12k</Text>
                                                                </Box>
                                                                <Box  d="flex" pl={5}>
                                                                    <Box pt={1} cursor="pointer" onClick={() => setCommentDislike(!commentdislike)} color={commentdislike ? "#FB5B78" : ""}>
                                                                        {commentdislike ? <AiFillDislike size="1rem" /> : <AiOutlineDislike size="1rem" />}
                                                                    </Box>
                                                                    <Text pl={1.5} as="p"  fontSize="0.85rem" color="rgb(255,255,255,0.89)">120</Text>
                                                                </Box>
                                                            </Box>
                                                            
                                            
                                        
                                                    </Box>

                            
                
                
                                            </Box>
                                    </Box>
                                </Box>
                        </Box>
                    </Center>
                    
                </Box>

                <Box w="32%" h="100%" pr={6} mt={4}>
                    {array.map(() => (
                      <Box h="7rem" w="100%" d="flex" mt={3} mb={3}>
                        <Box w="50%" >
                            <ReactPlayer width="100%" height="100%" url='https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8' playing={false} controls={true} volume={1} />
                        </Box>
                        <Box w="50%" pl={2} pt={1}>
                            <Text lineHeight="1.3rem" noOfLines={2} fontFamily="Roboto,sans-serif,sans">SICKOTOY x Elvana Gjata x INNA - Papa | Official Music</Text>
                            <Text pt={1.5} color="rgb(255,255,255,0.5)" fontSize="0.8rem" fontWeight="bold">SICKOTOY</Text>
                            <Text color="rgb(255,255,255,0.5)" fontSize="0.8rem">11M views 10 months ago</Text>

                        </Box>
                    </Box>  
                    ))}
                    
                </Box>
            </Box>
        </Center>
    </Box>  

    </>
  )
}

export default Video