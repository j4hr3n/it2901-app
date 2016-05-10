angular
	.module('it2901')
	.controller('SettingsCtrl', SettingsCtrl);

function SettingsCtrl($scope, $reactive, $state) {
	$reactive(this).attach($scope);

	if (!Meteor.user()) {
		$state.go("noauth");
		throw new Meteor.Error(403,
			"Need to be logged in to access your own profile.");
	}

	$scope.fontSize = 100;

	$scope.changeFontSize = function(fontSize) {
		console.log("Fontsize --> ", fontSize);
		angular.element(document.querySelectorAll('*')).css('font-size', fontSize +
			'%');
	}

	$scope.logout = function() {
		console.log("User trying to log out")
		swal({
			title: "Er du sikker?",
			text: "Dette vil føre til at du logges ut av appen",
			type: "warning",
			showCancelButton: true,
			cancelButtonText: "Nei",
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "Ja, logg meg ut",
			closeOnConfirm: false
		}, function() {
			swal({
				title: "Logget ut",
				text: "Du ble nå logget ut",
				type: "success",
				timer: 3000,
			});
			$state.go('noauth');
		});
	}

}
