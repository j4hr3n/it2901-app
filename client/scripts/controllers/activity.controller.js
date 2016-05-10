angular
	.module('it2901')
	.controller('ActivityCtrl', ActivityCtrl);

function ActivityCtrl($scope, $reactive, $stateParams, $state) {
	$reactive(this).attach($scope);

	if (!Meteor.user()) {
		$state.go("noauth");
		throw new Meteor.Error(403,
			"Need to be logged in to access your own profile.");
	}


	angular.element(document).ready(function() {
		$('.ui.accordion').accordion()
	})
	this.subscribe('events');

	this.helpers({
		user: () => {
			if (!Meteor.userId())
				throw new Meteor.Error(404, "Need to be logged in to access events.");

			return Meteor.user()
		},
		events: () => {
			var user = Meteor.user();

			if (user) {
				return user.profile.events;

			} else {
				return null;
			}
		},
		userEvents: () => {

			var display = [];
			var evs = Meteor.user().profile.events;
			var all = Events.find({});

			for (var i = 0; i < evs.length; i++) {

				var oid = evs[i].eventId;
				var temp = Events.findOne(oid);
				if (temp.date) {
					temp.date = moment().format('DD.MM.YYYY');
				}
				console.log(temp);
				display.push(temp);
			}

			all.forEach(function(ev) {
				if (ev.public == true) {
					var should_insert = true;
					for (var i = 0; i < display.length; i++) {
						//Hindrer duplikater fra å bli lagt til
						if (display[i]._id == ev._id) {
							should_insert = false;
							break;
						}
					}
					if (should_insert) {
						display.push(ev);
					}
				}
			});

			//console.log("display: ");
			for (var i = 0; i < display.length; i++) {
				//console.log("display: " + display[i]._id);
			}
			//Sorter events på dato
			display.sort(function(a, b) {
				return new Date(a.date) - new Date(b.date);
			});
			return display;
		},
		eventNotification: function() {
			user = Meteor.user();
			return user.profile.events.length
		}
	});

	$scope.acceptEvent = function(eventId, bool) {
		var evs = Meteor.user().profile.events
		if (bool == true) {
			for (var i = 0; i < evs.length; i++) {
				if (evs[i].eventId == eventId) {
					swal("Akseptert", "Du godkjente invitasjonen til denne hendelsen",
						"success")
					Meteor.call('acceptEvent', eventId)
				}
			};
		} else if (bool == false) {
			Meteor.call('denyEvent', eventId, function(err, result) {
				if (!err) {
					swal("Avvist", "Du avviste invitasjonen til denne hendelsen",
						"warning");
				}
			})
		}

	}
}
