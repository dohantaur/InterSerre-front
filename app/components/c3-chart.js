import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['c3-chart'],
  axis: {},
  regions: {},
  bar: {},
  pie: {},
  donut: {},
  gauge: {},
  grid: {},
  legend: {},
  tooltip: {},
  subchart: {},
  zoom: {},
  size: {},
  padding: {},
  color: {},
  transition: {},
  _chart: undefined,
  type: '',

  chart: function() {
    if (Ember.isEqual(this.get('_chart'), undefined)) {
      var container = this.get('element');
      if (Ember.isEqual(container, undefined)) {
        return undefined;
      } else {
        var config = this.get('generateConfig');
        var chart = c3.generate(config);
        this.set('_chart', chart);
        return chart;
      }
    } else {
      // Editor is already created and cached.
      return this.get('_chart');
    }
  }.property('generateConfig'),

  generateConfig: function() {
    var config = this.getProperties([
      'data',
      'axis',
      'regions',
      'bar',
      'pie',
      'donut',
      'gauge',
      'grid',
      'legend',
      'tooltip',
      'subchart',
      'zoom',
      'size',
      'padding',
      'color',
      'transition'
    ]);
    config.bindto = this.get('element');
    return config;
  }.property('data',
    'axis',
    'regions',
    'bar',
    'pie',
    'donut',
    'gauge',
    'grid',
    'legend',
    'tooltip',
    'subchart',
    'zoom',
    'size',
    'padding',
    'color',
    'transition'),

  dataDidChange: function() {
    var chart = this.get('chart');
    chart.load(this.get('data'));
  }.observes('data').on('didInsertElement')

});
