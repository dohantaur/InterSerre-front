import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      var datas = Ember.$.getJSON('http://localhost:3000/api/analysis', function(data) {
        console.log(data);
        resolve(data);
      });
    })
  }
});
