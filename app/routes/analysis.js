import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      var datas = Ember.$.getJSON('http://localhost:3000/api/analysis', function(data) {
        var result = data.result;
        var realms = [];

        result.forEach(function(realm) {
          realm.value = parseInt(realm.value);
          realm.dateEvent = moment(realm.dateEvent).format('YYYY-MM-DD HH:mm');
          var isExist = false;
          realms.forEach(function(item, realmIndex) {
            if(item.id === realm.id) {
              isExist = true;
              var isSensorExist = false;
              item.sensors.forEach(function(sensor, sensorIndex) {
                if(sensor.id === realm.keyValue) {
                  isSensorExist = true;
                  realms[realmIndex].sensors[sensorIndex].data.push({date: realm.dateEvent, value: realm.value});
                }
              });
              if(!isSensorExist) {
                realms[realmIndex].sensors.push({id: realm.keyValue, data:[{date: realm.dateEvent, value: realm.value}]});
              }
            }
          });
          if(!isExist) {
            realms.push({
              id: realm.id,
              sensors: [{
                id: realm.keyValue,
                data: [{
                  date: realm.dateEvent,
                  value: realm.value
                }]
              }]
            });
          }
        });

        var allFirstCharts = [];
        realms.forEach(function(realm) {
            var obj = {
              realm: realm.id,
              data: [
                ['temperature'],
                ['lumiere'],
                ['humidite'],
                ['x1'],
                ['x2'],
                ['x3']
              ]
            };
            realm.sensors.forEach(function(sensor) {
              sensor.data.forEach(function(data) {
                switch(sensor.id) {
                  case('insideTemp'):
                    obj.data[0].push(data.value);
                    obj.data[3].push(data.date)
                  break;
                  case('light'):
                    obj.data[1].push(data.value);
                    obj.data[4].push(data.date);
                  break;
                  default:
                    obj.data[2].push(parseInt(data.value))
                    obj.data[5].push(parseInt(data.date))
                  break;
                }
              });
            });
            console.log(obj);
            allFirstCharts.push(obj);
        });

        allFirstCharts.forEach(function(item, index) {
          allFirstCharts[index].data = {
            columns: item.data,
            types: {
              temperature: 'line',
              humidite: 'bar',
              lumiere: 'spline',
            },
            /*x1: {
              type: 'timeseries'
            },
            x2: {
              type: 'timeseries'
            },
            x3: {
              type: 'timeseries'
            },*/
            /*xs: {
              'temperature': 'x1',
              'lumiere': 'x1',
              'humidite': 'x3'
            },*/
            xFormat: '%Y-%m-%d %H:%M:%S'
            axis: {
              x1: {
                type: 'timeseries',
                centered: false,
                tick: {
                  format: '%Y-%m-%d %H:%m'
                }
              },
              x2: {
                type: 'timeseries',
                centered: false,
                tick: {
                  format: '%Y-%m-%d %H:%m'
                }
              },
              x3: {
                type: 'timeseries',
                centered: false,
                tick: {
                  format: '%Y-%m-%d %H:%m'
                }
              }
            }
          }
        });
        resolve(allFirstCharts);
      });

    })
  }
});
