import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('analysis');
  this.route('management', function() {
    this.route('editAll', { path: '/edit/:id' });
    this.route('editObservation', { path: '/edit-observation/:id' });
    this.route('editCultivation', { path: '/edit-cultivation/:id' });
  });
});

export default Router;
