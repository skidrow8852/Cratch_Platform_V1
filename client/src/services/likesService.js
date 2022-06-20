import axios from "axios"

const apiUrl = `${process.env.REACT_APP_SERVER_HOST}/api/video/likes`
const key = process.env.REACT_APP_TOKEN

let reqInstance = axios.create({
    headers: {
      Authorization : `Bearer ${key}`
      }
    }
  )

  export function getLikes(data) {
    return reqInstance.post(apiUrl + "/getLikes", data)
}

export function getDisLikes(data) {
    return reqInstance.post(apiUrl + "/getDislikes", data)
}

export function upLike(data) {
    return reqInstance.post(apiUrl + "/upLike", data)
}
export function unLike(data) {
    return reqInstance.post(apiUrl + "/unLike", data)
}
export function unDisLike(data) {
    return reqInstance.post(apiUrl + "/unDisLike", data)
}
export function upDisLike(data) {
    return reqInstance.post(apiUrl + "/upDisLike", data)
}

// get user video likes

export function getUserVideolikes(data) {
    return reqInstance.post(apiUrl + "/user/getVideolikes", data)
}

export function deleteUserVideolikes(data) {
    return reqInstance.post(apiUrl + "/user/deleteVideolikes", data)
}

