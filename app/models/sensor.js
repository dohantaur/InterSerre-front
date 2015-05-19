import DS from 'ember-data';

var sensor =  DS.Model.extend({
  realm: DS.belongsTo('realm' , {async: true}),
  type: DS.attr('string'),
  name: DS.attr('string'),
  unit:DS.attr('string'),
  lastValue: DS.attr('number'),
  values: []
});

sensor.reopenClass({
  FIXTURES: [
    { id: 1, realm: 1, type: 'float', name: 'temperature', unit: '°C', lastValue: 0},
    { id: 2, realm: 1, type: 'float', name: 'humidity', unit: '%', lastValue: 0},
    { id: 3, realm: 2, type: 'float', name: 'temperature',unit: '°C', lastValue: 0},
    { id: 4, realm: 2, type: 'float', name: 'humidity', unit: '%', lastValue: 0},
    { id: 5, realm: 2, type: 'float', name: 'testosterone', unit: 'mg/L', lastValue: 0},
    { id: 6, realm: 2, type: 'float', name: 'decibel', unit: 'dB', lastValue: 0},
    { id: 7, realm: 1, type: 'float', name: 'testosterone', unit: 'mg/L', lastValue: 0},
    { id: 8, realm: 1, type: 'float', name: 'decibel', unit: 'dB', lastValue: 0},
    { id: 9, realm: 2, type: 'float', name: 'connerie', unit: 'nb/min', lastValue: 0},
    { id: 10, realm: 2, type: 'float', name: 'mere a julian', unit: 'kg/m2', lastValue: 0}
  ]
});

export default sensor;
