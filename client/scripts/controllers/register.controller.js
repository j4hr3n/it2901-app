angular
  .module('it2901')
  .controller('RegisterCtrl', RegisterCtrl);

function RegisterCtrl($scope, $reactive, $state) {
  $reactive(this).attach($scope);

  $scope.dateIsClicked = false;

  this.user = { // This is converted into an order-sensitive argument list
    'username': Math.random().toString(36).substring(7),
    'password': '',
    'email': '',
    'profilePicture': '',
    'nameFirst': 'Ola',
    'nameLast': 'Nordman',
    'bio': ''
  };


  this.registerNewUser = () => {

    matchingUser = Meteor.users.findOne({
      'username': this.user.username
    });
    this.user.profilePicture =
      "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/7/005/068/396/32cc8e5.jpg";
    console.log(_.values(this.user))

    if (matchingUser == null) {
      Meteor.apply('createNewUser', _.values(this.user), false, (err) => {
        if (err) {
          swal({
            title: "Vi klarte ikke å registrere deg",
            text: "Du har mest sannsynlig tastet noe feil, prøv gjerne igjen.",
            type: "error"
          })
          console.log("Failed creating new user: " + err);
        } else {
          console.log("Created new user: " + this.user.username);
          $state.go("tab.home");
        }
      });
    } else {
      console.log("Failed creating new user: Non-unique username");
    }
  };
}
