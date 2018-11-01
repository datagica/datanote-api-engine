
// XXX DISABLED
// It is too risky to allow Datanote to act as a proxy, as it could be abused to
// perform illegal activities such as spaming or denial of service.
// XX DISABLED

/*
'use strict'

const fetch = require('node-fetch')
const isForbiddenDomain = require('./isForbiddenDomain')

function getPage (url) {
  console.log("url: "+url)
  if (isForbiddenDomain(url)) {
    return Promise.reject("unauthorized domain")
  }
  return fetch(url).then(response => response.text())
                   .then(body => Promise.resolve({ text: body }))
}

module.exports = getPage
*/
