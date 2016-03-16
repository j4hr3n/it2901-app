angular
	.module('it2901')
	.controller('ProfileCtrl', ProfileCtrl);

function ProfileCtrl($scope, $reactive) {
	$reactive(this).attach($scope);

	$scope.user = {
    first_name: "Marvin",
    description: "Mr. AI",
    image_url: "http://m.eet.com/media/1195785/Marvin-Minsky-500.jpg"
  }
}
