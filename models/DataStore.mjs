import { nanoid } from 'nanoid'
const persistentDataStore = {}

function set (key, value) {
  if (persistentDataStore[key]) {
    persistentDataStore[key] = [...persistentDataStore[key], value]
    return key
  }
  key = nanoid(32)
  persistentDataStore[key] = [value]
  return key
}

function exists (key) {
  return persistentDataStore[key] !== undefined
}

function get (key) {
  return persistentDataStore[key]
}

export default {
  set,
  get,
  exists
}
