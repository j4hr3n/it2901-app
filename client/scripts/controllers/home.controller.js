angular
	.module('it2901')
	.controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $reactive) {
	$reactive(this).attach($scope);

}
