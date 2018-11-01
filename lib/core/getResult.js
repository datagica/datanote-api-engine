'use strict'

const classify  = require("@datagica/classify-document")

const getParser = require("./getParser")
const isString  = require("../utils/isString")
const format    = require("../formats/index")

module.exports = function (input, options) {
  return classify(input.text).then(tags =>
    getParser(options.domain, options.types).parse(input).then(result =>
      Promise.resolve(format(input, result, options))))
}
