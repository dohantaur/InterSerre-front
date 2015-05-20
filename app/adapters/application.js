import DS from 'ember-data';

var ApplicationAdapter = DS.RESTAdapter.extend();

ApplicationAdapter.reopen({
  namespace: 'api'
});

export default ApplicationAdapter;
