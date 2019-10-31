import Component from '@ember/component';

export default Component.extend({
    cities: ['Barcelona', 'London', 'New York', 'Porto'],
    destination: 'London',

    actions: {
        chooseDestination(city) {
            this.set('destination', city);
        }
    }
});
