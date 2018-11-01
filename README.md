
# Datanote Api Engine

*The Datanote extraction engine*

## TODO

- write unit tests
- support multiple formats:
  - datanote: a custom, low-level format supported by Datanote
  - json: basic list of entities
  - gexf: GEXF graph
  - csv: CSV graph (for Neo4J)  https://neo4j.com/developer/guide-import-csv/

## List of features

### Domains

detective:
- address
- email
- event
- evidence
- family
- phone
- position
- protagonist
- weapon

lifesciences:
- muscle
- animal
- artery
- bacteria
- cell
- disease
- drug
- healthRisk
- institution
- nerve
- protagonist
- location
- protein
- symptom
- virus

marketing:
- businessEvent
- institution
- position
- protagonist
- social
- product

engineer:
- engineeringElement
- engineeringEvent
- healthRisk
- institution
- protagonist

workplace:
- address
- diploma
- email
- family
- institution
- interest
- language
- phone
- position
- protagonist
- skill
- social
-
fiction:
- character
- location
- weapon
- event
- evidence

arts:
- email
- phone
- address
- compensation
- protagonist
- artist
- interest

generic:
- businessEvent
- engineeringEvent
- intelligenceEvent
- protagonist
- location
