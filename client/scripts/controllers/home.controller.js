angular
	.module('it2901')
	.controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $reactive, $state) {
	$reactive(this).attach($scope);

	if (!Meteor.user()) {
		$state.go("noauth");
		throw new Meteor.Error(403,
			"Need to be logged in to access your own profile.");
	}

}
