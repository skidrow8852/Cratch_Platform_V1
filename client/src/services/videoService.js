import axios from "axios"

const apiUrl = `${process.env.REACT_APP_SERVER_HOST}/api/video`
const key = process.env.REACT_APP_TOKEN

let reqInstanceUpload = axios.create({
    headers: {
      Authorization : `Bearer ${key}`,
      'Content-Type': 'multipart/form-data; boundary=XXX'
      
      }
    }
  )

  let reqInstance = axios.create({
    headers: {
      Authorization : `Bearer ${key}`
     
      
      }
    }
  )

// Upload new videoFile

  export function uploadVideoFile(data) {
    return reqInstanceUpload.post(apiUrl +"/upload", data)
    
}


// Upload new video

export function uploadVideo(data) {
    return reqInstance.post(apiUrl +"/", data)
    
}


// Get video details

export function getVideo(id) {
    return reqInstance.get(apiUrl +`/${id}`)
    
}


// Get user videos

export function getUserVideos(id) {
  return reqInstance.get(apiUrl +`/user/${id}`)
  
}


// Get all videos

export function getVideos() {
  return reqInstance.get(apiUrl +`/`)
  
}


// Get video duration

export function getVideoDuration(data) {
  return reqInstance.post(apiUrl + `/duration`, data)
  
}

export function editVideo(id,data) {
  return reqInstance.put(apiUrl + `/${id}`, data)
}