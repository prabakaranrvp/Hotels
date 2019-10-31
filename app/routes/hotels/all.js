import Ember from 'ember';
import Hotel from '../../models/hotels';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return new Promise(function (resolve) {
      Ember.$.getJSON("/data/all.json").then(data => {
          
          let records = [];
          console.log(data);
          data.forEach(item => {
              console.log(item);
              records.push( Hotel.create(item) );
              console.log(records);
          });
          console.log(records);
          resolve(records);
        // resolve(data);
      });
    });
  }
});
