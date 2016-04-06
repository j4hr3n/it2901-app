angular
  .module('it2901', [
    'angular-meteor',
    'ionic',
    'ngCordova'
  ]);

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}

function onReady() {
  angular.bootstrap(document, ['it2901']);
}
