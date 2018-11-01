'use strict'

const getGraph       = require('./getGraph')
const escape         = require('../utils/escape')
const isValidNumber  = require('../utils/isValidNumber')

const formatRaw      = require('./formatRaw')
const formatGdf      = require('./formatGdf')
const formatCsv      = require('./formatCsv')
const formatGexf     = require('./formatGexf')
const formatJson     = require('./formatJson')
const formatRdfa     = require('./formatRdfa')
const formatHtml     = require('./formatHtml')
const formatText     = require('./formatText')
const formatNeo4j    = require('./formatNeo4j')
const formatCypher   = require('./formatCypher')
const formatGremlin  = require('./formatGremlin')
const formatGraphson = require('./formatGraphson')

module.exports = function (input, record, opts) {

  const type = typeof opts.format === 'string'
    ? opts.format.trim().toLowerCase()
    : 'json'

  const graph = getGraph(record, opts)

  switch (type) {

    case 'raw':      return formatRaw(input, record, graph, opts)
    case 'csv':      return formatCsv(input, record, graph, opts)
    case 'gdf':      return formatGdf(input, record, graph, opts)
    case 'rdf':      return formatRdf(input, record, graph, opts)
    case 'text':     return formatText(input, record, graph, opts)
    case 'html':     return formatHtml(input, record, graph, opts)
    case 'json':     return formatJson(input, record, graph, opts)
    case 'rdfa':     return formatRdfa(input, record, graph, opts)
    case 'gexf':     return formatGexf(input, record, graph, opts)
    case 'neo4j':    return formatNeo4j(input, record, graph, pts)
    case 'cypher':   return formatCypher(input, record, graph, opts)
    case 'gremlin':  return formatGremlin(input, record, graph, opts)
    case 'graphson': return formatGraphson(input, record, graph, opts)

    default:
      console.error('unrecognized format '+type)
      return formatJson(record, graph, opts)
  }
}
