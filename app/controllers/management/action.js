import Ember from 'ember';

export default Ember.Controller.extend({
  actionValue: false,
  actions: {
    saveAction() {
      var self = this;
      console.log(this.get('actionValue'));
      Ember.$.ajax('http://localhost:3000/api/actions',{
        contentType: 'application/json',
        dataType: "json",
        method: 'POST',
        success: function(s) {
          console.log(s);
          self.transitionToRoute('management');
        },
        error: function(s) {
          console.log(s);
          self.transitionToRoute('management');
        },
        data: JSON.stringify({sensorValue: this.get('actionValue')})
      }).then(function(result) {
        console.log('thenn')

        }, function(failure) {
          console.log(failure);
        });
    }
  }
});
