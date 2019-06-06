import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('all');

  this.route('Hotels', function() {
    this.route('all');
    this.route('place', {
      path: '/Hotels/place/:place'
    });
  });
});

export default Router;
