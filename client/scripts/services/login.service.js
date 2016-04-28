angular
  .module('it2901')
  .service('LoginService', LoginService);

function LoginService($q) {
  var vm = this;

  vm.mockUser = {
    phone: '12345678',
    password: '123'
  }

  vm.login = function(user) {

    var deferred = $q.defer();

    if (user.tel == vm.mockUser.phone && user.password == vm.mockUser.password) {
      deferred.resolve(user);
    } else {
      deferred.reject(error);
    }
  }
}
