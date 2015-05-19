import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('greenHouse');
  },

  _selected: 'null',

  selected: function() {
    console.log('toto');
    console.log(this.get('_selected.id'));
    return this.get('_selected');
  }.property('_selected'),

  actions: {
    editAll: function(greenHouse) {
      this.transitionTo('management.editAll', greenHouse);
    },
    editCultivation : function(greenHouse) {
      this.render('editCultivationManagement', {
        outlet: 'editManagement',
        into: 'management',
        controller: 'management'
      });
    },
    editObservation: function(greenHouse) {
      this.render('editObservationManagement', {
        outlet: 'editManagement',
        into: 'management',
        controller: 'management'
      });
    }
  }
});
