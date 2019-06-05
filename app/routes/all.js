import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return new Promise(function(resolve) {
            Ember.$.getJSON("/data/all.json").then(data => resolve(data));
        });
    }
});
