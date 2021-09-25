import {
  storage
} from "../storage/index"

export const saveUserName = (userName) => {
  storage.save({
    key: "username",
    value: userName
  })
}

export const getUser = () => {
  return storage.get({key:'username'})
}