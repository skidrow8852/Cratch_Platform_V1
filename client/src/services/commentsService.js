import axios from "axios"

const apiUrl = `${process.env.REACT_APP_SERVER_HOST}/api/video/comments`
const key = process.env.REACT_APP_TOKEN

let reqInstance = axios.create({
    headers: {
      Authorization : `Bearer ${key}`
      }
    }
  )

// Get all comments
export function getAllComments(data) {
    return reqInstance.post(apiUrl + "/getComments",data)
    
}

export function addComment(data) {
    return reqInstance.post(apiUrl + "/saveComment",data)
    
}