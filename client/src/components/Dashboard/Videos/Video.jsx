import React from 'react'
import {Box,Center,Text,Button,Divider, Avatar,Input, Tooltip,Skeleton, Stack,useDisclosure} from "@chakra-ui/react"
import ReactPlayer from 'react-player/lazy'
import {RiArrowLeftCircleLine, RiUserFollowLine} from "react-icons/ri"
import {BsFillSuitHeartFill} from "react-icons/bs"
import {AiOutlineLike,AiFillLike,AiFillDislike,AiOutlineDislike,AiFillCheckCircle} from 'react-icons/ai'
import {getVideo,getVideos,editVideo} from '../../../services/videoService'
import {getUserProfile,followUser,unFollowUser} from "../../../services/usersService";
import {getAllComments , addComment} from '../../../services/commentsService'
import {getLikes,getDisLikes,upLike,unLike,unDisLike,upDisLike} from '../../../services/likesService'
import {Link, useParams} from 'react-router-dom'
import astronaut from "../../../assets/astronaut.jpg"
import universe from "../../../assets/universe.png"
import { HiCheck } from 'react-icons/hi'
import {FaPlay} from 'react-icons/fa'
import CommentComponent from './CommentComponent'
import {format} from "timeago.js"
import Donate from '../Donate/Donate'

function Video() {
    
    
    const user = localStorage.getItem('user')
    const {id} = useParams()
    const {onOpen, isOpen, onClose} = useDisclosure()
    const [Likes, setLikes] = React.useState(0)
    const [Dislikes, setDislikes] = React.useState(0)
    const [LikeAction, setLikeAction] = React.useState(null)
    const [DislikeAction, setDislikeAction] = React.useState(null)
    const [comment,setComment] = React.useState("")
    const [videoDetail, setVideoDetail] = React.useState(null)
    const [videosDetails, setVideosDetails] = React.useState(null)
    const [comments,setComments] = React.useState([])
    const [follow,setFollow] = React.useState(false)
    const [date,setDate] = React.useState("")
    const [error,setError] = React.useState(false)
    const [currentUser,setCurrentUser] = React.useState(null)
    const [showSkeletons,setShowSkeletons] = React.useState(true)
    const [showVideoSkeleton,setShowVideoSkeleton] = React.useState(true)
    const skeletons = [0,1,2,3,4,5,6,7,8,9]
    document.title = videoDetail?.title || 'Cratch'

    let variable = { videoId: videoDetail?._id, userId: currentUser?._id}

    
    const handleComment = (e) => {
        setComment(e.target.value)
    }
    


const getVideoLikesandDislikes = async(user) => {
    
        try {

        await getLikes({videoId: videoDetail?._id})
        .then(response => {

            if (response.data.success) {
                //How many likes does this video 
                setLikes(response.data.likes.length)
                //if I already click this like button or not 
                response.data.likes.map(like => {
                    if (like.userId === user) {
                        setLikeAction('liked')
                    }
                })
            } else {
                console.log('Failed to get likes')
            }
        })

    await getDisLikes({videoId: videoDetail?._id})
        .then(response => {
            if (response.data.success) {
                //How many likes does this video  
                setDislikes(response.data.dislikes.length)

                //if I already click this like button or not 
                response.data.dislikes.map(dislike => {
                    if (dislike.userId === user) {
                        setDislikeAction('disliked')
                    }
                })
            } else {
                console.log('Failed to get dislikes')
            }
        })
    }catch{}
}

const getData=async() => {
    setShowSkeletons(true)
    setShowVideoSkeleton(true)
    setVideoDetail(null)
    try{
        const video = await getVideo(id)
        const data = await getUserProfile(user)
        if(video.data.status === 'not found') {
            setError(true)
           }
        else {
            setVideoDetail(video.data)
            const publishDate = new Date(video.data.createdAt)
            const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
                year:  'numeric',
                month: 'long',
                day:   'numeric',
            });

            const publishedDate = longEnUSFormatter.format(publishDate)
            setDate(publishedDate)
            if(video.data.creator.followers.includes(user)) {
                setFollow(true)
            }   
            setCurrentUser(data.data)
            await editVideo(id, {views : (video.data.views + 1) })
            const commentsdata =await getAllComments({videoId : video.data._id})
            setComments(commentsdata.data.comments)
            await getVideoLikesandDislikes(data?.data?._id)
            setShowVideoSkeleton(false)
            const videos = await getVideos()
                if(videos.data) {
                    
                    setVideosDetails(videos.data.filter(e => e.videoId !== id).slice(0,10))
                    setShowSkeletons(false)
                }
        
        }
    }catch(e) {
        console.log(e)
    }
}


const onFollow = async() => {
    try{
        setFollow(!follow)
        await followUser(videoDetail.creator.userId,{value : user})
        
        
    }catch(error) {
        console.log(error)
    }
}

const saveComment = async() => {
    try{
        await addComment({videoId : videoDetail._id, creator : currentUser._id,content : comment})
        await getComments()
        await editVideo(id, {comments : comments.length + 1})
        setComment("")
       
    }catch {}
   

}

const getComments = async() => {
    try{
        const data = await getAllComments({videoId : videoDetail._id})
        if(data.success) {
            setComments(data.comments)
        }
    }catch {}
}

const onUnFollow = async() => {
    try{
        setFollow(!follow)
        await unFollowUser(videoDetail.creator.userId.toLowerCase(),{value : user})
        
        
    }catch(error) {
        console.log(error)
    }
}


const onLike = async() => {

    if (LikeAction === null) {

        await upLike(variable)
            .then( response => {
                if (response.data.success) {
                   
                    setLikes(Likes + 1)
                    setLikeAction('liked')
                     editVideo(id, {likes : Likes})
                    //If dislike button is already clicked

                    if (DislikeAction !== null) {
                        setDislikeAction(null)
                        setDislikes(Dislikes - 1)
                    }


                } else {
                    console.log("")
                }
            })


    } else {

        await unLike(variable)
            .then(response => {
                if (response.data.success) {

                    setLikes(Likes - 1)
                    setLikeAction(null)

                } else {
                    console.log("")
                }
            })

    }

}


const onDisLike = async() => {

    if (DislikeAction !== null) {

      await  unDisLike(variable)
            .then(response => {
                if (response.data.success) {

                    setDislikes(Dislikes - 1)
                    setDislikeAction(null)

                } else {
                    console.log("")
                }
            })

    } else {

        await upDisLike(variable)
            .then(response => {
                if (response.data.success) {
                    setDislikes(Dislikes + 1)
                    setDislikeAction('disliked')

                    //If dislike button is already clicked
                    if(LikeAction !== null ) {
                        setLikeAction(null)
                        setLikes(Likes - 1)
                    }

                } else {
                    console.log("")
                }
            })


    }


}

React.useEffect(() => {
    getData()
},[id])


function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M';
    }else if(num < 900){
        return num; 
    }
}

if(error) {
    return (
        <Box width="100%" height="88%" bg="#111315" fontFamily="heading" >
            <Center w="100%" h="100%">
            <Box width="95%" height="100%" >

                    <Center mt={2} w="100%" h="90%" bgImage={`url('${universe}')`} bgRepeat="no-repeat" bgSize="cover" bgPosition="center" borderRadius="10px">
                        <Box textAlign="center" w="100%" h="100%" bgImage={`url('${astronaut}')`} bgRepeat="no-repeat" bgSize="contain" bgPosition="center">
                            <Text fontSize="3rem" fontWeight="bold" pt={5}>ERROR</Text>
                            <Text fontSize="17rem" fontWeight="bold">4&nbsp;&nbsp;4</Text>
                            <Link to="/videos"><Button fontSize="1.1rem" borderRadius="50px" p={6} leftIcon={<RiArrowLeftCircleLine size="1.2rem"/>}>Back to home</Button></Link>
                        </Box>
                        
                    </Center>

                </Box>
            </Center>
        </Box>
    )
}

else {
  return (
    <>
    <Box width="100%" height="88%" bg="#111315" fontFamily="heading" >
        <Center w="100%" h="100%">
            <Box width="100%" height="100%" d='flex' overflowY="auto" maxHeight="100%">
                <Box w="68%" h="100%"  >
                    <Center w="100%" h="100%">
                        <Box w="95%" h="100%">
                            <Box h="80%" borderRadius="5px" bg="black">
                                {!showVideoSkeleton  ? <ReactPlayer style={{borderRadius : '5px'}} playing  playIcon={<Box><FaPlay size="3rem" /></Box>} light={videoDetail?.thumbnail} width="100%" height="100%" url={videoDetail?.videoPath}  controls={true} volume={1} /> :
                                <Skeleton height="100%" w="100%" />
                                }
                                
                            </Box>
                            <Box h="10%" pt={6} >
                                <Text fontSize="1.12rem" as="h2" fontFamily="Roboto,sans-serif,sans" noOfLines={1} lineHeight="1.35rem">{videoDetail?.title}</Text>
                                <Box d="flex" pb={4}>
                                    <Box w="80%" pt={3} >
                                        <Text  as="p" color="rgb(255,255,255,0.5)">{videoDetail?.views} {videoDetail?.views > 1 ? 'views' : 'view'} &bull; {date}</Text>
                                    </Box>
                                    <Box w="20%" >
                                        <Center h="100%" w="100%" columnGap={5}>
                                            <Box  d="flex">
                                                <Box pt={0.5} cursor="pointer" onClick={onLike} color={LikeAction === 'liked' ? "#FB5B78" : ""}>
                                                    {LikeAction === 'liked' ? <AiFillLike size="1.3rem" /> : <AiOutlineLike size="1.3rem" />}
                                                </Box>
                                                <Text pl={1.5} as="p"  fontSize="1rem" color="rgb(255,255,255,0.89)">{numFormatter(Likes)}</Text>
                                            </Box>
                                            <Box  d="flex">
                                                <Box pt={0.5} cursor="pointer" onClick={onDisLike} color={DislikeAction === 'disliked' ? "#FB5B78" : ""}>
                                                {DislikeAction === 'disliked' ? <AiFillDislike size="1.3rem" /> : <AiOutlineDislike size="1.3rem" />}
                                                </Box>
                                                <Text pl={1.5} as="p"  fontSize="1rem" color="rgb(255,255,255,0.89)">{numFormatter(Dislikes)}</Text>
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
                                        
                                            
                                            <Box label="Studio" cursor="pointer"  width="2.5rem" height="2.5rem" borderRadius="50%">
                                                    

                                                    <Link to={`/profile/${videoDetail?.creator?.userId}`} ><Avatar name={videoDetail?.creator?.username.slice(0,20)} w="2.5rem" h="2.5rem" src={videoDetail?.creator.ProfileAvatar} /></Link>
                                                    
                                                    
                                                
                                                </Box>

                                                <Box pl={3}>
                                                    <Box d="flex">
                                                    <Text as="h3"  fontWeight="600" cursor="pointer"><Link to={`/profile/${videoDetail?.creator?.userId}`} >{videoDetail?.creator?.username.slice(0,20)}</Link></Text>
                                                    {videoDetail?.creator.isVerified && <Box pl={2} pt={1}><AiFillCheckCircle fill="#FFD600" /></Box>}
                                                    </Box>
                                                
                                                <Text as="h2" color="rgb(255,255,255,0.5)" fontSize="0.8rem">{numFormatter(videoDetail?.creator.followers.length)} Followers</Text>
                                                </Box>

                           
            
            
                                        </Box>
                                    </Box>
                                    <Box w="40%">
                                        <Center h="100%" w="100%" columnGap={5} justifyContent="right">
                                           
                                        {videoDetail?.creator.userId !== user ?  <> <Box w="33%">
                                            {follow ? <Button textAlign="center" pl={2} onClick={() => {onUnFollow();setFollow(!follow)}} pb={0.5} leftIcon={<Box pl={1}><HiCheck size="1.1rem" /></Box>}  w="100%" _hover={{bg : "rgb(69, 82, 254,0.8)"}} _active={{bg : "rgb(69, 82, 254,0.8)"}} bg="rgb(69, 82, 254,0.5)">Following</Button> : <Button onClick={() => {onFollow();setFollow(!follow)}} pb={0.5} leftIcon={<RiUserFollowLine />}  w="100%" _hover={{bg : "rgb(69, 82, 254,0.8)"}} _active={{bg : "rgb(69, 82, 254,0.8)"}} bg="#4552FE">Follow</Button>}
                                            </Box>
                                            <Box w="33%">
                                                <Button onClick={onOpen} leftIcon={<BsFillSuitHeartFill />} w="100%" border="1px solid rgb(255,255,255,0.6)">Support</Button>
                                            </Box></>
                                            :
                                            <Link to="/content">
                                                <Button  fontSize="1.1rem"  pb={0.5} color="white" bg="radial-gradient(circle at top, #7154E6 , #FB5B78)" _hover={{bg : "radial-gradient(circle at top, #7154E6 , #FB5B78)"}} _active={{bg : 'radial-gradient(circle at top, #7154E6 , #FB5B78)'}}>Manage Video</Button>
                                            </Link>   
                                        }
                                        </Center>
                                    </Box>
                                
                                </Box>
                                <Box pb={7}>
                                    <Text noOfLines={10} w="80%" pl={10} as="p">{videoDetail?.description}
                                    </Text>
                                
                                </Box>
                                <Divider fill="rgb(255,255,255,0.1)"  />

        {
        /* Comments section */
        
        }
                                <Box pt={5}>
                                    <Text pb={5}> {comments?.length} Comments </Text>
                                    <Box d="flex" pb={5}>
                                        <Avatar name='YoungBd' width="2.1rem" height="2.1rem" src={currentUser?.ProfileAvatar} />
                                        <Input onChange={handleComment} value={comment} _focus={{borderLeft : "none",borderRight : "none" , borderTop:"none",borderBottom: "2px solid rgb(255,255,255,0.8) "}} borderLeft="none" borderTop="none" borderRight="none" placeholder="Add a comment..." ml={5} />
                                    </Box>
                                    {comment.length <1 ? <></> :<Center w="100%" justifyContent="right"><Button onClick={saveComment} fontSize="1.1rem" bg="#47494A">Comment</Button></Center>}
                                    
                                    {comments?.map((comment,i) => (
                                        <Box mt={5}>
                                            <Box  d="flex">
                                                
                                                    
                                                <Box label="Studio" cursor="pointer"  width="2.1rem" height="2.1rem" borderRadius="50%">
                                                       

                                                        <Avatar name={comments?.creator?.username} width="2.1rem" height="2.1rem" src={comment?.creator?.ProfileAvatar} />
                                                        
                                                        
                                                    
                                                    </Box>

                                                    
                                                <CommentComponent comment={comment} userId={currentUser?._id} />
                            
                
                
                                            </Box>
                                    </Box>
                                    ))}

                                    {comments?.length < 1 && <Text fontSize="1.2rem">There are no comments yet.</Text>}

                                </Box>
                        </Box>
                    </Center>
                    
                </Box>

        {
        /* Suggested videos section */
        
        }

                <Box w="32%" h="100%" pr={6} mt={4}>
                    {!showSkeletons && <>
                        {videosDetails?.map((video) => (
                        <Link to={`/video/${video.videoId}`}>
                            <Box h="7rem" w="100%" d="flex"  mb={3}>              
                                    <Box borderRadius="3px" w="50%" d="flex" justifyContent="right" bgImage={`url(${video.thumbnail})`} bgSize="cover" bgPosition="center">
                                        <Text borderRadius="2px" as="h3" w="auto" bg="rgb(0,0,0,0.3)" flex="0 1 auto" alignSelf="flex-end" mr={1}>{video.duration}</Text>
                                    </Box>
                                
                                <Box w="50%" pl={2} pt={1}>
                                    <Text lineHeight="1.3rem" noOfLines={2} fontFamily="Roboto,sans-serif,sans">{video.title}</Text>
                                    <Tooltip label={`${video.creator.username}`} placement="top-start">
                                    <Text pt={1.5} color="rgb(255,255,255,0.5)" fontSize="0.8rem" fontWeight="bold">{video?.creator?.username.slice(0,20)}</Text>
                                    </Tooltip>
                                    
                                    <Text color="rgb(255,255,255,0.5)" fontSize="0.8rem">{numFormatter(video.views)} views &bull; {format(video.createdAt)}</Text>
                                </Box>
                            </Box>  
                        </Link>
                    ))}
                    </>}
                    

                    {showSkeletons && <>
                        {skeletons.map(() => (
                                    <Box h="7rem" w="100%" d="flex" mb={3}>              
                                    <Box borderRadius="3px" w="50%" d="flex" >
                                        <Skeleton height="100%" w="100%" />
                                    </Box>

                                    <Box w="50%" pl={2} pt={1}>
                                    <Stack>
                                        <Skeleton height='20px' />
                                        <Skeleton height='20px' />
                                        <Skeleton height='20px' />
                                    </Stack>
                                    
                                    </Box>
                                    </Box>  
                        ))}
                            
                     </>
                        }
                    
                </Box>
                        
                <Donate receiver={videoDetail?.creator?.userId} isOpen={isOpen} onClose={onClose} onOpen={onOpen}  />
            </Box>
        </Center>
    </Box>  

    </>
  )
                    }
}

export default Video