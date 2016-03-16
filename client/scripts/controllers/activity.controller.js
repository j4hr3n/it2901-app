angular
	.module('it2901')
	.controller('ActivityCtrl', ActivityCtrl);

function ActivityCtrl($scope, $reactive) {
	$reactive(this).attach($scope);

}
