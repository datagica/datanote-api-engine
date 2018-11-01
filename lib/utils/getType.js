'use strict'

const fileType = require('file-type')
const isString = require('./isString')

function getType (input, headersOrContentType) {

  // try to get the content type from headers
  let contentType
  if (headersOrContentType) {
    if (isString(headersOrContentType)) {
      contentType = headersOrContentType
    } else if (headersOrContentType['content-type']) {
      contentType = headersOrContentType['content-type']
    }
  }

  // mime type detection: we take a chunk of the input buffer to guess the type.
  // if we can't, we resort to using the content-type, unless the form submit
  // type is used because we can't process it (but good news: it is plain text)
  const guess = input && typeof input.slice === 'function'
    ? fileType(input.slice(0, 4100))
    : null

  return (
    guess ? guess.mime
      : !isString(contentType) ? 'text/plain'
      : contentType !== 'application/x-www-form-urlencoded' ? contentType
      : 'text/plain'
  )
}

module.exports = getType
