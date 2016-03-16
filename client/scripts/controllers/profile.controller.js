angular
	.module('it2901')
	.controller('ProfileCtrl', ProfileCtrl);

function ProfileCtrl($scope, $reactive) {
	$reactive(this).attach($scope);

	$scope.user = {
    first_name: "Marvin",
    description: "Mr. AI",
    image_url: "http://m.eet.com/media/1195785/Marvin-Minsky-500.jpg",
		activity: {
			daily_step_count: 1500,
			daily_step_goal: 2000,
			weekly_step_count: 5750,
			weekly_step_goal: 6000
		}
  }

	$scope.daily_step_percent = ($scope.user.activity.daily_step_count / $scope.user.activity.daily_step_goal) * 100
	$scope.weekly_step_percent = ($scope.user.activity.weekly_step_count / $scope.user.activity.weekly_step_goal) * 100
}
