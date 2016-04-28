angular
  .module('it2901')
  .controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $reactive, $location, LoginService, $state) {
  $reactive(this).attach($scope);

  this.login = () => {
    Meteor.loginWithPassword(
      this.credentials.username, this.credentials.password, (err) => {

        if (err) {
          swal({
            title: "Vi klarte ikke å logge deg inn",
            text: "Du har mest sannsynlig tastet noe feil, prøv gjerne igjen.",
            type: "error"
          })
          console.log("Login failed with error --> " + err);
        } else {
          console.log("Login successfull");
          $state.go('tab.home')
        }
      });
  };

}
