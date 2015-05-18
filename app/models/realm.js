import DS from 'ember-data';

export default DS.Model.extend({
  sensors: DS.hasMany('sensor'),
  greenHouse: DS.belongsTo('greenHouse')
});
