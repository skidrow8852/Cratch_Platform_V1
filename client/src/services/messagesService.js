import axios from "axios"

const apiUrl = `${process.env.REACT_APP_SERVER_HOST}/api/messages`
const key = process.env.REACT_APP_TOKEN

let reqInstance = axios.create({
    headers: {
      Authorization : `Bearer ${key}`
      }
    }
  )

// Send new message
export function sendMessage(data) {
    return reqInstance.post(apiUrl + "/", data )
}

// Get all messages
export function getAllMessages(data) {
    return reqInstance.post(apiUrl + "/get",data)
}