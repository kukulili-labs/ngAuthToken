/*
 * ngAuthToken
 * (c) 2014 kukulili labs - Sebastian Mueller <smueller@kukulili-labs.com>
 * License: MIT
 */

(function (window, angular, undefined) {
  'use strict';

  var ngAuthToken = angular.module('ngAuthToken', ['LocalStorageModule']);

  var storagePrefix = 'auth';
  var storageKey = 'token';


  ngAuthToken.provider('ngAuthTokenService', function () {
    var self = this;

    this.setStoragePrefix = function (storagePrefix) {
      self.storagePrefix = storagePrefix;
    };

    this.setStorageKey = function (storageKey) {
      self.storageKey = storageKey;
    };

    this.$get = ['$rootScope', '$q', '$http', 'localStorageService', function ($rootScope, $q, $http,
      localStorageService) {
      var self = this;
      var storagePrefix = self.storagePrefix;
      var storageKey = self.storageKey;

      var authenticate = function () {

      };

      var login = function () {

      };

      var signup = function () {

      };

      var logout = function () {

      };

      var isAuthenticated = function () {
        var token = localStorageService.get(storageKey);
        return angular.isDefined(token);
      };

      return {
        authenticate: authenticate,
        login: login,
        signup: signup,
        logout: logout,
        isAuthenticated: isAuthenticated
      };
    }];
  });


  ngAuthToken.factory(['$q', 'localStorageService', function ($q, localStorageService) {
    var self = this;
    return {
      request: function (request) {
        var token = localStorageService.get(self.storageKey);
        if (token) {
          request.headers.Authorization = 'Bearer ' + token;
        }
        return request;
      },
      responseError: function (response) {
        if (response.status === 401 || response.status === 403) {
          localStorageService.remove(config.tokenKey);
        }
        return $q.reject(response);
      }
    };
  }]);


  ngAuthToken.config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    var self = this;
    localStorageServiceProvider.setPrefix(self.storagePrefix);
  }]);


})(window, window.angular);