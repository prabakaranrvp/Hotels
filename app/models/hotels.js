import Ember from 'ember';

export default Ember.Object.extend({
    categoryList: Ember.computed('category', function(){
        return this.get('category').split(',');
    })
});
