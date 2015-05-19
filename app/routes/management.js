import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('greenHouse');
  },

  actions: {
    editAll: function(greenHouse) {
      this.render('editAllManagement', {
        outlet: 'editManagement',
        into: 'management',
        controller: 'management'
      });
    },
    editCultivation : function(greenHouse) {
      this.render('editAllManagement', {
        outlet: 'editManagement',
        into: 'management',
        controller: 'management'
      });
    },
    editObservation: function(greenHouse) {
      this.render('editAllManagement', {
        outlet: 'editManagement',
        into: 'management',
        controller: 'management'
      });
    }
  }
});
