angular
  .module('it2901')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html'
    })
    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'client/templates/home.html',
          controller: 'HomeCtrl as home'
        }
      }
    })
    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'client/templates/profile.html',
          controller: 'ProfileCtrl as profile'
        }
      }
    })
    .state('tab.activities', {
      url: '/activities',
      views: {
        'tab-activities': {
          templateUrl: 'client/templates/activity.html',
          controller: 'ActivityCtrl as activity'
        }
      }
    })
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'client/templates/settings.html',
          controller: 'SettingsCtrl as settings'
        }
      }
    })

  $urlRouterProvider.otherwise('tab/profile');
}
