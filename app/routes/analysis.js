import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      columns: [
        ['temperature', 30, 20, 50, 40, 60, 50,100, 200, 12, 34, 15, 45],
        ['humidite', 200, 130, 90, 240, 130, 220, 50, 40, 60, 50,100,],
        ['lumiere', 300, 200, 160, 400, 250, 250, 130, 90, 240,]
      ],
      type: 'bar',
      types: {
        temperature: 'spline',
        humidite: 'bar',
        lumiere: 'area',
      }
    };
  }
});
