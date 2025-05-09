'use strict'

const axios = require('axios').default

module.exports = (key) => {
  return {
    find: find(key, {}),
    container: container(key, {}),
    address: address(key, {})
  }
}

function find (key) {
  return async (text, options = {}) => {
    const response = await axios({
      method: 'get',
      url: 'https://api.addressy.com/Capture/Interactive/Find/v1.1/json3.ws',
      timeout: 1000,
      headers: {},
      params: {
        Key: key,
        Text: text,
        IsMiddleware: true,
        Origin: 'GB',
        Countries: 'GB',
        Limit: 50,
        Language: 'en-gb'
      }
    })
    if (response.status === 200) return response.data.Items
  }
}

function container (key) {
  return async (id, options = {}) => {
    const response = await axios({
      method: 'get',
      url: 'https://api.addressy.com/Capture/Interactive/Find/v1.1/json3.ws',
      timeout: 1000,
      headers: {},
      params: {
        Key: key,
        IsMiddleware: true,
        Container: id,
        Origin: 'GB',
        Countries: 'GB',
        Limit: 50,
        Language: 'en-gb'
      }
    })
    if (response.status === 200) return response.data.Items
  }
}

function address (key) {
  return async (id, options = {}) => {
    const response = await axios({
      method: 'get',
      url: 'https://api.addressy.com/Capture/Interactive/Retrieve/v1/json3.ws',
      timeout: 1000,
      headers: {},
      params: {
        Key: key,
        Id: id
      }
    })
    if (response.status === 200) return response.data.Items
  }
}
