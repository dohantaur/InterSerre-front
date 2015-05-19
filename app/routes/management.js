import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('greenHouse');
  },

  actions: {
    newSerre: function() {
      this.transitionTo('management.new');
    },
    editAll: function(greenHouse) {
      this.transitionTo('management.editAll', greenHouse);
    },
    editCultivation : function(greenHouse) {
      this.transitionTo('management.editCultivation', greenHouse);
    },
    editObservation: function(greenHouse) {
      this.transitionTo('management.editObservation', greenHouse);
    },
    saveGreenHouse: function(model) {
      //this.modelFor('management.editAll').save().then(function(sucess) {
      var self = this;
      model.save().then(function(sucess) {
        self.transitionTo('management');
      }, function(failure) {
        console.error(failure);
      })
    },
    doAction() {
      this.transitionTo('management.new');
    }
  }
});
