import axios from "axios"

const apiUrl = `${process.env.REACT_APP_SERVER_HOST}/api/notifications`
const key = process.env.REACT_APP_TOKEN

let reqInstance = axios.create({
    headers: {
      Authorization : `Bearer ${key}`
      }
    }
  )


  // Get specific user notifications

export function getUserNotifications(id) {
    return reqInstance.get(apiUrl + `/${id}`)
}

// Add new user notification

export function addUserNotification(data) {
    return reqInstance.post(apiUrl + "/add", data)
}

// Delete user notifications

export function deleteUserNotifications(id) {
    return reqInstance.delete(apiUrl+ `/${id}`)
}

// change notifications status (read, not read)

export function updateUserNotifications(id) {
  return reqInstance.put(apiUrl+ `/${id}`)
}