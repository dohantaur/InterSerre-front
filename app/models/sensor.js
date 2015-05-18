import DS from 'ember-data';

export default DS.Model.extend({
  realm: DS.belongsTo('realm'),
  type: DS.attr('string'),
  name: DS.attr('string'),
  value: DS.attr('number')
});
