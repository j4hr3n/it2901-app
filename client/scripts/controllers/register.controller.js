angular
  .module('it2901')
  .controller('RegisterCtrl', RegisterCtrl);

function RegisterCtrl($scope, $reactive) {
  $reactive(this).attach($scope);

}
