angular
  .module('it2901')
  .controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $reactive, $location, LoginService, $state) {
  $reactive(this).attach($scope);

  this.login = () => {
    Meteor.loginWithPassword(
      this.credentials.username, this.credentials.password, (err) => {

        if (err) {
          console.log("Login failed with error --> " + err);
        } else {
          console.log("Login successfull");
          $state.go('tab.home')
        }
      });
  };

}
