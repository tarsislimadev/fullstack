import { SERVER_URL } from './config.js'

export const send = (method = 'GET', path = '/', headers = new Headers(), data = {}) => {
  return new Promise((s, f) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, SERVER_URL + path, true)
    headers.forEach((value, key) => xhr.setRequestHeader(key, value))

    // CONTINUE

    xhr.send(JSON.stringify(data))
  })
}

export const post = (path = '/', headers = {}, data = {}) => send('POST', path, headers, data)
