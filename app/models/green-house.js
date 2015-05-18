import DS from 'ember-data';

var greenHouse = DS.Model.extend({
  width: DS.attr('number'),
  height: DS.attr('number'),
  type: DS.attr('string'),
  step: DS.attr('string'),
  cultivation: DS.attr('string'),
  observation: DS.attr('string'),
  realm: DS.belongsTo('realm')
});

greenHouse.reopenClass({
  FIXTURES: [
    { id: 1, width: 200, height: 50, type: 'Tomato', step: 'plant', cultivation: 'Engrais type 2 nuléaire!',observation: 'Need new tomatoes', realm: 1 },
    { id: 2, width: 30, height: 100, type: 'Carot', step: 'semi', cultivation: 'Engrais type 4 chiasse!',observation: 'I love carot because RabbitMQ XD', realm: 2 }
  ]
});

export default greenHouse;
