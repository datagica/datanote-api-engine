'use strict'

const read     = require('@datagica/read-document')
const getType  = require('../utils/getType')
const isString = require('../utils/isString')

// convert the uploaded file buffer to plain text
module.exports = function (buffer, headers) {
  return read({
    buffer: buffer,
    mime: getType(buffer, headers)
  }).then(content => Promise.resolve(
    content.map(data => ({
      text: isString(data) ? data : data.text
    })).filter(text => text)[0]
  ))
}
