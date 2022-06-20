import axios from "axios"

const apiUrl = `${process.env.REACT_APP_SERVER_HOST}/api/live`
const key = process.env.REACT_APP_TOKEN

let reqInstance = axios.create({
    headers: {
      Authorization : `Bearer ${key}`
      }
    }
  )
 
  
  // get all lives

  export function getLives() {
    return reqInstance.get(apiUrl + `/`)
}


  // get all user lives

  export function getUserLives(id) {
    return reqInstance.get(apiUrl + `/user/${id}`)
}

// create new live

export function startNewLive(data) {
  return reqInstance.post(apiUrl + `/new`,data)
}


// get specific live
export function getLive(id) {
  return reqInstance.get(apiUrl + `/${id}`)
}

// edit live stream

export function EdiLiveStream(id,data) {
  return reqInstance.put(apiUrl + `/${id}`,data)
}

// create new chat message (live stream)

export function AddMessage(data) {
  return reqInstance.post(apiUrl + `/chat`,data)
}


// get all chat messages (live stream)

export function getChatMessages(id) {
  return reqInstance.get(apiUrl + `/chat/${id}`)
}