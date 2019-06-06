import Ember from "ember";
import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return Ember.$.getJSON(`/data/${params.place}.json`)
  }
});
