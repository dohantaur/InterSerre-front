import Ember from 'ember';

export default Ember.Route.extend({
  model: function (param){
    console.log(param);
    return this.store.find('greenHouse', param.id);
  }
});
