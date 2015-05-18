import DS from 'ember-data';

var sensor =  DS.Model.extend({
  realm: DS.belongsTo('realm' , {async: true}),
  type: DS.attr('string'),
  name: DS.attr('string'),
  lastValue: DS.attr('number'),
  values: []
});

sensor.reopenClass({
  FIXTURES: [
    { id: 1, realm: 1, type: 'float', name: 'temperature', lastValue: 0},
    { id: 2, realm: 1, type: 'float', name: 'humidity', lastValue: 0},
    { id: 3, realm: 2, type: 'float', name: 'temperature', lastValue: 0},
    { id: 4, realm: 2, type: 'float', name: 'humidity', lastValue: 0},
    { id: 5, realm: 2, type: 'float', name: 'testosterone', lastValue: 0},
    { id: 6, realm: 2, type: 'float', name: 'decibel', lastValue: 0},
    { id: 7, realm: 1, type: 'float', name: 'testosterone', lastValue: 0},
    { id: 8, realm: 1, type: 'float', name: 'decibel', lastValue: 0},
    { id: 9, realm: 2, type: 'float', name: 'connerie', lastValue: 0},
    { id: 10, realm: 2, type: 'float', name: 'mere a julian', lastValue: 0}
  ]
});

export default sensor
