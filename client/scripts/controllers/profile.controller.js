angular
  .module('it2901')
  .controller('ProfileCtrl', ProfileCtrl);

function ProfileCtrl ($scope, $reactive) {
  $reactive(this).attach($scope);
}
