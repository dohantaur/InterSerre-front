import DS from 'ember-data';


var realm = DS.Model.extend({
  sensors: DS.hasMany('sensor' , {async: true}),
  greenHouse: DS.belongsTo('greenHouse' , {async: true})
});

realm.reopenClass({
  FIXTURES: [
    { id: 1, greenHouse: 1, sensors: [1, 2, 7, 8]},
    { id: 2, greenHouse: 2, sensors: [3, 4, 5, 6, 9, 10]}
  ]
});


export default realm;
