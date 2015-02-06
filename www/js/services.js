"use strict";

angular.module('directory.services', [])

.factory('Contacts', ['$http', function($http) {
  
  var contacts = [];
  var lastResults = {};

  return {
    all: function($scope) {
      return $http.get('/js/data.dev.json').then(
        function(resp) {
          // this callback will be called asynchronously
          // when the response is available
          lastResults = resp;
          contacts = resp.data;
          $scope.contacts = resp.data;

        },
        function(err) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.error(err);
        }
      );
    },
    get: function(contactId) {
      // Search for the one matching the contact id (email).
      if (parseInt(contactId) == contactId) {
        return contacts[contactId];
      }

      return null;
    }
  };
}]);
