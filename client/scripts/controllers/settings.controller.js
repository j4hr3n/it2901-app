angular
	.module('it2901')
	.controller('SettingsCtrl', SettingsCtrl);

function SettingsCtrl($scope, $reactive) {
	$reactive(this).attach($scope);

}
