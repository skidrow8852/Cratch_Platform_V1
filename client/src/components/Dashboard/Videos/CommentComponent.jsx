import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import {format} from "timeago.js"
import {getLikes,getDisLikes,upLike,unLike,unDisLike,upDisLike} from '../../../services/likesService'

function CommentComponent({comment,userId}) {

    const [Likes, setLikes] = React.useState(0)
    const [Dislikes, setDislikes] = React.useState(0)
    const [LikeAction, setLikeAction] = React.useState(null)
    const [DislikeAction, setDislikeAction] = React.useState(null)

    let variable = { commentId: comment._id, userId: userId }


    const getCommentsLikesandDislikes = async() => {
        try {

        
        await getLikes(variable)
        .then(response => {


            if (response.data.success) {
                //How many likes does this comment have 
                setLikes(response.data.likes.length)

                //if I already click this like button or not 
                response.data.likes.map(like => {
                    if (like.userId === userId) {
                        setLikeAction('liked')
                    }
                })
            } else {
                console.log('Failed to get likes')
            }
        })

    await getDisLikes(variable)
        .then(response => {
           
            if (response.data.success) {
                //How many likes does this comment have 
                setDislikes(response.data.dislikes.length)

                //if I already click this like button or not 
                response.data.dislikes.map(dislike => {
                    if (dislike.userId === userId) {
                        setDislikeAction('disliked')
                    }
                })
            } else {
                console.log('Failed to get dislikes')
            }
        })
    }catch{}
    }

    React.useEffect(() => {
        getCommentsLikesandDislikes()
    }, [])


    const onLike = async() => {

        if (LikeAction === null) {

            await upLike(variable)
                .then(response => {
                    if (response.data.success) {

                        setLikes(Likes + 1)
                        setLikeAction('liked')

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
  return (
    <>

                <Box pl={3} pb={3}>
                            <Box d="flex">
                                <Text as="h3"  fontWeight="600" cursor="pointer">{comment?.creator?.username}</Text>
                                <Box pl={2} pt={1}><Text as="h2" color="rgb(255,255,255,0.5)" fontSize="0.75rem">{format(comment?.createdAt)}</Text></Box>
                            </Box>
                          
                            <Text w="100%" pt={1} as="h2" color="rgb(255,255,255,0.9)" fontSize="1rem">{comment?.content} </Text>
                            <Box d="flex" pt={1}> 
                                <Box  d="flex">
                                     <Box pt={0.5} cursor="pointer" onClick={onLike} color={LikeAction === 'liked' ? "#FB5B78" : ""}>
                                         {LikeAction === 'liked' ? <AiFillLike size="1rem" /> : <AiOutlineLike size="1rem" />}
                                     </Box>
                                     <Text pl={1.5} as="p"  fontSize="0.85rem" color="rgb(255,255,255,0.89)">{Likes}</Text>
                                </Box>
                                     <Box  d="flex" pl={5}>
                                        <Box pt={1} cursor="pointer" onClick={onDisLike} color={DislikeAction === 'disliked' ? "#FB5B78" : ""}>
                                            {DislikeAction === 'disliked' ? <AiFillDislike size="1rem" /> : <AiOutlineDislike size="1rem" />}
                                         </Box>
                                        <Text pl={1.5} as="p"  fontSize="0.85rem" color="rgb(255,255,255,0.89)">{Dislikes}</Text>
                                    </Box>
                                </Box>
                                                            
                                            
                                        
                          </Box>

    </>
  )
}

export default CommentComponent