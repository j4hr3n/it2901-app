angular
	.module('it2901')
	.controller('ActivityCtrl', ActivityCtrl);

function ActivityCtrl($scope, $reactive) {
	$reactive(this).attach($scope);


	angular.element(document).ready(function() {
		$('.ui.accordion').accordion()
	})

	$scope.activities = [{
		title: "Superaktivitet 1",
		description: "Dette er en økt for deg som ønsker økt balanse",
		exercises: [{
			title: "Kneløft",
			description: "I denne øvelsen skal du løfte annenhvert ben opp så langt du klarer, og holde i 3 sekunder.",
			repetitions: 5,
			duration: "5 minutter"
		}, {
			title: "Knebøy",
			description: "I denne øvelsen skal du bøye knærne så langt du klarer uten å falle. Gjør gjerne denne øvelsen ved sofaen eller lignende.",
			repetitions: 5,
			duration: "5 minutter"
		}]
	}, {
		title: "Superaktivitet 2",
		description: "Dette er en økt for deg som ønsker økt bevegelighet",
		exercises: [{
			title: "Sofasittende overkroppsrotasjon",
			description: "I denne øvelsen skal du sitte i sofaen og rotere hele overkroppen så langt du klarer til hver side.",
			repetitions: 10,
			duration: "5 minutter"
		}, {
			title: "Fremoverlent knehasetøy",
			description: "I denne øvelsen skal du bøye deg fremover og presse håndflatene så nærme gulvet du klarer.",
			repetitions: 5,
			duration: "5 minutter"
		}]
	}]
}
