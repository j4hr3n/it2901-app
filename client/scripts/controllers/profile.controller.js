angular
	.module('it2901')
	.controller('ProfileCtrl', ProfileCtrl);

function ProfileCtrl($scope, $reactive, $ionicActionSheet, $cordovaCamera,
	$cordovaDialogs, $state, $location, $anchorScroll, $ionicScrollDelegate) {
	$reactive(this).attach($scope);

	$scope.editing = false;

	if (!Meteor.user()) {
		$state.go("noauth");
		throw new Meteor.Error(403,
			"Need to be logged in to access your own profile.");
	}

	this.helpers({
		user: () => {
			return Meteor.user();
		},
		contacts: () => {
			return Meteor.users.find({}, {
				'username': 1
			});
		},

		friends: () => {
			user = Meteor.user();
			return user.profile.friends;

		},


		notifications: () => {
			user = Meteor.user();
			return user.profile.nameFirst;

			//user.profile.notifications.friendRequest.info.length
		},

	});

	$scope.edit = function() {
		console.log("Edit now")
		$scope.editing = true;
		$state.go("tab.profile.edit");
	}

	$scope.cancelEdit = function() {
		$scope.editing = false;
	}

	$scope.scrollToAnchorWithinCurrentPage = function(anchor) {
		$location.hash(anchor);
		var handle = $ionicScrollDelegate.$getByHandle('content');
		handle.anchorScroll();
	};

	this.updateInfo = () => {

		if (this.edit.user.profile) {
			Meteor.users.update({
				_id: this.user._id
			}, {
				$set: {
					"profile.nameFirst": this.edit.user.profile.nameFirst || this.user.profile
						.nameFirst,
					"profile.nameLast": this.edit.user.profile.nameLast || this.user.profile
						.nameLast,
					"profile.friends": this.edit.user.profile.friends || this.user.profile.friends,
					"profile.bio": this.edit.user.profile.bio || this.user.profile.bio
				}
			})
		}

		if (this.edit.user.nyttpassord) {
			Meteor.call('endrePassord', this.edit.user.nyttpassord, function(err,
				result) {
				if (!err) {
					swal('Suksess',
						'Ditt passord er nå endret, husk å bruke det nye passordet neste gang du logger inn.',
						"success")
				} else {
					swal('Noe gikk galt',
						'Vi klarte dessverre ikke å endre passordet ditt, prøv gjerne på nytt.',
						"error")
				}
			})
		}

		$scope.editing = false;
		$state.go("tab.profile");

	};

	$scope.addProfilePhoto = function() {
		if (Meteor.isCordova) {
			var image = document.getElementById('profile-image');
			// Show the action sheet
			var hideSheet = $ionicActionSheet.show({
				buttons: [{
					text: 'Endre profilbilde'
				}],
				destructiveText: 'Slett mitt nåverende profilbilde',
				destructiveButtonClicked: function() {
					$cordovaDialogs.confirm(
							'Dette vil føre til at ditt profilbilde blir slettet for godt',
							'Er du sikker?', ['Avbryt', 'Slett bilde'])
						.then(function(buttonIndex) {
							// no button = 0, 'OK' = 1, 'Cancel' = 2
							if (buttonIndex == 1) {
								image.src = "";
							}
						});
				},
				titleText: 'Endre profilbilde',
				cancelText: 'Cancel',
				cancel: function() {
					console.log("Endring av profilbilde avbrutt")
				},
				buttonClicked: function(index) {
					console.log("Knapp trykket -->", index)
					var options = {
						quality: 50,
						destinationType: Camera.DestinationType.DATA_URL,
						sourceType: Camera.PictureSourceType.CAMERA,
						allowEdit: true,
						encodingType: Camera.EncodingType.JPEG,
						targetWidth: 500,
						targetHeight: 500,
						popoverOptions: CameraPopoverOptions,
						saveToPhotoAlbum: false,
						correctOrientation: true
					};

					$cordovaCamera.getPicture(options).then(function(imageData) {
						image.src = "data:image/jpeg;base64," + imageData;
					}, function(err) {
						console.log(err);
					});
				}
			});
		} else {
			swal({
				title: "Dette går ikke",
				text: "Du befinner deg ikke på en mobil, så du får ikke lov til å endre profilbilde.",
				type: "warning",
				confirmButtonText: "Fjern meg"
			})
		}
	}

	$scope.user = {
		full_name: "Marvin Minsky",
		date_of_birth: moment("1927-08-09").format("DD-MM-YYYY"),
		description: "Mr. AI",
		image_url: "http://m.eet.com/media/1195785/Marvin-Minsky-500.jpg",
		activity: {
			daily_step_count: 1500,
			daily_step_goal: 2000,
			weekly_step_count: 5750,
			weekly_step_goal: 6000
		}
	}

	$scope.daily_step_percent = ($scope.user.activity.daily_step_count / $scope
		.user
		.activity.daily_step_goal) * 100
	$scope.weekly_step_percent = ($scope.user.activity.weekly_step_count /
		$scope.user
		.activity.weekly_step_goal) * 100
}
