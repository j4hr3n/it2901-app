angular.module('apiService', [])
  .service('ApiService', ApiService);

function ApiService($q, $http, $ionicPopup, $window, $cordovaNetwork,
  $rootScope) {
  var vm = this;

  vm.resourceUrl = "http://46.101.53.156:8080/api/v1"

  function httpReq(method, path, data, headers, noAuth) {
    var defer = $q.defer();
    headers = typeof headers !== 'undefined' ? headers : {};

    vm.resourceUrl
      .then(function(resourceUrl) {
        var payload = {
          method: method,
          url: resourceUrl + path,
          headers: headers,
          data: data
        };

        if (noAuth) {
          payload.transformRequest = function(data, headersGetter) {
            var headers = headersGetter();
            headers = {
                'Authorization': function(config) {
                  return 'undefined'
                }
              }
              // delete headers['Authorization'];
            return headers;
          };
        }

        if (navigator.connection && navigator.connection.type == "none") {
          ConnectionError.showError();

          //lets retry when the device gets online, only if its a GET.
          if (method === "GET") {
            //Note: this event registration lacks cleanup because its
            //a bit work to do due to referencing, and an online-event should be rare anyway.
            var retry = function() {
              defer.resolve($http(payload));
            };
            document.addEventListener('online', retry, false);
          } else {
            defer.reject('no connection');
          }
        } else {
          defer.resolve($http(payload));
        }
      });

    return defer.promise;
  }

  vm.get = function(path, headers, noAuth) {
    var promise = httpReq("GET", path, null, headers, noAuth);
    return promise;
  };

  vm.delete = function(path) {
    var defer = $q.defer();
    vm.resourceUrl
      .then(function(resourceUrl) {
        defer.resolve($http.delete(resourceUrl + path));
      });
    return defer.promise;
  };

  vm.post = function(path, data, headers) {
    return httpReq("POST", path, data, headers);
  };

  vm.put = function(path, data, headers) {
    return httpReq("PUT", path, data, headers);
  };

}
