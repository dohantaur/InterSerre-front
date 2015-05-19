import DS from 'ember-data';

var sensor =  DS.Model.extend({
  realm: DS.belongsTo('realm' , {async: true}),
  name: DS.attr('string'),
  unit: DS.attr('string'),
  lastValue: DS.attr('number'),
  values: []
});

sensor.reopenClass({
  FIXTURES: [
    { id: 1, realm: 1, unit: 'float', name: 'temperature', lastValue: 0},
    { id: 2, realm: 1, unit: 'float', name: 'humidity', lastValue: 0},
    { id: 3, realm: 2, unit: 'float', name: 'temperature', lastValue: 0},
    { id: 4, realm: 2, unit: 'float', name: 'humidity', lastValue: 0},
    { id: 5, realm: 2, unit: 'float', name: 'testosterone', lastValue: 0},
    { id: 6, realm: 2, unit: 'float', name: 'decibel', lastValue: 0},
    { id: 7, realm: 1, unit: 'float', name: 'testosterone', lastValue: 0},
    { id: 8, realm: 1, unit: 'float', name: 'decibel', lastValue: 0},
    { id: 9, realm: 2, unit: 'float', name: 'connerie', lastValue: 0},
    { id: 10, realm: 2, unit: 'float', name: 'mere a julian', lastValue: 0}
  ]
});

export default sensor;
