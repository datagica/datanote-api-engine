
/**
 * Basically we expose all modules that may be useful for third party
 * applications
 */

module.exports = {

  // core modules
  getText   : require('./core/getText'),
  getResult : require('./core/getResult'),
  modules   : require("./core/getModules"),
  domains   : require("./core/getDomains"),
  getParser : require("./core/getParser"),

  // could be useful, too
  format    : require("./formats/index"),

  // we also export some utilities
  isString         : require("./utils/isString"),
  isObject         : require("./utils/isObject"),
  isDefined        : require("./utils/isDefined"),
  getType          : require("./utils/getType"),
  getLocalized     : require("./utils/getLocalized"),
  extractTypeFromId: require("./utils/extractTypeFromId"),
  isValidNumber    : require("./utils/isValidNumber"),

  // also to save time, we export some useful moduels
  Parser    : require("@datagica/parse-document"),
}
